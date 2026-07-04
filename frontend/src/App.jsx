import React from 'react';
import { buildMockData } from './data/mockData.js';
import AppShell from './components/AppShell.jsx';
import HomeSection from './components/sections/HomeSection.jsx';
// Foundation tab
import AdminSection from './components/sections/foundation/AdminSection.jsx';
import AuditSection from './components/sections/foundation/AuditSection.jsx';
import JobsSection from './components/sections/foundation/JobsSection.jsx';
import CandidatesSection from './components/sections/foundation/CandidatesSection.jsx';
// Intake tab
import UploadSection from './components/sections/intake/UploadSection.jsx';
import DuplicatesSection from './components/sections/intake/DuplicatesSection.jsx';
// AI Intelligence tab
import ScreeningSection from './components/sections/ai-intelligence/ScreeningSection.jsx';
import MatchingSection from './components/sections/ai-intelligence/MatchingSection.jsx';
import RankingSection from './components/sections/ai-intelligence/RankingSection.jsx';
import SkillGapSection from './components/sections/ai-intelligence/SkillGapSection.jsx';
import BiasSection from './components/sections/ai-intelligence/BiasSection.jsx';
import QuestionsSection from './components/sections/ai-intelligence/QuestionsSection.jsx';
import RecommendSection from './components/sections/ai-intelligence/RecommendSection.jsx';
// Interview Ops tab
import PipelineSection from './components/sections/interview-ops/PipelineSection.jsx';
import SchedulingSection from './components/sections/interview-ops/SchedulingSection.jsx';
import FeedbackSection from './components/sections/interview-ops/FeedbackSection.jsx';
import OffersSection from './components/sections/interview-ops/OffersSection.jsx';
// Analytics tab
import AnalyticsSection from './components/sections/analytics/AnalyticsSection.jsx';
import ReportsSection from './components/sections/analytics/ReportsSection.jsx';
// System tab
import NotificationsSection from './components/sections/system/NotificationsSection.jsx';

export default class App extends React.Component {
  static defaultProps = { accentPair: ['#7C3AED', '#EC4899'], bgMotion: true };

  constructor(props){
    super(props);
    this.timers=[];
    this.state={nav:'home',dd:null,cnt:1,
      navOpen:{found:true,intake:false,ai:true,ops:false,ana:false,sys:false},
      selCand:'c1',screened:{},runPhase:-1,elapsed:0,fb:null,stageOv:{},
      mtCand:'c1',mtOpen:0,
      weights:{sk:35,ex:25,as:20,re:10,rf:10},
      gapCand:'c3',
      qgPhase:-1,editQ:null,qEdits:{},regen:{},added:{},
      recDone:{},jdFixed:{},
      adminTab:'users',perm:null,
      auFilter:'All',
      jobSel:'j1',
      cpSel:'c1',candFilter:'All',
      upSel:'f1',upSt:'idle',
      dupSel:'d1',dupPick:{},merged:{},
      moved:{},
      booked:{},
      fbR:{},fbRec:null,fbSubmitted:false,
      offerSel:'o1',ob:{eq:true,ac:true,bd:true,wk:false,i9:false},
      rpSecs:{sum:true,funnel:true,src:true,bias:false,comp:false,rec:true},rpPhase:-1,
      ntFilter:'All',ntRead:{}};
    this.state.perm=this.defPerm();
  }
  applyVars(){
    const r=document.documentElement.style;
    const p=this.props.accentPair??['#7C3AED','#EC4899'];
    const pair=Array.isArray(p)?p:[p,'#EC4899'];
    r.setProperty('--vio',pair[0]);r.setProperty('--pink',pair[1]);
    r.setProperty('--grad','linear-gradient(135deg,'+pair[0]+' 0%,'+pair[1]+' 100%)');
    r.setProperty('--blobPlay',(this.props.bgMotion??true)?'running':'paused');
  }
  componentDidMount(){
    this.applyVars();
    this._doc=()=>{if(this.state.dd)this.setState({dd:null});};
    document.addEventListener('click',this._doc);
    this.animCount();
  }
  componentDidUpdate(){this.applyVars();}
  componentWillUnmount(){this.timers.forEach(clearTimeout);clearInterval(this.tick);cancelAnimationFrame(this._raf);document.removeEventListener('click',this._doc);}

  animCount(){
    cancelAnimationFrame(this._raf);
    const t0=performance.now();
    const step=t=>{const p=Math.min(1,(t-t0)/950);this.setState({cnt:1-Math.pow(1-p,3)});if(p<1)this._raf=requestAnimationFrame(step);};
    this._raf=requestAnimationFrame(step);
  }
  go=(nav)=>{this.setState({nav,dd:null});this.animCount();};
  dd(key,e){e.stopPropagation();this.setState({dd:this.state.dd===key?null:key});}
  fmt(n){return n.toLocaleString('en-US');}
  cUp(v){return this.fmt(Math.round(v*this.state.cnt));}
  avGrad(name){const gs=['linear-gradient(135deg,#7C3AED,#A78BFA)','linear-gradient(135deg,#EC4899,#F472B6)','linear-gradient(135deg,#0EA5E9,#38BDF8)','linear-gradient(135deg,#10B981,#34D399)','linear-gradient(135deg,#F59E0B,#FBBF24)','linear-gradient(135deg,#6366F1,#818CF8)'];let h=0;for(const ch of name)h=(h+ch.charCodeAt(0))%997;return gs[h%gs.length];}
  ini(name){return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();}

  // ── DATA ──
  get D(){
    if(this._d)return this._d;
    this._d = buildMockData();
    return this._d;
  }

  defPerm(){const p={};[[1,1,1,1,1,1],[1,1,0,0,1,0],[1,1,1,0,0,0],[1,1,1,0,0,0],[1,0,1,0,0,0],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,1,0,0,0,0],[1,0,1,0,0,0],[1,0,0,0,0,1],[1,0,0,0,0,0],[1,0,0,0,0,1]].forEach((row,i)=>row.forEach((v,j)=>{p[i+'_'+j]=!!v;}));return p;}

  // ── helpers ──
  scScore(id){const c=this.D.cands.find(x=>x.id===id);if(!c)return null;if(c.score!=null)return c.score;if(this.state.screened[id])return this.D.scr[id]?this.D.scr[id].o:null;return null;}
  stageOf(c){return this.state.stageOv[c.id]||this.state.moved[c.id]||c.stage;}
  stageChip(st){const m={Applied:['#EEF2FF','#4F46E5'],Screened:['#F1EBFE','#7C3AED'],Interview:['#E0F2FE','#0369A1'],Offer:['#FEF3C7','#B45309'],Hired:['#D1FAE5','#047857'],Rejected:['#FEE2E2','#B91C1C']};const v=m[st]||m.Applied;return{bg:v[0],fg:v[1]};}
  verdictOf(o){if(o>=85)return{label:'Strong fit — advance',bg:'#D1FAE5',fg:'#047857'};if(o>=70)return{label:'Fit — advance to screen',bg:'#F1EBFE',fg:'#7C3AED'};if(o>=60)return{label:'Borderline — human review',bg:'#FEF3C7',fg:'#B45309'};return{label:'Below bar — review before reject',bg:'#FEE2E2',fg:'#B91C1C'};}
  scoreColor(s){if(s==null)return'#C6C2D6';if(s>=85)return'#047857';if(s>=70)return'#231F35';if(s>=60)return'#B45309';return'#B91C1C';}

  runScreening=()=>{
    if(this.state.runPhase>=0&&this.state.runPhase<5)return;
    const steps=[600,900,1200,1400,1100];this.t0=Date.now();
    this.setState({runPhase:0,elapsed:0});
    clearInterval(this.tick);
    this.tick=setInterval(()=>this.setState({elapsed:(Date.now()-this.t0)/1000}),120);
    let acc=0;
    steps.forEach((d,i)=>{acc+=d;this.timers.push(setTimeout(()=>{
      if(i===steps.length-1){clearInterval(this.tick);this.setState({runPhase:5,screened:Object.assign({},this.state.screened,{[this.state.selCand]:true})});this.animCount();}
      else this.setState({runPhase:i+1});
    },acc));});
  };

  renderVals(){
    const S=this.state;
    return Object.assign({},
      this.shellVals(S),this.homeVals(S),this.scrVals(S),this.mtVals(S),this.rkVals(S),this.gapVals(S),
      this.biasVals(S),this.qgVals(S),this.recVals(S),this.foundVals(S),this.intakeVals(S),
      this.opsVals(S),this.insightVals(S));
  }

  icon(path){return React.createElement('svg',{width:14,height:14,viewBox:'0 0 16 16',key:'i'},React.createElement('path',{d:path,fill:'none',stroke:'currentColor',strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'}));}

  shellVals(S){
    const groups=[
      {key:'found',label:'Foundation',ic:'M2.5 13.5 L13.5 13.5 M4 13.5 L4 6.5 L8 3 L12 6.5 L12 13.5',items:[['admin','01','Admin & roles'],['audit','02','Audit log'],['jobs','03','Job requirements'],['candidates','04','Candidates']]},
      {key:'intake',label:'Intake',ic:'M8 2.5 L8 10 M5 7 L8 10 L11 7 M2.5 12.5 L13.5 12.5',items:[['upload','05','Resume intake'],['duplicates','06','Duplicates']]},
      {key:'ai',label:'AI Intelligence',ai:true,ic:'M8 2 L9.5 6.5 L14 8 L9.5 9.5 L8 14 L6.5 9.5 L2 8 L6.5 6.5 Z',items:[['screening','07','Resume screening'],['matching','08','Matching'],['ranking','09','Ranking'],['skillgap','10','Skill gaps'],['bias','11','Bias-aware screening'],['questions','12','Interview questions'],['recommend','13','Recommendations']]},
      {key:'ops',label:'Interview Ops',ic:'M3 4.5 L13 4.5 L13 13 L3 13 Z M3 7.5 L13 7.5 M6 2.5 L6 5 M10 2.5 L10 5',items:[['pipeline','14','Pipeline board'],['scheduling','15','Scheduling'],['feedback','16','Feedback'],['offers','17','Offers & onboarding']]},
      {key:'ana',label:'Analytics',ic:'M3 13 L3 8 M7 13 L7 4 M11 13 L11 6 M15 13 L1 13',items:[['analytics','18','Dashboard'],['reports','19','Report builder']]},
      {key:'sys',label:'System',ic:'M8 5.5 A2.5 2.5 0 1 1 8 10.5 A2.5 2.5 0 1 1 8 5.5 M8 1.5 L8 3 M8 13 L8 14.5 M1.5 8 L3 8 M13 8 L14.5 8',items:[['notifications','20','Notifications']]}];
    const navGroups=groups.map(g=>{
      const open=!!S.navOpen[g.key];
      const hasActive=g.items.some(([id])=>id===S.nav);
      return{label:g.label,open,rot:open?'rotate(180deg)':'rotate(0deg)',
        icon:this.icon(g.ic),
        iconBg:hasActive?(g.ai?'linear-gradient(135deg,#7C3AED,#EC4899)':'#231F35'):'rgba(124,58,237,.08)',
        iconColor:hasActive?'#fff':(g.ai?'#7C3AED':'#5B5575'),
        toggle:()=>this.setState({navOpen:Object.assign({},this.state.navOpen,{[g.key]:!open})}),
        items:g.items.map(([id,code,label])=>{const on=S.nav===id;
          return{code,label,click:()=>this.go(id),
            bg:on?'var(--grad)':'transparent',color:on?'#fff':'#4B4763',fw:on?600:500,
            sh:on?'0 6px 16px rgba(124,58,237,.35)':'none'};})};});
    const unread=this.D.notifs.filter(n=>n.unread&&!S.ntRead[n.id]).length;
    const flags={s_home:S.nav==='home'};
    'admin audit jobs candidates upload duplicates screening matching ranking skillgap bias questions recommend pipeline scheduling feedback offers analytics reports notifications'.split(' ').forEach(k=>{flags['s_'+k]=S.nav===k;});
    return Object.assign({navGroups,unread,unreadShow:unread>0,
      goNotif:()=>this.go('notifications'),goHome:()=>this.go('home'),goJobs:()=>this.go('jobs'),goAdmin:()=>this.go('admin'),goAudit:()=>this.go('audit'),goPipeline:()=>this.go('pipeline'),goSched:()=>this.go('scheduling'),goBias:()=>this.go('bias'),
      homeBg:S.nav==='home'?'var(--grad)':'transparent',homeColor:S.nav==='home'?'#fff':'#3A3552',homeSh:S.nav==='home'?'0 6px 16px rgba(124,58,237,.35)':'none',
      ddProfile:(e)=>this.dd('profile',e),ddProfileOpen:S.dd==='profile',profRot:S.dd==='profile'?'rotate(180deg)':'rotate(0deg)',
      profMenu:[{label:'Profile settings',color:'#231F35',click:()=>this.setState({dd:null})},{label:'Preferences',color:'#231F35',click:()=>this.setState({dd:null})},{label:'Keyboard shortcuts',color:'#231F35',click:()=>this.setState({dd:null})},{label:'Sign out',color:'#DC2626',click:()=>this.setState({dd:null})}]},flags);
  }

  homeVals(S){
    const mk=(p,c)=>React.createElement('svg',{width:17,height:17,viewBox:'0 0 16 16',key:'k'},React.createElement('path',{d:p,fill:'none',stroke:c,strokeWidth:1.5,strokeLinecap:'round',strokeLinejoin:'round'}));
    const stats=[
      {k:'Open requisitions',v:14,delta:'+2 this week',up:true,ic:'M3 4.5 L13 4.5 M3 8 L13 8 M3 11.5 L9 11.5',bg:'#F1EBFE',c:'#7C3AED',go:'jobs'},
      {k:'Active candidates',v:1284,delta:'+118 this month',up:true,ic:'M5.5 7 A2.5 2.5 0 1 0 5.5 2 A2.5 2.5 0 0 0 5.5 7 M1.5 14 C1.5 11 3 9.5 5.5 9.5 C8 9.5 9.5 11 9.5 14 M11 7 A2.2 2.2 0 1 0 10.9 2.6 M11.5 9.6 C13.5 10 14.5 11.4 14.5 14',bg:'#FDF2F8',c:'#EC4899',go:'candidates'},
      {k:'Interviews this week',v:23,delta:'4 today',up:true,ic:'M3 4.5 L13 4.5 L13 13 L3 13 Z M3 7.5 L13 7.5 M6 2.5 L6 5 M10 2.5 L10 5',bg:'#E0F2FE',c:'#0369A1',go:'scheduling'},
      {k:'Offers awaiting reply',v:3,delta:'1 expiring soon',up:false,ic:'M2.5 4 L13.5 4 L13.5 12 L2.5 12 Z M2.5 4.5 L8 8.5 L13.5 4.5',bg:'#FEF3C7',c:'#B45309',go:'offers'}];
    const homeStats=stats.map((s,i)=>({k:s.k,v:this.cUp(s.v),delta:s.delta,
      deltaColor:s.up?'#047857':'#B45309',deltaBg:s.up?'#D1FAE5':'#FEF3C7',
      icon:mk(s.ic,s.c),iconBg:s.bg,click:()=>this.go(s.go),dl:(i*0.07)+'s'}));
    const homeBrief=[
      {n:'01',t:'Amara Diallo screened 79 with one flagged criterion — review the Go-depth evidence before it stalls.',go:'screening'},
      {n:'02',t:'Offer OF-2231 for Grace Nakamura expires in 5 days with no response — a nudge today keeps the accept odds at 0.84.',go:'offers'},
      {n:'03',t:'Priya Raghavan\u2019s system-design panel has all three interviewers free Thursday — lock it in.',go:'scheduling'}].map(b=>({n:b.n,t:b.t,click:()=>this.go(b.go)}));
    const fun=[['Applied',412],['Screened',186],['Interview',42],['Offer',8],['Hired',12]];
    const homeFunnel=fun.map(([k,v])=>({k,v:this.fmt(v),w:Math.round(v/412*100*this.state.cnt)+'%'}));
    const homeActivity=this.D.audit.slice(0,5).map(a=>({what:a.what,meta:a.meta,t:a.t.slice(0,5),ini:a.sys?'AI':this.ini(a.who),av:a.sys?'linear-gradient(135deg,#7C3AED,#EC4899)':this.avGrad(a.who)}));
    const homeUpcoming=this.D.sched.map(u=>({dow:u.dow,dom:u.dom,cand:u.cand,type:u.type,who:u.who,t:u.t}));
    return{homeStats,homeBrief,homeFunnel,homeActivity,homeUpcoming};
  }

  scrVals(S){
    const D=this.D;
    const isScr=c=>this.scScore(c.id)!=null;
    const j1c=D.cands.filter(c=>c.job==='j1');
    const row=(c,i)=>{const on=S.selCand===c.id;const sc=this.scScore(c.id);return{name:c.name,sub:c.applied+' · '+c.src.split(' — ')[0],score:sc!=null?String(sc):'—',click:()=>{this.setState({selCand:c.id,fb:null});this.animCount();},bg:on?'#F1EBFE':'transparent',ini:this.ini(c.name),av:this.avGrad(c.name),scoreColor:this.scoreColor(sc),dl:(i*0.045)+'s'};};
    const qNew=j1c.filter(c=>!isScr(c)).map(row);
    const qDone=j1c.filter(c=>isScr(c)).sort((a,b)=>this.scScore(b.id)-this.scScore(a.id)).map(row);
    const c=D.cands.find(x=>x.id===S.selCand)||D.cands[0];
    const r=D.scr[c.id];
    const done=isScr(c)&&!!r;
    const running=!done&&S.runPhase>=0&&S.runPhase<5;
    const idle=!done&&!running;
    const stepDefs=[['Parse resume — 2 pages','0.6s'],['Extract entities — skills, roles, dates','0.9s'],['Load rubric j1-r3 — 7 criteria','1.2s'],['Score criteria against evidence','1.4s'],['Compose rationale','1.1s']];
    const scrSteps=stepDefs.map(([label,time],i)=>{
      const st=S.runPhase>i?'done':(S.runPhase===i?'active':'wait');
      return{label,time:st==='done'?time:'',color:st==='wait'?'#9B96B0':'#231F35',dotBg:st==='done'?'#7C3AED':(st==='active'?'#E9D5FF':'#fff'),dotBr:st==='wait'?'#DDD6EE':'#7C3AED',anim:st==='active'?'pulse 1s ease infinite':'none'};});
    const o=done?r.o:0;const v=this.verdictOf(o);
    const stage=this.stageOf(c);const sc2=this.stageChip(stage);
    const lows=done?r.conf.filter(x=>x<70).length:0;
    const avgConf=done?(r.conf.reduce((a,b)=>a+b,0)/r.conf.length/100).toFixed(2):'';
    const criteria=done?D.crit.map((name,i)=>({name,w:D.critW[i]+'%',s:r.s[i],bar:r.s[i]+'%',ev:r.ev[i],src:r.src[i],conf:'0.'+r.conf[i],low:r.conf[i]<70,confColor:r.conf[i]<70?'#B45309':'#9B96B0',bg:r.conf[i]<70?'#FFFDF5':'transparent',dl:(i*0.05)+'s'})):[];
    const topEv=done?r.top.map(i=>({q:r.ev[i],tag:D.crit[i].toUpperCase()})):[];
    const nextStage={Applied:'Advance to Screened',Screened:'Advance to Interview',Interview:'Move to Offer',Offer:'Mark hired',Hired:'Hired'};
    return{scrQueueNew:qNew,scrQueueDone:qDone,scrNewCount:qNew.length,scrDoneCount:qDone.length,
      scrIdle:idle,scrRunning:running,scrDone:done,scrNotDone:!done,
      scrSelName:c.name,scrSelApplied:c.applied.toUpperCase(),scrSelMeta:c.title+' at '+c.company+' · '+c.yrs+' yrs · '+c.loc,
      scrSteps,scrElapsed:S.elapsed.toFixed(1)+'s',
      scrScore:Math.round(o*S.cnt),scrRing:251.33*(1-(o/100)*S.cnt),
      scrVerdict:v.label,scrVerdictBg:v.bg,scrVerdictFg:v.fg,
      scrStage:stage,scrStageBg:sc2.bg,scrStageFg:sc2.fg,
      scrConf:avgConf,scrLowNote:lows>0?lows+' criterion flagged for review':'no flags',
      scrCriteria:criteria,scrTopEv:topEv,scrRationale:done?r.rat:'',
      scrModel:[{k:'Model',v:'SCREEN v4.2'},{k:'Rubric',v:'j1-r3 · Jun 12'},{k:'Run',v:'sc_8f42 · 5.8s'},{k:'Audit',v:'logged'}],
      runScreening:this.runScreening,
      scrAdvance:()=>{const ns={Applied:'Screened',Screened:'Interview',Interview:'Offer',Offer:'Hired'}[stage];if(ns)this.setState({stageOv:Object.assign({},S.stageOv,{[c.id]:ns})});},
      scrAdvLabel:nextStage[stage]||'Advance',
      scrFbUp:()=>this.setState({fb:'up'}),scrFbDown:()=>this.setState({fb:'down'}),
      scrFbUpBg:S.fb==='up'?'#F1EBFE':'#fff',scrFbDownBg:S.fb==='down'?'#F6F4FB':'#fff',scrFbDoneShow:!!S.fb};
  }
  mtVals(S){
    const D=this.D;const ids=['c1','c2','c7','c3','c4','c5','c6'];
    const pct=id=>D.mt[id].got.reduce((a,b)=>a+b,0);
    const sorted=ids.slice().sort((a,b)=>pct(b)-pct(a));
    const rows=sorted.map((id,i)=>{const c=D.cands.find(x=>x.id===id);const p=pct(id);const on=S.mtCand===id;
      return{rk:String(i+1).padStart(2,'0'),name:c.name,sub:c.title+' · '+c.company,pct:p+'%',bar:Math.round(p*S.cnt)+'%',gaps:D.mt[id].x.length+' missing',click:()=>{this.setState({mtCand:id,mtOpen:0});this.animCount();},bg:on?'#F6F2FE':'transparent',ini:this.ini(c.name),av:this.avGrad(c.name),pctColor:this.scoreColor(p),dl:(i*0.05)+'s'};});
    const id=S.mtCand;const m=D.mt[id];const c=D.cands.find(x=>x.id===id);const total=pct(id);
    const factors=D.mtF.map(([k,max],i)=>{const got=m.got[i];const open=S.mtOpen===i;
      return{k,max,fr:got+' / '+max,pw:Math.round(got/max*100)+'%',segW:(got*S.cnt)+'%',note:m.notes[i],open,rot:open?'rotate(180deg)':'rotate(0deg)',click:()=>this.setState({mtOpen:open?-1:i}),op:String(1-i*0.16)};});
    return{mtRows:rows,mtSelName:c.name,mtSelSub:c.title+' at '+c.company+' · applied '+c.applied,mtPct:Math.round(total*S.cnt)+'%',
      mtFactors:factors,mtMatched:m.m.map(s=>({s})),mtMissing:m.x.map(s=>({s})),
      mtFormula:D.mtF.map(([k,max])=>({k,max:max+' pts'}))};
  }
  rkVals(S){
    const D=this.D;const defW={sk:35,ex:25,as:20,re:10,rf:10};
    const comp=(f,w)=>{const t=w.sk+w.ex+w.as+w.re+w.rf||1;return (f.sk*w.sk+f.ex*w.ex+f.as*w.as+f.re*w.re+f.rf*w.rf)/t;};
    const ids=Object.keys(D.rk);
    const base=ids.slice().sort((a,b)=>comp(D.rk[b],defW)-comp(D.rk[a],defW));
    const cur=ids.slice().sort((a,b)=>comp(D.rk[b],S.weights)-comp(D.rk[a],S.weights));
    const rows=cur.map((id,i)=>{const c=D.cands.find(x=>x.id===id);const f=D.rk[id];const d=base.indexOf(id)-i;
      const stage=this.stageOf(c);const ch=this.stageChip(stage);
      return{rk:String(i+1).padStart(2,'0'),name:c.name,sub:c.company,comp:comp(f,S.weights).toFixed(1),
        delta:d===0?'—':(d>0?'▲'+d:'▼'+(-d)),deltaColor:d===0?'#C6C2D6':(d>0?'#059669':'#DC2626'),
        cells:[f.sk,f.ex,f.as,f.re,f.rf].map(v=>({v,bar:v+'%'})),stage,stBg:ch.bg,stFg:ch.fg,
        ini:this.ini(c.name),av:this.avGrad(c.name),dl:(i*0.05)+'s'};});
    const defs=[['sk','Skills coverage','from Matching (08)'],['ex','Experience depth','years × scope'],['as','AI screen score','from Screening (07)'],['re','Engagement recency','last candidate activity'],['rf','Referral strength','capped at 15 by policy']];
    const sum=Object.values(S.weights).reduce((a,b)=>a+b,0);
    const factors=defs.map(([k,label,desc])=>({label,desc,w:S.weights[k],set:e=>this.setState({weights:Object.assign({},this.state.weights,{[k]:+e.target.value})})}));
    return{rkRows:rows,rkFactors:factors,rkSum:sum,rkSumWarn:sum!==100,
      rkReset:()=>this.setState({weights:{sk:35,ex:25,as:20,re:10,rf:10}})};
  }
  gapVals(S){
    const D=this.D;const ids=['c1','c2','c3','c4','c7'];
    const sel=S.gapCand;
    const cover=id=>{const lv=D.gapLv[id];let got=0,req=0;D.gapSkills.forEach(([,r],i)=>{req+=r;got+=Math.min(lv[i],r);});return Math.round(got/req*100);};
    const list=ids.map(id=>{const c=D.cands.find(x=>x.id===id);const on=id===sel;
      return{name:c.name,pct:cover(id)+'%',click:()=>{this.setState({gapCand:id});this.animCount();},bg:on?'#F1EBFE':'transparent',ini:this.ini(c.name),av:this.avGrad(c.name)};});
    const lv=D.gapLv[sel];const notes=D.gapNotes[sel]||{};
    const rows=D.gapSkills.map(([skill,req],i)=>{const have=lv[i];const gap=req-have;
      const boxes=[1,2,3,4,5].map(n=>({bg:n<=have?'var(--grad)':(n<=req?'#fff':'var(--soft)'),br:n<=req?(n<=have?'1px solid transparent':'1.5px dashed #F59E0B'):'1px solid var(--line)'}));
      return{skill,boxes,gapN:gap>0?'−'+gap:'',note:notes[i]||'',must:i<6?'MUST':'NICE',mustColor:i<6?'#7C3AED':'#9B96B0',mustBg:i<6?'#F1EBFE':'var(--soft)',dl:(i*0.04)+'s'};});
    const c=D.cands.find(x=>x.id===sel);
    const cv=cover(sel);
    const crits=rows.filter((r,i)=>D.gapSkills[i][1]-lv[i]>0&&i<6).map(r=>r.skill);
    return{gapList:list,gapSelName:c.name,gapSelSub:c.title+' at '+c.company,
      gapPct:Math.round(cv*S.cnt)+'%',gapRing:163.4*(1-(cv/100)*S.cnt),
      gapAv:this.avGrad(c.name),gapIni:this.ini(c.name),gapRows:rows,
      gapCrit:crits.length?crits.join(' · '):'None — all must-haves at or above required level',
      gapCritColor:crits.length?'#B45309':'#059669',
      gapSuggestShow:sel==='c3'||sel==='c7',
      gapSuggest:sel==='c3'?'Adjacent fit: Staff Platform Architect (draft req) — coverage rises to 91% under that rubric, where orchestration is weighted lower.':(sel==='c7'?'Ramp plan: Go depth is the only structural gap. Comparable Rust experience suggests a 4–6 week ramp — flag for the hiring manager.':'')};
  }
  biasVals(S){
    if(S.nav!=='bias')return{};
    const biMasked=[{f:'Name & photo',note:'always'},{f:'Pronouns & gender terms',note:'always'},{f:'Date of birth & graduation years',note:'always'},{f:'Street address (metro retained)',note:'always'},{f:'School names (degree level retained)',note:'always'},{f:'Nationality & visa class',note:'work-auth checked separately'},{f:'Employment gaps under 6 months',note:'since Jul 1'}];
    const biCohorts=[
      {k:'Score parity — gender cohorts',v:'Δ 1.4',vColor:'#059669',bg:'transparent',note:'Mean screen-score difference across inferred cohorts. Within the ±3.0 guardrail.'},
      {k:'Score parity — age proxy cohorts',v:'Δ 2.1',vColor:'#059669',bg:'transparent',note:'Measured on graduation-era proxy. Within guardrail; trend flat over 90 days.'},
      {k:'Pass-through rate — referral vs cold',v:'1.31×',vColor:'#B45309',bg:'#FFFDF5',note:'Referrals advance 31% more often. Expected from referral quality, monitored for drift.'},
      {k:'Criterion drift — Communication',v:'Δ 6.2',vColor:'#DC2626',bg:'#FEF7F7',note:'Non-native-English-proxy cohort scores 6.2 lower on this criterion. Under review.'}];
    const biJd=[
      {req:'Senior Backend Engineer',term:'"rockstar"',termColor:'#DC2626',note:'Competitive-culture coding correlates with 18% fewer applications from women in our own data.',fixable:!S.jdFixed.j1,clean:!!S.jdFixed.j1&&false,fixLabel:'Replace with "expert"',fixBg:'#fff',fixBr:'var(--line)',fixFg:'#231F35',fix:()=>this.setState({jdFixed:Object.assign({},S.jdFixed,{j1:true})})},
      {req:'ML Engineer',term:'"young, energetic team"',termColor:'#DC2626',note:'Age-coded. Suggest "collaborative team".',fixable:!S.jdFixed.j3,clean:false,fixLabel:'Apply suggestion',fixBg:'#fff',fixBr:'var(--line)',fixFg:'#231F35',fix:()=>this.setState({jdFixed:Object.assign({},S.jdFixed,{j3:true})})},
      {req:'Staff Product Designer',term:'clean',termColor:'#059669',note:'No flagged language in the current draft.',fixable:false,clean:true}];
    biJd.forEach(j=>{if(j.fixable===false&&!j.clean){}});
    const fixed=biJd.map(j=>{if(!j.fixable&&!j.clean){j.clean=true;j.term='fixed';j.termColor='#059669';j.note='Suggestion applied to draft — pending hiring manager approval.';}return j;});
    return{biMasked,biCohorts,biJd:fixed};
  }
  qgVals(S){
    if(S.nav!=='questions')return{qgIdle:true,qgDone:false,qgRunning:false,qgRun:()=>{}};
    const running=S.qgPhase>=0&&S.qgPhase<3;
    const done=S.qgPhase>=3;
    const idle=!running&&!done;
    const stepDefs=['Read rubric focus areas & screening flags','Draft questions per weak-evidence criterion','Attach reasoning and difficulty calibration'];
    const qgSteps=stepDefs.map((label,i)=>{const st=S.qgPhase>i?'done':(S.qgPhase===i?'active':'wait');
      return{label,color:st==='wait'?'#9B96B0':'#231F35',dotBg:st==='done'?'#7C3AED':(st==='active'?'#E9D5FF':'#fff'),dotBr:st==='wait'?'#DDD6EE':'#7C3AED',anim:st==='active'?'pulse 1s ease infinite':'none'};});
    const bank={
      g1:{title:'Probe the flagged criteria',tag:'FROM SCREENING — LOW CONFIDENCE',qs:[
        {id:'q1',t:'Your resume mentions mentoring 4 engineers and running an architecture guild. Walk me through one engineer you grew: where they started, what you changed, and what happened in the year after.',why:'Mentoring scored 78 at 0.72 confidence — single mention, no duration. This forces specifics the resume lacks.',alt:'Tell me about a time a mentee disagreed with your technical direction. How did it resolve, and what did you change about how you mentor?'},
        {id:'q2',t:'Pick the design doc you are proudest of. Who pushed back on it, what was their strongest argument, and what did the final version concede?',why:'Communication rests on indirect evidence (talks, docs referenced but not shown). Tests written-argument quality via recall.',alt:'Describe explaining a major architectural tradeoff to a non-engineering stakeholder who had veto power. What did you simplify, and what did you refuse to simplify?'}]},
      g2:{title:'Verify the strongest claims',tag:'HIGH-WEIGHT CRITERIA — CONFIRM DEPTH',qs:[
        {id:'q3',t:'You decomposed a billing monolith into 14 services at 2.1M req/min. Which service boundary turned out to be wrong, and how did you discover it?',why:'Distributed systems is 25% of the rubric and her top evidence. Asking for the mistake distinguishes ownership from adjacency.',alt:'In the monolith decomposition, what did you deliberately NOT split, and why?'},
        {id:'q4',t:'Your p99 went from 840ms to 210ms during 4x traffic growth. Reconstruct the three biggest wins in order — and one optimization you tried that failed.',why:'Scale & reliability evidence is quantified but unattributed. Ordering + a failure case verifies first-hand work.',alt:'During the 4x growth period, what broke first? What signal caught it, and what was the permanent fix?'}]},
      g3:{title:'Role-specific system design',tag:'PANEL CORE — 45 MIN SEGMENT',qs:[
        {id:'q5',t:'Design our screening-event pipeline: 400 resumes/min at peak, every model score must be reproducible for audit for 2 years, and re-scoring a job\u2019s full history must finish under an hour.',why:'Mirrors the team\u2019s real domain (event pipeline + audit trail). Reproducibility constraint tests versioning instincts the role needs.',alt:'Same system, new constraint: a rubric change must NOT invalidate previous scores. How does storage and versioning change?'},
        {id:'q6',t:'Halfway through, migrate the pipeline from Redis streams to Kafka with zero missed events. What is the cutover plan?',why:'Her one gap on Matching is Kafka; her strength is Redis streams. Tests whether concepts transfer under pressure — the skill-gap plan asks exactly this.',alt:'What would make you argue AGAINST migrating to Kafka here, given the audit requirements?'}]}};
    const qgGroups=Object.values(bank).map((g,gi)=>({title:g.title,tag:g.tag,qs:g.qs.map((q,i)=>{
      const editing=S.editQ===q.id;
      const text=S.qEdits[q.id]||(S.regen[q.id]?q.alt:q.t);
      const added=!!S.added[q.id];
      return{text,why:q.why,editing,notEditing:!editing,dl:((gi*2+i)*0.06)+'s',
        edit:()=>this.setState({editQ:editing?null:q.id}),editLabel:editing?'Done':'Edit',
        save:e=>this.setState({qEdits:Object.assign({},this.state.qEdits,{[q.id]:e.target.value})}),
        regen:()=>this.setState({regen:Object.assign({},this.state.regen,{[q.id]:!this.state.regen[q.id]}),qEdits:Object.assign({},this.state.qEdits,{[q.id]:undefined})}),
        add:()=>this.setState({added:Object.assign({},this.state.added,{[q.id]:!added})}),
        addLabel:added?'Added ✓':'Add to scorecard',addBg:added?'#F1EBFE':'#fff',addBr:added?'#C9BDEB':'var(--line)',addFg:added?'#7C3AED':'#231F35'};})}));
    return{qgIdle:idle,qgRunning:running,qgDone:done,qgSteps,qgGroups,
      qgElapsed:S.elapsed.toFixed(1)+'s',
      qgAddedCount:Object.values(S.added).filter(Boolean).length,
      goFeedback:()=>this.go('feedback'),
      qgRun:()=>{
        if(running)return;
        this.t0=Date.now();this.setState({qgPhase:0,elapsed:0,added:{},regen:{},qEdits:{},editQ:null});
        clearInterval(this.tick);
        this.tick=setInterval(()=>this.setState({elapsed:(Date.now()-this.t0)/1000}),120);
        [900,1300,1100].reduce((acc,d,i)=>{const t=acc+d;this.timers.push(setTimeout(()=>{
          if(i===2){clearInterval(this.tick);this.setState({qgPhase:3});}else this.setState({qgPhase:i+1});
        },t));return t;},0);}};
  }
  recVals(S){
    if(S.nav!=='recommend')return{};
    const recs=[
      {id:'r1',pr:'ACT NOW',prColor:'#B91C1C',prBg:'#FEE2E2',title:'Nudge Grace Nakamura on offer OF-2231 — expires in 5 days with no response.',why:'Offers unanswered past day 5 accept 22% less often in your last 8 quarters. Accept model still reads 0.84 — a check-in call historically lifts response within 48h.',evs:[['Offer OF-2231','offers'],['Accept model 0.84','offers']],act:'Open offer',go:'offers'},
      {id:'r2',pr:'ACT NOW',prColor:'#B91C1C',prBg:'#FEE2E2',title:'Lock Priya Raghavan\u2019s system-design panel for Thursday.',why:'All three interviewers share a free block Thu 10:00–11:30. Next fully-shared slot is 9 days out — past her historical response-decay window.',evs:[['Calendar — 3 free','scheduling'],['Screening 87','screening']],act:'Open scheduler',go:'scheduling'},
      {id:'r3',pr:'TODAY',prColor:'#B45309',prBg:'#FEF3C7',title:'Review Amara Diallo\u2019s flagged Go-depth criterion before the queue stalls.',why:'Screened 79 with one criterion at 0.61 confidence. Human review of flagged criteria within 24h keeps this req\u2019s funnel on its 28-day pace.',evs:[['Screening run sc_8f42','screening'],['Skill gap — Go','skillgap']],act:'Review evidence',go:'screening'},
      {id:'r4',pr:'TODAY',prColor:'#B45309',prBg:'#FEF3C7',title:'Chase J. Park\u2019s scorecard for Daniel Okafor — 2 days overdue.',why:'Feedback older than 72h drops in specificity by half in your team\u2019s history. Okafor is #2 ranked; a stall here risks the whole panel loop.',evs:[['Ranking #2','ranking'],['Feedback queue','feedback']],act:'Send reminder',go:'feedback'},
      {id:'r5',pr:'THIS WEEK',prColor:'#4F46E5',prBg:'#EEF2FF',title:'Approve the Communication rubric fix (j1-r3 → r4).',why:'The bias monitor\u2019s open item has been pending 3 days. Every additional screening run under the current rubric widens the audited cohort gap.',evs:[['Bias monitor Δ 6.2','bias'],['Rubric diff','jobs']],act:'Review change',go:'bias'},
      {id:'r6',pr:'THIS WEEK',prColor:'#4F46E5',prBg:'#EEF2FF',title:'Product Manager, Growth is on hold with 143 applicants — tell them.',why:'Req paused 12 days ago; applicants have received nothing since. Silence past 14 days measurably hurts employer-brand response on future reqs.',evs:[['Req j4 — on hold','jobs'],['143 applicants','pipeline']],act:'Draft update',go:'jobs'}];
    const recRows=recs.map((r,i)=>{const isDone=!!S.recDone[r.id];
      return{pr:r.pr,prColor:r.prColor,prBg:r.prBg,title:r.title,why:r.why,isDone,op:isDone?'0.55':'1',dl:(i*0.06)+'s',
        evs:r.evs.map(([s,go])=>({s,click:()=>this.go(go)})),
        act:()=>{this.setState({recDone:Object.assign({},this.state.recDone,{[r.id]:true})});this.timers.push(setTimeout(()=>this.go(r.go),350));},
        actLabel:r.act,
        dismiss:()=>this.setState({recDone:Object.assign({},this.state.recDone,{[r.id]:true})})};});
    return{recRows};
  }
  foundVals(S){
    const out={};
    const D=this.D;
    // 01 admin
    if(S.nav==='admin'){
      const showU=S.adminTab==='users';
      Object.assign(out,{
        adTabUsers:()=>this.setState({adminTab:'users'}),adTabMatrix:()=>this.setState({adminTab:'matrix'}),
        adShowUsers:showU,adShowMatrix:!showU,
        adTabUBg:showU?'var(--grad)':'transparent',adTabUFg:showU?'#fff':'#4B4763',adTabUSh:showU?'0 4px 12px rgba(124,58,237,.3)':'none',
        adTabMBg:!showU?'var(--grad)':'transparent',adTabMFg:!showU?'#fff':'#4B4763',adTabMSh:!showU?'0 4px 12px rgba(124,58,237,.3)':'none'});
      const roleOv=S.roleOv||{};
      out.adUsers=D.users.map((u,i)=>{
        const key='role_'+i;const open=S.dd===key;const role=roleOv[u.email]||u.role;
        return{name:u.name,email:u.email,title:u.title,role,last:u.last,
          ini:this.ini(u.name),av:this.avGrad(u.name),dl:(i*0.05)+'s',
          tfa:u.tfa?'On':'Off',tfaBg:u.tfa?'#D1FAE5':'#FEE2E2',tfaFg:u.tfa?'#047857':'#B91C1C',
          roleClick:(e)=>this.dd(key,e),ddOpen:open,rot:open?'rotate(180deg)':'rotate(0deg)',
          roleOpts:D.roles.map(ro=>({label:ro,fw:ro===role?700:500,color:'#231F35',check:ro===role?'✓':'',
            click:(e)=>{e.stopPropagation();this.setState({roleOv:Object.assign({},roleOv,{[u.email]:ro}),dd:null});}}))};});
      out.adRoles=D.roles.map(r=>({n:r}));
      out.adMatrix=D.perms.map(([name],i)=>{
        const sens=['Approve rubric changes','Export data & PII','Manage users','Approve offers'].includes(name);
        return{name,sens,bg:sens?'#FDFCF7':'transparent',dl:(i*0.03)+'s',
          cells:D.roles.map((_,j)=>{const k=i+'_'+j;const on=!!S.perm[k];
            return{bg:on?'var(--grad)':'#E4E0F0',knob:on?'17.5px':'2.5px',
              click:()=>this.setState({perm:Object.assign({},this.state.perm,{[k]:!on})})};})};});
    }
    // 02 audit
    if(S.nav==='audit'){
      const tags=['All','AI','Change','Activity','Admin','Data','System','Access'];
      const open=S.dd==='auf';
      out.auDd=(e)=>this.dd('auf',e);out.auDdOpen=open;out.auRot=open?'rotate(180deg)':'rotate(0deg)';out.auFilter=S.auFilter;
      out.auOpts=tags.map(t=>({label:t,fw:t===S.auFilter?700:500,check:t===S.auFilter?'✓':'',
        click:(e)=>{e.stopPropagation();this.setState({auFilter:t,dd:null});}}));
      const tagC={AI:['#F1EBFE','#7C3AED'],Change:['#FEF3C7','#B45309'],Activity:['#E0F2FE','#0369A1'],Admin:['#EEF2FF','#4F46E5'],Data:['#D1FAE5','#047857'],System:['#F6F4FB','#6F6B84'],Access:['#FDF2F8','#DB2777']};
      const rows=D.audit.filter(a=>S.auFilter==='All'||a.tag===S.auFilter);
      const days=[];rows.forEach(a=>{let g=days.find(d=>d.day===a.day);if(!g){g={day:a.day,rows:[]};days.push(g);}g.rows.push(a);});
      out.auGroups=days.map(g=>({day:g.day,n:g.rows.length,rows:g.rows.map((a,i)=>({
        t:a.t,who:a.who,what:a.what,meta:a.meta,tag:a.tag,dl:(i*0.035)+'s',
        tagBg:tagC[a.tag][0],tagFg:tagC[a.tag][1],
        ini:a.sys?'AI':this.ini(a.who),av:a.sys?'linear-gradient(135deg,#7C3AED,#EC4899)':this.avGrad(a.who)}))}));
    }
    // 03 jobs
    if(S.nav==='jobs'){
      const stC={Active:['#D1FAE5','#047857'],'On hold':['#FEF3C7','#B45309'],Closed:['#F6F4FB','#6F6B84']};
      const stOv=S.jobStOv||{};
      out.jbList=D.jobs.map((j,i)=>{const on=S.jobSel===j.id;const st=stOv[j.id]||j.status;
        return{title:j.title,team:j.team,level:j.level,loc:j.loc,n:j.n,open:j.open,rubric:j.rubric,status:st,
          stBg:stC[st][0],stFg:stC[st][1],dl:(i*0.06)+'s',
          border:on?'1.5px solid #C9BDEB':'1px solid var(--line)',sh:on?'var(--shHov)':'var(--sh)',
          click:()=>this.setState({jobSel:j.id})};});
      const j=D.jobs.find(x=>x.id===S.jobSel)||D.jobs[0];
      const st=stOv[j.id]||j.status;const open=S.dd==='jbst';
      Object.assign(out,{jbTitle:j.title,jbMeta:j.team+' · '+j.level+' · '+j.loc+' · hiring manager '+j.hm,jbRubric:j.rubric,
        jbStatus:st,jbStBg:stC[st][0],jbStFg:stC[st][1],jbStDd:(e)=>this.dd('jbst',e),jbStOpen:open,jbStRot:open?'rotate(180deg)':'rotate(0deg)',
        jbStOpts:['Active','On hold','Closed'].map(o=>({label:o,fw:o===st?700:500,check:o===st?'✓':'',
          click:(e)=>{e.stopPropagation();this.setState({jobStOv:Object.assign({},stOv,{[j.id]:o}),dd:null});}})),
        jbFacts:[{k:'Compensation',v:j.comp},{k:'Applicants',v:String(j.n)},{k:'Days open',v:j.open},{k:'Level',v:j.level}],
        jbCrit:D.crit.map((name,i)=>({name,w:D.critW[i]*2.8+'%',wl:D.critW[i]+'%',dl:(i*0.05)+'s'})),
        jbSkills:D.gapSkills.map(([name,lv],i)=>({name,lv,bg:i<6?'#F1EBFE':'var(--soft)',fg:i<6?'var(--vio)':'#4B4763',br:i<6?'#E4D9FA':'var(--line)'})),
        goScreening:()=>this.go('screening')});
    }
    // 04 candidates
    if(S.nav==='candidates'){
      const stages=['All','Applied','Screened','Interview','Offer','Hired'];
      const open=S.dd==='cdf';
      out.cdDd=(e)=>this.dd('cdf',e);out.cdDdOpen=open;out.cdRot=open?'rotate(180deg)':'rotate(0deg)';out.cdFilter=S.candFilter;
      out.cdOpts=stages.map(t=>({label:t,fw:t===S.candFilter?700:500,check:t===S.candFilter?'✓':'',
        click:(e)=>{e.stopPropagation();this.setState({candFilter:t,dd:null});}}));
      const jobOf=c=>D.jobs.find(j=>j.id===c.job);
      const list=D.cands.filter(c=>S.candFilter==='All'||this.stageOf(c)===S.candFilter);
      out.cdRows=list.map((c,i)=>{const stage=this.stageOf(c);const ch=this.stageChip(stage);const sc=this.scScore(c.id);
        const mkey='cdm_'+c.id;const mOpen=S.dd===mkey;const on=S.cpSel===c.id;
        return{name:c.name,title:c.title+' · '+c.company,job:jobOf(c).title,stage,stBg:ch.bg,stFg:ch.fg,
          sc:sc!=null?String(sc):'—',scColor:this.scoreColor(sc),match:c.match!=null?c.match+'%':'—',applied:c.applied,
          ini:this.ini(c.name),av:this.avGrad(c.name),dl:(i*0.04)+'s',bg:on?'#F6F2FE':'transparent',
          click:()=>this.setState({cpSel:c.id}),
          menuClick:(e)=>this.dd(mkey,e),menuOpen:mOpen,
          menu:[
            {label:'View AI screening',color:'#231F35',click:(e)=>{e.stopPropagation();this.setState({selCand:c.id,dd:null});this.go('screening');}},
            {label:'Match breakdown',color:'#231F35',click:(e)=>{e.stopPropagation();if(D.mt[c.id])this.setState({mtCand:c.id});this.setState({dd:null});this.go('matching');}},
            {label:'Schedule interview',color:'#231F35',click:(e)=>{e.stopPropagation();this.setState({dd:null});this.go('scheduling');}},
            {label:'Archive candidate',color:'#DC2626',click:(e)=>{e.stopPropagation();this.setState({dd:null});}}]};});
      const c=D.cands.find(x=>x.id===S.cpSel)||D.cands[0];
      const stage=this.stageOf(c);const ch=this.stageChip(stage);const sc=this.scScore(c.id);
      Object.assign(out,{cpName:c.name,cpTitle:c.title+' at '+c.company,cpIni:this.ini(c.name),cpAv:this.avGrad(c.name),
        cpStage:stage,cpStBg:ch.bg,cpStFg:ch.fg,cpSrc:c.src.split(' — ')[0],
        cpScore:sc!=null?String(sc):'—',cpMatch:c.match!=null?c.match+'%':'—',
        cpFacts:[{k:'Email',v:c.email},{k:'Phone',v:c.phone},{k:'Location',v:c.loc},{k:'Experience',v:c.yrs+' years'},{k:'Applied',v:c.applied+' · '+jobOf(c).title}],
        goScreening:()=>{this.setState({selCand:c.id});this.go('screening');},
        goMatching:()=>{if(D.mt[c.id])this.setState({mtCand:c.id});this.go('matching');}});
    }
    return out;
  }
  intakeVals(S){
    const out={};
    const D=this.D;
    if(S.nav==='upload'){
      const files=[
        {id:'f1',cand:'Amara Diallo',file:'diallo_resume.pdf',st:'Ready'},
        {id:'f2',cand:'Jason Chen',file:'jchen_resume_2024.pdf',st:'Ready'},
        {id:'f3',cand:'Unresolved',file:'scan_0142.pdf',st:'Needs review'},
        {id:'f4',cand:'Mariana Santos',file:'msantos_cv.docx',st:'Ready'}];
      const stC={Ready:['#D1FAE5','#047857'],'Needs review':['#FEF3C7','#B45309'],Parsing:['#F1EBFE','#7C3AED']};
      const sel=S.upSel;const parsing=S.upSt==='parsing';
      out.upQueue=files.map((f,i)=>{const on=sel===f.id;const st=parsing&&on?'Parsing':f.st;
        return{cand:f.cand,file:f.file,st,stBg:stC[st][0],stFg:stC[st][1],
          click:()=>{this.setState({upSel:f.id,upSt:'parsing'});
            clearInterval(this.tick);this.timers.push(setTimeout(()=>this.setState({upSt:'ready'}),1000));},
          border:on?'1.5px solid #C9BDEB':'1px solid var(--line)',sh:on?'var(--shHov)':'var(--sh)',
          iconBg:i%2?'#FDF2F8':'#F1EBFE',iconC:i%2?'#EC4899':'#7C3AED'};});
      out.upCount=files.length;
      const d=D.upFields[sel];
      out.upParsing=parsing;out.upReady=!parsing;out.upSelCand=d.cand;
      out.upRows=d.rows.map(([k,v,conf],i)=>({k,v,conf,barColor:conf>=85?'#059669':(conf>=60?'#B45309':'#DC2626'),dl:(i*0.04)+'s'}));
      out.upNoteShow=!!d.note;out.upNote=d.note;out.upDup=d.dup;
      const created=!!S.upExtra;
      out.upCreate=()=>this.setState({upExtra:sel});
      out.upCreateLabel=d.cand==='Unresolved'?'Resolve fields first':'Create candidate record';
    }
    if(S.nav==='duplicates'){
      const merged=S.merged||{};
      out.dupList=D.dups.map((d,i)=>{const on=S.dupSel===d.id;const isMerged=merged[d.id];
        return{a:d.a,b:d.b,sim:d.sim,simColor:d.sim>=90?'#DC2626':(d.sim>=80?'#B45309':'#4B4763'),
          whyN:d.why.length,click:()=>this.setState({dupSel:d.id}),
          border:on?'1.5px solid #C9BDEB':'1px solid var(--line)',sh:on?'var(--shHov)':'var(--sh)',op:isMerged?'0.55':'1',
          resolved:!!isMerged,resolvedLabel:isMerged==='merged'?'Merged ✓':'Kept separate ✓'};});
      const d=D.dups.find(x=>x.id===S.dupSel)||D.dups[0];
      out.dupA=d.a;out.dupB=d.b;out.dupSim=d.sim;out.dupRing=138.2*(1-d.sim/100);out.dupWhy=d.why.join(', ');
      out.dupRows=d.rows.map(([k,a,b,match],i)=>({k,a,b,matchBg:match?'#F1EBFE':'var(--soft)',dl:(i*0.035)+'s'}));
      out.dupMerge=()=>this.setState({merged:Object.assign({},merged,{[d.id]:'merged'})});
      out.dupKeep=()=>this.setState({merged:Object.assign({},merged,{[d.id]:'kept'})});
    }
    return out;
  }
  opsVals(S){
    const out={};
    const D=this.D;
    if(S.nav==='pipeline'){
      const stages=[['Applied','#4F46E5'],['Screened','#7C3AED'],['Interview','#0369A1'],['Offer','#B45309'],['Hired','#047857']];
      const j1=D.cands.filter(c=>c.job==='j1'||['c8','c9','c10','c11'].includes(c.id));
      out.pipeCols=stages.map(([label,dot],si)=>{
        const cards=j1.filter(c=>this.stageOf(c)===label);
        return{label,dot,n:cards.length,cards:cards.map((c,i)=>{const sc=this.scScore(c.id);
          const order=['Applied','Screened','Interview','Offer','Hired'];
          const canAdv=order.indexOf(label)<4;
          return{name:c.name,ini:this.ini(c.name),av:this.avGrad(c.name),
            days:(D.days[c.id]??1)+'d in stage',hasScore:sc!=null,score:sc,scColor:this.scoreColor(sc),
            dl:(i*0.05)+'s',showBtn:canAdv,advLabel:'Advance',
            advance:()=>this.setState({stageOv:Object.assign({},this.state.stageOv,{[c.id]:order[order.indexOf(label)+1]})})};})};});
    }
    if(S.nav==='scheduling'){
      out.schDays=D.sched.map(s=>({dow:s.dow,dom:s.dom}));
      out.schHours=['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM'];
      const toTop=t=>{const [h,m]=t.split(':').map(Number);return (h-9)*56+(m/60*56);};
      const evColors=['linear-gradient(135deg,#7C3AED,#A78BFA)','linear-gradient(135deg,#EC4899,#F472B6)','linear-gradient(135deg,#0EA5E9,#38BDF8)','linear-gradient(135deg,#10B981,#34D399)'];
      const booked=S.booked||{};
      out.schCols=D.sched.map((s,i)=>({events:[{cand:s.cand,type:s.type,top:toTop(s.t),h:64,bg:evColors[i%4],
        click:()=>this.setState({schedSel:i})}]}));
      const idx=S.schedSel??0;const s=D.sched[idx];
      out.schSelCand=s.cand;out.schSelType=s.type+' · '+s.t;
      out.schPanel=[{name:s.who.split(' +')[0],status:'Confirmed'},{name:'M. Iyer (coordinator)',status:'Confirmed'},{name:'Panel room B',status:'Booked'}].map(p=>({name:p.name,status:p.status,ini:this.ini(p.name),av:this.avGrad(p.name),stColor:'#059669'}));
      out.schSlots=['Thu Jul 9 · 10:00 AM','Thu Jul 9 · 2:00 PM','Fri Jul 10 · 11:00 AM'].map((label,i)=>{const key=idx+'_'+i;const bk=!!booked[key];
        return{label,booked:bk,notBooked:!bk,bg:bk?'#F1EBFE':'#fff',br:bk?'#E4D9FA':'var(--line)',
          click:()=>this.setState({booked:Object.assign({},booked,{[key]:true})})};});
    }
    if(S.nav==='feedback'){
      const fbR=S.fbR||{};
      const critDefs=[['System design depth','Decomposition, tradeoffs, and scale reasoning'],['Coding fluency','Correctness and clarity under time pressure'],['Communication','Clarity explaining decisions to the panel'],['Collaboration signal','How they responded to pushback and hints']];
      const opts=['Strong no','Lean no','Lean yes','Strong yes'];
      out.fbCriteria=critDefs.map(([label,desc],i)=>({label,desc,opts:opts.map((o,oi)=>{const on=fbR[i]===oi;
        return{label:o,click:()=>this.setState({fbR:Object.assign({},fbR,{[i]:oi})}),
          br:on?'#7C3AED':'var(--line)',bg:on?(oi<2?'#FEE2E2':'#D1FAE5'):'#fff',fg:on?(oi<2?'#B91C1C':'#047857'):'#4B4763'};})}));
      out.fbQ=['Your resume mentions mentoring 4 engineers — walk me through one you grew, start to finish.','Pick the design doc you\u2019re proudest of. What was the strongest pushback, and what did the final version concede?'];
      const recOpts=['Strong no hire','No hire','Hire','Strong hire'];
      out.fbRecOpts=recOpts.map((o,i)=>{const on=S.fbRec===i;
        return{label:o,click:()=>this.setState({fbRec:i}),
          br:on?'#7C3AED':'var(--line)',bg:on?'var(--grad)':'#fff',fg:on?'#fff':'#4B4763'};});
      out.fbSubmit=()=>this.setState({fbSubmitted:true});
      out.fbSubmitLabel=S.fbSubmitted?'Submitted ✓':'Submit scorecard';
      out.fbSubmitted=S.fbSubmitted;
    }
    if(S.nav==='offers'){
      const stC={Sent:['#EEF2FF','#4F46E5'],Accepted:['#D1FAE5','#047857'],Negotiating:['#FEF3C7','#B45309'],Declined:['#FEE2E2','#B91C1C']};
      out.ofList=D.offers.map((o,i)=>{const on=S.offerSel===o.id;
        return{cand:o.cand,job:o.job,code:o.code,status:o.status,stBg:stC[o.status][0],stFg:stC[o.status][1],
          click:()=>this.setState({offerSel:o.id}),border:on?'1.5px solid #C9BDEB':'1px solid var(--line)',sh:on?'var(--shHov)':'var(--sh)'};});
      const o=D.offers.find(x=>x.id===S.offerSel)||D.offers[0];
      Object.assign(out,{ofCand:o.cand,ofJob:o.job,ofCode:o.code,ofStatus:o.status,ofStBg:stC[o.status][0],ofStFg:stC[o.status][1],
        ofBase:o.base,ofEquity:o.equity,ofBonus:o.bonus,
        ofProbShow:o.prob!=='—',ofProb:o.prob,ofProbW:o.prob!=='—'?Math.round(parseFloat(o.prob)*100):0,
        ofChain:o.chain.map(([label,date,st])=>({label,date,dotBg:st==='done'?'#059669':(st==='warn'?'#B45309':(st==='fail'?'#DC2626':'#D9D4E8')),showCheck:st==='done'})),
        ofEvents:o.events.map(([t,what])=>({t,what}))});
      const ob=S.ob;
      const obDefs=[['eq','Equipment shipped'],['ac','Accounts provisioned'],['bd','Buddy assigned'],['wk','Welcome kit sent'],['i9','I-9 / compliance docs signed']];
      out.ofOb=obDefs.map(([k,label])=>({label,checked:ob[k],bg:ob[k]?'var(--grad)':'#fff',br:ob[k]?'transparent':'var(--line)',fg:ob[k]?'#231F35':'#9B96B0',
        click:()=>this.setState({ob:Object.assign({},ob,{[k]:!ob[k]})})}));
    }
    return out;
  }
  insightVals(S){
    const out={};
    const D=this.D;
    if(S.nav==='analytics'){
      const stats=[['Median time-to-hire','31 days','−6d vs Q1','#059669'],['Offer accept rate','82%','+4pts vs Q1','#059669'],['Cost per hire','$4,210','−$380 vs Q1','#059669'],['Requisitions past SLA','3','of 14 open','#B45309']];
      out.anStats=stats.map(([k,v,delta,color],i)=>({k,v,delta,color,dl:(i*0.06)+'s'}));
      const fun=[['Applied',412],['Screened',186],['Interview',42],['Offer',8],['Hired',12]];
      const max=412;
      out.anFunnel=fun.map(([k,v],i)=>({k,v:this.fmt(v),h:Math.round(v/max*100*S.cnt),bar:i===4?'var(--grad)':'#DED4F5'}));
      const src=[['Referral',34],['Direct',26],['LinkedIn',22],['Job board',9]];
      out.anSrc=src.map(([k,v])=>({k,v:v+'% conversion',w:Math.round(v/34*100*S.cnt)+'%'}));
      const recs=[['Rachel Kim',6,4,'27d'],['Dev Sharma',4,3,'33d'],['Lena Beaumont',3,2,'29d'],['Maya Iyer',1,3,'—']];
      out.anRec=recs.map(([name,open,hired,tth])=>({name,open,hired,tth,ini:this.ini(name),av:this.avGrad(name)}));
      const trend=[38,36,34,33,31,31];
      const w=400,h=170,step=w/(trend.length-1),max2=42,min2=26;
      const pts=trend.map((v,i)=>{const x=i*step;const y=h-((v-min2)/(max2-min2))*h*S.cnt;return x+','+y;});
      out.anTrendPts=pts.join(' ');
      out.anTrendFill=pts.join(' ')+' '+w+','+h+' 0,'+h;
      out.anTrendLbl=['Feb','Mar','Apr','May','Jun','Jul'];
    }
    if(S.nav==='reports'){
      const secs=S.rpSecs;
      const secDefs=[['sum','Executive summary','Key metrics narrative'],['funnel','Funnel breakdown','Applied through hired'],['src','Source effectiveness','Channel conversion rates'],['bias','Bias audit appendix','Cohort parity findings'],['comp','Compensation bands','Offer ranges by level'],['rec','Recommendations','Model-suggested next actions']];
      out.rpSections=secDefs.map(([k,label,desc])=>({label,desc,on:!!secs[k],bg:secs[k]?'var(--grad)':'#fff',br:secs[k]?'transparent':'var(--line)',
        toggle:()=>this.setState({rpSecs:Object.assign({},secs,{[k]:!secs[k]})})}));
      const fmt=S.rpFormat||'PDF';
      out.rpFormats=['PDF','CSV','Slides'].map(f=>({label:f,click:()=>this.setState({rpFormat:f}),
        br:fmt===f?'#7C3AED':'var(--line)',bg:fmt===f?'var(--grad)':'#fff',fg:fmt===f?'#fff':'#4B4763'}));
      const gen=S.rpPhase===0;const done=S.rpPhase>=1;
      out.rpGenerating=gen;out.rpPreview=!gen;
      out.rpSectionCount=Object.values(secs).filter(Boolean).length;
      out.rpSum=secs.sum;out.rpFunnelS=secs.funnel;out.rpSrcS=secs.src;out.rpRecS=secs.rec;
      out.rpBtnLabel=gen?'Compiling…':(done?'Regenerate report':'Generate report');
      out.rpGenerate=()=>{if(gen)return;this.setState({rpPhase:0});this.timers.push(setTimeout(()=>this.setState({rpPhase:1}),1400));};
    }
    if(S.nav==='notifications'){
      const iconOf=(kind)=>{const paths={ai:'M8 2 L9.5 6.5 L14 8 L9.5 9.5 L8 14 L6.5 9.5 L2 8 L6.5 6.5 Z',approval:'M2.5 6.2 L5 8.7 L9.5 3.3',mention:'M2 3 L14 3 L14 11 L5 11 L2 14 Z',reminder:'M8 4.5 L8 8 L10.5 9.5 M8 1.5 A6.5 6.5 0 1 1 7.9 1.5',system:'M8 5.5 A2.5 2.5 0 1 1 8 10.5 A2.5 2.5 0 1 1 8 5.5 M8 1.5 L8 3 M8 13 L8 14.5 M1.5 8 L3 8 M13 8 L14.5 8'};
        const bg={ai:'#F1EBFE',approval:'#D1FAE5',mention:'#EEF2FF',reminder:'#FEF3C7',system:'#F6F4FB'};
        const c={ai:'#7C3AED',approval:'#059669',mention:'#4F46E5',reminder:'#B45309',system:'#6F6B84'};
        return{icon:this.icon(paths[kind]),bg:bg[kind],c:c[kind]};};
      const tabs=['All','AI','Approvals','Mentions','Reminders'];
      const kindMap={All:null,AI:'ai',Approvals:'approval',Mentions:'mention',Reminders:'reminder'};
      out.ntTabs=tabs.map(t=>({label:t,click:()=>this.setState({ntFilter:t}),
        bg:S.ntFilter===t?'var(--grad)':'#fff',fg:S.ntFilter===t?'#fff':'#4B4763'}));
      out.ntMarkAll=()=>{const all={};D.notifs.forEach(n=>all[n.id]=true);this.setState({ntRead:all});};
      const km=kindMap[S.ntFilter];
      const list=D.notifs.filter(n=>!km||n.kind===km);
      const days=[];list.forEach(n=>{let g=days.find(d=>d.day===n.day);if(!g){g={day:n.day,rows:[]};days.push(g);}g.rows.push(n);});
      out.ntGroups=days.map(g=>({day:g.day,rows:g.rows.map((n,i)=>{const ic=iconOf(n.kind);const unread=n.unread&&!S.ntRead[n.id];
        return{title:n.title,body:n.body,t:n.t,unread,dl:(i*0.04)+'s',
          icon:React.createElement('span',{style:{color:ic.c}},ic.icon),iconBg:ic.bg,
          sh:unread?'var(--shHov)':'var(--sh)',
          click:()=>{this.setState({ntRead:Object.assign({},this.state.ntRead,{[n.id]:true})});this.go(n.go);}};})}));
    }
    return out;
  }

  render(){
    const v = this.renderVals();
    return (
      <AppShell v={v}>
      {v.s_home && <HomeSection v={v} />}
      {v.s_screening && <ScreeningSection v={v} />}
      {v.s_matching && <MatchingSection v={v} />}
      {v.s_ranking && <RankingSection v={v} />}
      {v.s_skillgap && <SkillGapSection v={v} />}
      {v.s_bias && <BiasSection v={v} />}
      {v.s_questions && <QuestionsSection v={v} />}
      {v.s_recommend && <RecommendSection v={v} />}
      {v.s_admin && <AdminSection v={v} />}
      {v.s_audit && <AuditSection v={v} />}
      {v.s_jobs && <JobsSection v={v} />}
      {v.s_candidates && <CandidatesSection v={v} />}
      {v.s_upload && <UploadSection v={v} />}
      {v.s_duplicates && <DuplicatesSection v={v} />}
      {v.s_pipeline && <PipelineSection v={v} />}
      {v.s_scheduling && <SchedulingSection v={v} />}
      {v.s_feedback && <FeedbackSection v={v} />}
      {v.s_offers && <OffersSection v={v} />}
      {v.s_analytics && <AnalyticsSection v={v} />}
      {v.s_reports && <ReportsSection v={v} />}
      {v.s_notifications && <NotificationsSection v={v} />}
      </AppShell>
    );
  }
}
