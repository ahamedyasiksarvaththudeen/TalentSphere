import React from 'react';

export default function AuditSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Foundation · 02</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Audit log</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ position: 'relative' }}>
            <span onClick={v.auDd} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '12.5px', fontWeight: '600', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 12px 8px 16px', cursor: 'pointer', transition: 'all .2s' }} className="hov57">
              Type: {v.auFilter}
              <svg width="9" height="9" viewBox="0 0 10 10" style={{ transition: 'transform .25s', transform: v.auRot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#6F6B84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>
            {v.auDdOpen && (
<React.Fragment>
              <span style={{ position: 'absolute', top: 'calc(100% + 6px)', right: '0', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '6px', minWidth: '160px', zIndex: '50', animation: 'ddIn .18s ease', display: 'block' }}>
                {(v.auOpts || []).map((o, $index) => (
<React.Fragment key={$index}>
                  <span onClick={o.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '12.5px', fontWeight: o.fw, transition: 'background .15s' }} className="hov58">{o.label}<span style={{ color: 'var(--vio)', fontWeight: '700' }}>{o.check}</span></span>
                </React.Fragment>
))}
              </span>
            </React.Fragment>
)}
          </span>
          <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 16px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov59">Export CSV</button>
        </div>
      </div>
      <div style={{ maxWidth: '900px', marginTop: '16px' }}>
        {(v.auGroups || []).map((g, $index) => (
<React.Fragment key={$index}>
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--vio)', background: '#F1EBFE', padding: '4px 14px', borderRadius: '999px' }}>{g.day}</span>
              <span style={{ flex: '1', height: '1px', background: 'var(--line)' }}></span>
              <span style={{ fontSize: '11px', color: '#9B96B0' }}>{g.n} events</span>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflow: 'hidden' }}>
              {(g.rows || []).map((r, $index) => (
<React.Fragment key={$index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '11px 20px', borderBottom: '1px solid #FAF9FD', transition: 'background .2s', animation: 'rowIn .4s both', animationDelay: r.dl }} className="hov60">
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', color: '#9B96B0', width: '62px', flex: 'none' }}>{r.t}</span>
                  <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: r.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10px', flex: 'none' }}>{r.ini}</span>
                  <span style={{ flex: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '13px', display: 'block', lineHeight: '1.45' }}><span style={{ fontWeight: '600' }}>{r.who}</span> — {r.what}</span>
                    <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{r.meta}</span>
                  </span>
                  <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: r.tagBg, color: r.tagFg, flex: 'none' }}>{r.tag}</span>
                </div>
              </React.Fragment>
))}
            </div>
          </div>
        </React.Fragment>
))}
        <div style={{ fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.6' }}>Every AI run, human decision, permission change, and data export lands here with an immutable id. Retention 7 years.</div>
      </div>
    </div>
    </React.Fragment>
  );
}
