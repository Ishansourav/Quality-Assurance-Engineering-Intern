export const testPlanHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QA Test Plan — GoSMS | Sourav</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0A1628;--navy2:#0F2044;--blue:#1B4FD8;--blue2:#2563EB;--accent:#38BDF8;
  --green:#22C55E;--red:#EF4444;--orange:#F59E0B;--purple:#8B5CF6;
  --text:#E2E8F0;--muted:#94A3B8;--border:rgba(148,163,184,0.15)}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--text);min-height:100vh}
.bg-grid{position:fixed;inset:0;background-image:linear-gradient(rgba(56,189,248,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.025) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0}
nav{position:sticky;top:0;z-index:100;background:rgba(10,22,40,0.9);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);padding:14px 40px;display:flex;align-items:center;gap:16px}
.nav-back{color:var(--accent);text-decoration:none;font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px}
.nav-back:hover{color:white}
.nav-title{font-size:14px;font-weight:700;color:white}
.nav-badge{font-size:11px;padding:3px 10px;border-radius:12px;background:rgba(27,79,216,0.2);border:1px solid rgba(37,99,235,0.4);color:#60A5FA;margin-left:auto}

.page{max-width:980px;margin:0 auto;padding:48px 40px 80px;position:relative;z-index:5}

/* TITLE BLOCK */
.doc-header{background:linear-gradient(135deg,rgba(27,79,216,0.15),rgba(15,32,68,0.8));
  border:1px solid rgba(37,99,235,0.3);border-radius:20px;padding:40px 48px;margin-bottom:48px}
.doc-eyebrow{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
  color:var(--accent);margin-bottom:12px}
.doc-title{font-size:36px;font-weight:900;color:white;margin-bottom:8px;line-height:1.2}
.doc-sub{font-size:15px;color:var(--muted);margin-bottom:28px;line-height:1.6}
.meta-table{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.meta-cell{background:rgba(10,22,40,0.5);border:1px solid var(--border);border-radius:10px;padding:14px 16px}
.meta-key{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px}
.meta-val{font-size:13px;font-weight:600;color:white}

/* SECTIONS */
.section{margin-bottom:48px}
.sec-tag{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin-bottom:8px}
.sec-title{font-size:22px;font-weight:800;color:white;margin-bottom:4px}
.sec-sub{font-size:13px;color:var(--muted);margin-bottom:24px}

/* CONTENT CARDS */
.card{background:rgba(15,32,68,0.5);border:1px solid var(--border);border-radius:16px;padding:28px;margin-bottom:16px}
.card-title{font-size:15px;font-weight:700;color:white;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.card-body{font-size:13px;color:var(--muted);line-height:1.8}
.card-body p{margin-bottom:10px}
.card-body p:last-child{margin-bottom:0}
.card-body strong{color:var(--text)}

/* ASSUMPTION LIST */
.assumption-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.assumption{background:rgba(15,32,68,0.4);border:1px solid var(--border);border-radius:12px;padding:16px;
  border-left:3px solid var(--accent)}
.assumption-id{font-size:10px;font-weight:700;letter-spacing:1px;color:var(--accent);margin-bottom:6px}
.assumption-text{font-size:12px;color:var(--text);line-height:1.6}

/* ACTOR TABLE */
.actor-table{width:100%;border-collapse:collapse;font-size:13px}
.actor-table th{background:rgba(27,79,216,0.2);color:var(--accent);font-size:11px;font-weight:700;
  letter-spacing:1px;text-transform:uppercase;padding:12px 16px;text-align:left;border-bottom:1px solid rgba(37,99,235,0.3)}
.actor-table td{padding:12px 16px;border-bottom:1px solid var(--border);color:var(--text);vertical-align:top}
.actor-table tr:last-child td{border-bottom:none}
.actor-table tr:hover td{background:rgba(56,189,248,0.04)}

/* FAILURE POINTS */
.fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.fp-item{background:rgba(15,32,68,0.4);border:1px solid var(--border);border-radius:10px;padding:14px}
.fp-id{font-size:10px;font-weight:700;color:var(--red);margin-bottom:4px;font-family:monospace}
.fp-name{font-size:11px;font-weight:600;color:var(--text);margin-bottom:3px}
.fp-layer{font-size:10px;color:var(--muted)}
.fp-sev-c{border-left:3px solid var(--red)}
.fp-sev-h{border-left:3px solid var(--orange)}
.fp-sev-m{border-left:3px solid var(--accent)}

/* WORKFLOW STEPS */
.workflow{display:flex;flex-direction:column;gap:0}
.wf-step{display:flex;gap:20px;align-items:flex-start;padding:16px 0}
.wf-step:not(:last-child){border-bottom:1px solid var(--border)}
.wf-num{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--accent));
  display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:white;flex-shrink:0}
.wf-content{flex:1}
.wf-title{font-size:14px;font-weight:700;color:white;margin-bottom:4px}
.wf-desc{font-size:12px;color:var(--muted);line-height:1.6}
.wf-risk{display:inline-block;margin-top:6px;font-size:10px;font-weight:600;padding:2px 8px;
  border-radius:8px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#FCA5A5}

/* STRATEGY TABLE */
.strat-table{width:100%;border-collapse:collapse;font-size:13px}
.strat-table th{background:rgba(15,32,68,0.8);color:var(--accent);font-size:11px;font-weight:700;
  letter-spacing:1px;text-transform:uppercase;padding:12px 16px;text-align:left;
  border:1px solid rgba(37,99,235,0.25)}
.strat-table td{padding:11px 16px;border:1px solid var(--border);color:var(--text);vertical-align:top;font-size:12px}
.strat-table tr:nth-child(even) td{background:rgba(15,32,68,0.3)}

.count-badge{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;margin-left:8px}
.cb-c{background:rgba(239,68,68,0.15);color:#FCA5A5;border:1px solid rgba(239,68,68,0.3)}
.cb-h{background:rgba(245,158,11,0.15);color:#FCD34D;border:1px solid rgba(245,158,11,0.3)}
.cb-m{background:rgba(56,189,248,0.12);color:var(--accent);border:1px solid rgba(56,189,248,0.25)}

footer{text-align:center;padding:40px;border-top:1px solid var(--border);color:var(--muted);font-size:11px;position:relative;z-index:5}
@media(max-width:768px){
  .meta-table{grid-template-columns:1fr 1fr}
  .assumption-grid{grid-template-columns:1fr}
  .fp-grid{grid-template-columns:1fr 1fr}
  .page{padding:32px 20px 60px}
  nav{padding:14px 20px}
}
</style>
</head>
<body>
<div class="bg-grid"></div>

<nav>
  <a href="/" class="nav-back">← Back to Hub</a>
  <span style="color:var(--border)">|</span>
  <span class="nav-title">📄 QA Test Plan & Feature Analysis</span>
  <span class="nav-badge">Deliverable 01</span>
</nav>

<div class="page">

<!-- DOC HEADER -->
<div class="doc-header">
  <div class="doc-eyebrow">🎯 Quality Assurance Assessment — Deliverable 01 of 05</div>
  <div class="doc-title">GoSMS SMS Top-Up Feature<br>QA Test Plan & Assessment</div>
  <div class="doc-sub">MikeTango / QuickBooks Integration · Complete Test Strategy, Architecture Analysis & Failure Point Catalogue</div>
  <div class="meta-table">
    <div class="meta-cell"><div class="meta-key">Candidate</div><div class="meta-val">Sourav</div></div>
    <div class="meta-cell"><div class="meta-key">Company</div><div class="meta-val">Mulah Technologies, MY</div></div>
    <div class="meta-cell"><div class="meta-key">Role</div><div class="meta-val">QA Engineering Intern</div></div>
    <div class="meta-cell"><div class="meta-key">Date</div><div class="meta-val">26 February 2026</div></div>
    <div class="meta-cell"><div class="meta-key">Product</div><div class="meta-val">GoSMS</div></div>
    <div class="meta-cell"><div class="meta-key">Company Under Test</div><div class="meta-val">MikeTango</div></div>
    <div class="meta-cell"><div class="meta-key">Integration</div><div class="meta-val">QuickBooks Accounting</div></div>
    <div class="meta-cell"><div class="meta-key">Version</div><div class="meta-val">v1.0 — Final</div></div>
  </div>
</div>

<!-- SECTION 1: FEATURE OVERVIEW -->
<div class="section">
  <div class="sec-tag">Section 1</div>
  <div class="sec-title">Feature Overview & Description</div>
  <div class="sec-sub">Understanding what the feature does, who uses it, and why it matters</div>
  <div class="card">
    <div class="card-title">📋 1.1 Feature Description</div>
    <div class="card-body">
      <p>The <strong>GoSMS SMS Top-Up feature</strong> is a multi-step, financially transactional workflow that enables a Finance Executive to allocate and credit SMS tokens to multiple business outlets under a selected Brand, within the GoSMS platform operated by MikeTango.</p>
      <p>This is <strong>not a simple form submission</strong>. It is a financially consequential process that spans five architectural layers, integrates with an external accounting system (QuickBooks), and must maintain complete data integrity across a multi-entity, multi-company credit allocation model.</p>
      <p>The feature directly impacts the financial standing of companies within the GoSMS ecosystem. Any failure — whether silent, partial, or unhandled — can result in financial discrepancy, duplicate invoicing, or incorrect credit allocation.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-title">🔄 1.2 Core Workflow — 9 Sequential Steps</div>
    <div class="workflow">
      <div class="wf-step">
        <div class="wf-num">1</div>
        <div class="wf-content">
          <div class="wf-title">Finance Executive Authentication</div>
          <div class="wf-desc">Role-based access control validates the user is a Finance Executive with sufficient permissions to execute SMS top-ups. Unauthorised users are redirected to login.</div>
          <span class="wf-risk">Risk: Unauthorised access, session hijacking</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">2</div>
        <div class="wf-content">
          <div class="wf-title">Brand Selection</div>
          <div class="wf-desc">Finance Executive selects a Brand from a dropdown populated from the GoSMS database. The brand selection determines which outlets and companies are involved in the transaction.</div>
          <span class="wf-risk">Risk: Empty selection, stale dropdown data, DB fetch failure</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">3</div>
        <div class="wf-content">
          <div class="wf-title">Outlet Loading</div>
          <div class="wf-desc">System dynamically fetches all outlets belonging to the selected Brand. Each outlet is mapped internally to a Company — this mapping is the critical business logic that drives credit allocation.</div>
          <span class="wf-risk">Risk: Mapping drift, incomplete outlet list, DB failure</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">4</div>
        <div class="wf-content">
          <div class="wf-title">Top-Up Amount Entry</div>
          <div class="wf-desc">Finance Executive enters a top-up amount per outlet. The system aggregates totals by Company (not by outlet) for the QuickBooks quotation and DB credit operations.</div>
          <span class="wf-risk">Risk: Invalid input, negative values, overflow, injection attempts</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">5</div>
        <div class="wf-content">
          <div class="wf-title">Input Validation & Transaction ID Generation</div>
          <div class="wf-desc">Server-side and client-side validation of all fields. A unique Transaction ID (idempotency key) is generated and assigned before any external API calls are made. Submit button disabled immediately to prevent duplicate submission.</div>
          <span class="wf-risk">Risk: Client-side bypass, duplicate submission without ID</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">6</div>
        <div class="wf-content">
          <div class="wf-title">QuickBooks API Call — Quotation Generation</div>
          <div class="wf-desc">The system calls the QuickBooks API with the Transaction ID, Brand details, and per-company line items. A formal quotation is generated. This step must succeed before SMS credits are applied. Retry logic: 3 attempts with exponential backoff (2s, 5s, 10s).</div>
          <span class="wf-risk">Risk: API timeout, unreachable, 4xx/5xx errors, duplicate invoice, malformed response</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">7</div>
        <div class="wf-content">
          <div class="wf-title">Client Confirmation Email</div>
          <div class="wf-desc">System fetches the client email from QuickBooks records and sends a confirmation email with quotation details. Email failure is <strong>non-blocking</strong> — the transaction continues to the credit step regardless of email outcome. Failures are queued for retry.</div>
          <span class="wf-risk">Risk: SMTP failure, null/invalid email, stale email template content</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">8</div>
        <div class="wf-content">
          <div class="wf-title">SMS Credit — Atomic DB Write</div>
          <div class="wf-desc">An atomic database transaction credits SMS tokens to each Company based on its mapped outlets' total. Row-level locking prevents race conditions. If any write fails, the entire transaction is rolled back to the pre-transaction state.</div>
          <span class="wf-risk">Risk: Partial write, rollback failure, race condition, concurrent access</span>
        </div>
      </div>
      <div class="wf-step">
        <div class="wf-num">9</div>
        <div class="wf-content">
          <div class="wf-title">Transaction Logging & Success Confirmation</div>
          <div class="wf-desc">A complete audit log entry is created with Transaction ID, user ID, Brand, amounts per company, QuickBooks quotation reference, timestamp, and status. Finance Executive receives a success screen showing the Transaction ID and summary.</div>
          <span class="wf-risk">Risk: Missing audit fields, incorrect log status</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- SECTION 2: KEY ACTORS -->
<div class="section">
  <div class="sec-tag">Section 2</div>
  <div class="sec-title">Key Actors & Responsibilities</div>
  <div class="sec-sub">All entities involved in the transaction and their roles</div>
  <div class="card" style="padding:0;overflow:hidden">
    <table class="actor-table">
      <thead><tr><th>Actor</th><th>Role</th><th>Responsibilities</th><th>Failure Impact</th></tr></thead>
      <tbody>
        <tr><td><strong>Finance Executive</strong></td><td>Transaction Initiator</td><td>Selects brand, enters top-up amounts, triggers submission</td><td>Initiating duplicate or invalid submission</td></tr>
        <tr><td><strong>GoSMS System</strong></td><td>Orchestrator</td><td>Validation, mapping, API coordination, DB writes, logging</td><td>Silent failures, partial writes, unhandled exceptions</td></tr>
        <tr><td><strong>QuickBooks API</strong></td><td>Quotation Generator</td><td>Creates formal financial quotation, returns quotation ID</td><td>API unavailability blocks entire credit flow</td></tr>
        <tr><td><strong>Email Service (SMTP)</strong></td><td>Notification Layer</td><td>Delivers confirmation email to client with quotation details</td><td>Failure is non-blocking — logged and retried</td></tr>
        <tr><td><strong>Database</strong></td><td>Credit Store & Audit Trail</td><td>Atomic credit writes per company, transaction log, rollback</td><td>Partial write = financial inconsistency — Critical defect</td></tr>
        <tr><td><strong>GoSMS Admin</strong></td><td>Escalation Receiver</td><td>Receives alerts for critical failures (rollback failures, API outages)</td><td>Unalerted admin = undetected financial inconsistency</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- SECTION 3: ASSUMPTIONS -->
<div class="section">
  <div class="sec-tag">Section 3</div>
  <div class="sec-title">Assumptions (A01–A10)</div>
  <div class="sec-sub">Documented assumptions that underpin the test strategy — must be validated with the development team before final execution</div>
  <div class="assumption-grid">
    <div class="assumption"><div class="assumption-id">A01</div><div class="assumption-text">Each Brand may contain multiple Outlets, and those Outlets may belong to <strong>different Companies</strong>. Credits are allocated at the Company level, not the Outlet level.</div></div>
    <div class="assumption"><div class="assumption-id">A02</div><div class="assumption-text">The Outlet-to-Company mapping is maintained in the <strong>GoSMS database</strong>. This mapping is the source of truth for all credit allocation logic.</div></div>
    <div class="assumption"><div class="assumption-id">A03</div><div class="assumption-text">QuickBooks quotation generation is a <strong>mandatory prerequisite</strong> to SMS credit allocation. Credits must not be applied if the quotation step fails.</div></div>
    <div class="assumption"><div class="assumption-id">A04</div><div class="assumption-text">The system implements <strong>atomic database transactions</strong> — all company credit writes must succeed or all must be rolled back. Partial writes are a critical defect.</div></div>
    <div class="assumption"><div class="assumption-id">A05</div><div class="assumption-text">Access to the SMS Top-Up feature is <strong>role-restricted</strong> to Finance Executives only. Other roles must be denied access.</div></div>
    <div class="assumption"><div class="assumption-id">A06</div><div class="assumption-text">Client email address is sourced from the <strong>QuickBooks company record</strong>, not from the GoSMS database directly.</div></div>
    <div class="assumption"><div class="assumption-id">A07</div><div class="assumption-text">Email delivery failure is <strong>non-blocking</strong>. The transaction proceeds to the credit step regardless of email outcome.</div></div>
    <div class="assumption"><div class="assumption-id">A08</div><div class="assumption-text">A <strong>unique Transaction ID</strong> (idempotency key) must be generated per submission attempt, enabling duplicate detection at the QuickBooks API layer.</div></div>
    <div class="assumption"><div class="assumption-id">A09</div><div class="assumption-text">The system supports <strong>concurrent access</strong> from multiple Finance Executive accounts and implements appropriate locking to prevent race conditions.</div></div>
    <div class="assumption"><div class="assumption-id">A10</div><div class="assumption-text">Every transaction — success or failure — produces a <strong>complete audit log entry</strong> with Transaction ID, user, amounts, timestamp, and status for financial compliance.</div></div>
  </div>
</div>

<!-- SECTION 4: TEST STRATEGY -->
<div class="section">
  <div class="sec-tag">Section 4</div>
  <div class="sec-title">Test Strategy & Approach</div>
  <div class="sec-sub">How the 30 test cases are organised, prioritised, and executed</div>
  <div class="card" style="padding:0;overflow:hidden">
    <table class="strat-table">
      <thead><tr><th>Category</th><th>TC Range</th><th>Count</th><th>Priority Distribution</th><th>Test Focus</th></tr></thead>
      <tbody>
        <tr><td><strong>Functional — Happy Path</strong></td><td>TC01–TC03</td><td>3</td><td><span class="count-badge cb-c">1 Critical</span><span class="count-badge cb-h">1 High</span><span class="count-badge cb-m">1 Medium</span></td><td>Full E2E success, single outlet, max outlets volume</td></tr>
        <tr><td><strong>Input Validation</strong></td><td>TC04–TC12</td><td>9</td><td><span class="count-badge cb-h">7 High</span><span class="count-badge cb-m">2 Medium</span></td><td>Empty fields, negative, zero, text, injection, decimal, overflow, mixed</td></tr>
        <tr><td><strong>Integration Failures</strong></td><td>TC13–TC17</td><td>5</td><td><span class="count-badge cb-c">4 Critical</span><span class="count-badge cb-h">1 High</span></td><td>API unreachable, timeout, error codes, idempotency, malformed response</td></tr>
        <tr><td><strong>Email Service</strong></td><td>TC18–TC20</td><td>3</td><td><span class="count-badge cb-m">3 Medium</span></td><td>SMTP failure, invalid email, content accuracy</td></tr>
        <tr><td><strong>Database & Transactions</strong></td><td>TC21–TC25</td><td>5</td><td><span class="count-badge cb-c">4 Critical</span><span class="count-badge cb-h">1 High</span></td><td>Write failure, partial atomicity, rollback, audit log, admin escalation</td></tr>
        <tr><td><strong>Concurrency & Duplicates</strong></td><td>TC26–TC28</td><td>3</td><td><span class="count-badge cb-h">3 High</span></td><td>Double-click, simultaneous users, resubmission after error</td></tr>
        <tr><td><strong>Multi-Company Allocation</strong></td><td>TC29–TC30</td><td>2</td><td><span class="count-badge cb-c">2 Critical</span></td><td>Credit split accuracy, outlet-to-company mapping consistency</td></tr>
        <tr><td><strong>TOTAL</strong></td><td>TC01–TC30</td><td><strong>30</strong></td><td><span class="count-badge cb-c">10 Critical</span><span class="count-badge cb-h">15 High</span><span class="count-badge cb-m">5 Medium</span></td><td>Full feature coverage across all 10 system states</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- SECTION 5: FAILURE POINTS -->
<div class="section">
  <div class="sec-tag">Section 5</div>
  <div class="sec-title">Failure Point Catalogue (FP01–FP24)</div>
  <div class="sec-sub">Every identified failure mode mapped to its architectural layer and severity</div>
  <div class="fp-grid">
    <div class="fp-item fp-sev-h"><div class="fp-id">FP01</div><div class="fp-name">No Brand Selected</div><div class="fp-layer">Layer 1 — UI | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP02</div><div class="fp-name">DB Failure on Brand Load</div><div class="fp-layer">Layer 1 — UI | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP03</div><div class="fp-name">Empty Top-Up Field</div><div class="fp-layer">Layer 1 — UI | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP04</div><div class="fp-name">Negative Amount Input</div><div class="fp-layer">Layer 1 — UI | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP05</div><div class="fp-name">Text / Injection Input</div><div class="fp-layer">Layer 1 — UI/Security | High</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP06</div><div class="fp-name">Zero Total Amount</div><div class="fp-layer">Layer 2 — Business Logic | Medium</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP07</div><div class="fp-name">Decimal Precision Mismatch</div><div class="fp-layer">Layer 2 — Business Logic | Medium</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP08</div><div class="fp-name">Integer Overflow / Large Number</div><div class="fp-layer">Layer 2 — Business Logic | Medium</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP09</div><div class="fp-name">Incorrect Company Mapping</div><div class="fp-layer">Layer 2 — Business Logic | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP10</div><div class="fp-name">QuickBooks API Unreachable</div><div class="fp-layer">Layer 3 — Integration | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP11</div><div class="fp-name">API Request Timeout</div><div class="fp-layer">Layer 3 — Integration | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP12</div><div class="fp-name">API 4xx / 5xx Error Response</div><div class="fp-layer">Layer 3 — Integration | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP13</div><div class="fp-name">Duplicate Invoice Creation</div><div class="fp-layer">Layer 3 — Integration | CRITICAL</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP14</div><div class="fp-name">Malformed API Response</div><div class="fp-layer">Layer 3 — Integration | High</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP15</div><div class="fp-name">SMTP Service Unavailable</div><div class="fp-layer">Layer 4 — Email | Medium</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP16</div><div class="fp-name">Null / Invalid Client Email</div><div class="fp-layer">Layer 4 — Email | Medium</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP17</div><div class="fp-name">SMS Credit DB Write Failure</div><div class="fp-layer">Layer 5 — Database | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP18</div><div class="fp-name">Partial Write — Mid-Transaction</div><div class="fp-layer">Layer 5 — Database | CRITICAL</div></div>
    <div class="fp-item fp-sev-c"><div class="fp-id">FP19</div><div class="fp-name">Rollback Mechanism Failure</div><div class="fp-layer">Layer 5 — Database | CRITICAL</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP20</div><div class="fp-name">Concurrent Write Collision</div><div class="fp-layer">Layer 5 — Database | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP21</div><div class="fp-name">Double-Click Duplicate Submit</div><div class="fp-layer">Layer 1 — UI | High</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP22</div><div class="fp-name">Incomplete Audit Log Entry</div><div class="fp-layer">Layer 5 — Database | High</div></div>
    <div class="fp-item fp-sev-m"><div class="fp-id">FP23</div><div class="fp-name">Stale Data in Email Template</div><div class="fp-layer">Layer 4 — Email | Medium</div></div>
    <div class="fp-item fp-sev-h"><div class="fp-id">FP24</div><div class="fp-name">Unauthorised Access Attempt</div><div class="fp-layer">Layer 1 — Auth | High</div></div>
  </div>
</div>

<!-- SECTION 6: TEST ENVIRONMENT -->
<div class="section">
  <div class="sec-tag">Section 6</div>
  <div class="sec-title">Test Environment & Tools</div>
  <div class="card">
    <div class="card-title">🔧 Environment Configuration</div>
    <div class="card-body">
      <p><strong>Test Environment:</strong> Staging environment mirroring production configuration — GoSMS application, QuickBooks Sandbox API, SMTP test server, and a dedicated test database instance.</p>
      <p><strong>Test Data:</strong> Brands with 1, 3, and 50 outlets across 1, 2, and 3 Companies respectively. Known Outlet-to-Company mapping in DB. Pre-recorded credit balances as baseline snapshots for DB comparison.</p>
      <p><strong>API Simulation:</strong> Network proxy (e.g., Charles Proxy / mocking layer) to simulate API timeouts, unreachable endpoints, and custom HTTP error responses (400, 401, 422, 500, 503).</p>
      <p><strong>Tools Used:</strong> Browser DevTools (Network tab for request count verification), Postman (server-side validation bypass testing), DB query access (direct SQL for balance snapshots), SMTP test server (Mailtrap or equivalent), and PM2 / Wrangler for service management.</p>
      <p><strong>Concurrency Testing:</strong> Two authenticated browser sessions opened simultaneously in separate browser instances for multi-user concurrent submission tests.</p>
    </div>
  </div>
</div>

</div>
<footer>
  Sourav · QA Engineering Intern Assessment · Mulah Technologies, Malaysia · Hiredly · v1.0 — 26 February 2026<br>
  GoSMS SMS Top-Up | MikeTango / QuickBooks Integration
</footer>
</body>
</html>`
