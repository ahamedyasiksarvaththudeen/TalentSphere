import React from 'react';

export default function PipelineSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 20px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops · 14</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Recruitment pipeline</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Senior Backend Engineer · drag not required — click a candidate to advance</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px', minHeight: '0', marginTop: '16px', overflowX: 'auto' }}>
        {(v.pipeCols || []).map((col, $index) => (
<React.Fragment key={$index}>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 4px 10px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: col.dot }}></span>
              <span style={{ fontSize: '13px', fontWeight: '700', flex: '1' }}>{col.label}</span>
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--sub)', background: 'var(--soft)', padding: '2px 9px', borderRadius: '999px' }}>{col.n}</span>
            </div>
            <div style={{ flex: '1', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '9px', paddingBottom: '8px' }}>
              {(col.cards || []).map((c, $index) => (
<React.Fragment key={$index}>
                <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '13px 14px', cursor: 'pointer', transition: 'all .25s', animation: 'rowIn .4s both', animationDelay: c.dl }} className="hov80">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: c.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flex: 'none' }}>{c.ini}</span>
                    <span style={{ minWidth: '0', flex: '1' }}><span style={{ fontSize: '12.5px', fontWeight: '600', display: 'block' }}>{c.name}</span><span style={{ fontSize: '10.5px', color: 'var(--sub)' }}>{c.days}</span></span>
                    {c.hasScore && (
<React.Fragment>
                      <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', fontWeight: '700', color: c.scColor }}>{c.score}</span>
                    </React.Fragment>
)}
                  </div>
                  {c.showBtn && (
<React.Fragment>
                    <button onClick={c.advance} style={{ width: '100%', marginTop: '10px', background: 'var(--soft)', border: 'none', borderRadius: '999px', padding: '6px 0', fontSize: '11.5px', fontWeight: '600', color: 'var(--vio)', cursor: 'pointer', transition: 'all .2s' }} className="hov81">{c.advLabel} →</button>
                  </React.Fragment>
)}
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
