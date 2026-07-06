import React, { useMemo, useState } from 'react';
import { buildMockData } from '../../../data/mockData.js';

const STATUS_COLORS = {
  Sent: ['#EEF2FF', '#4F46E5'],
  Accepted: ['#D1FAE5', '#047857'],
  Negotiating: ['#FEF3C7', '#B45309'],
  Declined: ['#FEE2E2', '#B91C1C'],
};
const ONBOARDING_ITEMS = [
  ['eq', 'Equipment shipped'],
  ['ac', 'Accounts provisioned'],
  ['bd', 'Buddy assigned'],
  ['wk', 'Welcome kit sent'],
  ['i9', 'I-9 / compliance docs signed'],
];
const DEFAULT_ONBOARDING = { eq: true, ac: true, bd: true, wk: false, i9: false };
const MONO_FONT = "'JetBrains Mono',monospace";

export default function OffersSection() {
  const data = useMemo(() => buildMockData(), []);
  const [selectedId, setSelectedId] = useState('o1');
  const [onboarding, setOnboarding] = useState(DEFAULT_ONBOARDING);

  const list = data.offers.map((o) => {
    const active = selectedId === o.id;
    const [bg, fg] = STATUS_COLORS[o.status];
    return {
      id: o.id,
      cand: o.cand,
      job: o.job,
      code: o.code,
      status: o.status,
      stBg: bg,
      stFg: fg,
      click: () => setSelectedId(o.id),
      border: active ? '1.5px solid #C9BDEB' : '1px solid var(--line)',
      sh: active ? 'var(--shHov)' : 'var(--sh)',
    };
  });

  const offer = data.offers.find((x) => x.id === selectedId) || data.offers[0];
  const [stBg, stFg] = STATUS_COLORS[offer.status];
  const probShow = offer.prob !== '—';
  const probWidth = probShow ? Math.round(parseFloat(offer.prob) * 100) : 0;
  const chain = offer.chain.map(([label, date, st]) => ({
    label,
    date,
    dotBg: st === 'done' ? '#059669' : st === 'warn' ? '#B45309' : st === 'fail' ? '#DC2626' : '#D9D4E8',
    showCheck: st === 'done',
  }));
  const events = offer.events.map(([t, what]) => ({ t, what }));

  const onboardingRows = ONBOARDING_ITEMS.map(([key, label]) => {
    const checked = onboarding[key];
    return {
      key,
      label,
      checked,
      bg: checked ? 'var(--grad)' : '#fff',
      br: checked ? 'transparent' : 'var(--line)',
      fg: checked ? '#231F35' : '#9B96B0',
      click: () => setOnboarding((ob) => ({ ...ob, [key]: !ob[key] })),
    };
  });

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops · 17</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Offers & onboarding</div>
        </div>
        <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov86">New offer</button>
      </div>
      <div style={{ flex: '1', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '16px', minHeight: '0', marginTop: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
          {list.map((o) => (
            <div key={o.id} onClick={o.click} style={{ background: '#fff', borderRadius: '18px', border: o.border, boxShadow: o.sh, padding: '14px 16px', cursor: 'pointer', transition: 'all .25s' }} className="hov87">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>{o.cand}</span>
                <span style={{ fontSize: '10.5px', fontWeight: '700', padding: '3px 10px', borderRadius: '999px', background: o.stBg, color: o.stFg }}>{o.status}</span>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)', marginTop: '3px' }}>{o.job}</div>
              <div style={{ fontFamily: MONO_FONT, fontSize: '10.5px', color: '#9B96B0', marginTop: '6px' }}>{o.code}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', overflowY: 'auto', padding: '22px 26px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700' }}>{offer.cand}</div>
              <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '2px' }}>{offer.job} · {offer.code}</div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: '700', padding: '5px 14px', borderRadius: '999px', background: stBg, color: stFg }}>{offer.status}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginTop: '18px' }}>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Base</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{offer.base}</div></div>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Equity</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{offer.equity}</div></div>
            <div style={{ background: 'var(--soft)', borderRadius: '14px', padding: '12px 15px' }}><div style={{ fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>Bonus</div><div style={{ fontSize: '15px', fontWeight: '700', marginTop: '3px' }}>{offer.bonus}</div></div>
          </div>
          {probShow && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '14px', border: '1px solid #F0E8FB', padding: '12px 16px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '.1em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase' }}>Accept model</span>
              <span style={{ flex: '1', height: '6px', borderRadius: '999px', background: '#fff' }}><span style={{ display: 'block', height: '100%', borderRadius: '999px', background: 'var(--grad)', width: `${probWidth}%` }}></span></span>
              <span style={{ fontFamily: MONO_FONT, fontSize: '13px', fontWeight: '700', color: 'var(--vio)' }}>{offer.prob}</span>
            </div>
          )}
          <div style={{ marginTop: '18px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '10px' }}>Approval chain</div>
            {chain.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: c.dotBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  {c.showCheck && (
                    <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.7 L9.5 3.3" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                </span>
                <span style={{ flex: '1', fontSize: '12.5px', fontWeight: '600' }}>{c.label}</span>
                <span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{c.date}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '9px' }}>Onboarding checklist</div>
            {onboardingRows.map((c) => (
              <div key={c.key} onClick={c.click} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '8px 0', cursor: 'pointer' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: c.bg, border: `1.5px solid ${c.br}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'all .2s' }}>
                  {c.checked && (
                    <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6.2 L5 8.7 L9.5 3.3" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: '500', color: c.fg }}>{c.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.11em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', marginBottom: '8px' }}>Timeline</div>
            {events.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '5px 0', fontSize: '12px' }}>
                <span style={{ fontFamily: MONO_FONT, color: '#9B96B0', width: '110px', flex: 'none' }}>{e.t}</span>
                <span style={{ color: '#4B4763' }}>{e.what}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
