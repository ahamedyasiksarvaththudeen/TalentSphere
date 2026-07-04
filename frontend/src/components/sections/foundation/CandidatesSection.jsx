import React from 'react';

export default function CandidatesSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Foundation · 04</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Candidates</div>
        </div>
        <span style={{ position: 'relative' }}>
          <span onClick={v.cdDd} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '12.5px', fontWeight: '600', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 12px 8px 16px', cursor: 'pointer', transition: 'all .2s' }} className="hov67">
            Stage: {v.cdFilter}
            <svg width="9" height="9" viewBox="0 0 10 10" style={{ transition: 'transform .25s', transform: v.cdRot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#6F6B84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </span>
          {v.cdDdOpen && (
<React.Fragment>
            <span style={{ position: 'absolute', top: 'calc(100% + 6px)', right: '0', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '6px', minWidth: '150px', zIndex: '50', animation: 'ddIn .18s ease', display: 'block' }}>
              {(v.cdOpts || []).map((o, $index) => (
<React.Fragment key={$index}>
                <span onClick={o.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '12.5px', fontWeight: o.fw, transition: 'background .15s' }} className="hov68">{o.label}<span style={{ color: 'var(--vio)', fontWeight: '700' }}>{o.check}</span></span>
              </React.Fragment>
))}
            </span>
          </React.Fragment>
)}
        </span>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr 330px', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.1fr 104px 66px 66px 96px 40px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.07em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', position: 'sticky', top: '0', background: '#fff', zIndex: '2' }}>
            <span>Candidate</span><span>Applied to</span><span>Stage</span><span>Screen</span><span>Match</span><span>Applied</span><span></span>
          </div>
          {(v.cdRows || []).map((r, $index) => (
<React.Fragment key={$index}>
            <div onClick={r.click} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.1fr 104px 66px 66px 96px 40px', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', cursor: 'pointer', background: r.bg, transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov69">
              <span style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: '0' }}>
                <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: r.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', flex: 'none' }}>{r.ini}</span>
                <span style={{ minWidth: '0' }}><span style={{ fontSize: '13.5px', fontWeight: '600', display: 'block' }}>{r.name}</span><span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{r.title}</span></span>
              </span>
              <span style={{ fontSize: '12.5px', color: '#4B4763' }}>{r.job}</span>
              <span><span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: r.stBg, color: r.stFg }}>{r.stage}</span></span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', fontWeight: '600', color: r.scColor }}>{r.sc}</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', color: '#4B4763' }}>{r.match}</span>
              <span style={{ fontSize: '12px', color: 'var(--sub)' }}>{r.applied}</span>
              <span style={{ position: 'relative' }}>
                <span onClick={r.menuClick} style={{ fontSize: '18px', color: '#C6C2D6', cursor: 'pointer', letterSpacing: '1px', padding: '2px 6px', borderRadius: '8px', transition: 'all .2s', display: 'inline-block' }} className="hov70">⋯</span>
                {r.menuOpen && (
<React.Fragment>
                  <span style={{ position: 'absolute', top: 'calc(100% + 4px)', right: '0', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '6px', minWidth: '190px', zIndex: '50', animation: 'ddIn .18s ease', display: 'block' }}>
                    {(r.menu || []).map((m, $index) => (
<React.Fragment key={$index}>
                      <span onClick={m.click} style={{ display: 'block', padding: '8px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '12.5px', fontWeight: '500', color: m.color, transition: 'background .15s', textAlign: 'left' }} className="hov71">{m.label}</span>
                    </React.Fragment>
))}
                  </span>
                </React.Fragment>
)}
              </span>
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto' }}>
          <div style={{ height: '64px', background: 'var(--grad)', borderRadius: '20px 20px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', left: '22px', bottom: '-26px', width: '56px', height: '56px', borderRadius: '50%', background: v.cpAv, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', border: '4px solid #fff', boxShadow: 'var(--sh)' }}>{v.cpIni}</span>
          </div>
          <div style={{ padding: '34px 22px 12px' }}>
            <div style={{ fontSize: '17px', fontWeight: '700' }}>{v.cpName}</div>
            <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '2px' }}>{v.cpTitle}</div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: v.cpStBg, color: v.cpStFg }}>{v.cpStage}</span>
              <span style={{ fontSize: '11px', fontWeight: '600', padding: '3px 11px', borderRadius: '999px', background: 'var(--soft)', color: '#4B4763' }}>{v.cpSrc}</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px', padding: '6px 22px 4px' }}>
            <div style={{ background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', border: '1px solid #F0E8FB', borderRadius: '14px', padding: '11px 14px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>Screen</div>
              <div style={{ fontSize: '21px', fontWeight: '800', marginTop: '2px' }}>{v.cpScore}</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', border: '1px solid #F0E8FB', borderRadius: '14px', padding: '11px 14px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>Match</div>
              <div style={{ fontSize: '21px', fontWeight: '800', marginTop: '2px' }}>{v.cpMatch}</div>
            </div>
          </div>
          <div style={{ padding: '12px 22px 4px' }}>
            {(v.cpFacts || []).map((f, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--soft)', fontSize: '12.5px' }}>
                <span style={{ color: 'var(--sub)', flex: 'none' }}>{f.k}</span>
                <span style={{ fontWeight: '600', textAlign: 'right' }}>{f.v}</span>
              </div>
            </React.Fragment>
))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 22px 22px' }}>
            <button onClick={v.goScreening} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 0', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov72">View AI screening</button>
            <button onClick={v.goMatching} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 0', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov73">Match breakdown</button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
