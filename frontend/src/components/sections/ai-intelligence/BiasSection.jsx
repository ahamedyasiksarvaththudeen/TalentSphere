import React from 'react';

export default function BiasSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 11</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Bias-aware screening</div>
        </div>
        <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov35">Export fairness report</button>
      </div>
      <div style={{ maxWidth: '1020px' }}>
        <div style={{ fontSize: '14px', color: '#3A3552', lineHeight: '1.65', maxWidth: '660px', margin: '14px 0 20px' }}>TalentSphere never passes protected attributes to a scoring model. This page shows exactly what the model cannot see, and continuously audits what still leaks through proxies. Findings are stated plainly — no score is adjusted silently.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflow: 'hidden', animation: 'rowIn .5s both' }}>
            <div style={{ padding: '14px 20px 12px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Masked at inference</div>
            {(v.biMasked || []).map((m, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '9px 20px', borderBottom: '1px solid #FAF9FD', transition: 'background .2s' }} className="hov36">
                <span style={{ width: '22px', height: '22px', borderRadius: '8px', background: '#F1EBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <svg width="11" height="11" viewBox="0 0 12 12"><path d="M1.5 6 C2.8 3.6 4.3 2.5 6 2.5 C7.7 2.5 9.2 3.6 10.5 6 C9.2 8.4 7.7 9.5 6 9.5 C4.3 9.5 2.8 8.4 1.5 6 Z" fill="none" stroke="#7C3AED" strokeWidth="1.2"></path><path d="M2 10 L10 2" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round"></path></svg>
                </span>
                <span style={{ fontSize: '13px', fontWeight: '500', flex: '1' }}>{m.f}</span>
                <span style={{ fontSize: '11px', color: '#9B96B0' }}>{m.note}</span>
              </div>
            </React.Fragment>
))}
            <div style={{ padding: '12px 20px', fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.55' }}>Masking config is admin-controlled and versioned. Last change: gaps under 6 months, enabled Jul 1 by I. Whitfield.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflow: 'hidden', animation: 'rowIn .5s both', animationDelay: '.08s' }}>
            <div style={{ padding: '14px 20px 12px', borderBottom: '1px solid var(--soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Cohort parity — last 90 days</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: '#9B96B0' }}>n = 412</span>
            </div>
            {(v.biCohorts || []).map((c, $index) => (
<React.Fragment key={$index}>
              <div style={{ padding: '11px 20px', borderBottom: '1px solid #FAF9FD', background: c.bg }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>{c.k}</span>
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', fontWeight: '600', color: c.vColor }}>{c.v}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '3px', lineHeight: '1.55' }}>{c.note}</div>
              </div>
            </React.Fragment>
))}
            <div style={{ padding: '13px 20px', background: '#FFFBEB' }}>
              <div style={{ fontSize: '12px', color: '#92600A', lineHeight: '1.6' }}><span style={{ fontWeight: '700' }}>Open item.</span> Proposed fix for the Communication gap: cap indirect-evidence weight at 50%. Drafted by A. Osei, Jun 30 — awaiting approval from I. Whitfield.</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '6px 15px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(124,58,237,.3)', transition: 'all .25s' }} className="hov37">Review proposal</button>
                <button style={{ background: '#fff', border: '1px solid #F0E4C0', borderRadius: '999px', padding: '6px 14px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: '#92600A' }}>View methodology</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '16px', overflow: 'hidden', animation: 'rowIn .5s both', animationDelay: '.16s' }}>
          <div style={{ padding: '14px 20px 12px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Job description language — weekly scan</div>
          {(v.biJd || []).map((j, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '210px 160px 1fr 160px', gap: '14px', padding: '12px 20px', borderBottom: '1px solid #FAF9FD', alignItems: 'center', transition: 'background .2s' }} className="hov38">
              <span style={{ fontSize: '13px', fontWeight: '600' }}>{j.req}</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: j.termColor }}>{j.term}</span>
              <span style={{ fontSize: '12px', color: 'var(--sub)', lineHeight: '1.55' }}>{j.note}</span>
              {j.fixable && (
<React.Fragment>
                <button onClick={j.fix} style={{ background: j.fixBg, border: `1px solid ${j.fixBr}`, borderRadius: '999px', padding: '6px 13px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', color: j.fixFg, transition: 'all .2s' }} className="hov39">{j.fixLabel}</button>
              </React.Fragment>
)}
              {j.clean && (
<React.Fragment>
                <span style={{ fontSize: '12px', color: 'var(--good)', fontWeight: '600' }}>No flags</span>
              </React.Fragment>
)}
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 20px', fontSize: '11.5px', color: '#9B96B0' }}>Suggestions edit the draft only — a hiring manager approves before anything publishes.</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
