import React, { useMemo, useState } from 'react';
import { buildMockData } from '../../../data/mockData.js';
import { initials, avatarGradient, useCountUp } from '../../../utils/uiHelpers.js';

const CANDIDATE_IDS = ['c1', 'c2', 'c3', 'c4', 'c7'];
const MONO_FONT = "'JetBrains Mono',monospace";

export default function SkillGapSection() {
  const data = useMemo(() => buildMockData(), []);
  const [selectedId, setSelectedId] = useState('c3');
  const cnt = useCountUp([selectedId]);

  const coverage = (id) => {
    const levels = data.gapLv[id];
    let got = 0;
    let required = 0;
    data.gapSkills.forEach(([, req], i) => {
      required += req;
      got += Math.min(levels[i], req);
    });
    return Math.round((got / required) * 100);
  };

  const candidateList = CANDIDATE_IDS.map((id) => {
    const c = data.cands.find((x) => x.id === id);
    const active = id === selectedId;
    return {
      id,
      name: c.name,
      pct: `${coverage(id)}%`,
      bg: active ? '#F1EBFE' : 'transparent',
      ini: initials(c.name),
      av: avatarGradient(c.name),
    };
  });

  const levels = data.gapLv[selectedId];
  const notes = data.gapNotes[selectedId] || {};
  const rows = data.gapSkills.map(([skill, required], i) => {
    const have = levels[i];
    const gap = required - have;
    const boxes = [1, 2, 3, 4, 5].map((n) => ({
      bg: n <= have ? 'var(--grad)' : n <= required ? '#fff' : 'var(--soft)',
      br: n <= required ? (n <= have ? '1px solid transparent' : '1.5px dashed #F59E0B') : '1px solid var(--line)',
    }));
    return {
      skill,
      boxes,
      gapN: gap > 0 ? `-${gap}` : '',
      note: notes[i] || '',
      must: i < 6 ? 'MUST' : 'NICE',
      mustColor: i < 6 ? '#7C3AED' : '#9B96B0',
      mustBg: i < 6 ? '#F1EBFE' : 'var(--soft)',
      dl: `${i * 0.04}s`,
    };
  });

  const candidate = data.cands.find((x) => x.id === selectedId);
  const cov = coverage(selectedId);
  const criticalGaps = rows
    .filter((r, i) => data.gapSkills[i][1] - levels[i] > 0 && i < 6)
    .map((r) => r.skill);

  const suggestionShown = selectedId === 'c3' || selectedId === 'c7';
  const suggestion =
    selectedId === 'c3'
      ? 'Adjacent fit: Staff Platform Architect (draft req) - coverage rises to 91% under that rubric, where orchestration is weighted lower.'
      : selectedId === 'c7'
      ? 'Ramp plan: Go depth is the only structural gap. Comparable Rust experience suggests a 4-6 week ramp - flag for the hiring manager.'
      : '';

  const gapPct = Math.round(cov * cnt);
  const gapRing = 163.4 * (1 - (cov / 100) * cnt);

  return (
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
          {candidateList.map((g) => (
            <div
              key={g.id}
              onClick={() => setSelectedId(g.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '13px', cursor: 'pointer', background: g.bg, transition: 'all .2s' }}
              className="hov33"
            >
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: g.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '10.5px', flex: 'none' }}>{g.ini}</span>
              <span style={{ flex: '1', fontSize: '13px', fontWeight: '600' }}>{g.name}</span>
              <span style={{ fontFamily: MONO_FONT, fontSize: '11.5px', color: 'var(--sub)' }}>{g.pct}</span>
            </div>
          ))}
          <div style={{ margin: '14px 8px 4px', padding: '12px 14px', background: 'linear-gradient(135deg,#F8F5FE,#FDF4F9)', borderRadius: '14px', border: '1px solid #F0E8FB', fontSize: '11.5px', color: 'var(--sub)', lineHeight: '1.6' }}>Coverage = sum of min(has, required) / sum of required. Levels 1-5 are inferred from evidence density, not keyword counts.</div>
        </div>
        <div style={{ overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '16px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '46px', height: '46px', borderRadius: '50%', background: avatarGradient(candidate.name), color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '15px' }}>{initials(candidate.name)}</span>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>{candidate.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)' }}>{candidate.title} at {candidate.company}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', width: '62px', height: '62px' }}>
                <svg width="62" height="62" viewBox="0 0 62 62">
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#F1EBFE" strokeWidth="7"></circle>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="url(#gsc2)" strokeWidth="7" strokeLinecap="round" strokeDasharray="163.4" strokeDashoffset={gapRing} transform="rotate(-90 31 31)"></circle>
                  <defs><linearGradient id="gsc2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7C3AED"></stop><stop offset="100%" stopColor="#EC4899"></stop></linearGradient></defs>
                </svg>
                <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800' }}>{gapPct}%</div>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--sub)', width: '86px', lineHeight: '1.4' }}>requirement coverage</div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '48px 150px 170px 60px 1fr', gap: '12px', padding: '12px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
              <span></span><span>Skill</span><span>Level 1-5</span><span>Gap</span><span>Note</span>
            </div>
            {rows.map((r, i) => (
              <div key={r.skill} style={{ display: 'grid', gridTemplateColumns: '48px 150px 170px 60px 1fr', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: r.dl }} className="hov34">
                <span style={{ fontFamily: MONO_FONT, fontSize: '8.5px', letterSpacing: '.07em', fontWeight: '600', color: r.mustColor, background: r.mustBg, padding: '3px 7px', borderRadius: '999px', textAlign: 'center' }}>{r.must}</span>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>{r.skill}</span>
                <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {r.boxes.map((b, bi) => (
                    <span key={bi} style={{ width: '17px', height: '17px', borderRadius: '6px', background: b.bg, border: b.br, transition: 'all .3s' }}></span>
                  ))}
                </span>
                <span style={{ fontFamily: MONO_FONT, fontSize: '12.5px', fontWeight: '700', color: '#B45309' }}>{r.gapN}</span>
                <span style={{ fontSize: '12px', color: 'var(--sub)', lineHeight: '1.5' }}>{r.note}</span>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '20px', padding: '12px 22px', fontSize: '11px', color: 'var(--sub)', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: 'var(--grad)' }}></span>demonstrated</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: '#fff', border: '1.5px dashed #F59E0B' }}></span>required, not evidenced</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '5px', background: 'var(--soft)', border: '1px solid var(--line)' }}></span>beyond requirement</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '14px', paddingBottom: '6px' }}>
            <div style={{ background: '#fff', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '16px 18px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: criticalGaps.length ? '#B45309' : '#059669', textTransform: 'uppercase', marginBottom: '7px' }}>Critical gaps - must-have skills</div>
              <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#3A3552' }}>{criticalGaps.length ? criticalGaps.join(' · ') : 'None - all must-haves at or above required level'}</div>
            </div>
            {suggestionShown && (
              <div style={{ background: 'linear-gradient(135deg,#F5F0FE,#FDF2F8)', borderRadius: '18px', border: '1px solid #EFE4FC', padding: '16px 18px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '.12em', fontWeight: '700', color: 'var(--vio)', textTransform: 'uppercase', marginBottom: '7px' }}>Model suggestion</div>
                <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#3A3552' }}>{suggestion}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
