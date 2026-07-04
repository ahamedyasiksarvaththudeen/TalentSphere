import React from 'react';

export default function UploadSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Intake · 05</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Resume upload & parsing</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Parser v2.6 · live field preview before a record is created</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '270px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '2px dashed #D9CCF3', boxShadow: 'var(--sh)', padding: '22px 16px', textAlign: 'center', transition: 'all .25s', cursor: 'pointer' }} className="hov74">
            <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'var(--grad)', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 16 16"><path d="M8 11 L8 3 M5 6 L8 3 L11 6 M3 12.5 L13 12.5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>Drop resumes here</div>
            <div style={{ fontSize: '11px', color: '#9B96B0', marginTop: '2px' }}>PDF, DOCX up to 10MB</div>
          </div>
          <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', padding: '0 4px' }}>Queue · {v.upCount}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
            {(v.upQueue || []).map((f, $index) => (
<React.Fragment key={$index}>
              <div onClick={f.click} style={{ background: '#fff', borderRadius: '14px', border: f.border, boxShadow: f.sh, padding: '11px 14px', cursor: 'pointer', transition: 'all .2s' }} className="hov75">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: f.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 1.5 L9 1.5 L11.5 4 L11.5 12.5 L3 12.5 Z" fill="none" stroke={f.iconC} strokeWidth="1.3" strokeLinejoin="round"></path></svg>
                  </span>
                  <span style={{ flex: '1', minWidth: '0' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: '600', display: 'block' }}>{f.cand}</span>
                    <span style={{ fontSize: '10.5px', color: 'var(--sub)' }}>{f.file}</span>
                  </span>
                  <span style={{ fontSize: '10px', fontWeight: '700', padding: '3px 9px', borderRadius: '999px', background: f.stBg, color: f.stFg }}>{f.st}</span>
                </div>
              </div>
            </React.Fragment>
))}
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '22px 26px' }}>
          {v.upParsing && (
<React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '280px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'var(--grad)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(124,58,237,.35)', animation: 'floaty 3s ease-in-out infinite' }}>
                  <svg width="26" height="26" viewBox="0 0 16 16"><path d="M3 1.5 L9 1.5 L11.5 4 L11.5 12.5 L3 12.5 Z" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"></path></svg>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Parsing {v.upSelCand}…</div>
                <div style={{ width: '220px', height: '5px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden', margin: '14px auto 0', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '0', height: '100%', width: '30%', borderRadius: '999px', background: 'var(--grad)', animation: 'scan 1s linear infinite' }}></div>
                </div>
              </div>
            </div>
          </React.Fragment>
)}
          {v.upReady && (
<React.Fragment>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>{v.upSelCand}</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>Parsed field confidence — verify anything below 85%</div>
              </div>
              <button onClick={v.upCreate} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov76">{v.upCreateLabel}</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '16px' }}>
              {(v.upRows || []).map((r, $index) => (
<React.Fragment key={$index}>
                <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 120px', gap: '14px', alignItems: 'center', padding: '10px 4px', borderBottom: '1px solid var(--soft)', animation: 'rowIn .4s both', animationDelay: r.dl }}>
                  <span style={{ fontSize: '12px', color: 'var(--sub)', fontWeight: '600' }}>{r.k}</span>
                  <span style={{ fontSize: '13.5px', fontWeight: '500' }}>{r.v}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                    <span style={{ width: '60px', height: '6px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: r.barColor, width: `${r.conf}%` }}></span></span>
                    <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', fontWeight: '600', color: r.barColor, width: '30px', textAlign: 'right' }}>{r.conf}%</span>
                  </span>
                </div>
              </React.Fragment>
))}
            </div>
            {v.upNoteShow && (
<React.Fragment>
              <div style={{ marginTop: '14px', background: '#FFFBEB', borderRadius: '14px', border: '1px solid #FEF0C7', padding: '12px 16px', fontSize: '12.5px', color: '#92600A', lineHeight: '1.6' }}>
                <span style={{ fontWeight: '700' }}>Needs confirmation.</span> {v.upNote}
              </div>
            </React.Fragment>
)}
            <div style={{ marginTop: '14px', background: 'var(--soft)', borderRadius: '14px', padding: '12px 16px', fontSize: '12.5px', color: '#4B4763', lineHeight: '1.6' }}>
              <span style={{ fontWeight: '700' }}>Duplicate check.</span> {v.upDup}
            </div>
          </React.Fragment>
)}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
