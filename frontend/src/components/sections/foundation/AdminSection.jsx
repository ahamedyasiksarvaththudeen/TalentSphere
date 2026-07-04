import React from 'react';

export default function AdminSection({ v }) {
  return (
<React.Fragment>
    <div style={{ height: '100%', overflowY: 'auto', padding: '22px 28px 34px', animation: 'pageIn .45s cubic-bezier(.22,1,.36,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', letterSpacing: '.12em', fontWeight: '700', color: '#5B5575', textTransform: 'uppercase', background: '#fff', border: '1px solid var(--line)', padding: '4px 12px', borderRadius: '999px' }}>Foundation · 01</div>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', marginTop: '7px' }}>Admin & role management</div>
        </div>
        <button style={{ background: 'var(--grad)', color: '#fff', border: 'none', borderRadius: '999px', padding: '9px 18px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 16px rgba(124,58,237,.35)', transition: 'all .25s' }} className="hov51">Invite user</button>
      </div>
      <div style={{ display: 'inline-flex', background: '#fff', border: '1px solid var(--line)', borderRadius: '999px', padding: '4px', marginTop: '16px', gap: '2px' }}>
        <button onClick={v.adTabUsers} style={{ border: 'none', borderRadius: '999px', padding: '7px 18px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', background: v.adTabUBg, color: v.adTabUFg, boxShadow: v.adTabUSh, transition: 'all .25s' }}>Users · 7</button>
        <button onClick={v.adTabMatrix} style={{ border: 'none', borderRadius: '999px', padding: '7px 18px', fontSize: '12.5px', fontWeight: '600', cursor: 'pointer', background: v.adTabMBg, color: v.adTabMFg, boxShadow: v.adTabMSh, transition: 'all .25s' }}>Role matrix</button>
      </div>
      {v.adShowUsers && (
<React.Fragment>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid var(--line)', boxShadow: 'var(--sh)', marginTop: '14px', overflow: 'visible' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 170px 90px 110px 40px', gap: '12px', padding: '13px 22px', borderBottom: '1px solid var(--soft)', fontSize: '10px', letterSpacing: '.08em', fontWeight: '700', color: '#9B96B0', textTransform: 'uppercase' }}>
            <span>User</span><span>Title</span><span>Role</span><span>2FA</span><span>Last active</span><span></span>
          </div>
          {(v.adUsers || []).map((u, $index) => (
<React.Fragment key={$index}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 170px 90px 110px 40px', gap: '12px', padding: '11px 22px', borderBottom: '1px solid var(--soft)', alignItems: 'center', transition: 'background .2s', animation: 'rowIn .45s both', animationDelay: u.dl }} className="hov52">
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
    </div>
    </React.Fragment>
  );
}
