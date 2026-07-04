import React from 'react';

export default function MatchingSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 08</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Candidate–job matching</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Senior Backend Engineer · recomputed Jul 2 · MATCH v3.1</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 170px 90px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>
            <span>#</span><span>Candidate</span><span>Match</span><span>Gaps</span>
          </div>
          {(v.mtRows || []).map((r, $index) => (
<React.Fragment key={$index}>
            <div onClick={r.click} style={{ display: 'grid', gridTemplateColumns: '30px 1fr 170px 90px', gap: '12px', padding: '12px 22px', borderBottom: '1px solid var(--soft)', background: r.bg, cursor: 'pointer', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov29">
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', color: '#9B96B0' }}>{r.rk}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: '0' }}>
                <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: r.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', flex: 'none' }}>{r.ini}</span>
                <span style={{ minWidth: '0' }}><span style={{ fontSize: '13.5px', fontWeight: '600', display: 'block' }}>{r.name}</span><span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{r.sub}</span></span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '13.5px', fontWeight: '600', color: r.pctColor, width: '40px' }}>{r.pct}</span>
                <span style={{ flex: '1', height: '6px', borderRadius: '999px', background: 'var(--soft)' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: r.bar }}></span></span>
              </span>
              <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{r.gaps}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '14px 22px', fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.55' }}>Match is a points model, not a probability — 100 pts split across five factors, weights set in the req rubric. Every point is attributable on the right.</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', overflowX: 'hidden' }}>
          <div style={{ position: 'sticky', top: '0', height: '5px', background: 'var(--grad)', zIndex: '2' }}></div>
          <div style={{ padding: '16px 22px 14px', borderBottom: '1px solid var(--soft)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '17px', fontWeight: '700' }}>{v.mtSelName}</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>{v.mtSelSub}</div>
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '-.02em', background: 'var(--grad)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{v.mtPct}</div>
            </div>
            <div style={{ display: 'flex', height: '10px', marginTop: '14px', borderRadius: '999px', overflow: 'hidden', background: 'var(--soft)' }}>
              {(v.mtFactors || []).map((f, $index) => (
<React.Fragment key={$index}>
                <span style={{ height: '100%', background: 'var(--vio)', opacity: f.op, width: f.segW, borderRight: '2px solid #fff' }}></span>
              </React.Fragment>
))}
            </div>
            <div style={{ fontSize: '10px', color: '#9B96B0', marginTop: '6px', fontFamily: '\'JetBrains Mono\',monospace' }}>CONTRIBUTION BY FACTOR · 100 PTS TOTAL</div>
          </div>
          {(v.mtFactors || []).map((f, $index) => (
<React.Fragment key={$index}>
            <div style={{ borderBottom: '1px solid var(--soft)' }}>
              <div onClick={f.click} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '12px 22px', cursor: 'pointer', transition: 'background .2s' }} className="hov30">
                <span style={{ width: '20px', height: '20px', borderRadius: '7px', background: 'var(--soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'var(--vio)', fontWeight: '700', flex: 'none', transition: 'transform .25s', transform: f.rot }}>
                  <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span style={{ flex: '1', fontSize: '13px', fontWeight: '600' }}>{f.k}</span>
                <span style={{ width: '84px', height: '5px', borderRadius: '999px', background: 'var(--soft)' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: f.pw }}></span></span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12px', fontWeight: '600', width: '52px', textAlign: 'right' }}>{f.fr}</span>
              </div>
              {f.open && (
<React.Fragment>
                <div style={{ padding: '0 22px 13px 53px', fontSize: '12.5px', color: 'var(--sub)', lineHeight: '1.6', animation: 'ddIn .22s ease' }}>{f.note}</div>
              </React.Fragment>
)}
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '16px 22px 6px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '9px' }}>Skills matched</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {(v.mtMatched || []).map((t, $index) => (
<React.Fragment key={$index}>
                <span style={{ fontSize: '11.5px', fontWeight: '600', padding: '4px 12px', background: '#F1EBFE', color: 'var(--vio)', borderRadius: '999px' }}>{t.s}</span>
              </React.Fragment>
))}
            </div>
            <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', margin: '16px 0 9px' }}>Missing or partial</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {(v.mtMissing || []).map((t, $index) => (
<React.Fragment key={$index}>
                <span style={{ fontSize: '11.5px', fontWeight: '600', padding: '4px 12px', background: '#FFFBEB', color: '#B45309', border: '1px dashed #FCD34D', borderRadius: '999px' }}>{t.s}</span>
              </React.Fragment>
))}
            </div>
          </div>
          <div style={{ padding: '16px 22px 22px', marginTop: '8px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Formula — from rubric j1-r3</div>
            {(v.mtFormula || []).map((w, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontSize: '12px' }}>
                <span style={{ color: 'var(--sub)' }}>{w.k}</span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: '#3A3552' }}>{w.max}</span>
              </div>
            </React.Fragment>
))}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
