import React from 'react';

export default function ReportsSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Analytics · 19</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Report builder</div>
        </div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '320px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '20px 22px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '12px' }}>Include sections</div>
          {(v.rpSections || []).map((s, $index) => (
<React.Fragment key={$index}>
            <div onClick={s.toggle} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '13px', cursor: 'pointer', transition: 'background .2s', marginBottom: '3px' }} className="hov88">
              <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: s.bg, border: `1.5px solid ${s.br}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'all .2s' }}>
                {s.on && (
<React.Fragment><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.7 L9.5 3.3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></React.Fragment>
)}
              </span>
              <span style={{ flex: '1' }}><span style={{ fontSize: '13px', fontWeight: '600', display: 'block' }}>{s.label}</span><span style={{ fontSize: '11px', color: 'var(--sub)' }}>{s.desc}</span></span>
            </div>
          </React.Fragment>
))}
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '10px' }}>Format</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(v.rpFormats || []).map((f, $index) => (
<React.Fragment key={$index}>
                <button onClick={f.click} style={{ flex: '1', border: `1.5px solid ${f.br}`, background: f.bg, color: f.fg, borderRadius: '12px', padding: '9px 0', fontSize: '12px', fontWeight: '700', cursor: 'pointer', transition: 'all .2s' }}>{f.label}</button>
              </React.Fragment>
))}
            </div>
          </div>
          <button onClick={v.rpGenerate} style={{ marginTop: '18px', width: '100%', background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '11px 0', fontSize: '13px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov89">{v.rpBtnLabel}</button>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '26px 30px' }}>
          {v.rpGenerating && (
<React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'var(--grad)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(124,58,237,.35)', animation: 'floaty 3s ease-in-out infinite' }}>
                  <svg width="26" height="26" viewBox="0 0 16 16"><path d="M3 2 L11 2 L13 4.5 L13 14 L3 14 Z M6 6 L10 6 M6 8.5 L10 8.5 M6 11 L9 11" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"></path></svg>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Compiling report…</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '6px' }}>{v.rpSectionCount} sections · Q2 hiring cycle</div>
              </div>
            </div>
          </React.Fragment>
)}
          {v.rpPreview && (
<React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '16px', borderBottom: '2px solid var(--ink)' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: '800' }}>Q2 Hiring Report</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '3px' }}>Meridian Labs · Apr 1 – Jun 30 · Prepared by Rachel Kim</div>
              </div>
              <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'var(--grad)' }}></div>
            </div>
            {v.rpSum && (
<React.Fragment>
              <div style={{ marginTop: '18px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--vio)' }}>Executive summary</div>
                <div style={{ fontSize: '13px', lineHeight: '1.7', color: '#3A3552', marginTop: '8px' }}>128 requisitions processed 1,284 candidates this quarter, hiring 12 against a median time-to-hire of 31 days — down 6 days from Q1. AI screening triaged 68% of applicant volume before recruiter review, and bias monitoring flagged one criterion for rubric correction, now pending approval.</div>
              </div>
            </React.Fragment>
)}
            {v.rpFunnelS && (
<React.Fragment>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--vio)' }}>Funnel</div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                  {(v.anFunnel || []).map((f, $index) => (
<React.Fragment key={$index}>
                    <div><div style={{ fontSize: '16px', fontWeight: '800' }}>{f.v}</div><div style={{ fontSize: '11px', color: 'var(--sub)' }}>{f.k}</div></div>
                  </React.Fragment>
))}
                </div>
              </div>
            </React.Fragment>
)}
            {v.rpSrcS && (
<React.Fragment>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--vio)' }}>Source effectiveness</div>
                <div style={{ fontSize: '12.5px', color: '#4B4763', marginTop: '8px', lineHeight: '1.7' }}>Referral (34%) and Direct (26%) convert at the highest rates; job boards remain highest-volume but lowest conversion at 9%.</div>
              </div>
            </React.Fragment>
)}
            {v.rpRecS && (
<React.Fragment>
              <div style={{ marginTop: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--vio)' }}>Recommendations</div>
                <div style={{ fontSize: '12.5px', color: '#4B4763', marginTop: '8px', lineHeight: '1.7' }}>Approve the pending Communication rubric fix before next quarter's screening volume. Reallocate sourcing spend from job boards toward referral incentives.</div>
              </div>
            </React.Fragment>
)}
          </React.Fragment>
)}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
