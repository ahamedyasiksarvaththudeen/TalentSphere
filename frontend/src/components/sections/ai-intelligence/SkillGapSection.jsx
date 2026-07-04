import React from 'react';

export default function SkillGapSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 10</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Skill gap analysis</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Required levels from rubric j1-r3 · candidate levels inferred from evidence, not self-report</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '270px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '14px 10px' }}>
          <div style={{ padding: '2px 12px 8px', fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Candidates · Senior Backend</div>
          {(v.gapList || []).map((g, $index) => (
<React.Fragment key={$index}>
            <div onClick={g.click} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '13px', cursor: 'pointer', background: g.bg, transition: 'all .2s' }} className="hov33">
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: g.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10.5px', flex: 'none' }}>{g.ini}</span>
              <span style={{ flex: '1', fontSize: '13px', fontWeight: '600' }}>{g.name}</span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: 'var(--sub)' }}>{g.pct}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ margin: '14px 8px 4px', padding: '12px 14px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '14px', border: '1px solid #F0E8FB', fontSize: '11.5px', color: 'var(--sub)', lineHeight: '1.6' }}>Coverage = Σ min(has, required) ÷ Σ required. Levels 1–5 are inferred from evidence density, not keyword counts.</div>
        </div>
        <div style={{ overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '16px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '46px', height: '46px', borderRadius: '50%', background: v.gapAv, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '15px' }}>{v.gapIni}</span>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>{v.gapSelName}</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)' }}>{v.gapSelSub}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', width: '62px', height: '62px' }}>
                <svg width="62" height="62" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#F1EBFE" strokeWidth="7"></circle>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="url(#gsc2)" strokeWidth="7" strokeLinecap="round" strokeDasharray="163.4" strokeDashoffset={v.gapRing} transform="rotate(-90 31 31)"></circle>
                  <defs><linearGradient id="gsc2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7C3AED"></stop><stop offset="100%" stopColor="#EC4899"></stop></linearGradient></defs>
                </svg>
                <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800' }}>{v.gapPct}</div>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)', width: '86px', lineHeight: '1.4' }}>requirement coverage</div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '48px 150px 170px 60px 1fr', gap: '12px', padding: '12px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
              <span></span><span>Skill</span><span>Level 1–5</span><span>Gap</span><span>Note</span>
            </div>
            {(v.gapRows || []).map((r, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'grid', gridTemplateColumns: '48px 150px 170px 60px 1fr', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov34">
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '8.5px', letterSpacing: '.07em', fontWeight: '600', color: r.mustColor, background: r.mustBg, padding: '3px 7px', borderRadius: '999px', textAlign: 'center' }}>{r.must}</span>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{r.skill}</span>
                <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {(r.boxes || []).map((b, $index) => (
<React.Fragment key={$index}>
                    <span style={{ width: '17px', height: '17px', borderRadius: '6px', background: b.bg, border: b.br, transition: 'all .3s' }}></span>
                  </React.Fragment>
))}
                </span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', fontWeight: '700', color: '#B45309' }}>{r.gapN}</span>
                <span style={{ fontSize: '12px', color: 'var(--sub)', lineHeight: '1.5' }}>{r.note}</span>
              </div>
            </React.Fragment>
))}
            <div style={{ display: 'flex', gap: '20px', padding: '12px 22px', fontSize: '11px', color: 'var(--sub)', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: 'var(--grad)' }}></span>demonstrated</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: '#fff', border: '1.5px dashed #F59E0B' }}></span>required, not evidenced</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: 'var(--soft)', border: '1px solid var(--line)' }}></span>beyond requirement</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '14px', paddingBottom: '6px' }}>
            <div style={{ background: '#fff', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '16px 18px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: v.gapCritColor, textTransform: 'uppercase', marginBottom: '7px' }}>Critical gaps — must-have skills</div>
              <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#3A3552' }}>{v.gapCrit}</div>
            </div>
            {v.gapSuggestShow && (
<React.Fragment>
              <div style={{ background: 'linear-gradient(135deg,#F5F0FE,#FDF2F8)', borderRadius: '18px', border: '1px solid #EFE4FC', padding: '16px 18px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', marginBottom: '7px' }}>Model suggestion</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#3A3552' }}>{v.gapSuggest}</div>
              </div>
            </React.Fragment>
)}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
