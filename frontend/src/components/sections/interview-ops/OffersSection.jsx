import React from 'react';

export default function OffersSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops · 17</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Offers & onboarding</div>
        </div>
        <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov86">New offer</button>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
          {(v.ofList || []).map((o, $index) => (
<React.Fragment key={$index}>
            <div onClick={o.click} style={{ background: '#fff', borderRadius: '18px', border: o.border, boxShadow: o.sh, padding: '14px 16px', cursor: 'pointer', transition: 'all .25s' }} className="hov87">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>{o.cand}</span>
                <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px', background: o.stBg, color: o.stFg }}>{o.status}</span>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)', marginTop: '3px' }}>{o.job}</div>
              <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: '#9B96B0', marginTop: '6px' }}>{o.code}</div>
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '22px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700' }}>{v.ofCand}</div>
              <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '2px' }}>{v.ofJob} · {v.ofCode}</div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: '700', padding: '5px 14px', borderRadius: '999px', background: v.ofStBg, color: v.ofStFg }}>{v.ofStatus}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginTop: '18px' }}>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Base</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{v.ofBase}</div></div>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Equity</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{v.ofEquity}</div></div>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Bonus</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{v.ofBonus}</div></div>
          </div>
          {v.ofProbShow && (
<React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '14px', border: '1px solid #F0E8FB', padding: '12px 16px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '.1em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>Accept model</span>
              <span style={{ flex: '1', height: '6px', borderRadius: '999px', background: '#fff' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: `${v.ofProbW}%` }}></span></span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '13px', fontWeight: '700', color: 'var(--vio)' }}>{v.ofProb}</span>
            </div>
          </React.Fragment>
)}
          <div style={{ marginTop: '18px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '10px' }}>Approval chain</div>
            {(v.ofChain || []).map((c, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: c.dotBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  {c.showCheck && (
<React.Fragment><svg width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.7 L9.5 3.3" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg></React.Fragment>
)}
                </span>
                <span style={{ flex: '1', fontSize: '12.5px', fontWeight: '600' }}>{c.label}</span>
                <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{c.date}</span>
              </div>
            </React.Fragment>
))}
          </div>
          <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '9px' }}>Onboarding checklist</div>
            {(v.ofOb || []).map((c, $index) => (
<React.Fragment key={$index}>
              <div onClick={c.click} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '8px 0', cursor: 'pointer' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: c.bg, border: `1.5px solid ${c.br}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'all .2s' }}>
                  {c.checked && (
<React.Fragment><svg width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.7 L9.5 3.3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></React.Fragment>
)}
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: '500', color: c.fg }}>{c.label}</span>
              </div>
            </React.Fragment>
))}
          </div>
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Timeline</div>
            {(v.ofEvents || []).map((e, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', gap: '12px', padding: '5px 0', fontSize: '12px' }}>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', color: '#9B96B0', width: '110px', flex: 'none' }}>{e.t}</span>
                <span style={{ color: '#4B4763' }}>{e.what}</span>
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
