import React, { useMemo, useState } from 'react';
import { listRecords, updateRecord, downloadRecordsAsJSON, downloadRecordsAsCSV } from '../../../auth/interviewRecordsStore.js';

export default function InterviewReportsSection() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [editingId, setEditingId] = useState(null);
  const [draftNotes, setDraftNotes] = useState('');

  const records = useMemo(() => listRecords(), [refreshKey]);

  const startEdit = (r) => {
    setEditingId(r.id);
    setDraftNotes(r.notes || '');
  };

  const saveEdit = (id) => {
    updateRecord(id, { notes: draftNotes });
    setEditingId(null);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '22px 28px 24px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)', minHeight: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Interview Ops</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Interview reports</div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => downloadRecordsAsCSV(records)}
            disabled={records.length === 0}
            style={{ border: '1px solid var(--line)', background: '#fff', color: '#231F35', borderRadius: '999px', padding: '9px 16px', fontSize: '12.5px', fontWeight: '700', cursor: records.length ? 'pointer' : 'not-allowed', opacity: records.length ? 1 : 0.5 }}
          >
            Download CSV
          </button>
          <button
            onClick={() => downloadRecordsAsJSON(records)}
            disabled={records.length === 0}
            style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 16px', fontSize: '12.5px', fontWeight: '700', cursor: records.length ? 'pointer' : 'not-allowed', opacity: records.length ? 1 : 0.5, boxShadow: '0 6px 16px rgba(124,58,237,.35)' }}
          >
            Download JSON
          </button>
        </div>
      </div>

      <div style={{ flex: '1', overflowY: 'auto', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {records.length === 0 && (
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '28px', fontSize: '13px', color: 'var(--sub)', textAlign: 'center' }}>
            No interview reports submitted yet. Once an HR account submits a scorecard, it will show up here.
          </div>
        )}
        {records.map((r) => (
          <div key={r.id} style={{ background: '#fff', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', padding: '18px 22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: '700' }}>{r.candidate || 'Unknown candidate'}</div>
                <div style={{ fontSize: '12px', color: 'var(--sub)', marginTop: '2px' }}>{r.interviewType || 'Interview'} - submitted by {r.submittedBy || 'unknown HR user'}</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '11.5px', color: 'var(--sub)' }}>
                <div>{new Date(r.submittedAt).toLocaleString()}</div>
                {r.recommendation && (
                  <div style={{ marginTop: '4px', fontSize: '11px', fontWeight: '700', color: '#7C3AED', background: '#F1EBFE', borderRadius: '999px', padding: '3px 10px', display: 'inline-block' }}>{r.recommendation}</div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              {editingId === r.id ? (
                <>
                  <textarea
                    value={draftNotes}
                    onChange={(e) => setDraftNotes(e.target.value)}
                    style={{ width: '100%', minHeight: '80px', border: '1px solid var(--line)', borderRadius: '12px', padding: '10px 12px', fontSize: '13px', lineHeight: '1.55', resize: 'vertical', outline: 'none', boxSizing: 'border-box' }}
                  ></textarea>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    <button onClick={() => saveEdit(r.id)} style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '7px 16px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>Save</button>
                    <button onClick={() => setEditingId(null)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '7px 16px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '13px', color: '#3A3552', lineHeight: '1.6', background: 'var(--soft)', borderRadius: '12px', padding: '11px 14px' }}>
                    {r.notes || 'No notes recorded.'}
                  </div>
                  <button
                    onClick={() => startEdit(r)}
                    style={{ marginTop: '8px', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '6px 14px', fontSize: '11.5px', fontWeight: '700', cursor: 'pointer' }}
                  >
                    Edit notes
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
