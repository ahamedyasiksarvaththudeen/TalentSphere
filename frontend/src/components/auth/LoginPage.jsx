import React, { useState } from 'react';
import { login, ROLE_LABELS } from '../../auth/authStore.js';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    const result = login(username, password);
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    onLogin(result.user);
  };

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#F3F0FA 0%,#FDF4F9 100%)', fontFamily: 'inherit' }}>
      <div style={{ width: '100%', maxWidth: '420px', background: '#fff', borderRadius: '24px', border: '1px solid #EFE4FC', boxShadow: '0 24px 60px rgba(45,20,90,.14)', padding: '38px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '28px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '13px', background: 'linear-gradient(135deg,#7C3AED,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(124,58,237,.35)' }}>
            <svg width="19" height="19" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="1.6"></circle><ellipse cx="10" cy="10" rx="9" ry="3.6" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.2" transform="rotate(-18 10 10)"></ellipse><circle cx="15.6" cy="5.4" r="1.8" fill="#fff"></circle></svg>
          </div>
          <div style={{ fontWeight: '700', fontSize: '19px', letterSpacing: '-.01em', color: '#231F35' }}>TalentSphere</div>
        </div>

        <div style={{ fontSize: '20px', fontWeight: '700', color: '#231F35', letterSpacing: '-.01em' }}>Sign in</div>
        <div style={{ fontSize: '13px', color: '#6F6B84', marginTop: '4px', marginBottom: '22px' }}>
          Super Admin, Executive HR, and HR each sign in with their own login.
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#4B4763', marginBottom: '6px' }}>Username</label>
          <input
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. superadmin"
            style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #E4E0F0', background: '#FBFAFD', borderRadius: '12px', padding: '11px 14px', fontSize: '13.5px', outline: 'none', marginBottom: '16px' }}
          />

          <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#4B4763', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #E4E0F0', background: '#FBFAFD', borderRadius: '12px', padding: '11px 14px', fontSize: '13.5px', outline: 'none', marginBottom: '10px' }}
          />

          {error && (
            <div style={{ fontSize: '12.5px', color: '#B91C1C', background: '#FEE2E2', borderRadius: '10px', padding: '9px 12px', marginBottom: '10px' }}>{error}</div>
          )}

          <button
            type="submit"
            disabled={submitting || !username || !password}
            style={{
              width: '100%',
              marginTop: '8px',
              background: 'linear-gradient(135deg,#7C3AED,#EC4899)',
              color: '#fff',
              border: 'none',
              borderRadius: '999px',
              padding: '12px 0',
              fontSize: '13.5px',
              fontWeight: '700',
              cursor: submitting || !username || !password ? 'not-allowed' : 'pointer',
              opacity: submitting || !username || !password ? 0.6 : 1,
              boxShadow: '0 6px 16px rgba(124,58,237,.35)',
            }}
          >
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div style={{ marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #F1EEF7', fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.7' }}>
          Three separate roles share this login screen: {ROLE_LABELS.SUPER_ADMIN}, {ROLE_LABELS.EXECUTIVE_HR}, and {ROLE_LABELS.HR}.
          What you can see and do after signing in depends on which account you use.
        </div>
      </div>
    </div>
  );
}
