import React from 'react';

export default function ScreeningSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: 'var(--vioSoft,#F1EBFE)', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 07</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Resume screening</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Rubric <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', color: 'var(--vio)' }}>j1-r3</span> · 7 criteria · edited Jun 12</div>
          <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 16px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov18">View rubric</button>
        </div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '270px 1fr 320px', gap: '16px', minHeight: '0', marginTop: '16px' }}>

        
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '14px 10px' }}>
          <div style={{ padding: '2px 10px 10px', fontSize: '13px', fontWeight: '700' }}>Senior Backend Engineer <span style={{ color: 'var(--sub)', fontWeight: '400' }}>· 128</span></div>
          <div style={{ padding: '2px 10px 6px', fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>Awaiting screen · {v.scrNewCount}</div>
          {(v.scrQueueNew || []).map((q, $index) => (
<React.Fragment key={$index}>
            <div onClick={q.click} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', borderRadius: '13px', cursor: 'pointer', background: q.bg, transition: 'all .2s', animation: 'rowIn .4s both', animationDelay: q.dl }} className="hov19">
              <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: q.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flex: 'none' }}>{q.ini}</span>
              <span style={{ flex: '1', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', display: 'block' }}>{q.name}</span>
                <span style={{ fontSize: '11px', color: 'var(--sub)' }}>{q.sub}</span>
              </span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--grad)', animation: 'pulse 2s ease infinite', flex: 'none' }}></span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 10px 6px', fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Screened · {v.scrDoneCount}</div>
          {(v.scrQueueDone || []).map((q, $index) => (
<React.Fragment key={$index}>
            <div onClick={q.click} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', borderRadius: '13px', cursor: 'pointer', background: q.bg, transition: 'all .2s', animation: 'rowIn .4s both', animationDelay: q.dl }} className="hov20">
              <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: q.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flex: 'none' }}>{q.ini}</span>
              <span style={{ flex: '1', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', display: 'block' }}>{q.name}</span>
                <span style={{ fontSize: '11px', color: 'var(--sub)' }}>{q.sub}</span>
              </span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12.5px', fontWeight: '600', color: q.scoreColor }}>{q.score}</span>
            </div>
          </React.Fragment>
))}
        </div>

        
        <div style={{ overflowY: 'auto', minWidth: '0', borderRadius: '20px' }}>
          {v.scrIdle && (
<React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div style={{ width: '440px', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', boxShadow: 'var(--sh)', padding: '32px 34px', textAlign: 'center', animation: 'rowIn .4s both' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'var(--grad)', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(124,58,237,.35)', animation: 'floaty 4s ease-in-out infinite' }}>
                  <svg width="28" height="28" viewBox="0 0 16 16"><path d="M8 2 L9.5 6.5 L14 8 L9.5 9.5 L8 14 L6.5 9.5 L2 8 L6.5 6.5 Z" fill="#fff"></path></svg>
                </div>
                <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: '#9B96B0', marginBottom: '8px' }}>{v.scrSelName} · APPLIED {v.scrSelApplied}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>No screening result yet</div>
                <div style={{ fontSize: '13px', color: 'var(--sub)', lineHeight: '1.6', marginBottom: '20px' }}>The model scores this resume against 7 weighted criteria, quotes its evidence line by line, and says where it's uncertain. Nothing is auto-rejected.</div>
                <button onClick={v.runScreening} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '11px 26px', fontSize: '13.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 22px rgba(124,58,237,.4)', transition: 'all .25s' }} className="hov21">Run AI screening</button>
                <div style={{ fontSize: '11px', color: '#9B96B0', marginTop: '14px' }}>~6s · SCREEN v4.2 · run is logged to Audit</div>
              </div>
            </div>
          </React.Fragment>
)}
          {v.scrRunning && (
<React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div style={{ width: '440px', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', boxShadow: 'var(--shHov)', padding: '28px 32px', animation: 'rowIn .3s both' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>Screening {v.scrSelName}</div>
                  <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12px', color: 'var(--vio)' }}>{v.scrElapsed}</div>
                </div>
                <div style={{ position: 'relative', height: '5px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', top: '0', height: '100%', width: '30%', borderRadius: '999px', background: 'var(--grad)', animation: 'scan 1.1s linear infinite' }}></div>
                </div>
                {(v.scrSteps || []).map((st, $index) => (
<React.Fragment key={$index}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', flex: 'none', background: st.dotBg, border: `2px solid ${st.dotBr}`, animation: st.anim }}></span>
                    <span style={{ fontSize: '13px', color: st.color, flex: '1' }}>{st.label}</span>
                    <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', color: '#9B96B0' }}>{st.time}</span>
                  </div>
                </React.Fragment>
))}
                <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: '#9B96B0', marginTop: '16px' }}>SCREEN v4.2 · rubric j1-r3 · run sc_8f42</div>
              </div>
            </div>
          </React.Fragment>
)}
          {v.scrDone && (
<React.Fragment>
            <div style={{ animation: 'pageIn .35s ease' }}>
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', boxShadow: 'var(--sh)', padding: '22px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ position: 'relative', width: '96px', height: '96px', flex: 'none' }}>
                    <svg width="96" height="96" viewBox="0 0 96 96">
                      <defs><linearGradient id="gsc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7C3AED"></stop><stop offset="100%" stopColor="#EC4899"></stop></linearGradient></defs>
                      <circle cx="48" cy="48" r="40" fill="none" stroke="#F1EBFE" strokeWidth="9"></circle>
                      <circle cx="48" cy="48" r="40" fill="none" stroke="url(#gsc)" strokeWidth="9" strokeLinecap="round" strokeDasharray="251.33" strokeDashoffset={v.scrRing} transform="rotate(-90 48 48)"></circle>
                    </svg>
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: '800', letterSpacing: '-.02em' }}>{v.scrScore}</div>
                  </div>
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.015em' }}>{v.scrSelName}</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '2px' }}>{v.scrSelMeta}</div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '999px', background: v.scrVerdictBg, color: v.scrVerdictFg }}>{v.scrVerdict}</span>
                      <span style={{ fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '999px', background: v.scrStageBg, color: v.scrStageFg }}>{v.scrStage}</span>
                      <span style={{ fontSize: '12px', color: 'var(--sub)', padding: '4px 0' }}>confidence <span style={{ fontFamily: '\'JetBrains Mono\',monospace' }}>{v.scrConf}</span> · {v.scrLowNote}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 'none' }}>
                    <button onClick={v.scrAdvance} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov22">{v.scrAdvLabel}</button>
                    <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 16px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov23">Request human review</button>
                    <button style={{ background: '#fff', border: '1px solid #FECACA', borderRadius: '999px', padding: '8px 16px', fontSize: '12px', fontWeight: '600', color: 'var(--bad)', cursor: 'pointer', transition: 'all .25s' }} className="hov24">Reject</button>
                  </div>
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 46px 96px 1fr 60px', gap: '12px', padding: '12px 20px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
                  <span>Criterion</span><span>Weight</span><span>Score</span><span>Evidence — quoted from resume</span><span style={{ textAlign: 'right' }}>Conf</span>
                </div>
                {(v.scrCriteria || []).map((c, $index) => (
<React.Fragment key={$index}>
                  <div style={{ display: 'grid', gridTemplateColumns: '160px 46px 96px 1fr 60px', gap: '12px', padding: '12px 20px', borderBottom: '1px solid var(--soft)', alignItems: 'start', background: c.bg, transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: c.dl }} className="hov25">
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>{c.name}</span>
                    <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: 'var(--sub)' }}>{c.w}</span>
                    <span>
                      <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '13px', fontWeight: '600' }}>{c.s}</span>
                      <span style={{ display: 'block', width: '64px', height: '5px', borderRadius: '999px', background: 'var(--soft)', marginTop: '5px' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: c.bar }}></span></span>
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#4B4763', lineHeight: '1.55' }}>“{c.ev}”<span style={{ display: 'block', fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: '#9B96B0', marginTop: '3px' }}>{c.src}</span></span>
                    <span style={{ textAlign: 'right', fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11px', color: c.confColor }}>{c.conf}{c.low && (
<React.Fragment><span style={{ display: 'block', fontSize: '8.5px', letterSpacing: '.06em', color: '#B45309' }}>REVIEW</span></React.Fragment>
)}</span>
                  </div>
                </React.Fragment>
))}
                <div style={{ padding: '12px 20px', fontSize: '11.5px', color: '#9B96B0', lineHeight: '1.5' }}>Scores are advisory — advancing or rejecting is always a human action, logged to Audit with this run id.</div>
              </div>
            </div>
          </React.Fragment>
)}
        </div>

        
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
          <div style={{ position: 'sticky', top: '0', height: '5px', background: 'var(--grad)' }}></div>
          {v.scrDone && (
<React.Fragment>
            <div style={{ padding: '16px 20px 6px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', marginBottom: '8px' }}>Why this score</div>
              <div style={{ fontSize: '13px', lineHeight: '1.65', color: '#3A3552' }}>{v.scrRationale}</div>
            </div>
            <div style={{ padding: '14px 20px 6px', marginTop: '8px', borderTop: '1px solid var(--soft)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '10px' }}>Top evidence</div>
              {(v.scrTopEv || []).map((e, $index) => (
<React.Fragment key={$index}>
                <div style={{ background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '14px', padding: '10px 13px', marginBottom: '9px', border: '1px solid #F0E8FB' }}>
                  <div style={{ fontSize: '12.5px', color: '#3A3552', lineHeight: '1.55' }}>“{e.q}”</div>
                  <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '9px', color: 'var(--vio)', marginTop: '5px', letterSpacing: '.06em' }}>{e.tag}</div>
                </div>
              </React.Fragment>
))}
            </div>
            <div style={{ padding: '14px 20px 6px', borderTop: '1px solid var(--soft)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Not visible to the model</div>
              <div style={{ fontSize: '12.5px', color: 'var(--sub)', lineHeight: '1.8' }}>Name · Photo · Pronouns · Date of birth · Street address · School names · Gaps under 6 months</div>
              <div onClick={v.goBias} style={{ fontSize: '12px', color: 'var(--vio)', fontWeight: '600', marginTop: '6px', cursor: 'pointer' }} className="hov26">How masking works →</div>
            </div>
            <div style={{ padding: '14px 20px 20px', borderTop: '1px solid var(--soft)' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Provenance</div>
              {(v.scrModel || []).map((m, $index) => (
<React.Fragment key={$index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3.5px 0', fontSize: '12px' }}>
                  <span style={{ color: 'var(--sub)' }}>{m.k}</span>
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: '#3A3552' }}>{m.v}</span>
                </div>
              </React.Fragment>
))}
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--sub)', flex: '1' }}>Rate this rationale</span>
                <button onClick={v.scrFbUp} style={{ background: v.scrFbUpBg, border: '1px solid var(--line)', borderRadius: '999px', padding: '4px 12px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .2s' }} className="hov27">Useful</button>
                <button onClick={v.scrFbDown} style={{ background: v.scrFbDownBg, border: '1px solid var(--line)', borderRadius: '999px', padding: '4px 12px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .2s' }} className="hov28">Off</button>
              </div>
              {v.scrFbDoneShow && (
<React.Fragment>
                <div style={{ fontSize: '11.5px', color: 'var(--good)', marginTop: '8px', animation: 'rowIn .3s both' }}>Recorded — feeds rubric calibration review.</div>
              </React.Fragment>
)}
            </div>
          </React.Fragment>
)}
          {v.scrNotDone && (
<React.Fragment>
            <div style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', marginBottom: '8px' }}>Why this score</div>
              <div style={{ fontSize: '12.5px', color: '#9B96B0', lineHeight: '1.65' }}>Reasoning appears here after the run — a written rationale, quoted evidence per criterion, and the list of fields the model never sees.</div>
            </div>
          </React.Fragment>
)}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
