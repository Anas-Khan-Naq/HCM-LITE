import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const cleanEmail = email ? email.toLowerCase().trim() : '';

    if (cleanEmail === 'admin@smit.com' && password === '12345') {
      return NextResponse.json({
        message: 'Admin login successful',
        role: 'Admin',
        name: 'Administrator'
      }, { status: 200 });
    }

    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', cleanEmail), where('password', '==', password));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    const userData = querySnapshot.docs[0].data();

    return NextResponse.json({
      message: 'Login successful',
      role: userData.role || 'Employee',
      name: userData.name || 'User'
    }, { status: 200 });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ message: 'Server error during authentication.' }, { status: 500 });
  }
}