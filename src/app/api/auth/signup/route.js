import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, doc, setDoc, query, where, getDocs } from 'firebase/firestore';

export async function POST(req) {
  try {
    const { name, email, password, role } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    let userDocId;
    if (!querySnapshot.empty) {
      userDocId = querySnapshot.docs[0].id;
    } else {
      userDocId = doc(collection(db, 'users')).id;
    }

    await setDoc(doc(db, 'users', userDocId), {
      name: name || 'User',
      email: email.toLowerCase().trim(),
      password,
      role: role || 'Employee',
      updatedAt: new Date().toISOString()
    });

    return NextResponse.json({
      message: 'Account processed successfully!',
      role: role || 'Employee',
      name: name || 'User'
    }, { status: 200 });

  } catch (error) {
    console.error('Signup Error:', error);
    return NextResponse.json({ message: 'Server error during signup.' }, { status: 500 });
  }
}