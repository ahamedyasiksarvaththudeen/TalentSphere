import React, { useMemo, useState } from 'react';
import { createUser, creatableRolesFor, listUsers, deactivateUser, ROLE_LABELS } from '../../auth/authStore.js';

const ROLE_BLURBS = {
  ADMIN: 'Admin accounts monitor Executive HR activity (audit log, analytics, and reports) but cannot create logins or edit records.',
  EXECUTIVE_HR: 'Executive HR accounts get full access to every module, can assign work, and can view, edit, and download HR-submitted interview reports.',
  HR: 'HR accounts can see every module so they have full context to conduct interviews, and can submit interview notes/reports.',
};

export default function UserManagementSection({ currentUser }) {
  const creatableRoles = creatableRolesFor(currentUser.role);
  const [targetRole, setTargetRole] = useState(creatableRoles[0] || null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const users = useMemo(() => listUsers(targetRole), [targetRole, refreshKey]);

  if (creatableRoles.length === 0 || !targetRole) {
    return (
      <div style={{ padding: '28px' }}>
        <div style={{ fontSize: '14px', color: 'var(--sub)' }}>Your account does not have permission to create logins.</div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const result = createUser({ name, email, username, password, role: targetRole }, currentUser);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSuccess(`${ROLE_LABELS[targetRole]} login created for ${result.user.name}.`);
    setName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setRefreshKey((k) => k + 1);
  };

  const handleRemove = (id) => {
    const result = deactivateUser(id, currentUser);
    if (result.ok) setRefreshKey((k) => k + 1);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Access</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>User management</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Signed in as {currentUser.name} - {ROLE_LABELS[currentUser.role]}</div>
      </div>

      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '360px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '22px 24px', overflowY: 'auto' }}>
          {creatableRoles.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {creatableRoles.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => { setTargetRole(r); setError(''); setSuccess(''); }}
                  style={{
                    flex: '1',
                    border: `1.5px solid ${targetRole === r ? '#7C3AED' : 'var(--line)'}`,
                    background: targetRole === r ? 'var(--grad)' : '#fff',
                    color: targetRole === r ? '#fff' : '#4B4763',
                    borderRadius: '999px',
                    padding: '8px 0',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                  }}
                >
                  {ROLE_LABELS[r]}
                </button>
              ))}
            </div>
          )}

          <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>Create {ROLE_LABELS[targetRole]} login</div>
          <div style={{ fontSize: '12px', color: 'var(--sub)', marginBottom: '16px' }}>
            {ROLE_BLURBS[targetRole]}
          </div>
          <form onSubmit={handleSubmit}>
            <FormField label="Full name" value={name} onChange={setName} placeholder="e.g. Jordan Reyes" />
            <FormField label="Email" value={email} onChange={setEmail} placeholder="name@company.com" type="email" />
            <FormField label="Username" value={username} onChange={setUsername} placeholder="login username" />
            <FormField label="Password" value={password} onChange={setPassword} placeholder="min. 6 characters" type="password" />

            {error && (
              <div style={{ fontSize: '12.5px', color: '#B91C1C', background: '#FEE2E2', borderRadius: '10px', padding: '9px 12px', marginBottom: '12px' }}>{error}</div>
            )}
            {success && (
              <div style={{ fontSize: '12.5px', color: '#047857', background: '#D1FAE5', borderRadius: '10px', padding: '9px 12px', marginBottom: '12px' }}>{success}</div>
            )}

            <button
              type="submit"
              style={{ width: '100%', background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '12px 0', fontSize: '13.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)' }}
            >
              Create {ROLE_LABELS[targetRole]} login
            </button>
          </form>
        </div>

        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--soft)', fontSize: '13px', fontWeight: '700' }}>
            {ROLE_LABELS[targetRole]} logins ({users.length})
          </div>
          <div style={{ flex: '1', overflowY: 'auto' }}>
            {users.length === 0 && (
              <div style={{ padding: '24px 22px', fontSize: '12.5px', color: 'var(--sub)' }}>No {ROLE_LABELS[targetRole]} logins yet. Create the first one on the left.</div>
            )}
            {users.map((u) => (
              <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 22px', borderBottom: '1px solid var(--soft)' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--grad)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flex: 'none' }}>
                  {initialsOf(u.name)}
                </span>
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600' }}>{u.name}</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{u.username} - {u.email || 'no email'}</div>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--sub)', textAlign: 'right' }}>
                  <div>created by {u.createdByName || 'system'}</div>
                  <div>{new Date(u.createdAt).toLocaleDateString()}</div>
                </div>
                <button
                  onClick={() => handleRemove(u.id)}
                  style={{ border: '1px solid var(--line)', background: '#fff', color: '#B91C1C', borderRadius: '10px', padding: '6px 12px', fontSize: '11.5px', fontWeight: '700', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#4B4763', marginBottom: '6px' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: '100%', boxSizing: 'border-box', border: '1px solid var(--line)', background: '#FBFAFD', borderRadius: '12px', padding: '10px 13px', fontSize: '13px', outline: 'none' }}
      />
    </div>
  );
}

function initialsOf(name) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}
