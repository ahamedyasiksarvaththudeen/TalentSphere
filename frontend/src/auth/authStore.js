// Lightweight client-side auth store for the TalentSphere demo.
//
// There is no backend yet, so accounts, sessions, and role assignments are
// persisted in the browser via localStorage. This is NOT a secure auth
// system (passwords are stored in plain text) - it exists to demonstrate
// the three-role login/permission model the product requires. Swap this
// module out for real API calls once a backend exists.

const STORAGE_KEY = 'talentsphere.auth.v1';

export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EXECUTIVE_HR: 'EXECUTIVE_HR',
  HR: 'HR',
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.ADMIN]: 'Admin',
  [ROLES.EXECUTIVE_HR]: 'Executive HR',
  [ROLES.HR]: 'HR',
};

// Who is allowed to create logins for which role(s). Each entry is an array
// of roles that account type may create; empty array = cannot create logins.
const CREATION_RIGHTS = {
  [ROLES.SUPER_ADMIN]: [ROLES.ADMIN, ROLES.EXECUTIVE_HR],
  [ROLES.ADMIN]: [],
  [ROLES.EXECUTIVE_HR]: [ROLES.HR],
  [ROLES.HR]: [],
};

const SEED_SUPER_ADMIN = {
  id: 'u_superadmin',
  username: 'superadmin',
  password: 'Admin@123',
  role: ROLES.SUPER_ADMIN,
  name: 'System Super Admin',
  email: 'superadmin@talentsphere.local',
  createdBy: null,
  createdByName: null,
  createdAt: new Date('2026-01-01T00:00:00Z').toISOString(),
};

function seedState() {
  return { users: [{ ...SEED_SUPER_ADMIN }], sessionUserId: null };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = seedState();
      persist(seeded);
      return seeded;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.users) || parsed.users.length === 0) {
      const seeded = seedState();
      persist(seeded);
      return seeded;
    }
    return parsed;
  } catch {
    return seedState();
  }
}

function persist(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing, etc.) - fail silently,
    // the session just won't persist across reloads.
  }
}

function sanitize(user) {
  if (!user) return null;
  const { password, ...safe } = user;
  return safe;
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function login(username, password) {
  const state = load();
  const match = state.users.find(
    (u) =>
      u.username.trim().toLowerCase() === String(username || '').trim().toLowerCase() &&
      u.password === password
  );
  if (!match) {
    return { ok: false, error: 'Invalid username or password.' };
  }
  state.sessionUserId = match.id;
  persist(state);
  return { ok: true, user: sanitize(match) };
}

export function logout() {
  const state = load();
  state.sessionUserId = null;
  persist(state);
}

export function getCurrentUser() {
  const state = load();
  const user = state.users.find((u) => u.id === state.sessionUserId);
  return sanitize(user);
}

export function listUsers(role) {
  const state = load();
  return state.users.filter((u) => (role ? u.role === role : true)).map(sanitize);
}

// creator: the sanitized current user performing the action.
export function createUser({ name, email, username, password, role }, creator) {
  if (!creator) return { ok: false, error: 'You must be signed in to create a login.' };
  const allowedRoles = CREATION_RIGHTS[creator.role] || [];
  if (!allowedRoles.includes(role)) {
    return { ok: false, error: `${ROLE_LABELS[creator.role] || creator.role} accounts cannot create ${ROLE_LABELS[role] || role} logins.` };
  }
  if (!name || !name.trim()) return { ok: false, error: 'Name is required.' };
  if (!username || !username.trim()) return { ok: false, error: 'Username is required.' };
  if (!password || password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };

  const state = load();
  const exists = state.users.some((u) => u.username.trim().toLowerCase() === username.trim().toLowerCase());
  if (exists) return { ok: false, error: 'That username is already taken.' };

  const user = {
    id: makeId('u'),
    username: username.trim(),
    password,
    role,
    name: name.trim(),
    email: (email || '').trim(),
    createdBy: creator.id,
    createdByName: creator.name,
    createdAt: new Date().toISOString(),
  };
  state.users.push(user);
  persist(state);
  return { ok: true, user: sanitize(user) };
}

export function deactivateUser(userId, actor) {
  const state = load();
  const idx = state.users.findIndex((u) => u.id === userId);
  if (idx === -1) return { ok: false, error: 'User not found.' };
  const target = state.users[idx];
  if (!actor || (target.createdBy !== actor.id && actor.role !== ROLES.SUPER_ADMIN)) {
    return { ok: false, error: 'You do not have permission to remove this login.' };
  }
  state.users.splice(idx, 1);
  if (state.sessionUserId === userId) state.sessionUserId = null;
  persist(state);
  return { ok: true };
}

// Returns the list of roles this account type is allowed to create logins
// for (may be empty).
export function creatableRolesFor(role) {
  return CREATION_RIGHTS[role] || [];
}
