import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { testPlanHTML } from './testplan'
import { riskHTML } from './risk'
import { conclusionHTML } from './conclusion'
import { flowchartHTML } from './flowchart_content'
import { testCasesHTML } from './testcases_content'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

// ─── HOME HUB ───────────────────────────────────────────────────────────────
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GoSMS QA Assessment — Sourav | Mulah Technologies</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0A1628;--navy2:#0F2044;--blue:#1B4FD8;--blue2:#2563EB;--accent:#38BDF8;
  --green:#22C55E;--red:#EF4444;--orange:#F59E0B;--purple:#8B5CF6;
  --text:#E2E8F0;--muted:#94A3B8;--border:rgba(148,163,184,0.15);
}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--text);min-height:100vh;overflow-x:hidden}
.bg-grid{position:fixed;inset:0;background-image:
  linear-gradient(rgba(56,189,248,0.03) 1px,transparent 1px),
  linear-gradient(90deg,rgba(56,189,248,0.03) 1px,transparent 1px);
background-size:48px 48px;pointer-events:none;z-index:0}
.bg-glow{position:fixed;top:-30%;left:50%;transform:translateX(-50%);
  width:800px;height:600px;background:radial-gradient(ellipse,rgba(27,79,216,0.18) 0%,transparent 70%);
  pointer-events:none;z-index:0}
header{z-index:10;padding:24px 40px;display:flex;align-items:center;justify-content:space-between;
  border-bottom:1px solid var(--border);background:rgba(10,22,40,0.8);backdrop-filter:blur(12px);
  position:sticky;top:0}
.logo{display:flex;align-items:center;gap:12px}
.logo-icon{width:40px;height:40px;background:linear-gradient(135deg,var(--blue),var(--accent));
  border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:white}
.logo-text{font-size:16px;font-weight:700;color:white}
.logo-sub{font-size:11px;color:var(--muted);font-weight:400}
.header-badges{display:flex;gap:8px;align-items:center}
.badge{font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px;border:1px solid}
.badge-blue{background:rgba(27,79,216,0.15);border-color:rgba(37,99,235,0.4);color:#60A5FA}
.badge-green{background:rgba(34,197,94,0.12);border-color:rgba(34,197,94,0.35);color:#4ADE80}
.badge-purple{background:rgba(139,92,246,0.12);border-color:rgba(139,92,246,0.35);color:#A78BFA}
.hero{position:relative;z-index:5;text-align:center;padding:80px 40px 60px;max-width:900px;margin:0 auto}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;
  background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);
  border-radius:30px;padding:6px 18px;font-size:12px;color:var(--accent);
  font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:28px}
.hero h1{font-size:clamp(36px,5vw,64px);font-weight:900;line-height:1.1;
  background:linear-gradient(135deg,#FFFFFF 0%,var(--accent) 60%,var(--blue) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:16px}
.hero-sub{font-size:18px;color:var(--muted);line-height:1.6;max-width:640px;margin:0 auto 40px}
.hero-meta{display:flex;justify-content:center;flex-wrap:wrap;gap:24px;margin-bottom:60px}
.meta-item{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted)}
.meta-item span{color:var(--text);font-weight:600}
.meta-dot{width:4px;height:4px;border-radius:50%;background:var(--accent)}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:800px;margin:0 auto 80px;padding:0 40px}
.stat-card{background:rgba(15,32,68,0.6);border:1px solid var(--border);border-radius:16px;
  padding:24px;text-align:center;transition:transform 0.2s,border-color 0.2s}
.stat-card:hover{transform:translateY(-4px);border-color:rgba(56,189,248,0.4)}
.stat-num{font-size:36px;font-weight:900;background:linear-gradient(135deg,var(--accent),var(--blue2));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-label{font-size:12px;color:var(--muted);margin-top:4px;font-weight:500}
section{position:relative;z-index:5;max-width:1100px;margin:0 auto;padding:0 40px 80px}
.section-header{margin-bottom:32px}
.section-label{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
  color:var(--accent);margin-bottom:8px}
.section-title{font-size:28px;font-weight:800;color:white}
.section-sub{font-size:14px;color:var(--muted);margin-top:6px}
.nav-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.nav-card{background:linear-gradient(135deg,rgba(15,32,68,0.9),rgba(10,22,40,0.95));
  border:1px solid var(--border);border-radius:20px;padding:32px;
  text-decoration:none;color:inherit;display:block;position:relative;overflow:hidden;
  transition:transform 0.25s,border-color 0.25s,box-shadow 0.25s;cursor:pointer}
.nav-card::before{content:'';position:absolute;inset:0;opacity:0;transition:opacity 0.25s;border-radius:20px}
.nav-card:hover{transform:translateY(-6px);box-shadow:0 24px 48px rgba(0,0,0,0.4)}
.nav-card:hover::before{opacity:1}
.card-1::before{background:linear-gradient(135deg,rgba(27,79,216,0.12),transparent)}
.card-1:hover{border-color:rgba(37,99,235,0.5)}
.card-2::before{background:linear-gradient(135deg,rgba(34,197,94,0.1),transparent)}
.card-2:hover{border-color:rgba(34,197,94,0.4)}
.card-3::before{background:linear-gradient(135deg,rgba(239,68,68,0.1),transparent)}
.card-3:hover{border-color:rgba(239,68,68,0.4)}
.card-4::before{background:linear-gradient(135deg,rgba(245,158,11,0.1),transparent)}
.card-4:hover{border-color:rgba(245,158,11,0.4)}
.card-5::before{background:linear-gradient(135deg,rgba(139,92,246,0.1),transparent)}
.card-5:hover{border-color:rgba(139,92,246,0.4)}
.card-icon{font-size:36px;margin-bottom:16px;display:block}
.card-num{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.card-title{font-size:18px;font-weight:800;color:white;margin-bottom:8px}
.card-desc{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:20px}
.card-tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{font-size:10px;font-weight:600;padding:3px 10px;border-radius:10px;
  background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.2);color:var(--accent)}
.card-arrow{position:absolute;top:28px;right:28px;font-size:20px;opacity:0.3;transition:opacity 0.2s,transform 0.2s}
.nav-card:hover .card-arrow{opacity:1;transform:translate(4px,-4px)}
.arch-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;
  background:rgba(15,32,68,0.5);border:1px solid var(--border);border-radius:20px;overflow:hidden}
.arch-layer{padding:24px 16px;text-align:center;border-right:1px solid var(--border);transition:background 0.2s}
.arch-layer:last-child{border-right:none}
.arch-layer:hover{background:rgba(56,189,248,0.05)}
.arch-num{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:1px;margin-bottom:8px}
.arch-icon{font-size:28px;margin-bottom:8px}
.arch-name{font-size:12px;font-weight:700;color:white;margin-bottom:4px}
.arch-risk{font-size:10px;color:var(--muted);line-height:1.4}
.principles-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.principle{background:rgba(15,32,68,0.4);border:1px solid var(--border);border-radius:14px;padding:20px}
.principle-icon{font-size:24px;margin-bottom:10px}
.principle-title{font-size:13px;font-weight:700;color:white;margin-bottom:6px}
.principle-desc{font-size:12px;color:var(--muted);line-height:1.5}
footer{position:relative;z-index:5;text-align:center;padding:40px;
  border-top:1px solid var(--border);color:var(--muted);font-size:12px}
footer strong{color:var(--text)}
@keyframes pulse-ring{0%{transform:scale(0.8);opacity:1}80%,100%{transform:scale(2);opacity:0}}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--green);position:relative;display:inline-block}
.live-dot::after{content:'';position:absolute;inset:-2px;border-radius:50%;background:var(--green);
  animation:pulse-ring 1.5s ease-out infinite}
@media(max-width:768px){
  .stats-row{grid-template-columns:repeat(2,1fr);padding:0 20px}
  .arch-grid{grid-template-columns:1fr}
  .arch-layer{border-right:none;border-bottom:1px solid var(--border)}
  .principles-grid{grid-template-columns:1fr}
  header{padding:16px 20px}
  section{padding:0 20px 60px}
  .hero{padding:60px 20px 40px}
  .header-badges{display:none}
}
</style>
</head>
<body>
<div class="bg-grid"></div>
<div class="bg-glow"></div>
<header>
  <div class="logo">
    <div class="logo-icon">QA</div>
    <div>
      <div class="logo-text">GoSMS — QA Assessment</div>
      <div class="logo-sub">Sourav · Mulah Technologies, Malaysia</div>
    </div>
  </div>
  <div class="header-badges">
    <span class="badge badge-green"><span class="live-dot" style="margin-right:6px"></span>Complete Submission</span>
    <span class="badge badge-blue">30 Test Cases</span>
    <span class="badge badge-purple">v1.0 Final</span>
  </div>
</header>
<div class="hero">
  <div class="hero-eyebrow"><span>🎯</span> Quality Assurance Engineering Intern — Assessment Submission</div>
  <h1>GoSMS SMS Top-Up<br>QA Test Plan</h1>
  <p class="hero-sub">A complete, professional-grade Quality Assurance assessment for the GoSMS SMS Credit Top-Up workflow — covering architecture analysis, state machine modelling, 30 detailed test cases, risk registers, and mitigation strategies.</p>
  <div class="hero-meta">
    <div class="meta-item">📋 <span>Sourav</span></div>
    <div class="meta-dot"></div>
    <div class="meta-item">🏢 <span>Mulah Technologies, Malaysia</span></div>
    <div class="meta-dot"></div>
    <div class="meta-item">🌐 <span>Hiredly Platform</span></div>
    <div class="meta-dot"></div>
    <div class="meta-item">📅 <span>26 February 2026</span></div>
  </div>
</div>
<div class="stats-row">
  <div class="stat-card"><div class="stat-num">30</div><div class="stat-label">Test Cases</div></div>
  <div class="stat-card"><div class="stat-num">10</div><div class="stat-label">System States</div></div>
  <div class="stat-card"><div class="stat-num">24</div><div class="stat-label">Failure Points</div></div>
  <div class="stat-card"><div class="stat-num">19</div><div class="stat-label">Risk Entries</div></div>
</div>
<section>
  <div class="section-header">
    <div class="section-label">📦 Assessment Deliverables</div>
    <div class="section-title">Five Complete Submissions</div>
    <div class="section-sub">Click any section to view the full detailed content</div>
  </div>
  <div class="nav-grid">
    <a href="/testplan" class="nav-card card-1">
      <span class="card-arrow">↗</span><span class="card-icon">📄</span>
      <div class="card-num">Deliverable 01</div>
      <div class="card-title">QA Test Plan & Feature Analysis</div>
      <div class="card-desc">Complete test strategy, feature overview, 9-step workflow, system architecture breakdown, 10 assumptions, and 24 failure point catalogue.</div>
      <div class="card-tags"><span class="tag">Feature Analysis</span><span class="tag">Architecture</span><span class="tag">Strategy</span></div>
    </a>
    <a href="/flowchart" class="nav-card card-2">
      <span class="card-arrow">↗</span><span class="card-icon">🗺</span>
      <div class="card-num">Deliverable 02</div>
      <div class="card-title">Professional QA Flowchart</div>
      <div class="card-desc">Multi-layer flowchart with all decision gates, failure paths, retry logic, rollback indicators, and state transition reference table (S0–S9).</div>
      <div class="card-tags"><span class="tag">State Machine</span><span class="tag">Flow Design</span><span class="tag">S0→S9</span></div>
    </a>
    <a href="/testcases" class="nav-card card-3">
      <span class="card-arrow">↗</span><span class="card-icon">🧪</span>
      <div class="card-num">Deliverable 03</div>
      <div class="card-title">Complete Test Case Tables</div>
      <div class="card-desc">30 test cases across 7 categories: Happy Path, Input Validation, Integration, Email, Database, Concurrency, and Multi-Company Allocation.</div>
      <div class="card-tags"><span class="tag">10 Critical</span><span class="tag">15 High</span><span class="tag">5 Medium</span></div>
    </a>
    <a href="/risk" class="nav-card card-4">
      <span class="card-arrow">↗</span><span class="card-icon">⚠️</span>
      <div class="card-num">Deliverable 04</div>
      <div class="card-title">Risk & Mitigation Register</div>
      <div class="card-desc">19 risk entries across 4 severity tiers covering financial risk, API dependency, data integrity, security threats, and operational continuity.</div>
      <div class="card-tags"><span class="tag">Risk Matrix</span><span class="tag">Severity Ratings</span><span class="tag">Mitigations</span></div>
    </a>
    <a href="/conclusion" class="nav-card card-5">
      <span class="card-arrow">↗</span><span class="card-icon">🏁</span>
      <div class="card-num">Deliverable 05</div>
      <div class="card-title">Conclusion & QA Insights</div>
      <div class="card-desc">Key findings, release criteria (Go/No-Go), post-release monitoring plan, QA philosophy, and professional candidate submission statement.</div>
      <div class="card-tags"><span class="tag">Release Criteria</span><span class="tag">Insights</span><span class="tag">Final Assessment</span></div>
    </a>
  </div>
</section>
<section>
  <div class="section-header">
    <div class="section-label">🏗 System Architecture</div>
    <div class="section-title">5-Layer Architecture Overview</div>
    <div class="section-sub">Each layer analysed independently for failure points and risk</div>
  </div>
  <div class="arch-grid">
    <div class="arch-layer"><div class="arch-num">LAYER 01</div><div class="arch-icon">🖥</div><div class="arch-name">UI Layer</div><div class="arch-risk">Input validation, brand dropdown, outlet rendering, submit button state</div></div>
    <div class="arch-layer"><div class="arch-num">LAYER 02</div><div class="arch-icon">⚙️</div><div class="arch-name">Business Logic</div><div class="arch-risk">Company mapping, aggregation, total calculation, transaction ID generation</div></div>
    <div class="arch-layer"><div class="arch-num">LAYER 03</div><div class="arch-icon">🔌</div><div class="arch-name">QuickBooks API</div><div class="arch-risk">Quotation creation, idempotency, retry logic, error handling</div></div>
    <div class="arch-layer"><div class="arch-num">LAYER 04</div><div class="arch-icon">📧</div><div class="arch-name">Email Service</div><div class="arch-risk">SMTP delivery, retry queue, non-blocking flow design</div></div>
    <div class="arch-layer"><div class="arch-num">LAYER 05</div><div class="arch-icon">🗄</div><div class="arch-name">Database</div><div class="arch-risk">Atomic writes, rollback, row-level locking, audit trail</div></div>
  </div>
</section>
<section>
  <div class="section-header">
    <div class="section-label">🧠 Core QA Principles Applied</div>
    <div class="section-title">Professional QA Philosophy</div>
  </div>
  <div class="principles-grid">
    <div class="principle"><div class="principle-icon">⚛️</div><div class="principle-title">Atomicity First</div><div class="principle-desc">All write operations verified as atomic — complete success or complete rollback. No partial state permitted in a financial system.</div></div>
    <div class="principle"><div class="principle-icon">🔑</div><div class="principle-title">Idempotency</div><div class="principle-desc">Unique Transaction IDs ensure that retry submissions or network duplicates never result in duplicate financial records or double-credits.</div></div>
    <div class="principle"><div class="principle-icon">🗺</div><div class="principle-title">Mapping Accuracy</div><div class="principle-desc">Outlet-to-Company mapping verified at the DB level — not just UI. Credit allocation accuracy is the single most critical business requirement.</div></div>
    <div class="principle"><div class="principle-icon">🛡</div><div class="principle-title">Graceful Failure</div><div class="principle-desc">Every failure path terminates cleanly with informative user messages, full error logging, and a clear Transaction ID for support reference.</div></div>
    <div class="principle"><div class="principle-icon">🔄</div><div class="principle-title">Concurrency Safety</div><div class="principle-desc">Row-level locking tested under simultaneous submission conditions. Race conditions and lost updates explicitly verified at the database level.</div></div>
    <div class="principle"><div class="principle-icon">📋</div><div class="principle-title">Audit Trail</div><div class="principle-desc">Every transaction — success or failure — must produce a complete audit log entry for financial compliance, reconciliation, and regulatory purposes.</div></div>
  </div>
</section>
<footer>
  <strong>Sourav</strong> · Quality Assurance Engineering Intern Assessment · <strong>Mulah Technologies, Malaysia</strong> · Hiredly Platform · 26 February 2026<br>
  <span style="margin-top:6px;display:block">GoSMS SMS Top-Up Feature | MikeTango / QuickBooks Integration | v1.0 Final</span>
</footer>
</body>
</html>`)
})

// ─── TEST PLAN ───────────────────────────────────────────────────────────────
app.get('/testplan', (c) => {
  return c.html(testPlanHTML)
})

// ─── FLOWCHART ───────────────────────────────────────────────────────────────
app.get('/flowchart', (c) => {
  return c.html(flowchartHTML)
})

// ─── TEST CASES ──────────────────────────────────────────────────────────────
app.get('/testcases', (c) => {
  return c.html(testCasesHTML)
})

// ─── RISK REGISTER ──────────────────────────────────────────────────────────
app.get('/risk', (c) => {
  return c.html(riskHTML)
})

// ─── CONCLUSION ─────────────────────────────────────────────────────────────
app.get('/conclusion', (c) => {
  return c.html(conclusionHTML)
})

export default app
