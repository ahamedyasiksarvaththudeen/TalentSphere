import React from 'react';

export default function RankingSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 09</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Applicant ranking</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Senior Backend Engineer · 7 scored applicants · weights are shared with the hiring team</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '18px 20px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '5px' }}>Ranking factors</div>
          <div style={{ fontSize: '12px', color: 'var(--sub)', lineHeight: '1.55', marginBottom: '16px' }}>Move a weight and the list re-sorts live. Changes are visible to the whole hiring team and logged.</div>
          {(v.rkFactors || []).map((f, $index) => (
<React.Fragment key={$index}>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{f.label}</span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', fontWeight: '600', color: 'var(--vio)' }}>{f.w}</span>
              </div>
              <input type="range" min="0" max="50" step="5" value={f.w} onChange={f.set} style={{ width: '100%', margin: '5px 0 3px', height: '14px' }} />
              <div style={{ fontSize: '11px', color: '#9B96B0' }}>{f.desc}</div>
            </div>
          </React.Fragment>
))}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--soft)', paddingTop: '12px', fontSize: '12.5px' }}>
            <span style={{ color: 'var(--sub)' }}>Total weight</span>
            <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontWeight: '600' }}>{v.rkSum}</span>
          </div>
          {v.rkSumWarn && (
<React.Fragment>
            <div style={{ fontSize: '11.5px', color: '#B45309', marginTop: '6px', lineHeight: '1.5', background: '#FFFBEB', borderRadius: '10px', padding: '8px 11px' }}>Weights auto-normalize to 100 — shown raw here for transparency.</div>
          </React.Fragment>
)}
          <button onClick={v.rkReset} style={{ marginTop: '14px', width: '100%', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 0', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov31">Reset to rubric defaults</button>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '30px 40px 1.3fr 74px repeat(5,64px) 96px', gap: '10px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>
            <span>#</span><span>Δ</span><span>Candidate</span><span>Score</span><span>Skills</span><span>Exper.</span><span>Screen</span><span>Recency</span><span>Referral</span><span>Stage</span>
          </div>
          {(v.rkRows || []).map((r, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '30px 40px 1.3fr 74px repeat(5,64px) 96px', gap: '10px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov32">
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: '#9B96B0' }}>{r.rk}</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', fontWeight: '600', color: r.deltaColor }}>{r.delta}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '0' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: r.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11.5px', flex: 'none' }}>{r.ini}</span>
                <span style={{ minWidth: '0' }}><span style={{ fontSize: '13px', fontWeight: '600', display: 'block' }}>{r.name}</span><span style={{ fontSize: '11px', color: 'var(--sub)' }}>{r.sub}</span></span>
              </span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '14.5px', fontWeight: '700', background: 'var(--grad)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{r.comp}</span>
              {(r.cells || []).map((c, $index) => (
<React.Fragment key={$index}>
                <span><span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: '#4B4763' }}>{c.v}</span><span style={{ display: 'block', width: '44px', height: '4px', borderRadius: '999px', background: 'var(--soft)', marginTop: '4px' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: '#C9BDEB', width: c.bar }}></span></span></span>
              </React.Fragment>
))}
              <span><span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px', background: r.stBg, color: r.stFg }}>{r.stage}</span></span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '14px 22px', fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.6' }}>Composite = Σ weightᵢ · factorᵢ, normalized. Referral strength is policy-capped at 15 so a warm intro can nudge a rank, never decide one. Provenance: skills from Matching, screen score from Screening, recency from candidate activity.</div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
