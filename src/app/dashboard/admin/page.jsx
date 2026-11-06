'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Building2, LayoutDashboard, Users, ShieldCheck, DollarSign, 
  Settings, LogOut, TrendingUp, AlertCircle, Search, ChevronDown, Activity 
} from 'lucide-react';

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState('Hasan');
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setAdminName(storedName);
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
              <div style={{ fontSize: '11px', color: '#c084fc', opacity: 0.85 }}>Portal Systems</div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px',
              borderRadius: '12px', background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3) 0%, rgba(107, 33, 168, 0.15) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold'
            }}>
              <LayoutDashboard size={16} color="#d8b4fe" /> Overview
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <Users size={16} /> Manage Users
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <ShieldCheck size={16} /> RBAC Rules
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <DollarSign size={16} /> Payroll Audits
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#c084fc', textDecoration: 'none', fontSize: '13px' }}>
              <Settings size={16} /> Configurations
            </a>
          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            background: 'rgba(23, 13, 38, 0.8)',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#e9d5ff' }}>
              ⚡ Executive Center
            </p>
            <p style={{ fontSize: '10px', color: '#c084fc', opacity: 0.85, margin: 0 }}>
              Audit controls & privileges active.
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
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#ffffff' }}>
              Admin Dashboard, {adminName}
            </h1>
            <p style={{ fontSize: '12px', color: '#c084fc', margin: '2px 0 0 0' }}>
              Manage system access, policies, and organization parameters.
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
                AD
              </div>
              <span style={{ fontSize: '12px', fontWeight: '600' }}>{adminName}</span>
              <ChevronDown size={14} color="#c084fc" />
            </div>

            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '9px', color: '#a855f7' }} />
              <input 
                type="text" 
                placeholder="Search Audits..." 
                style={{
                  background: 'rgba(23, 13, 38, 0.8)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '16px',
                  padding: '6px 12px 6px 30px',
                  color: '#ffffff',
                  fontSize: '12px',
                  outline: 'none',
                  width: '140px'
                }}
              />
            </div>
          </div>
        </header>

        {/* 3 Top Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Total Headcount</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>42</div>
            <div style={{ fontSize: '11px', color: '#86efac', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingUp size={12} /> +4 active this month
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Monthly Payroll Cost</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>$45,200</div>
            <div style={{ fontSize: '11px', color: '#86efac', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingUp size={12} /> Within allocated budget
            </div>
          </div>

          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '11px', color: '#c084fc' }}>Retention Health</div>
            <div style={{ fontSize: '24px', fontWeight: '800', margin: '4px 0', color: '#ffffff' }}>95.8%</div>
            <div style={{ fontSize: '11px', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <AlertCircle size={12} /> Steady organizational rate
            </div>
          </div>
        </div>

        {/* 3-Column Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.3fr 1fr', gap: '14px' }}>
          
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  background: 'rgba(147, 51, 234, 0.2)', border: '1px solid rgba(168, 85, 247, 0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Activity size={20} color="#c084fc" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '700' }}>System Operational</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#86efac' }}>All microservices running</p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>Quick Configurations</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button style={{
                  padding: '10px 12px', background: 'linear-gradient(90deg, #9333ea 0%, #6b21a8 100%)',
                  color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: '700',
                  cursor: 'pointer', textAlign: 'left', boxShadow: '0 4px 14px rgba(147, 51, 234, 0.35)'
                }}>
                  + Add New Employee Record
                </button>
                <button style={{
                  padding: '10px 12px', background: '#170c28', color: '#e9d5ff',
                  border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', fontSize: '12px',
                  cursor: 'pointer', textAlign: 'left'
                }}>
                  ⚙️ Update Organization Policies
                </button>
                <button style={{
                  padding: '10px 12px', background: '#170c28', color: '#e9d5ff',
                  border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '10px', fontSize: '12px',
                  cursor: 'pointer', textAlign: 'left'
                }}>
                  📊 Export Audit Log
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>Pending Approvals</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'Ali Khan', role: 'HR Manager', time: '10m ago' },
                { name: 'Sara Ahmed', role: 'Employee', time: '1h ago' },
                { name: 'Bilal Raza', role: 'Lead', time: '3h ago' },
              ].map((req, idx) => (
                <div key={idx} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '9px 11px', background: '#160b26', borderRadius: '10px',
                  border: '1px solid rgba(168, 85, 247, 0.15)'
                }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 'bold' }}>{req.name} ({req.role})</div>
                    <div style={{ fontSize: '9px', color: '#c084fc' }}>{req.time}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button style={{ background: '#22c55e', color: '#ffffff', border: 'none', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Approve</button>
                    <button style={{ background: '#ef4444', color: '#ffffff', border: 'none', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div style={{
            background: 'rgba(23, 13, 38, 0.75)', borderRadius: '16px', padding: '16px',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '700', color: '#f3e8ff' }}>Recent Audit Trail</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
              <div style={{ background: '#160b26', padding: '9px', borderRadius: '10px', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
                <div style={{ fontWeight: 'bold' }}>🔐 Admin Login Recorded</div>
                <div style={{ fontSize: '9px', color: '#c084fc' }}>Just now by {adminName}</div>
              </div>
              <div style={{ background: '#160b26', padding: '9px', borderRadius: '10px', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
                <div style={{ fontWeight: 'bold' }}>👥 Role Assigned</div>
                <div style={{ fontSize: '9px', color: '#c084fc' }}>Permissions updated</div>
              </div>
              <div style={{ background: '#160b26', padding: '9px', borderRadius: '10px', border: '1px solid rgba(168, 85, 247, 0.15)' }}>
                <div style={{ fontWeight: 'bold' }}>📄 Policy Updated</div>
                <div style={{ fontSize: '9px', color: '#c084fc' }}>2 hours ago</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}