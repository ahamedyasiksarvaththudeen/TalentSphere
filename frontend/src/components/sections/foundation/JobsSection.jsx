import React from 'react';

export default function JobsSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Foundation · 03</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Job requirement management</div>
          <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '5px', maxWidth: '560px', lineHeight: '1.5' }}>Create and manage job title, department, location, experience, salary, required/optional skills, responsibilities, qualification, vacancy count, priority, JD document, and job status.</div>
        </div>
        <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov61">New requisition</button>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '4px' }}>
          {(v.jbList || []).map((j, $index) => (
<React.Fragment key={$index}>
            <div onClick={j.click} style={{ background: '#fff', borderRadius: '18px', border: j.border, boxShadow: j.sh, padding: '15px 18px', cursor: 'pointer', transition: 'all .25s', animation: 'rowIn .45s both', animationDelay: j.dl }} className="hov62">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.35' }}>{j.title}</span>
                <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px', background: j.stBg, color: j.stFg, flex: 'none' }}>{j.status}</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '4px' }}>{j.team} · {j.level} · {j.loc}</div>
              <div style={{ display: 'flex', gap: '14px', marginTop: '10px', fontSize: '11.5px', color: '#4B4763' }}>
                <span><span style={{ fontWeight: '700' }}>{j.n}</span> applicants</span>
                <span>open <span style={{ fontWeight: '700' }}>{j.open}</span></span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: 'var(--vio)' }}>{j.rubric}</span>
              </div>
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto' }}>
          <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--soft)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '19px', fontWeight: '700', letterSpacing: '-.015em' }}>{v.jbTitle}</div>
                <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '3px' }}>{v.jbMeta}</div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '5px 11px', borderRadius: '999px', background: v.jbPrBg, color: v.jbPrFg }}>{v.jbPriority} priority</span>
              <span style={{ position: 'relative' }}>
                <span onClick={v.jbStDd} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '12.5px', fontWeight: '700', borderRadius: '999px', padding: '7px 12px 7px 16px', cursor: 'pointer', background: v.jbStBg, color: v.jbStFg, transition: 'all .2s' }}>
                  {v.jbStatus}
                  <svg width="9" height="9" viewBox="0 0 10 10" style={{ transition: 'transform .25s', transform: v.jbStRot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                {v.jbStOpen && (
<React.Fragment>
                  <span style={{ position: 'absolute', top: 'calc(100% + 6px)', right: '0', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '6px', minWidth: '150px', zIndex: '50', animation: 'ddIn .18s ease', display: 'block' }}>
                    {(v.jbStOpts || []).map((o, $index) => (
<React.Fragment key={$index}>
                      <span onClick={o.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '12.5px', fontWeight: o.fw, transition: 'background .15s' }} className="hov63">{o.label}<span style={{ color: 'var(--vio)', fontWeight: '700' }}>{o.check}</span></span>
                    </React.Fragment>
))}
                  </span>
                </React.Fragment>
)}
              </span>
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginTop: '16px' }}>
              {(v.jbFacts || []).map((f, $index) => (
<React.Fragment key={$index}>
                <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '11px 14px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>{f.k}</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '700', marginTop: '3px' }}>{f.v}</div>
                </div>
              </React.Fragment>
))}
            </div>
          </div>
          <div style={{ padding: '18px 24px 8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Structured requirements — rubric {v.jbRubric}</div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)' }}>weights drive screening & matching</div>
            </div>
            {(v.jbCrit || []).map((c, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'grid', gridTemplateColumns: '190px 1fr 50px', gap: '14px', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid var(--soft)', animation: 'rowIn .4s both', animationDelay: c.dl }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{c.name}</span>
                <span style={{ height: '7px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: c.w, transition: 'width .8s cubic-bezier(.22,1,.36,1)' }}></span></span>
                <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '12px', fontWeight: '600', color: 'var(--vio)', textAlign: 'right' }}>{c.wl}</span>
              </div>
            </React.Fragment>
))}
          </div>
          <div style={{ padding: '14px 24px 8px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '10px' }}>Skill requirements — level 1–5</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {(v.jbSkills || []).map((s, $index) => (
<React.Fragment key={$index}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '12px', fontWeight: '600', padding: '6px 13px', background: s.bg, color: s.fg, borderRadius: '999px', border: `1px solid ${s.br}` }}>{s.name}<span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', opacity: '.75' }}>L{s.lv} · {s.req}</span></span>
              </React.Fragment>
))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', padding: '18px 24px 4px' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Responsibilities</div>
              {(v.jbResp || []).map((r, $index) => (
<React.Fragment key={$index}>
                <div style={{ fontSize: '12.5px', color: '#4B4763', padding: '5px 0', animation: 'rowIn .4s both', animationDelay: r.dl }}>• {r.s}</div>
              </React.Fragment>
))}
            </div>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Qualification</div>
              {(v.jbQual || []).map((q, $index) => (
<React.Fragment key={$index}>
                <div style={{ fontSize: '12.5px', color: '#4B4763', padding: '5px 0', animation: 'rowIn .4s both', animationDelay: q.dl }}>• {q.s}</div>
              </React.Fragment>
))}
            </div>
          </div>
          <div style={{ padding: '16px 24px 4px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Job description document</div>
            {v.jbJdShow && (
<React.Fragment>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--soft)', borderRadius: '12px', padding: '10px 14px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{v.jbJdFile}</span>
                <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{v.jbJdUploaded}</span>
                <span style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: '700', color: 'var(--vio)', cursor: 'pointer' }}>View</span>
              </div>
            </React.Fragment>
)}
          </div>
          <div style={{ display: 'flex', gap: '10px', padding: '18px 24px 22px' }}>
            <button onClick={v.goScreening} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov64">Open screening queue</button>
            <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '9px 17px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov65">Edit rubric</button>
            <button style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '9px 17px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov66">View description</button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
