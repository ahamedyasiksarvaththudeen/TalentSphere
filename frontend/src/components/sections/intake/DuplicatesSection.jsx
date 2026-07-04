import React from 'react';

export default function DuplicatesSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Intake · 06</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Duplicate candidate detection</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Nightly scan · similarity ≥ 70% surfaced for review</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '290px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
          {(v.dupList || []).map((d, $index) => (
<React.Fragment key={$index}>
            <div onClick={d.click} style={{ background: '#fff', borderRadius: '18px', border: d.border, boxShadow: d.sh, padding: '15px 16px', cursor: 'pointer', transition: 'all .25s', opacity: d.op }} className="hov77">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>{d.a}</span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '13px', fontWeight: '700', color: d.simColor }}>{d.sim}%</span>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)', marginTop: '2px' }}>vs. {d.b}</div>
              <div style={{ fontSize: '11px', color: '#9B96B0', marginTop: '6px' }}>{d.whyN} matching signals</div>
              {d.resolved && (
<React.Fragment>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--good)', marginTop: '8px' }}>{d.resolvedLabel}</div>
              </React.Fragment>
)}
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '22px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700' }}>Compare records</div>
              <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>Signals: {v.dupWhy}</div>
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ position: 'relative', width: '52px', height: '52px' }}>
                <svg width="52" height="52" viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="22" fill="none" stroke="#F1EBFE" strokeWidth="6"></circle>
                  <circle cx="26" cy="26" r="22" fill="none" stroke="url(#gdup)" strokeWidth="6" strokeLinecap="round" strokeDasharray="138.2" strokeDashoffset={v.dupRing} transform="rotate(-90 26 26)"></circle>
                  <defs><linearGradient id="gdup" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7C3AED"></stop><stop offset="100%" stopColor="#EC4899"></stop></linearGradient></defs>
                </svg>
                <span style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '800' }}>{v.dupSim}%</span>
              </span>
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '12px', marginTop: '18px' }}>
            <span></span>
            <span style={{ fontSize: '12.5px', fontWeight: '700', padding: '8px 12px', background: 'var(--soft)', borderRadius: '12px 12px 0 0' }}>Record A — {v.dupA}</span>
            <span style={{ fontSize: '12.5px', fontWeight: '700', padding: '8px 12px', background: 'var(--soft)', borderRadius: '12px 12px 0 0' }}>Record B — {v.dupB}</span>
          </div>
          {(v.dupRows || []).map((r, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '12px', padding: '9px 0', borderBottom: '1px solid var(--soft)', alignItems: 'center', animation: 'rowIn .4s both', animationDelay: r.dl }}>
              <span style={{ fontSize: '12px', color: 'var(--sub)', fontWeight: '600' }}>{r.k}</span>
              <span style={{ fontSize: '12.5px', padding: '8px 12px', background: r.matchBg, borderRadius: '10px' }}>{r.a}</span>
              <span style={{ fontSize: '12.5px', padding: '8px 12px', background: r.matchBg, borderRadius: '10px' }}>{r.b}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={v.dupMerge} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '10px 20px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov78">Merge records</button>
            <button onClick={v.dupKeep} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov79">Keep separate</button>
          </div>
          <div style={{ fontSize: '11.5px', color: '#9B96B0', marginTop: '12px', lineHeight: '1.5' }}>Merging preserves both application histories and recruiter notes under one candidate id. This action is logged and reversible for 30 days.</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
