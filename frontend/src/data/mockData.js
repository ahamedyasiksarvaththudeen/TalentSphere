// Mock data for the TalentSphere demo UI.
// Extracted verbatim from the original App.jsx so behavior is unchanged.
export function buildMockData() {
    const cands=[
      {id:'c1',name:'Priya Raghavan',job:'j1',stage:'Interview',score:87,match:89,yrs:9,loc:'Austin, TX · Remote',src:'Referral — A. Osei',applied:'Jun 24',company:'Helix Systems',title:'Staff Software Engineer',email:'p.raghavan@hexmail.com',phone:'+1 (512) 344-0187'},
      {id:'c2',name:'Daniel Okafor',job:'j1',stage:'Screened',score:82,match:84,yrs:7,loc:'New York, NY',src:'LinkedIn',applied:'Jun 26',company:'Cloudbase',title:'Senior Software Engineer',email:'daniel.okafor@pmail.io',phone:'+1 (917) 555-0142'},
      {id:'c3',name:'Maya Lindqvist',job:'j1',stage:'Screened',score:78,match:82,yrs:11,loc:'Denver, CO · Remote',src:'Direct',applied:'Jun 22',company:'Nortia',title:'Principal Engineer',email:'maya.lindqvist@nmail.se',phone:'+1 (720) 555-0135'},
      {id:'c4',name:'Tomás Herrera',job:'j1',stage:'Screened',score:74,match:77,yrs:6,loc:'Austin, TX',src:'LinkedIn',applied:'Jun 27',company:'Datawheel',title:'Software Engineer II',email:'t.herrera@wmail.com',phone:'+1 (512) 555-0166'},
      {id:'c5',name:'Wei Chen',job:'j1',stage:'Screened',score:71,match:74,yrs:8,loc:'Seattle, WA',src:'LinkedIn',applied:'Jun 25',company:'Arclight',title:'Senior Engineer',email:'wei.chen@amail.dev',phone:'+1 (206) 555-0117'},
      {id:'c6',name:'Jordan Ellis',job:'j1',stage:'Screened',score:58,match:59,yrs:4,loc:'Remote — US',src:'Job board',applied:'Jun 28',company:'Feldspar',title:'Backend Engineer',email:'j.ellis@fmail.co',phone:'+1 (312) 555-0198'},
      {id:'c7',name:'Amara Diallo',job:'j1',stage:'Applied',score:null,match:82,yrs:8,loc:'Chicago, IL · Remote',src:'Direct',applied:'Jul 2',company:'Quanta Grid',title:'Senior Software Engineer',email:'amara.diallo@qmail.com',phone:'+1 (773) 555-0129'},
      {id:'c8',name:'Grace Nakamura',job:'j2',stage:'Offer',score:91,match:91,yrs:10,loc:'New York, NY',src:'Referral',applied:'Jun 2',company:'Fielder',title:'Principal Product Designer',email:'g.nakamura@fmail.nyc',phone:'+1 (646) 555-0121'},
      {id:'c9',name:'Sofia Marino',job:'j4',stage:'Interview',score:84,match:85,yrs:8,loc:'Austin, TX',src:'Direct',applied:'Jun 10',company:'Loopwell',title:'Senior PM, Growth',email:'sofia.marino@lmail.com',phone:'+1 (737) 555-0154'},
      {id:'c10',name:'Lucas Fournier',job:'j5',stage:'Screened',score:76,match:78,yrs:5,loc:'Remote — US',src:'LinkedIn',applied:'Jun 20',company:'Brightlane',title:'Frontend Engineer',email:'l.fournier@bmail.fr',phone:'+1 (415) 555-0173'},
      {id:'c11',name:'Hana Yoshida',job:'j3',stage:'Interview',score:88,match:90,yrs:7,loc:'Remote — US',src:'Referral',applied:'Jun 8',company:'Tessellate',title:'ML Engineer',email:'hana.yoshida@tmail.jp',phone:'+1 (628) 555-0182'},
      {id:'c12',name:'Alex Bergström',job:'j3',stage:'Applied',score:null,match:null,yrs:6,loc:'Remote — US',src:'Job board',applied:'Jul 1',company:'Kanso',title:'Data Scientist',email:'alex.bergstrom@kmail.se',phone:'+1 (971) 555-0148'}];
    const jobs=[
      {id:'j1',title:'Senior Backend Engineer',team:'Platform',level:'L5',loc:'Remote — US',comp:'$185–225k',hm:'A. Osei',open:'34d',n:128,status:'Active',rubric:'j1-r3'},
      {id:'j2',title:'Staff Product Designer',team:'Design',level:'L6',loc:'New York',comp:'$195–240k',hm:'T. Walsh',open:'52d',n:86,status:'Active',rubric:'j2-r1'},
      {id:'j3',title:'ML Engineer',team:'Intelligence',level:'L5',loc:'Remote — US',comp:'$200–250k',hm:'D. Sharma',open:'41d',n:74,status:'Active',rubric:'j3-r2'},
      {id:'j4',title:'Product Manager, Growth',team:'Growth',level:'L5',loc:'Austin',comp:'$170–205k',hm:'S. Whitmore',open:'19d',n:143,status:'On hold',rubric:'j4-r1'},
      {id:'j5',title:'Frontend Engineer',team:'Activation',level:'L4',loc:'Remote — US',comp:'$150–185k',hm:'J. Park',open:'27d',n:97,status:'Active',rubric:'j5-r2'}];
    const crit=['Distributed systems','Language depth (Go)','Data stores','API design','Scale & reliability','Mentoring','Communication'];
    const critW=[25,15,12,12,14,10,12];
    const scr={
      c1:{o:87,s:[94,88,82,90,89,78,84],conf:[96,91,84,88,93,72,66],top:[0,4,1],
        ev:['Led decomposition of billing monolith into 14 services; peak 2.1M req/min across 3 regions','Go primary since 2019 across two roles; maintainer of internal gRPC codegen toolchain','Postgres partitioning at 1.2B rows; Redis streams for fan-out. No columnar store exposure','Authored public API v3 design doc; formal deprecation policy cited and linked','On-call lead through 4x traffic growth; p99 cut 840ms to 210ms','Mentored 4 engineers; ran architecture guild. Single mention, no duration given','Two conference talks; well-structured design docs referenced. Indirect signal only'],
        src:['Experience §1 · L8–12','Experience §1 · L15','Experience §2 · L4–9','Experience §1 · L21','Experience §2 · L11','Experience §3 · L2','Talks § · L1–3'],
        rat:'Clears every must-have on rubric j1-r3. The score is carried by first-hand distributed-systems ownership at comparable scale and sustained Go depth. Weakest signals are mentoring and communication, both resting on indirect evidence — probe them in the screen rather than assume.'},
      c2:{o:82,s:[86,84,78,82,85,68,79],conf:[92,90,85,88,90,64,80],top:[0,4,1],
        ev:['Owned event-driven order pipeline on Kafka across 3 regions; led failover redesign after the 2023 outage','Go for 5 years; 12 merged PRs on the open-source pgx driver','Postgres and DynamoDB; ran a schema migration at 400M rows with zero downtime','Maintains partner-facing REST and gRPC surface; wrote the versioning policy','Traffic grew 6x in 18 months; owns the error-budget process','One intern mentioned in 2022. No sustained mentoring signal','RFC-driven team; three design docs linked from the resume'],
        src:['Experience §1 · L5–9','Open source § · L1','Experience §1 · L14','Experience §2 · L3','Experience §1 · L11','Experience §2 · L9','Writing § · L1'],
        rat:'Strong systems evidence with verifiable open-source Go work — the pgx contributions are direct, dated, and checkable. Mentoring is the one thin area: a single intern reference. Everything else is first-hand.'},
      c3:{o:78,s:[90,58,84,80,88,85,82],conf:[94,79,90,86,92,88,84],top:[0,5,2],
        ev:['Architected the multi-tenant isolation layer at Nortia serving 40k tenants','Go adopted 2023; prior decade on the JVM (Scala, Java). Depth unproven at the required level','Deep Postgres internals; public talk on WAL tuning at PGConf 2024','Owned the platform API council; reviewed all breaking changes for 2 years','Ran the platform through 40k-tenant scale with a formal capacity planning process','Managed a guild of 9; led the formal mentorship program for 3 cohorts','Clear, quantified writing throughout; program documentation cited'],
        src:['Experience §1 · L4–8','Skills § · L2','Talks § · L1','Experience §1 · L16','Experience §1 · L10','Experience §2 · L6','Overall'],
        rat:'Deepest systems and leadership evidence in the pool. The score is capped by Go depth, which the rubric weights at 15% and the resume only supports at surface level — two years against a decade of JVM. If a language ramp is acceptable, she outranks the pool on everything else.'},
      c4:{o:74,s:[76,82,70,74,71,65,77],conf:[84,88,80,78,76,60,82],top:[1,0,3],
        ev:['Built a 4-service order system at Datawheel; scale not stated','Go primary for 4 years; standard service work, no tooling ownership','Postgres day-to-day; no scale or tuning evidence','Consumed and extended internal APIs; no design ownership shown','On-call rotation member; no incident leadership cited','No mentoring evidence found','Concise, dated resume; no external writing'],
        src:['Experience §1 · L6','Experience §1 · L3','Experience §2 · L2','Experience §1 · L12','Experience §2 · L5','—','Overall'],
        rat:'Solid mid-level evidence; nothing disqualifying, nothing exceeding the bar. The weight of evidence sits below the L5 rubric on scale and design ownership.'},
      c5:{o:71,s:[74,70,76,68,72,60,70],conf:[80,78,84,72,78,58,74],top:[2,0,4],
        ev:['Maintained the ingestion pipeline at Arclight; 200k events/min stated once','Go listed for 6 years but recent work shown in Python; ratio unclear','ClickHouse and Postgres; wrote the retention tooling','No API design evidence beyond CRUD endpoints','Two incident writeups linked; contributor, not lead','No mentoring evidence found','Sparse bullets; dates consistent'],
        src:['Experience §1 · L7','Skills § · L1','Experience §1 · L9','—','Incidents § · L1–2','—','Overall'],
        rat:'Adequate systems exposure but the evidence is thin on API design and leadership, and the language-depth claim conflicts with recent Python-heavy work.'},
      c6:{o:58,s:[52,66,55,60,48,50,72],conf:[70,76,68,66,64,55,80],top:[6,1,0],
        ev:['Claims microservices experience; both roles show single-service scope','Go for 3 years at Feldspar; junior-level tasks described','Basic Postgres usage; no scale evidence','Endpoint work under senior direction','No production ownership signals across 4 years','Not applicable at this level','Well-written resume; clear chronology'],
        src:['Experience §1–2','Experience §1 · L4','Experience §2 · L3','Experience §1 · L8','Overall','—','Overall'],
        rat:'The evidence does not support the seniority bar for this req: the distributed-systems claim conflicts with role scope in both positions. Flagged for recruiter review rather than auto-rejected, per policy.'},
      c7:{o:79,s:[84,70,80,76,86,72,78],conf:[90,61,85,82,91,74,80],top:[0,4,3],
        ev:['Re-architected grid telemetry ingestion at Quanta Grid; 900k msgs/sec sustained','Primary language is Rust; Go appears in side projects only. Depth uncertain','TimescaleDB and Postgres in production; wrote the compression policy','Published an internal API standards doc adopted by 3 teams','Led the SEV-1 response program; MTTR halved year over year','Coordinates a 5-person on-call guild; mentorship implied, not stated','Precise, quantified writing; the standards doc is direct evidence'],
        src:['Experience §1 · L5–9','Projects § · L2','Experience §1 · L13','Experience §2 · L4','Experience §1 · L17','Experience §2 · L8','Overall'],
        rat:'Strong reliability and systems evidence at comparable scale. The open question is Go depth: production work is Rust, with Go confined to side projects (confidence 0.61). Recommend a technical screen focused on language ramp rather than a pass on this criterion.'}};
    const mtF=[['Skills coverage',50],['Experience depth',20],['Domain relevance',15],['Location & work auth',8],['Compensation alignment',7]];
    const mt={
      c1:{got:[44,18,13,8,6],m:['Go','Distributed systems','PostgreSQL','Kubernetes','API design','Observability','gRPC'],x:['Kafka'],notes:['7 of 8 weighted skills present with direct resume evidence','9 yrs at staff scope — exceeds the 7+ requirement','Billing and payments infrastructure — adjacent to the Platform team domain','Austin, US work authorization, remote-eligible','Stated expectation $210k sits inside the $185–225k band']},
      c2:{got:[41,16,12,8,7],m:['Go','Distributed systems','PostgreSQL','Kafka','API design','gRPC'],x:['Kubernetes','Observability'],notes:['6 of 8 — Kubernetes absent; infra was managed by a platform team at Cloudbase','7 yrs at senior scope — meets the requirement','Commerce infrastructure — adjacent domain','New York, US work authorization','$205k ask inside the band']},
      c3:{got:[38,20,11,8,5],m:['Distributed systems','PostgreSQL','API design','Observability','gRPC'],x:['Go (partial)','Kubernetes','Kafka'],notes:['5 of 8 — Go rated partial: 2 yrs against 4 required','11 yrs including principal scope — exceeds','Multi-tenant SaaS platform — strong domain overlap','Denver, remote-eligible','$235k ask exceeds the band top by $10k']},
      c4:{got:[36,14,12,8,7],m:['Go','PostgreSQL','Kubernetes','API design'],x:['Kafka','Observability','gRPC'],notes:['4 of 8 with direct evidence','6 yrs at mid-level scope — meets the minimum','Analytics tooling — moderate overlap','Austin — on-site possible','$180k ask under the band']},
      c5:{got:[35,15,10,8,6],m:['Go','PostgreSQL','Observability'],x:['Kubernetes','Kafka','gRPC'],notes:['3 of 8 with direct evidence; ClickHouse partially credits data stores','8 yrs — meets the requirement','Event ingestion — moderate overlap','Seattle, US work authorization','$200k ask inside the band']},
      c6:{got:[27,9,8,8,7],m:['Go','PostgreSQL'],x:['Distributed systems','Kubernetes','Kafka','Observability','gRPC'],notes:['2 of 8 with direct evidence','4 yrs against 7+ required — below the bar','Single-service product work — weak overlap','Remote, US work authorization','$150k ask under the band']},
      c7:{got:[39,16,13,8,6],m:['Distributed systems','PostgreSQL','Kubernetes','Observability','API design'],x:['Go (partial)','Kafka','gRPC'],notes:['5 of 8 — Go partial: production work is Rust','8 yrs at senior scope — meets the requirement','Telemetry ingestion at grid scale — strong overlap','Chicago, remote-eligible','$215k ask inside the band']}};
    const rk={c1:{sk:90,ex:85,as:87,re:80,rf:100},c2:{sk:84,ex:72,as:82,re:90,rf:20},c3:{sk:78,ex:95,as:78,re:60,rf:40},c4:{sk:74,ex:62,as:74,re:95,rf:0},c5:{sk:72,ex:70,as:71,re:70,rf:0},c6:{sk:56,ex:40,as:58,re:100,rf:0},c7:{sk:80,ex:75,as:79,re:100,rf:0}};
    const gapSkills=[['Go',4],['Distributed systems',5],['PostgreSQL',4],['Kubernetes',3],['API design',4],['Observability',3],['Kafka',2],['gRPC',2]];
    const gapLv={c1:[4,5,4,3,4,3,1,3],c2:[4,4,4,1,4,2,3,3],c3:[3,5,5,1,4,3,0,2],c4:[3,3,3,3,3,2,0,0],c7:[2,4,4,3,4,4,1,1]};
    const gapNotes={
      c3:{0:'Adopted 2023 — ramp viable given JVM depth; pair with Go-heavy first project',3:'No direct exposure; Nortia ran custom orchestration',6:'None found — required only at level 2'},
      c7:{0:'Production Rust, Go in side projects — screen for ramp speed',6:'None found',7:'Standards doc references gRPC but no build evidence'},
      c1:{6:'Redis streams used where Kafka expected — concepts transfer'},
      c2:{3:'Platform team owned infra — concept familiarity likely, practice unproven'},
      c4:{6:'None found',7:'None found'}};
    const notifs=[
      {id:'n1',day:'Today',kind:'ai',t:'09:42',title:'Screening complete on Senior Backend Engineer',body:'A. Diallo scored 79 — one low-confidence criterion flagged for review.',unread:true,go:'screening',act:'View result'},
      {id:'n2',day:'Today',kind:'approval',t:'09:15',title:'Rubric change awaits your approval',body:'j1-r3 → r4: cap indirect-evidence weight on Communication at 50%.',unread:true,go:'bias',act:'Review change'},
      {id:'n3',day:'Today',kind:'mention',t:'08:51',title:'A. Osei mentioned you on Priya Raghavan',body:'"Can we lock the system-design panel today? Thursday works for all three of us."',unread:true,go:'scheduling',act:'Open scheduler'},
      {id:'n4',day:'Today',kind:'reminder',t:'08:00',title:'Offer OF-2231 expires in 5 days',body:'Grace Nakamura — sent Jul 1, no response yet. Accept model reads 0.84.',unread:true,go:'offers',act:'View offer'},
      {id:'n5',day:'Yesterday',kind:'system',t:'22:10',title:'Nightly duplicate scan finished',body:'3 candidate pairs flagged above the 70% similarity threshold.',unread:false,go:'duplicates',act:'Review pairs'},
      {id:'n6',day:'Yesterday',kind:'ai',t:'18:34',title:'Bias monitor: Communication cohort gap moved 5.8 → 6.2',body:'Still under review. Proposed rubric fix is drafted and pending approval.',unread:false,go:'bias',act:'Open monitor'},
      {id:'n7',day:'Yesterday',kind:'reminder',t:'17:00',title:'Feedback due: Daniel Okafor technical screen',body:'J. Park interviewed Jul 1 — scorecard not yet submitted.',unread:false,go:'feedback',act:'Open scorecard'},
      {id:'n8',day:'Yesterday',kind:'system',t:'09:00',title:'Weekly hiring digest ready',body:'14 open reqs, 3 past SLA. Median time-to-hire down 6 days vs Q1.',unread:false,go:'analytics',act:'View dashboard'},
      {id:'n9',day:'Yesterday',kind:'mention',t:'08:42',title:'L. Beaumont assigned you 2 candidates on Frontend Engineer',body:'Both screened above 75 — awaiting phone-screen scheduling.',unread:false,go:'pipeline',act:'Open pipeline'}];
    const audit=[
      {day:'Jul 3',t:'09:42:17',who:'SCREEN v4.2',sys:true,what:'AI screening scored A. Diallo 79 on Senior Backend Engineer',meta:'rubric j1-r3 · run sc_8f42 · 5.8s',tag:'AI'},
      {day:'Jul 3',t:'09:41:58',who:'R. Kim',what:'Triggered AI screening on A. Diallo',meta:'queue age 1d',tag:'AI'},
      {day:'Jul 3',t:'09:15:03',who:'A. Osei',what:'Proposed rubric change j1-r3 → r4',meta:'Communication indirect-evidence cap · pending approval',tag:'Change'},
      {day:'Jul 3',t:'08:51:22',who:'A. Osei',what:'Commented on candidate P. Raghavan',meta:'panel scheduling',tag:'Activity'},
      {day:'Jul 3',t:'08:02:41',who:'System',sys:true,what:'Reminder queued: offer OF-2231 expiry T−5',meta:'policy R-2',tag:'System'},
      {day:'Jul 2',t:'17:20:08',who:'I. Whitfield',what:'Viewed bias audit — 90-day cohort report',meta:'read-only',tag:'Access'},
      {day:'Jul 2',t:'16:44:12',who:'D. Sharma',what:'Exported report: Source effectiveness (CSV)',meta:'no PII included',tag:'Data'},
      {day:'Jul 2',t:'15:31:47',who:'MATCH v3.1',sys:true,what:'Recomputed matches for Senior Backend Engineer',meta:'128 candidates · 41s',tag:'AI'},
      {day:'Jul 2',t:'14:12:33',who:'L. Beaumont',what:'Merged duplicate records: T. Nguyen (2 profiles)',meta:'similarity 97% · both applications preserved',tag:'Data'},
      {day:'Jul 2',t:'11:26:54',who:'R. Kim',what:'Changed role: J. Park — Interviewer → Hiring manager (j5)',meta:'approved by policy',tag:'Admin'},
      {day:'Jul 2',t:'10:05:19',who:'System',sys:true,what:'Auto-archived 12 stale applications',meta:'policy P-7 · 90 days inactive · reversible 30d',tag:'System'},
      {day:'Jul 2',t:'09:48:02',who:'M. Iyer',what:'Rescheduled interview: S. Marino exec round → Jul 8',meta:'candidate request',tag:'Activity'},
      {day:'Jul 1',t:'18:22:45',who:'K. Boateng',what:'Approved offer OF-2231 — G. Nakamura',meta:'Finance approval chain complete',tag:'Change'},
      {day:'Jul 1',t:'16:10:11',who:'J. Park',what:'Submitted scorecard: D. Okafor technical screen',meta:'recommendation: Hire',tag:'Activity'},
      {day:'Jul 1',t:'13:37:29',who:'R. Kim',what:'Sent offer OF-2231',meta:'expires Jul 8',tag:'Activity'},
      {day:'Jul 1',t:'09:12:57',who:'SCREEN v4.2',sys:true,what:'Batch screening: 22 candidates on Frontend Engineer',meta:'19 scored · 3 low-confidence flags',tag:'AI'},
      {day:'Jul 1',t:'08:30:40',who:'I. Whitfield',what:'Enabled masking: employment gaps under 6 months',meta:'applies to all future runs',tag:'Admin'}];
    const users=[
      {name:'Rachel Kim',email:'rachel.kim@meridianlabs.com',role:'Admin',title:'Lead Recruiter',last:'Active now',tfa:true},
      {name:'Dev Sharma',email:'dev.sharma@meridianlabs.com',role:'Recruiter',title:'Technical Recruiter',last:'2h ago',tfa:true},
      {name:'Lena Beaumont',email:'lena.beaumont@meridianlabs.com',role:'Recruiter',title:'Recruiter',last:'1d ago',tfa:true},
      {name:'Amos Osei',email:'amos.osei@meridianlabs.com',role:'Hiring manager',title:'Eng Director, Platform',last:'3h ago',tfa:true},
      {name:'June Park',email:'june.park@meridianlabs.com',role:'Interviewer',title:'Staff Engineer',last:'5d ago',tfa:false},
      {name:'Maya Iyer',email:'maya.iyer@meridianlabs.com',role:'Coordinator',title:'Recruiting Coordinator',last:'30m ago',tfa:true},
      {name:'Iris Whitfield',email:'iris.whitfield@meridianlabs.com',role:'Compliance',title:'People Compliance Lead',last:'Yesterday',tfa:true}];
    const roles=['Admin','Recruiter','Hiring manager','Interviewer','Coordinator','Compliance'];
    const perms=[['View candidates',[1,1,1,1,1,1]],['Edit candidates',[1,1,0,0,1,0]],['Run AI screening',[1,1,1,0,0,0]],['Adjust ranking weights',[1,1,1,0,0,0]],['Edit rubrics',[1,0,1,0,0,0]],['Approve rubric changes',[1,0,0,0,0,1]],['View bias audits',[1,0,0,0,0,1]],['Generate offers',[1,1,0,0,0,0]],['Approve offers',[1,0,1,0,0,0]],['Export data & PII',[1,0,0,0,0,1]],['Manage users',[1,0,0,0,0,0]],['View audit log',[1,0,0,0,0,1]]];
    const days={c7:1,c12:0,c2:4,c3:8,c4:3,c10:5,c1:6,c9:2,c11:3,c8:2};
    const upFields={
      f1:{cand:'Amara Diallo',rows:[['Full name','Amara Diallo',99],['Email','amara.diallo@qmail.com',99],['Phone','+1 (773) 555-0129',62],['Current title','Senior Software Engineer',96],['Company','Quanta Grid',97],['Experience','8 years · 3 roles',91],['Skills','Rust, Go, TimescaleDB, Postgres, K8s +6',88],['Education','B.S. — degree level retained',93],['Location','Chicago, IL',95]],note:'OCR ambiguity on phone: 0129 vs 0179 — confirm before create.',dup:'No existing record matched — nearest 41%, below the 70% threshold.'},
      f2:{cand:'Jason Chen',rows:[['Full name','Jason Chen',98],['Email','jchen.dev@pmail.com',99],['Phone','+1 (408) 555-0163',94],['Current title','Software Engineer',92],['Company','Verdant Systems',95],['Experience','5 years · 2 roles',89],['Skills','TypeScript, React, Node, GraphQL +4',86],['Education','B.S. — degree level retained',91],['Location','San Jose, CA',96]],note:'',dup:'No existing record matched — nearest 38%.'},
      f3:{cand:'Unresolved',rows:[['Full name','K. Ramirez (low contrast scan)',74],['Email','— not found',0],['Phone','+1 (305) 555-01__',41],['Current title','Engineering Manager (?)',68],['Company','Southfield or Southfields',63],['Experience','dates ambiguous — overlapping ranges',52],['Skills','Java, Spring, AWS',81],['Education','M.S. — degree level retained',77],['Location','Miami, FL',88]],note:'Scan quality below threshold. 4 fields need manual confirmation before a record is created.',dup:'Cannot check duplicates until email or phone is confirmed.'},
      f4:{cand:'Mariana Santos',rows:[['Full name','Mariana Santos',98],['Email','m.santos@vmail.br',99],['Phone','+1 (617) 555-0192',95],['Current title','Senior Data Engineer',94],['Company','Verawave',96],['Experience','7 years · 3 roles',92],['Skills','Python, Spark, Airflow, dbt +5',90],['Education','M.S. — degree level retained',94],['Location','Boston, MA',97]],note:'',dup:'No existing record matched — nearest 44%.'}};
    const dups=[
      {id:'d1',a:'Thomas Nguyen',b:'Tom Nguyen',sim:97,why:['Same email','Same phone','Resume text 91% overlap'],rows:[
        ['Name','Thomas Nguyen','Tom Nguyen',false],['Email','t.nguyen@vmail.com','t.nguyen@vmail.com',true],['Phone','+1 (503) 555-0147','+1 (503) 555-0147',true],['Location','Portland, OR','Portland, OR',true],['Current role','Senior Backend Engineer — Vantiv Labs','Senior Backend Engineer — Vantiv Labs',true],['Applied to','Senior Backend Engineer','Senior Backend Engineer + ML Engineer',false],['Resume','v1 · uploaded Mar 14','v2 · uploaded Jun 18',false],['Source','LinkedIn','Direct',false],['Notes','2 recruiter notes','—',false]]},
      {id:'d2',a:'Katherine Doyle',b:'Kate Doyle-Ramos',sim:89,why:['Same phone','Employer + title match'],rows:[
        ['Name','Katherine Doyle','Kate Doyle-Ramos',false],['Email','kdoyle@wmail.com','kate.dr@pmail.io',false],['Phone','+1 (312) 555-0186','+1 (312) 555-0186',true],['Location','Chicago, IL','Chicago, IL',true],['Current role','Product Designer — Marrow','Product Designer — Marrow',true],['Applied to','Staff Product Designer','Staff Product Designer',true],['Resume','v1 · uploaded May 2','v1 · uploaded Jun 29',false],['Source','Agency — TalentBridge','Direct',false],['Notes','—','1 note',false]]},
      {id:'d3',a:'R. Iyer',b:'Rohan Iyer',sim:76,why:['Name similarity','Same metro'],rows:[
        ['Name','R. Iyer','Rohan Iyer',false],['Email','r.iyer88@pmail.com','rohan@iyer.dev',false],['Phone','+1 (650) 555-0171','+1 (650) 555-0134',false],['Location','San Mateo, CA','Palo Alto, CA',false],['Current role','Data Engineer — Cardinal','ML Engineer — Softline',false],['Applied to','ML Engineer','ML Engineer',true],['Resume','v1 · uploaded Jun 11','v1 · uploaded Jun 30',false],['Source','Job board','Referral',false],['Notes','—','—',true]]}];
    const offers=[
      {id:'o1',cand:'Grace Nakamura',job:'Staff Product Designer',code:'OF-2231',status:'Sent',statusK:'sent',base:'$228,000',equity:'0.18%',bonus:'$20,000 sign-on',sent:'Jul 1',expires:'Jul 8 · 5 days',prob:'0.84',
        chain:[['A. Osei — hiring approval','Jun 30','done'],['K. Boateng — finance','Jul 1','done'],['Candidate response','—','wait']],
        events:[['Jul 1 · 13:37','Offer sent by R. Kim'],['Jul 1 · 18:22','Finance approved final numbers'],['Jun 30 · 15:10','Draft approved by A. Osei'],['Jun 29 · 11:02','Draft generated from band L6 · Design']]},
      {id:'o2',cand:'Marcus Webb',job:'Senior Backend Engineer',code:'OF-2219',status:'Accepted',statusK:'acc',base:'$212,000',equity:'0.09%',bonus:'$15,000 sign-on',sent:'Jun 16',expires:'Accepted Jun 20 · starts Jul 14',prob:'—',
        chain:[['A. Osei — hiring approval','Jun 15','done'],['K. Boateng — finance','Jun 16','done'],['Candidate accepted','Jun 20','done']],
        events:[['Jun 20 · 09:14','Offer accepted — start date Jul 14'],['Jun 18 · 16:40','Candidate asked about equity refresh policy'],['Jun 16 · 10:22','Offer sent by D. Sharma']]},
      {id:'o3',cand:'Elena Petrova',job:'ML Engineer',code:'OF-2228',status:'Negotiating',statusK:'neg',base:'$238,000 → counter +$15k',equity:'0.12%',bonus:'—',sent:'Jun 26',expires:'Counter received Jul 1',prob:'0.71',
        chain:[['D. Sharma — hiring approval','Jun 25','done'],['K. Boateng — finance','pending on counter','wait'],['Candidate response','countered Jul 1','warn']],
        events:[['Jul 1 · 14:05','Counter received: +$15k base, cites competing offer'],['Jun 26 · 09:30','Offer sent by R. Kim']]},
      {id:'o4',cand:'Ravi Patel',job:'Frontend Engineer',code:'OF-2202',status:'Declined',statusK:'dec',base:'$168,000',equity:'0.05%',bonus:'—',sent:'Jun 5',expires:'Declined Jun 12',prob:'—',
        chain:[['J. Park — hiring approval','Jun 4','done'],['K. Boateng — finance','Jun 5','done'],['Candidate declined','Jun 12','fail']],
        events:[['Jun 12 · 17:20','Declined — base 12% below ask; took competing offer'],['Jun 5 · 11:12','Offer sent by L. Beaumont']]}];
    const sched=[
      {dow:'Mon',dom:'6',t:'10:00',cand:'Priya Raghavan',type:'System design panel',who:'A. Osei +2'},
      {dow:'Tue',dom:'7',t:'14:00',cand:'Hana Yoshida',type:'ML depth interview',who:'D. Sharma'},
      {dow:'Wed',dom:'8',t:'11:00',cand:'Sofia Marino',type:'Exec round',who:'S. Whitmore'},
      {dow:'Thu',dom:'9',t:'09:30',cand:'Daniel Okafor',type:'Hiring manager screen',who:'A. Osei'}];
  return {cands,jobs,crit,critW,scr,mtF,mt,rk,gapSkills,gapLv,gapNotes,notifs,audit,users,roles,perms,days,upFields,dups,offers,sched};
}
