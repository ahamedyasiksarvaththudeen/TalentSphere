import React from 'react';

export default function HomeSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '26px 32px 44px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '26px', fontWeight: '700', letterSpacing: '-.02em' }}>Good morning, Rachel</div>
          <div style={{ fontSize: '14px', color: 'var(--sub)', marginTop: '3px' }}>Thursday, July 3 — here's where hiring stands today.</div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={v.goJobs} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 6px 18px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov8">New requisition</button>
          <button onClick={v.goAdmin} style={{ background: '#fff', color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: '999px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', transition: 'all .25s' }} className="hov9">Invite teammate</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '24px' }}>
        {(v.homeStats || []).map((st, $index) => (
<React.Fragment key={$index}>
          <div onClick={st.click} style={{ background: '#fff', borderRadius: '20px', padding: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', cursor: 'pointer', transition: 'all .3s', animation: 'rowIn .5s both', animationDelay: st.dl }} className="hov10">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: '38px', height: '38px', borderRadius: '12px', background: st.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{st.icon}</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: st.deltaColor, background: st.deltaBg, padding: '3px 9px', borderRadius: '999px' }}>{st.delta}</span>
            </div>
            <div style={{ fontSize: '30px', fontWeight: '800', letterSpacing: '-.02em', marginTop: '14px' }}>{st.v}</div>
            <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '1px' }}>{st.k}</div>
          </div>
        </React.Fragment>
))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ borderRadius: '24px', background: 'var(--grad)', padding: '24px 26px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 14px 38px rgba(124,58,237,.35)', animation: 'rowIn .5s both', animationDelay: '.15s' }}>
          <div style={{ position: 'absolute', top: '-70px', right: '-60px', width: '230px', height: '230px', borderRadius: '50%', border: '36px solid rgba(255,255,255,.09)', animation: 'floaty 7s ease-in-out infinite', animationPlayState: 'var(--blobPlay,running)' }}></div>
          <div style={{ position: 'absolute', bottom: '-90px', right: '80px', width: '180px', height: '180px', borderRadius: '50%', border: '26px solid rgba(255,255,255,.07)', animation: 'floaty 9s ease-in-out infinite', animationPlayState: 'var(--blobPlay,running)' }}></div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '11px', letterSpacing: '.14em', fontWeight: '700', textTransform: 'uppercase', opacity: '.85' }}>AI daily brief</div>
            <div style={{ fontSize: '19px', fontWeight: '700', marginTop: '6px', maxWidth: '420px', lineHeight: '1.35' }}>3 actions today with the biggest impact on time-to-hire</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
              {(v.homeBrief || []).map((b, $index) => (
<React.Fragment key={$index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,.14)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,.22)', borderRadius: '14px', padding: '11px 14px', transition: 'all .25s' }} className="hov11">
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10px', fontWeight: '600', background: 'rgba(255,255,255,.25)', borderRadius: '7px', padding: '3px 7px', flex: 'none' }}>{b.n}</span>
                  <span style={{ flex: '1', fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>{b.t}</span>
                  <button onClick={b.click} style={{ background: '#fff', color: 'var(--vio)', border: 'none', borderRadius: '999px', padding: '6px 14px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', flex: 'none', transition: 'all .2s' }} className="hov12">Go</button>
                </div>
              </React.Fragment>
))}
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px', animation: 'rowIn .5s both', animationDelay: '.2s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: '15px', fontWeight: '700' }}>Pipeline snapshot</div>
            <span onClick={v.goPipeline} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--vio)', cursor: 'pointer' }} className="hov13">Open board</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {(v.homeFunnel || []).map((f, $index) => (
<React.Fragment key={$index}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '5px' }}>
                  <span style={{ fontWeight: '600', color: '#3A3552' }}>{f.k}</span>
                  <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '11.5px', color: 'var(--sub)' }}>{f.v}</span>
                </div>
                <div style={{ height: '9px', borderRadius: '999px', background: 'var(--soft)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: '999px', background: 'var(--grad)', width: f.w, transition: 'width 1s cubic-bezier(.22,1,.36,1)' }}></div>
                </div>
              </div>
            </React.Fragment>
))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px', animation: 'rowIn .5s both', animationDelay: '.25s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700' }}>Recent activity</div>
            <span onClick={v.goAudit} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--vio)', cursor: 'pointer' }} className="hov14">Full audit log</span>
          </div>
          {(v.homeActivity || []).map((a, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 8px', borderRadius: '12px', transition: 'background .2s' }} className="hov15">
              <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: a.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flex: 'none' }}>{a.ini}</span>
              <span style={{ flex: '1', minWidth: '0' }}>
                <span style={{ fontSize: '13px', display: 'block', lineHeight: '1.4' }}>{a.what}</span>
                <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{a.meta}</span>
              </span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: '#9B96B0', flex: 'none' }}>{a.t}</span>
            </div>
          </React.Fragment>
))}
        </div>
        <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '20px 22px', animation: 'rowIn .5s both', animationDelay: '.3s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700' }}>Upcoming interviews</div>
            <span onClick={v.goSched} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--vio)', cursor: 'pointer' }} className="hov16">Scheduler</span>
          </div>
          {(v.homeUpcoming || []).map((u, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 8px', borderRadius: '12px', transition: 'background .2s' }} className="hov17">
              <span style={{ width: '42px', flex: 'none', textAlign: 'center', background: 'var(--vioSoft)', borderRadius: '10px', padding: '5px 0' }}>
                <span style={{ display: 'block', fontSize: '9.5px', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>{u.dow}</span>
                <span style={{ display: 'block', fontSize: '15px', fontWeight: '800', color: 'var(--vio)' }}>{u.dom}</span>
              </span>
              <span style={{ flex: '1', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', display: 'block' }}>{u.cand}</span>
                <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{u.type} · {u.who}</span>
              </span>
              <span style={{ fontFamily: '\'JetBrains Mono\',monospace', fontSize: '10.5px', color: '#9B96B0', flex: 'none' }}>{u.t}</span>
            </div>
          </React.Fragment>
))}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
