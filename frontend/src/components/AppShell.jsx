import React from 'react';

export default function AppShell({ v, children }) {
  return (
<div style={{ height: '100vh', overflow: 'hidden', position: 'relative', background: '#F3F0FA', color: 'var(--ink)' }}>
  
  <div style={{ position: 'fixed', inset: '0', overflow: 'hidden', zIndex: '0', pointerEvents: 'none' }}>
    <div style={{ position: 'absolute', top: '-140px', left: '-100px', width: '560px', height: '560px', borderRadius: '50%', background: 'radial-gradient(circle,#C4B5FD,transparent 65%)', filter: 'blur(60px)', opacity: '.55', animation: 'blobA 18s ease-in-out infinite', animationPlayState: 'var(--blobPlay,running)' }}></div>
    <div style={{ position: 'absolute', bottom: '-160px', right: '-120px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,#FBCFE8,transparent 65%)', filter: 'blur(70px)', opacity: '.5', animation: 'blobB 22s ease-in-out infinite', animationPlayState: 'var(--blobPlay,running)' }}></div>
    <div style={{ position: 'absolute', top: '28%', left: '44%', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle,#BAE6FD,transparent 65%)', filter: 'blur(70px)', opacity: '.38', animation: 'blobC 26s ease-in-out infinite', animationPlayState: 'var(--blobPlay,running)' }}></div>
  </div>

  <div style={{ position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: '256px 1fr', gridTemplateRows: '64px 1fr', height: '100vh' }}>

    
    <div style={{ gridColumn: '1/3', display: 'flex', alignItems: 'center', gap: '18px', background: '#FDFCFE', borderBottom: '1px solid rgba(124,58,237,.09)', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '224px', flex: 'none' }}>
        <div style={{ width: '35px', height: '35px', borderRadius: '12px', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(124,58,237,.35)' }}>
          <svg width="18" height="18" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="1.6"></circle><ellipse cx="10" cy="10" rx="9" ry="3.6" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.2" transform="rotate(-18 10 10)"></ellipse><circle cx="15.6" cy="5.4" r="1.8" fill="#fff"></circle></svg>
        </div>
        <div style={{ fontWeight: '700', fontSize: '17px', letterSpacing: '-.01em' }}>TalentSphere</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 'none', width: '400px', border: '1px solid var(--line)', background: '#fff', borderRadius: '999px', padding: '8px 16px', color: '#9B96B0', cursor: 'text', transition: 'all .25s' }} className="hov1">
        <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4.4" fill="none" stroke="#9B96B0" strokeWidth="1.5"></circle><path d="M9.4 9.4 L13 13" stroke="#9B96B0" strokeWidth="1.5" strokeLinecap="round"></path></svg>
        <span style={{ fontSize: '13px' }}>Search candidates, jobs, actions…</span>
        <span style={{ marginLeft: 'auto', fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', border: '1px solid var(--line)', background: 'var(--soft)', padding: '2px 7px', borderRadius: '6px', color: '#8B86A3' }}>⌘K</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '11.5px', fontWeight: '500', color: 'var(--vio)', border: '1px solid #E4D9FA', padding: '5px 12px', borderRadius: '999px', background: 'linear-gradient(135deg,#F5F0FE,#FDF2F8)' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--grad)', animation: 'pulse 2.5s ease infinite' }}></span>
          AI engine active
        </div>
        <div onClick={v.goNotif} style={{ position: 'relative', cursor: 'pointer', width: '38px', height: '38px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .25s', background: '#fff', border: '1px solid var(--line)' }} className="hov2">
          <svg width="17" height="17" viewBox="0 0 16 16"><path d="M8 1.5 C5.5 1.5 4 3.5 4 6 L4 9 L2.5 11.5 L13.5 11.5 L12 9 L12 6 C12 3.5 10.5 1.5 8 1.5 Z" fill="none" stroke="#4B4763" strokeWidth="1.4" strokeLinejoin="round"></path><path d="M6.5 13.5 C6.8 14.4 7.3 14.8 8 14.8 C8.7 14.8 9.2 14.4 9.5 13.5" fill="none" stroke="#4B4763" strokeWidth="1.4" strokeLinecap="round"></path></svg>
          {v.unreadShow && (
<React.Fragment>
            <span style={{ position: 'absolute', top: '6px', right: '6px', background: 'var(--pink)', color: '#fff', fontSize: '9px', fontWeight: '700', minWidth: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', padding: '0 3px', boxShadow: '0 2px 6px rgba(236,72,153,.5)' }}>{v.unread}</span>
          </React.Fragment>
)}
        </div>
        <div style={{ position: 'relative' }}>
          <div onClick={v.ddProfile} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '5px 6px 5px 12px', borderRadius: '999px', transition: 'all .25s', border: '1px solid transparent' }} className="hov3">
            <div style={{ textAlign: 'right', lineHeight: '1.25' }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>{v.currentUserName}</div>
              <div style={{ fontSize: '11px', color: 'var(--sub)' }}>{v.currentUserRoleLabel}</div>
            </div>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--grad)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', boxShadow: '0 3px 10px rgba(124,58,237,.3)' }}>{v.currentUserIni}</div>
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ transition: 'transform .25s', transform: v.profRot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#6F6B84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          {v.ddProfileOpen && (
<React.Fragment>
            <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: '0', background: '#fff', borderRadius: '16px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '8px', minWidth: '210px', zIndex: '60', animation: 'ddIn .18s ease' }}>
              <div style={{ padding: '10px 12px 8px', borderBottom: '1px solid var(--soft)', marginBottom: '6px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>{v.currentUserName}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{v.currentUserEmail}</div>
              </div>
              {(v.profMenu || []).map((m, $index) => (
<React.Fragment key={$index}>
                <div onClick={m.click} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', color: m.color, transition: 'background .15s' }} className="hov4">{m.label}</div>
              </React.Fragment>
))}
            </div>
          </React.Fragment>
)}
        </div>
      </div>
    </div>

    
    <div style={{ gridRow: '2', background: '#FBFAFD', borderRight: '1px solid rgba(124,58,237,.09)', overflowY: 'auto', padding: '14px 12px 24px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {v.showHome && (
      <div onClick={v.goHome} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '13px', cursor: 'pointer', background: v.homeBg, color: v.homeColor, boxShadow: v.homeSh, transition: 'all .25s', marginBottom: '8px' }} className="hov5">
        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M2.5 7.5 L8 2.5 L13.5 7.5 L13.5 13.5 L9.8 13.5 L9.8 10 L6.2 10 L6.2 13.5 L2.5 13.5 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
        <span style={{ fontSize: '13.5px', fontWeight: '600' }}>Home</span>
      </div>
      )}
      {(v.navGroups || []).map((g, $index) => (
<React.Fragment key={$index}>
        <div style={{ marginBottom: '2px' }}>
          <div onClick={g.toggle} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 12px', borderRadius: '13px', cursor: 'pointer', transition: 'all .2s' }} className="hov6">
            <span style={{ width: '26px', height: '26px', borderRadius: '9px', background: g.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: g.iconColor, flex: 'none' }}>{g.icon}</span>
            <span style={{ flex: '1', fontSize: '13.5px', fontWeight: '600', color: '#3A3552' }}>{g.label}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ transition: 'transform .28s', transform: g.rot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#8B86A3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          {g.open && (
<React.Fragment>
            <div style={{ padding: '2px 0 6px', animation: 'ddIn .22s ease' }}>
              {(g.items || []).map((it, $index) => (
<React.Fragment key={$index}>
                <div onClick={it.click} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7.5px 12px 7.5px 16px', margin: '1px 0 1px 24px', borderRadius: '11px', cursor: 'pointer', background: it.bg, color: it.color, boxShadow: it.sh, transition: 'all .22s' }} className="hov7">
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '9px', opacity: '.65', width: '16px', flex: 'none' }}>{it.code}</span>
                  <span style={{ fontSize: '13px', fontWeight: it.fw, whiteSpace: 'nowrap' }}>{it.label}</span>
                </div>
              </React.Fragment>
))}
            </div>
          </React.Fragment>
)}
        </div>
      </React.Fragment>
))}
      <div style={{ marginTop: 'auto', padding: '14px', borderRadius: '16px', background: 'linear-gradient(135deg,#F5F0FE,#FDF2F8)', border: '1px solid #EFE4FC' }}>
        <div style={{ fontSize: '12.5px', fontWeight: '600', marginBottom: '2px' }}>Meridian Labs</div>
        <div style={{ fontSize: '11.5px', color: 'var(--sub)', lineHeight: '1.5' }}>14 open reqs · 1,284 candidates</div>
      </div>
    </div>

    
    <div style={{ gridRow: '2', gridColumn: '2', overflow: 'hidden', position: 'relative', minWidth: '0' }}>
      {children}
    </div>
  </div>
</div>
  );
}
