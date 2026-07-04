import React from 'react';

export default function SchedulingSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops · 15</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Interview scheduling</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Week of Jul 6 · times shown in your timezone</div>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '64px repeat(5,1fr)', borderBottom: '1px solid var(--soft)', flex: 'none' }}>
            <span></span>
            {(v.schDays || []).map((d, $index) => (
<React.Fragment key={$index}>
              <span style={{ padding: '14px 8px', textAlign: 'center', borderLeft: '1px solid var(--soft)' }}>
                <span style={{ display: 'block', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>{d.dow}</span>
                <span style={{ display: 'block', fontSize: '16px', fontWeight: '800', marginTop: '2px' }}>{d.dom}</span>
              </span>
            </React.Fragment>
))}
          </div>
          <div style={{ flex: '1', overflowY: 'auto', display: 'grid', gridTemplateColumns: '64px repeat(5,1fr)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {(v.schHours || []).map((h, $index) => (
<React.Fragment key={$index}>
                <span style={{ height: '56px', fontSize: '10.5px', color: '#9B96B0', textAlign: 'right', paddingRight: '8px', transform: 'translateY(-6px)' }}>{h}</span>
              </React.Fragment>
))}
            </div>
            {(v.schCols || []).map((col, $index) => (
<React.Fragment key={$index}>
              <div style={{ position: 'relative', borderLeft: '1px solid var(--soft)' }}>
                {(v.schHours || []).map((h, $index) => (
<React.Fragment key={$index}>
                  <div style={{ height: '56px', borderBottom: '1px solid #FAF9FD' }}></div>
                </React.Fragment>
))}
                {(col.events || []).map((ev, $index) => (
<React.Fragment key={$index}>
                  <div onClick={ev.click} style={{ position: 'absolute', left: '4px', right: '4px', top: `${ev.top}px`, height: `${ev.h}px`, background: ev.bg, borderRadius: '11px', padding: '6px 9px', cursor: 'pointer', overflow: 'hidden', transition: 'all .2s', boxShadow: '0 2px 8px rgba(124,58,237,.18)' }} className="hov82">
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff', lineHeight: '1.3' }}>{ev.cand}</div>
                    <div style={{ fontSize: '9.5px', color: 'rgba(255,255,255,.85)' }}>{ev.type}</div>
                  </div>
                </React.Fragment>
))}
              </div>
            </React.Fragment>
))}
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>{v.schSelCand}</div>
          <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>{v.schSelType}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
            {(v.schPanel || []).map((p, $index) => (
<React.Fragment key={$index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 11px', background: 'var(--soft)', borderRadius: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: p.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10px', flex: 'none' }}>{p.ini}</span>
                <span style={{ flex: '1', fontSize: '12.5px', fontWeight: '600' }}>{p.name}</span>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: p.stColor }}>{p.status}</span>
              </div>
            </React.Fragment>
))}
          </div>
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '9px' }}>Suggested slots — all panelists free</div>
            {(v.schSlots || []).map((s, $index) => (
<React.Fragment key={$index}>
              <div onClick={s.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderRadius: '12px', cursor: 'pointer', background: s.bg, border: `1px solid ${s.br}`, marginBottom: '7px', transition: 'all .2s' }} className="hov83">
                <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{s.label}</span>
                {s.booked && (
<React.Fragment><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--good)' }}>Booked ✓</span></React.Fragment>
)}
                {s.notBooked && (
<React.Fragment><span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--vio)' }}>Book →</span></React.Fragment>
)}
              </div>
            </React.Fragment>
))}
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
