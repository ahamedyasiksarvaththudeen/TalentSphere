// Client-side store for interview notes/reports submitted by HR users.
// Persisted to localStorage since there is no backend yet. Executive HR
// accounts read, edit, and export this data; HR accounts only append to it.

const STORAGE_KEY = 'talentsphere.interviewRecords.v1';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore storage failures (private browsing, quota, etc.)
  }
}

function makeId() {
  return `ir_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function listRecords() {
  return load().sort((a, b) => (b.submittedAt || '').localeCompare(a.submittedAt || ''));
}

export function addRecord(record) {
  const list = load();
  const full = {
    id: makeId(),
    submittedAt: new Date().toISOString(),
    ...record,
  };
  list.unshift(full);
  persist(list);
  return full;
}

export function updateRecord(id, patch) {
  const list = load();
  const idx = list.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch, updatedAt: new Date().toISOString() };
  persist(list);
  return list[idx];
}

export function deleteRecord(id) {
  const list = load().filter((r) => r.id !== id);
  persist(list);
}

export function downloadRecordsAsJSON(records, filename = 'interview-reports.json') {
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
  triggerDownload(blob, filename);
}

export function downloadRecordsAsCSV(records, filename = 'interview-reports.csv') {
  const headers = ['id', 'candidate', 'interviewType', 'recommendation', 'notes', 'submittedBy', 'submittedAt', 'updatedAt'];
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = records.map((r) => headers.map((h) => escape(r[h])).join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  triggerDownload(blob, filename);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
