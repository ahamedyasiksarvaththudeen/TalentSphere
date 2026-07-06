import React from 'react';

export default function AdminSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Foundation · 01</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Admin & role management</div>
          <div style={{ fontSize: '12.5px', color: 'var(--sub)', marginTop: '5px', maxWidth: '560px', lineHeight: '1.5' }}>Manage HR, recruiters, hiring managers, admins, departments, job categories, permissions, account status, login activity, and organization settings.</div>
        </div>
        <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov51">Invite user</button>
      </div>
      <div style={{ display: 'inline-flex', flexWrap: 'wrap', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '4px', marginTop: '16px', gap: '2px' }}>
        {(v.adTabs || []).map((t, $index) => (
<React.Fragment key={$index}>
          <button onClick={t.click} style={{ border: 'none', borderRadius: '999px', padding: '7px 18px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', background: t.bg, color: t.fg, boxShadow: t.sh, transition: 'all .25s' }}>{t.label}</button>
        </React.Fragment>
))}
      </div>
      {v.adShowUsers && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'visible' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 150px 95px 70px 100px 40px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
            <span>User</span><span>Title</span><span>Role</span><span>Status</span><span>2FA</span><span>Last active</span><span></span>
          </div>
          {(v.adUsers || []).map((u, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 150px 95px 70px 100px 40px', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: u.dl }} className="hov52">
              <span style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: '0' }}>
                <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: u.av, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', flex: 'none' }}>{u.ini}</span>
                <span style={{ minWidth: '0' }}><span style={{ fontSize: '13.5px', fontWeight: '600', display: 'block' }}>{u.name}</span><span style={{ fontSize: '11.5px', color: 'var(--sub)' }}>{u.email}</span></span>
              </span>
              <span style={{ fontSize: '12.5px', color: '#4B4763' }}>{u.title}</span>
              <span style={{ position: 'relative' }}>
                <span onClick={u.roleClick} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: '600', background: 'var(--soft)', border: '1px solid var(--line)', borderRadius: '999px', padding: '6px 8px 6px 14px', cursor: 'pointer', transition: 'all .2s' }} className="hov53">
                  {u.role}
                  <svg width="9" height="9" viewBox="0 0 10 10" style={{ transition: 'transform .25s', transform: u.rot }}><path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#6F6B84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                {u.ddOpen && (
<React.Fragment>
                  <span style={{ position: 'absolute', top: 'calc(100% + 6px)', left: '0', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 44px rgba(45,20,90,.18)', border: '1px solid var(--line)', padding: '6px', minWidth: '170px', zIndex: '50', animation: 'ddIn .18s ease', display: 'block' }}>
                    {(u.roleOpts || []).map((ro, $index) => (
<React.Fragment key={$index}>
                      <span onClick={ro.click} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderRadius: '9px', cursor: 'pointer', fontSize: '12.5px', fontWeight: ro.fw, color: ro.color, transition: 'background .15s' }} className="hov54">{ro.label}<span style={{ color: 'var(--vio)', fontWeight: '700' }}>{ro.check}</span></span>
                    </React.Fragment>
))}
                  </span>
                </React.Fragment>
)}
              </span>
              <span><span onClick={u.statusClick} style={{ fontSize: '11px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: u.statusBg, color: u.statusFg, cursor: 'pointer' }}>{u.status}</span></span>
              <span><span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: u.tfaBg, color: u.tfaFg }}>{u.tfa}</span></span>
              <span style={{ fontSize: '12px', color: 'var(--sub)' }}>{u.last}</span>
              <span style={{ fontSize: '18px', color: '#C6C2D6', textAlign: 'center', cursor: 'pointer', letterSpacing: '1px' }} className="hov55">⋯</span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 22px', fontSize: '11.5px', color: '#9B96B0' }}>Role changes apply immediately and are written to the audit log. Compliance and Admin roles require 2FA.</div>
        </div>
      </React.Fragment>
)}
      {v.adShowMatrix && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden', animation: 'rowIn .35s both' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(6,1fr)', gap: '8px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase', alignItems: 'end' }}>
            <span>Permission</span>
            {(v.adRoles || []).map((r, $index) => (
<React.Fragment key={$index}><span style={{ textAlign: 'center' }}>{r.n}</span></React.Fragment>
))}
          </div>
          {(v.adMatrix || []).map((row, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(6,1fr)', gap: '8px', padding: '9px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', background: row.bg, transition: 'background .2s', animation: 'rowIn .4s both', animationDelay: row.dl }} className="hov56">
              <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{row.name}{row.sens && (
<React.Fragment><span style={{ marginLeft: '8px', fontSize: '9px', letterSpacing: '.06em', fontWeight: '700', color: '#B45309', background: '#FEF3C7', padding: '2px 7px', borderRadius: '999px' }}>SENSITIVE</span></React.Fragment>
)}</span>
              {(row.cells || []).map((c, $index) => (
<React.Fragment key={$index}>
                <span style={{ display: 'flex', justifyContent: 'center' }}>
                  <span onClick={c.click} style={{ width: '36px', height: '21px', borderRadius: '999px', background: c.bg, position: 'relative', cursor: 'pointer', transition: 'background .25s', display: 'inline-block' }}>
                    <span style={{ position: 'absolute', top: '2.5px', left: c.knob, width: '16px', height: '16px', borderRadius: '50%', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,.25)', transition: 'left .25s' }}></span>
                  </span>
                </span>
              </React.Fragment>
))}
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 22px', fontSize: '11.5px', color: '#9B96B0' }}>Sensitive permissions require a second approver to change. Edits here are drafts until you press save — nothing applied yet in this demo.</div>
        </div>
      </React.Fragment>
)}
      {v.adShowDepts && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden', animation: 'rowIn .35s both' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 110px 110px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
            <span>Department</span><span>Head</span><span>Headcount</span><span>Open reqs</span>
          </div>
          {(v.adDepts || []).map((d, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 110px 110px', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', animation: 'rowIn .4s both', animationDelay: d.dl }}>
              <span style={{ fontSize: '13.5px', fontWeight: '600' }}>{d.name}</span>
              <span style={{ fontSize: '12.5px', color: '#4B4763' }}>{d.head}</span>
              <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{d.count}</span>
              <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--vio)' }}>{d.openReqs}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 22px', fontSize: '11.5px', color: '#9B96B0' }}>Departments drive job requisition routing and role-based access scoping.</div>
        </div>
      </React.Fragment>
)}
      {v.adShowCats && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden', animation: 'rowIn .35s both' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
            <span>Job category</span><span>Open reqs</span>
          </div>
          {(v.adCats || []).map((c, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', animation: 'rowIn .4s both', animationDelay: c.dl }}>
              <span style={{ fontSize: '13.5px', fontWeight: '600' }}>{c.name}</span>
              <span style={{ fontSize: '12.5px', fontWeight: '600' }}>{c.count}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 22px', fontSize: '11.5px', color: '#9B96B0' }}>Categories classify job requisitions for reporting and candidate-facing filters.</div>
        </div>
      </React.Fragment>
)}
      {v.adShowLogins && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'hidden', animation: 'rowIn .35s both' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 90px 90px 110px 1fr', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.06em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
            <span>User</span><span>Day</span><span>Time</span><span>Status</span><span>IP · Device</span>
          </div>
          {(v.adLogins || []).map((l, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 90px 90px 110px 1fr', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', animation: 'rowIn .4s both', animationDelay: l.dl }}>
              <span style={{ fontSize: '13px', fontWeight: '600' }}>{l.who}</span>
              <span style={{ fontSize: '12px', color: 'var(--sub)' }}>{l.day}</span>
              <span style={{ fontSize: '12px', color: 'var(--sub)' }}>{l.t}</span>
              <span><span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 11px', borderRadius: '999px', background: l.statusBg, color: l.statusFg }}>{l.status}</span></span>
              <span style={{ fontSize: '12px', color: '#4B4763' }}>{l.ip} · {l.device}</span>
            </div>
          </React.Fragment>
))}
          <div style={{ padding: '12px 22px', fontSize: '11.5px', color: '#9B96B0' }}>Failed logins beyond policy thresholds trigger an automatic account lock and admin alert.</div>
        </div>
      </React.Fragment>
)}
      {v.adShowOrg && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', padding: '22px 26px', animation: 'rowIn .35s both' }}>
          <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>Organization settings</div>
          <div style={{ fontSize: '12px', color: 'var(--sub)', marginBottom: '16px' }}>These settings apply platform-wide.</div>
          {(v.orgFields || []).map((f, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '14px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--soft)' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#4B4763' }}>{f.label}</span>
              <input value={f.value} onChange={f.set} style={{ border: '1px solid var(--line)', borderRadius: '10px', padding: '8px 12px', fontSize: '12.5px', fontFamily: 'inherit', background: 'var(--soft)' }} />
            </div>
          </React.Fragment>
))}
          <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s', marginTop: '16px' }} className="hov51">Save settings</button>
        </div>
      </React.Fragment>
)}
    </div>
    </React.Fragment>
  );
}
