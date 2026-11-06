'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Building2, Mail, Lock, Eye, EyeOff, 
  LogIn, AlertCircle 
} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const [hoverBtn, setHoverBtn] = useState(false);
  const [focusField, setFocusField] = useState('');

  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userName', data.name);

        if (data.role === 'Admin') {
          router.push('/dashboard/admin');
        } else if (data.role === 'HR') {
          router.push('/dashboard/hr');
        } else {
          router.push('/dashboard/employee');
        }
      } else {
        setErrorMsg(data.message || 'Invalid email or password.');
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
        maxWidth: '430px',
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
          HCM Lite Portal
        </h2>
        <p style={{ fontSize: '13px', color: '#c084fc', margin: '0 0 24px 0', opacity: 0.85 }}>
          Sign in to access your role-specific workplace dashboard
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

        <form onSubmit={handleLoginSubmit} style={{ textAlign: 'left' }}>
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
                placeholder="name@company.com"
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

          {/* Password */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#f3e8ff' }}>
                Password *
              </label>
              <a href="#" style={{ fontSize: '11px', color: '#c084fc', textDecoration: 'none' }}>
                Forgot Password?
              </a>
            </div>
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
                placeholder="Enter your password"
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
            <LogIn size={16} />
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <p style={{ marginTop: '22px', fontSize: '13px', color: '#c084fc', opacity: 0.85 }}>
          Don't have an account?{' '}
          <a href="/signup" style={{ color: '#e9d5ff', textDecoration: 'none', fontWeight: '700', borderBottom: '1px solid #c084fc' }}>
            Sign up as Employee or HR
          </a>
        </p>
      </div>
    </div>
  );
}