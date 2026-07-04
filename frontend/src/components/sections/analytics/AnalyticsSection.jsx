import React from 'react';

export default function AnalyticsSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Analytics · 18</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Recruitment analytics</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Last 90 days · all requisitions</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '18px' }}>
        {(v.anStats || []).map((s, $index) => (
<React.Fragment key={$index}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '18px 20px', animation: 'rowIn .45s both', animationDelay: s.dl }}>
            <div style={{ fontSize: '11.5px', color: 'var(--sub)', fontWeight: '600' }}>{s.k}</div>
            <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px' }}>{s.v}</div>
            <div style={{ fontSize: '11.5px', fontWeight: '600', marginTop: '4px', color: s.color }}>{s.delta}</div>
          </div>
        </React.Fragment>
))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '14px' }}>Funnel — all active requisitions</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '18px', height: '190px' }}>
            {(v.anFunnel || []).map((f, $index) => (
<React.Fragment key={$index}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', marginBottom: '7px' }}>{f.v}</span>
                <span style={{ width: '100%', borderRadius: '12px 12px 4px 4px', background: f.bar, height: `${f.h}%`, transition: 'height 1s cubic-bezier(.22,1,.36,1)' }}></span>
                <span style={{ fontSize: '11px', color: 'var(--sub)', marginTop: '8px', fontWeight: '600' }}>{f.k}</span>
              </div>
            </React.Fragment>
))}
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '14px' }}>Source effectiveness</div>
          {(v.anSrc || []).map((s, $index) => (
<React.Fragment key={$index}>
            <div style={{ marginBottom: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '5px' }}>
                <span style={{ fontWeight: '600' }}>{s.k}</span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', color: 'var(--sub)' }}>{s.v}</span>
              </div>
              <div style={{ height: '8px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: '999px', background: 'var(--grad)', width: s.w, transition: 'width 1s cubic-bezier(.22,1,.36,1)' }}></div></div>
            </div>
          </React.Fragment>
))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>Recruiter performance</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 70px 70px 90px', gap: '8px', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', paddingBottom: '8px', borderBottom: '1px solid var(--soft)' }}>
            <span>Recruiter</span><span>Open</span><span>Hired</span><span>Avg TTH</span>
          </div>
          {(v.anRec || []).map((r, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 70px 70px 90px', gap: '8px', padding: '10px 0', borderBottom: '1px solid var(--soft)', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: r.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10px' }}>{r.ini}</span><span style={{ fontSize: '12.5px', fontWeight: '600' }}>{r.name}</span></span>
              <span style={{ fontSize: '12.5px', color: '#4B4763' }}>{r.open}</span>
              <span style={{ fontSize: '12.5px', color: '#4B4763' }}>{r.hired}</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12px', color: 'var(--vio)', fontWeight: '600' }}>{r.tth}</span>
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '14px' }}>Time-to-hire trend</div>
          <svg width="100%" height="170" viewBox="0 0 400 170" preserveAspectRatio="none">
            <defs><linearGradient id="trendG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25"></stop><stop offset="100%" stopColor="#7C3AED" stopOpacity="0"></stop></linearGradient></defs>
            <polyline points={v.anTrendPts} fill="none" stroke="url(#gsc)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></polyline>
            <polygon points={v.anTrendFill} fill="url(#trendG)"></polygon>
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#9B96B0', marginTop: '4px' }}>
            {(v.anTrendLbl || []).map((l, $index) => (
<React.Fragment key={$index}><span>{l}</span></React.Fragment>
))}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
