'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Building2, User, Mail, Lock, Eye, EyeOff, 
  UserPlus, ShieldAlert, CheckCircle, AlertCircle 
} from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('employee@smit.com');
  const [password, setPassword] = useState('123456');
  const [role, setRole] = useState('Employee');
  const [showPassword, setShowPassword] = useState(false);
  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Hover states
  const [hoverRole, setHoverRole] = useState('');
  const [hoverBtn, setHoverBtn] = useState(false);
  const [focusField, setFocusField] = useState('');

  const router = useRouter();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'Employee') {
      setEmail('employee@smit.com');
    } else {
      setEmail('hr@smit.com');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    const finalName = name.trim() || 'Hasan';

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: finalName, email, password, role })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('userRole', role);
        localStorage.setItem('userName', finalName);
        setSuccessMsg(`Welcome ${finalName}! Redirecting to ${role} Dashboard...`);

        setTimeout(() => {
          if (role === 'HR') {
            router.push('/dashboard/hr');
          } else {
            router.push('/dashboard/employee');
          }
        }, 800);
      } else {
        setErrorMsg(data.message || 'Signup failed.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed. Ensure server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 20%, #1e1136 0%, #0d0617 70%, #05020a 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '24px 16px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        background: 'rgba(23, 13, 38, 0.85)',
        border: '1px solid rgba(168, 85, 247, 0.25)',
        borderRadius: '24px',
        padding: '38px 34px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(147, 51, 234, 0.15)',
        backdropFilter: 'blur(16px)',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        {/* Luxury Purple Logo Box */}
        <div style={{
          width: '58px',
          height: '58px',
          margin: '0 auto 16px auto',
          background: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(147, 51, 234, 0.5), inset 0 1px 1px rgba(255,255,255,0.4)'
        }}>
          <Building2 size={28} color="#ffffff" />
        </div>

        <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 6px 0', color: '#ffffff', letterSpacing: '-0.5px' }}>
          Create Account
        </h2>
        <p style={{ fontSize: '13px', color: '#c084fc', margin: '0 0 24px 0', opacity: 0.85 }}>
          Join HCM Lite as an Employee or HR Specialist
        </p>

        {errorMsg && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px',
            borderRadius: '10px', fontSize: '12px', marginBottom: '16px', textAlign: 'left',
            background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#fca5a5'
          }}>
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px',
            borderRadius: '10px', fontSize: '12px', marginBottom: '16px', textAlign: 'left',
            background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#86efac'
          }}>
            <CheckCircle size={16} />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSignupSubmit} style={{ textAlign: 'left' }}>
          {/* Full Name */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#f3e8ff', marginBottom: '7px' }}>
              Full Legal Name *
            </label>
            <div style={{
              position: 'relative', display: 'flex', alignItems: 'center',
              background: '#150a24',
              border: focusField === 'name' ? '1px solid #c084fc' : '1px solid #3b1d60',
              boxShadow: focusField === 'name' ? '0 0 0 3px rgba(192, 132, 252, 0.25)' : 'none',
              borderRadius: '12px', transition: 'all 0.2s ease'
            }}>
              <User size={16} style={{ position: 'absolute', left: '14px', color: '#a855f7' }} />
              <input
                type="text"
                placeholder="e.g. Hasan Raza"
                value={name}
                onFocus={() => setFocusField('name')}
                onBlur={() => setFocusField('')}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%', background: 'transparent', border: 'none', outline: 'none',
                  padding: '13px 14px 13px 42px', color: '#ffffff', fontSize: '13px', boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Work Email */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#f3e8ff', marginBottom: '7px' }}>
              Work Email Address *
            </label>
            <div style={{
              position: 'relative', display: 'flex', alignItems: 'center',
              background: '#150a24',
              border: focusField === 'email' ? '1px solid #c084fc' : '1px solid #3b1d60',
              boxShadow: focusField === 'email' ? '0 0 0 3px rgba(192, 132, 252, 0.25)' : 'none',
              borderRadius: '12px', transition: 'all 0.2s ease'
            }}>
              <Mail size={16} style={{ position: 'absolute', left: '14px', color: '#a855f7' }} />
              <input
                type="email"
                placeholder="hasan@company.com"
                value={email}
                onFocus={() => setFocusField('email')}
                onBlur={() => setFocusField('')}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%', background: 'transparent', border: 'none', outline: 'none',
                  padding: '13px 14px 13px 42px', color: '#ffffff', fontSize: '13px', boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Role Switcher */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#f3e8ff', marginBottom: '7px' }}>
              Account Role *
            </label>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
              <button
                type="button"
                onClick={() => handleRoleChange('Employee')}
                onMouseEnter={() => setHoverRole('Employee')}
                onMouseLeave={() => setHoverRole('')}
                style={{
                  flex: 1, padding: '11px', borderRadius: '12px', fontSize: '13px', fontWeight: '700',
                  cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none',
                  background: role === 'Employee' ? 'linear-gradient(135deg, #7e22ce 0%, #581c87 100%)' : (hoverRole === 'Employee' ? '#24123d' : '#150a24'),
                  border: role === 'Employee' ? '1.5px solid #d8b4fe' : '1px solid #3b1d60',
                  color: role === 'Employee' ? '#ffffff' : '#a855f7',
                  boxShadow: role === 'Employee' ? '0 0 16px rgba(168, 85, 247, 0.35)' : 'none'
                }}
              >
                Employee
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('HR')}
                onMouseEnter={() => setHoverRole('HR')}
                onMouseLeave={() => setHoverRole('')}
                style={{
                  flex: 1, padding: '11px', borderRadius: '12px', fontSize: '13px', fontWeight: '700',
                  cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none',
                  background: role === 'HR' ? 'linear-gradient(135deg, #7e22ce 0%, #581c87 100%)' : (hoverRole === 'HR' ? '#24123d' : '#150a24'),
                  border: role === 'HR' ? '1.5px solid #d8b4fe' : '1px solid #3b1d60',
                  color: role === 'HR' ? '#ffffff' : '#a855f7',
                  boxShadow: role === 'HR' ? '0 0 16px rgba(168, 85, 247, 0.35)' : 'none'
                }}
              >
                HR Specialist
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11px', color: '#c084fc', opacity: 0.75, lineHeight: '1.4' }}>
              <ShieldAlert size={14} style={{ flexShrink: 0, marginTop: '1px' }} />
              <span>Admin accounts are strictly provisioned by system architects and cannot be registered publicly.</span>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#f3e8ff', marginBottom: '7px' }}>
              Password (min. 6 characters) *
            </label>
            <div style={{
              position: 'relative', display: 'flex', alignItems: 'center',
              background: '#150a24',
              border: focusField === 'password' ? '1px solid #c084fc' : '1px solid #3b1d60',
              boxShadow: focusField === 'password' ? '0 0 0 3px rgba(192, 132, 252, 0.25)' : 'none',
              borderRadius: '12px', transition: 'all 0.2s ease'
            }}>
              <Lock size={16} style={{ position: 'absolute', left: '14px', color: '#a855f7' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a secure password"
                value={password}
                onFocus={() => setFocusField('password')}
                onBlur={() => setFocusField('')}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%', background: 'transparent', border: 'none', outline: 'none',
                  padding: '13px 40px 13px 42px', color: '#ffffff', fontSize: '13px', boxSizing: 'border-box'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', background: 'transparent', border: 'none', color: '#a855f7', cursor: 'pointer', display: 'flex' }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Luxury Purple Button */}
          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            style={{
              width: '100%',
              padding: '13px',
              background: hoverBtn
                ? 'linear-gradient(90deg, #a855f7 0%, #7e22ce 100%)'
                : 'linear-gradient(90deg, #9333ea 0%, #6b21a8 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '10px',
              transition: 'all 0.2s ease',
              boxShadow: hoverBtn
                ? '0 12px 28px rgba(147, 51, 234, 0.6)'
                : '0 8px 24px rgba(147, 51, 234, 0.4)',
              transform: hoverBtn ? 'translateY(-1px)' : 'translateY(0)'
            }}
          >
            <UserPlus size={16} />
            {loading ? 'Creating Account...' : 'Create My Account'}
          </button>
        </form>

        <p style={{ marginTop: '22px', fontSize: '13px', color: '#c084fc', opacity: 0.85 }}>
          Already have an account?{' '}
          <a href="/" style={{ color: '#e9d5ff', textDecoration: 'none', fontWeight: '700', borderBottom: '1px solid #c084fc' }}>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}