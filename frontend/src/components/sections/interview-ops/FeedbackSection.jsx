import React, { useState } from 'react';
import { getCurrentUser } from '../../../auth/authStore.js';
import { addRecord } from '../../../auth/interviewRecordsStore.js';

const CANDIDATE = 'Priya Raghavan';
const INTERVIEW_TYPE = 'System design panel';

const CRITERIA = [
  ['System design depth', 'Decomposition, tradeoffs, and scale reasoning'],
  ['Coding fluency', 'Correctness and clarity under time pressure'],
  ['Communication', 'Clarity explaining decisions to the panel'],
  ['Collaboration signal', 'How they responded to pushback and hints'],
];
const RATING_OPTIONS = ['Strong no', 'Lean no', 'Lean yes', 'Strong yes'];
const RECOMMENDATION_OPTIONS = ['Strong no hire', 'No hire', 'Hire', 'Strong hire'];
const AI_QUESTIONS = [
  'Your resume mentions mentoring 4 engineers — walk me through one you grew, start to finish.',
  'Pick the design doc you’re proudest of. What was the strongest pushback, and what did the final version concede?',
];

export default function FeedbackSection() {
  const [ratings, setRatings] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const criteria = CRITERIA.map(([label, desc], i) => ({
    label,
    desc,
    opts: RATING_OPTIONS.map((opt, oi) => {
      const active = ratings[i] === oi;
      return {
        label: opt,
        click: () => setRatings((r) => ({ ...r, [i]: oi })),
        br: active ? '#7C3AED' : 'var(--line)',
        bg: active ? (oi < 2 ? '#FEE2E2' : '#D1FAE5') : '#fff',
        fg: active ? (oi < 2 ? '#B91C1C' : '#047857') : '#4B4763',
      };
    }),
  }));

  const recOpts = RECOMMENDATION_OPTIONS.map((opt, i) => {
    const active = recommendation === i;
    return {
      label: opt,
      click: () => setRecommendation(i),
      br: active ? '#7C3AED' : 'var(--line)',
      bg: active ? 'var(--grad)' : '#fff',
      fg: active ? '#fff' : '#4B4763',
    };
  });

  const handleSubmit = () => {
    if (submitted) return;
    const currentUser = getCurrentUser();
    const criteriaSummary = CRITERIA.map(([label], i) =>
      ratings[i] != null ? `${label}: ${RATING_OPTIONS[ratings[i]]}` : `${label}: (not rated)`
    ).join(' | ');
    addRecord({
      candidate: CANDIDATE,
      interviewType: INTERVIEW_TYPE,
      recommendation: recommendation != null ? RECOMMENDATION_OPTIONS[recommendation] : 'Not recorded',
      notes: `${notes ? notes + '\n\n' : ''}Criteria: ${criteriaSummary}`,
      submittedBy: currentUser ? currentUser.name : 'Unknown HR user',
      submittedByUsername: currentUser ? currentUser.username : null,
    });
    setSubmitted(true);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops · 16</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Interview feedback & scorecards</div>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--sub)' }}>Priya Raghavan · system design panel · Jul 6</div>
      </div>
      <div style={{ flex: '1', overflowY: 'auto', marginTop: '16px' }}>
        <div style={{ maxWidth: '760px', background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '24px 26px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {criteria.map((c) => (
              <div key={c.label}>
                <div style={{ fontSize: '13.5px', fontWeight: '700' }}>{c.label}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--sub)', marginTop: '2px' }}>{c.desc}</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '9px' }}>
                  {c.opts.map((o) => (
                    <button key={o.label} onClick={o.click} style={{ flex: '1', border: `1.5px solid ${o.br}`, background: o.bg, color: o.fg, borderRadius: '12px', padding: '10px 0', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', transition: 'all .2s' }} className="hov84">{o.label}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid var(--soft)' }}>
            <div style={{ fontSize: '13.5px', fontWeight: '700' }}>AI-generated questions asked</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '9px' }}>
              {AI_QUESTIONS.map((q, i) => (
                <div key={i} style={{ background: 'var(--soft)', borderRadius: '12px', padding: '10px 13px', fontSize: '12.5px', lineHeight: '1.55' }}>{q}</div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '13.5px', fontWeight: '700', marginBottom: '8px' }}>Notes</div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What stood out? Be specific -- quote what they said."
              style={{ width: '100%', minHeight: '90px', border: '1px solid var(--line)', borderRadius: '14px', padding: '12px 14px', fontSize: '13px', lineHeight: '1.55', resize: 'vertical', outline: 'none', transition: 'border-color .2s' }}
              className="foc1"
            ></textarea>
          </div>
          <div style={{ marginTop: '18px' }}>
            <div style={{ fontSize: '13.5px', fontWeight: '700', marginBottom: '9px' }}>Overall recommendation</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {recOpts.map((r) => (
                <button key={r.label} onClick={r.click} style={{ flex: '1', border: `1.5px solid ${r.br}`, background: r.bg, color: r.fg, borderRadius: '12px', padding: '11px 0', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', transition: 'all .2s' }}>{r.label}</button>
              ))}
            </div>
          </div>
          <button onClick={handleSubmit} style={{ marginTop: '20px', width: '100%', background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '12px 0', fontSize: '13.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov85">{submitted ? 'Submitted ✓' : 'Submit scorecard'}</button>
          {submitted && (
            <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--good)', textAlign: 'center', fontWeight: '600', animation: 'rowIn .3s both' }}>Scorecard submitted -- visible to the hiring team and logged.</div>
          )}
        </div>
      </div>
    </div>
  );
}
