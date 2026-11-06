'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Building2, User, Calendar, DollarSign, FileText, 
  Search, ChevronDown, Clock, LogOut, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

export default function EmployeeDashboard() {
  const [userName, setUserName] = useState('Hasan');
  const [clockedIn, setClockedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/signup');
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 10%, #1e1136 0%, #0d0617 60%, #05020a 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#ffffff',
      padding: '16px',
      boxSizing: 'border-box'
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingRight: '16px',
        borderRight: '1px solid rgba(168, 85, 247, 0.15)'
      }}>
        <div>
          {/* Logo Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              background: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)'
            }}>
              <Building2 size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>Hasan</div>
              <div style={{ fontSize: '11px', color: '#c084fc', opacity: 0.85 }}>Employee Portal</div>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px',
              borderRadius: '12px', background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3) 0%, rgba(107, 33, 168, 0.15) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold'
            }}>
              <User size={16} color="#d8b4fe" /> My Overview
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <Calendar size={16} /> Leaves & Holidays
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <Clock size={16} /> Attendance Logs
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <DollarSign size={16} /> Salary & Payslips
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <FileText size={16} /> Company Policy
            </a>
          </nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            background: 'rgba(23, 13, 38, 0.8)',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#e9d5ff' }}>
              💼 Shift Details
            </p>
            <p style={{ fontSize: '10px', color: '#c084fc', opacity: 0.85, margin: 0 }}>
              09:00 AM - 06:00 PM (Regular)
            </p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              padding: '10px', borderRadius: '10px', border: '1px solid rgba(239, 68, 68, 0.3)',
              background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5',
              cursor: 'pointer', fontWeight: 'bold', fontSize: '12px'
            }}
          >
            <LogOut size={15} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '16px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#ffffff' }}>
              Welcome back, {userName}
            </h1>
            <p style={{ fontSize: '12px', color: '#c084fc', margin: '2px 0 0 0' }}>
              Here is your attendance summary, remaining leaves, and work tracker.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(23, 13, 38, 0.8)', padding: '5px 12px',
              borderRadius: '20px', border: '1px solid rgba(168, 85, 247, 0.3)'
            }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 'bold'
              }}>
                EM
              </div>
              <span style={{ fontSize: '12px', fontWeight: '600' }}>{userName}</span>
              <ChevronDown size={14} color="#c084fc" />
            </div>

            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '9px', color: '#a855f7' }} />
              <input 
                type="text" 
                placeholder="Search..." 
                style={{
                  background: 'rgba(23, 13, 38, 0.8)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '16px',
                  padding: '6px 12px 6px 30px',
                  color: '#ffffff',
                  fontSize: '12px',
                  outline: 'none',
                  width: '130px'
                }}
              />
            </div>
          </div>
        </header>

        {/* 3 Top Cards: Leaves & Attendance Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Leave Balance (This Year)</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>
              16 <span style={{ fontSize: '13px', fontWeight: 'normal', color: '#c084fc' }}>Days Left</span>
            </div>
            <div style={{ fontSize: '11px', color: '#86efac', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={12} /> 6 leaves consumed out of 22
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Monthly Attendance Rate</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>96.5%</div>
            <div style={{ fontSize: '11px', color: '#86efac', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={12} /> 19 of 20 days present
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Total Worked This Month</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>158 Hrs</div>
            <div style={{ fontSize: '11px', color: '#c084fc', opacity: 0.85 }}>
              Avg. 8h 15m per day
            </div>
          </div>
        </div>

        {/* 3-Column Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.3fr 1fr', gap: '14px' }}>
          
          {/* Column 1: Shift Punch & Leave Progress */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '50%',
                    background: 'rgba(147, 51, 234, 0.2)', border: '1px solid rgba(168, 85, 247, 0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Clock size={20} color="#c084fc" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700' }}>Punch: {clockedIn ? 'Clocked In' : 'Clocked Out'}</h4>
                    <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: clockedIn ? '#86efac' : '#fca5a5' }}>
                      {clockedIn ? '08:56 AM Today' : 'Shift not started'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setClockedIn(!clockedIn)}
                  style={{
                    padding: '8px 14px', borderRadius: '8px', border: 'none',
                    background: clockedIn ? '#ef4444' : '#22c55e',
                    color: '#ffffff', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer'
                  }}
                >
                  {clockedIn ? 'Clock Out' : 'Clock In'}
                </button>
              </div>
            </div>

            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>Leave Breakdown</h4>
                <span style={{ fontSize: '10px', color: '#c084fc' }}>2026 Quota</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                    <span>Annual Leaves (8 Used / 14 Total)</span>
                    <span style={{ fontWeight: 'bold', color: '#d8b4fe' }}>6 Left</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#160b26', borderRadius: '3px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                    <div style={{ width: '57%', height: '100%', background: 'linear-gradient(90deg, #9333ea, #c084fc)', borderRadius: '3px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                    <span>Medical Leaves (2 Used / 8 Total)</span>
                    <span style={{ fontWeight: 'bold', color: '#86efac' }}>6 Left</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#160b26', borderRadius: '3px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                    <div style={{ width: '25%', height: '100%', background: '#22c55e', borderRadius: '3px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                    <span>Casual / Personal (0 Used / 4 Total)</span>
                    <span style={{ fontWeight: 'bold', color: '#fde047' }}>4 Left</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#160b26', borderRadius: '3px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                    <div style={{ width: '0%', height: '100%', background: '#eab308', borderRadius: '3px' }}></div>
                  </div>
                </div>
              </div>

              <button style={{
                width: '100%', marginTop: '16px', padding: '10px',
                background: 'linear-gradient(90deg, #9333ea 0%, #6b21a8 100%)',
                color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '12px',
                fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(147, 51, 234, 0.35)'
              }}>
                + Apply For Leave
              </button>
            </div>
          </div>

          {/* Column 2: Leave History */}
          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>My Recent Leave History</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { type: 'Medical Leave', dates: '12 Oct - 13 Oct (2 days)', status: 'Approved', color: '#86efac' },
                { type: 'Casual Leave', dates: '24 Sep (1 day)', status: 'Approved', color: '#86efac' },
                { type: 'Annual Leave', dates: '10 Aug - 14 Aug (4 days)', status: 'Approved', color: '#86efac' },
                { type: 'Casual Leave', dates: '15 Nov (Upcoming)', status: 'Pending Review', color: '#fde047' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 12px', background: '#160b26', borderRadius: '10px',
                  border: '1px solid rgba(168, 85, 247, 0.15)'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.type}</div>
                    <div style={{ fontSize: '10px', color: '#c084fc' }}>{item.dates}</div>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 'bold', color: item.color,
                    background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: '6px'
                  }}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Team Status & Notice */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>My Team Today</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
                {[
                  { name: 'Ali Khan', status: 'In Office', dot: '#22c55e' },
                  { name: 'Sara Ahmed', status: 'Working Remote', dot: '#a855f7' },
                  { name: 'Bilal Raza', status: 'On Leave', dot: '#ef4444' },
                ].map((user, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{user.name}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#c084fc' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: user.dot }}></span>
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>Notice Board</h4>
              <div style={{ background: '#160b26', padding: '9px', borderRadius: '10px', fontSize: '11px', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
                <div style={{ fontWeight: 'bold', color: '#e9d5ff' }}>📢 Public Holiday Next Week</div>
                <div style={{ fontSize: '9px', color: '#c084fc', marginTop: '2px' }}>Offices will remain closed on Friday.</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}