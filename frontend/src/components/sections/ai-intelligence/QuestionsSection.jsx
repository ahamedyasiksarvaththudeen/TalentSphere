import React from 'react';

export default function QuestionsSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', background: '#F1EBFE', padding: '4px 12px', borderRadius: '999px' }}>AI Intelligence · 12</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Interview question generator</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Questions are drafts for the interviewer — every one carries its reason</div>
      </div>
      <div style={{ maxWidth: '880px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '16px 20px', display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
          <div><div style={{ fontSize: '10px', letterSpacing: '.08em', color: '#9B96B0', fontWeight: '700', textTransform: 'uppercase', marginBottom: '3px' }}>Req</div><div style={{ fontSize: '13px', fontWeight: '600' }}>Senior Backend Engineer</div></div>
          <div><div style={{ fontSize: '10px', letterSpacing: '.08em', color: '#9B96B0', fontWeight: '700', textTransform: 'uppercase', marginBottom: '3px' }}>Candidate</div><div style={{ fontSize: '13px', fontWeight: '600' }}>Priya Raghavan</div></div>
          <div><div style={{ fontSize: '10px', letterSpacing: '.08em', color: '#9B96B0', fontWeight: '700', textTransform: 'uppercase', marginBottom: '3px' }}>Stage</div><div style={{ fontSize: '13px', fontWeight: '600' }}>System design panel · 90 min</div></div>
          <div style={{ marginLeft: 'auto' }}>
            {v.qgIdle && (
<React.Fragment>
              <button onClick={v.qgRun} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '10px 22px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 22px rgba(124,58,237,.4)', transition: 'all .25s' }} className="hov40">Generate questions</button>
            </React.Fragment>
)}
            {v.qgDone && (
<React.Fragment>
              <button onClick={v.qgRun} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov41">Regenerate all</button>
            </React.Fragment>
)}
          </div>
        </div>
        {v.qgRunning && (
<React.Fragment>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--shHov)', padding: '24px 26px', marginTop: '16px', animation: 'rowIn .3s both' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
              <div style={{ fontSize: '15px', fontWeight: '700' }}>Drafting question set</div>
              <div style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: 'var(--vio)' }}>{v.qgElapsed}</div>
            </div>
            <div style={{ position: 'relative', height: '5px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden', marginBottom: '16px' }}><div style={{ position: 'absolute', top: '0', height: '100%', width: '30%', borderRadius: '999px', background: 'var(--grad)', animation: 'scan 1.1s linear infinite' }}></div></div>
            {(v.qgSteps || []).map((st, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '5px 0' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', flex: 'none', background: st.dotBg, border: `2px solid ${st.dotBr}`, animation: st.anim }}></span>
                <span style={{ fontSize: '13px', color: st.color }}>{st.label}</span>
              </div>
            </React.Fragment>
))}
          </div>
        </React.Fragment>
)}
        {v.qgDone && (
<React.Fragment>
          <div style={{ animation: 'pageIn .35s ease' }}>
          {(v.qgGroups || []).map((g, $index) => (
<React.Fragment key={$index}>
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '10px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700' }}>{g.title}</span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', color: 'var(--vio)', background: '#F1EBFE', padding: '2px 9px', borderRadius: '999px' }}>{g.tag}</span>
              </div>
              {(g.qs || []).map((q, $index) => (
<React.Fragment key={$index}>
                <div style={{ background: '#fff', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginBottom: '12px', overflow: 'hidden', transition: 'all .25s', animation: 'rowIn .45s both', animationDelay: q.dl }} className="hov42">
                  <div style={{ padding: '15px 18px 4px' }}>
                    {q.editing && (
<React.Fragment>
                      <textarea onChange={q.save} defaultvalue={q.text} style={{ width: '100%', minHeight: '58px', fontSize: '13.5px', lineHeight: '1.55', border: '1.5px solid #C9BDEB', borderRadius: '12px', padding: '10px 12px', resize: 'vertical', color: 'var(--ink)', background: '#FAF8FE', outline: 'none' }}></textarea>
                    </React.Fragment>
)}
                    {q.notEditing && (
<React.Fragment>
                      <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--ink)' }}>{q.text}</div>
                    </React.Fragment>
)}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', marginTop: '10px', padding: '9px 12px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '12px', border: '1px solid #F0E8FB' }}>
                      <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '9px', color: 'var(--vio)', letterSpacing: '.08em', marginTop: '2px', flex: 'none', fontWeight: '600' }}>WHY</span>
                      <span style={{ fontSize: '12px', color: '#4B4763', lineHeight: '1.55' }}>{q.why}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '7px', padding: '10px 18px 14px' }}>
                    <button onClick={q.edit} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '4px 13px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .2s' }} className="hov43">{q.editLabel}</button>
                    <button onClick={q.regen} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '4px 13px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .2s' }} className="hov44">Regenerate</button>
                    <button onClick={q.add} style={{ background: q.addBg, border: `1px solid ${q.addBr}`, borderRadius: '999px', padding: '4px 13px', fontSize: '11.5px', fontWeight: '600', cursor: 'pointer', color: q.addFg, transition: 'all .2s' }} className="hov45">{q.addLabel}</button>
                  </div>
                </div>
              </React.Fragment>
))}
            </div>
          </React.Fragment>
))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px', padding: '14px 18px', background: '#fff', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: 'var(--sh)' }}>
            <span style={{ fontSize: '12.5px', color: 'var(--sub)' }}>{v.qgAddedCount} question(s) added to the panel scorecard — interviewers see the WHY line too.</span>
            <button onClick={v.goFeedback} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov46">Send to scorecard</button>
          </div>
          </div>
        </React.Fragment>
)}
      </div>
    </div>
    </React.Fragment>
  );
}
