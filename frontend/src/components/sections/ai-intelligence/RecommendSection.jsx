import React from 'react';

export default function RecommendSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 13</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Recommendations</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Ranked by expected impact on time-to-hire · refreshed 09:40</div>
      </div>
      <div style={{ maxWidth: '840px', marginTop: '16px' }}>
        {(v.recRows || []).map((r, $index) => (
<React.Fragment key={$index}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginBottom: '12px', opacity: r.op, overflow: 'hidden', transition: 'all .25s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov47">
            <div style={{ padding: '15px 18px 4px', display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: r.prColor, background: r.prBg, padding: '4px 11px', borderRadius: '999px', flex: 'none', marginTop: '1px' }}>{r.pr}</span>
              <div style={{ flex: '1' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.45' }}>{r.title}</div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', marginTop: '9px', padding: '9px 12px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '12px', border: '1px solid #F0E8FB' }}>
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '9px', color: 'var(--vio)', letterSpacing: '.08em', marginTop: '2px', flex: 'none', fontWeight: '600' }}>WHY</span>
                  <span style={{ fontSize: '12px', color: '#4B4763', lineHeight: '1.55' }}>{r.why}</span>
                </div>
              </div>
              {r.isDone && (
<React.Fragment>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--good)', background: '#D1FAE5', padding: '4px 12px', borderRadius: '999px', flex: 'none', animation: 'rowIn .3s both' }}>Done</span>
              </React.Fragment>
)}
            </div>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', padding: '10px 18px 15px 72px' }}>
              {(r.evs || []).map((e, $index) => (
<React.Fragment key={$index}>
                <span onClick={e.click} style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: 'var(--sub)', border: '1px solid var(--line)', padding: '3px 10px', cursor: 'pointer', background: 'var(--soft)', borderRadius: '999px', transition: 'all .2s' }} className="hov48">{e.s}</span>
              </React.Fragment>
))}
              <span style={{ flex: '1' }}></span>
              <button onClick={r.act} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '6px 15px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(124,58,237,.3)', transition: 'all .25s' }} className="hov49">{r.actLabel}</button>
              <button onClick={r.dismiss} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '6px 13px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: 'var(--sub)', transition: 'all .2s' }} className="hov50">Dismiss</button>
            </div>
          </div>
        </React.Fragment>
))}
        <div style={{ fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.6', marginTop: '14px' }}>Recommendations never act on their own. Each carries its trigger, links to the evidence, and expires when the underlying condition clears. Dismissals are logged with no penalty to future ranking.</div>
      </div>
    </div>
    </React.Fragment>
  );
}
