import React from 'react';

export default function NotificationsSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>System · 20</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Notifications</div>
        </div>
        <button onClick={v.ntMarkAll} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 16px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov90">Mark all as read</button>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        {(v.ntTabs || []).map((t, $index) => (
<React.Fragment key={$index}>
          <button onClick={t.click} style={{ border: 'none', borderRadius: '999px', padding: '8px 16px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', background: t.bg, color: t.fg, transition: 'all .25s' }}>{t.label}</button>
        </React.Fragment>
))}
      </div>
      <div style={{ maxWidth: '760px', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {(v.ntGroups || []).map((g, $index) => (
<React.Fragment key={$index}>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '8px' }}>{g.day}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(g.rows || []).map((n, $index) => (
<React.Fragment key={$index}>
                <div onClick={n.click} style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--line)', boxShadow: n.sh, padding: '13px 16px', cursor: 'pointer', transition: 'all .25s', display: 'flex', gap: '12px', alignItems: 'flex-start', animation: 'rowIn .4s both', animationDelay: n.dl }} className="hov91">
                  <span style={{ width: '34px', height: '34px', borderRadius: '11px', background: n.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: '1px' }}>{n.icon}</span>
                  <span style={{ flex: '1', minWidth: '0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '13.5px', fontWeight: '700' }}>{n.title}</span>
                      {n.unread && (
<React.Fragment><span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--pink)', flex: 'none' }}></span></React.Fragment>
)}
                    </span>
                    <span style={{ fontSize: '12.5px', color: 'var(--sub)', lineHeight: '1.5', display: 'block', marginTop: '3px' }}>{n.body}</span>
                  </span>
                  <span style={{ fontSize: '11px', color: '#9B96B0', flex: 'none' }}>{n.t}</span>
                </div>
              </React.Fragment>
))}
            </div>
          </div>
        </React.Fragment>
))}
      </div>
    </div>
    </React.Fragment>
  );
}
