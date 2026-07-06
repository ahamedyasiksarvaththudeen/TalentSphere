import React, { useMemo, useState } from 'react';
import { buildMockData } from '../../../data/mockData.js';
import { initials, avatarGradient } from '../../../utils/uiHelpers.js';

const HOURS = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
const EVENT_COLORS = [
  'linear-gradient(135deg,#7C3AED,#A78BFA)',
  'linear-gradient(135deg,#EC4899,#F472B6)',
  'linear-gradient(135deg,#0EA5E9,#38BDF8)',
  'linear-gradient(135deg,#10B981,#34D399)',
];
const SUGGESTED_SLOTS = ['Thu Jul 9 - 10:00 AM', 'Thu Jul 9 - 2:00 PM', 'Fri Jul 10 - 11:00 AM'];

const toTop = (t) => {
  const [h, m] = t.split(':').map(Number);
  return (h - 9) * 56 + (m / 60) * 56;
};

export default function SchedulingSection() {
  const data = useMemo(() => buildMockData(), []);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [booked, setBooked] = useState({});

  const days = data.sched.map((s) => ({ dow: s.dow, dom: s.dom }));
  const cols = data.sched.map((s, i) => ({
    events: [{ cand: s.cand, type: s.type, top: toTop(s.t), h: 64, bg: EVENT_COLORS[i % 4], click: () => setSelectedIdx(i) }],
  }));

  const selected = data.sched[selectedIdx];
  const panel = [
    { name: selected.who.split(' +')[0], status: 'Confirmed' },
    { name: 'M. Iyer (coordinator)', status: 'Confirmed' },
    { name: 'Panel room B', status: 'Booked' },
  ].map((p) => ({ ...p, ini: initials(p.name), av: avatarGradient(p.name), stColor: '#059669' }));

  const slots = SUGGESTED_SLOTS.map((label, i) => {
    const key = `${selectedIdx}_${i}`;
    const isBooked = !!booked[key];
    return {
      label,
      booked: isBooked,
      notBooked: !isBooked,
      bg: isBooked ? '#F1EBFE' : '#fff',
      br: isBooked ? '#E4D9FA' : 'var(--line)',
      click: () => setBooked((b) => ({ ...b, [key]: true })),
    };
  });

  return (
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
            {days.map((d, i) => (
              <span key={i} style={{ padding: '14px 8px', textAlign: 'center', borderLeft: '1px solid var(--soft)' }}>
                <span style={{ display: 'block', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>{d.dow}</span>
                <span style={{ display: 'block', fontSize: '16px', fontWeight: '800', marginTop: '2px' }}>{d.dom}</span>
              </span>
            ))}
          </div>
          <div style={{ flex: '1', overflowY: 'auto', display: 'grid', gridTemplateColumns: '64px repeat(5,1fr)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {HOURS.map((h) => (
                <span key={h} style={{ height: '56px', fontSize: '10.5px', color: '#9B96B0', textAlign: 'right', paddingRight: '8px', transform: 'translateY(-6px)' }}>{h}</span>
              ))}
            </div>
            {cols.map((col, i) => (
              <div key={i} style={{ position: 'relative', borderLeft: '1px solid var(--soft)' }}>
                {HOURS.map((h) => (
                  <div key={h} style={{ height: '56px', borderBottom: '1px solid #FAF9FD' }}></div>
                ))}
                {col.events.map((ev, ei) => (
                  <div key={ei} onClick={ev.click} style={{ position: 'absolute', left: '4px', right: '4px', top: `${ev.top}px`, height: `${ev.h}px`, background: ev.bg, borderRadius: '11px', padding: '6px 9px', cursor: 'pointer', overflow: 'hidden', transition: 'all .2s', boxShadow: '0 2px 8px rgba(124,58,237,.18)' }} className="hov82">
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff', lineHeight: '1.3' }}>{ev.cand}</div>
                    <div style={{ fontSize: '9.5px', color: 'rgba(255,255,255,.85)' }}>{ev.type}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '20px 22px' }}>
          <div style={{ fontSize: '15px', fontWeight: '700' }}>{selected.cand}</div>
          <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>{selected.type} · {selected.t}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '16px' }}>
            {panel.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 11px', background: 'var(--soft)', borderRadius: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: p.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10px', flex: 'none' }}>{p.ini}</span>
                <span style={{ flex: '1', fontSize: '12.5px', fontWeight: '600' }}>{p.name}</span>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: p.stColor }}>{p.status}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '9px' }}>Suggested slots — all panelists free</div>
            {slots.map((s, i) => (
              <div key={i} onClick={s.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderRadius: '12px', cursor: 'pointer', background: s.bg, border: `1px solid ${s.br}`, marginBottom: '7px', transition: 'all .2s' }} className="hov83">
                <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{s.label}</span>
                {s.booked && <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--good)' }}>Booked ✓</span>}
                {s.notBooked && <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--vio)' }}>Book →</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
