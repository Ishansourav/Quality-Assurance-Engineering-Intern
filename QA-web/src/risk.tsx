export const riskHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Risk & Mitigation Register — GoSMS | Sourav</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0A1628;--navy2:#0F2044;--blue:#1B4FD8;--blue2:#2563EB;--accent:#38BDF8;
  --green:#22C55E;--red:#EF4444;--orange:#F59E0B;--purple:#8B5CF6;--teal:#14B8A6;
  --text:#E2E8F0;--muted:#94A3B8;--border:rgba(148,163,184,0.15)}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--text);min-height:100vh}
.bg-grid{position:fixed;inset:0;background-image:linear-gradient(rgba(56,189,248,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.025) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0}
nav{position:sticky;top:0;z-index:100;background:rgba(10,22,40,0.9);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);padding:14px 40px;display:flex;align-items:center;gap:16px}
.nav-back{color:var(--accent);text-decoration:none;font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px}
.nav-back:hover{color:white}
.nav-title{font-size:14px;font-weight:700;color:white}
.nav-badge{font-size:11px;padding:3px 10px;border-radius:12px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);color:#FCD34D;margin-left:auto}

.page{max-width:1100px;margin:0 auto;padding:48px 40px 80px;position:relative;z-index:5}

.doc-header{background:linear-gradient(135deg,rgba(245,158,11,0.12),rgba(15,32,68,0.8));
  border:1px solid rgba(245,158,11,0.25);border-radius:20px;padding:40px 48px;margin-bottom:48px}
.doc-eyebrow{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:12px}
.doc-title{font-size:32px;font-weight:900;color:white;margin-bottom:8px}
.doc-sub{font-size:14px;color:var(--muted);margin-bottom:24px;line-height:1.6}
.header-stats{display:flex;gap:16px;flex-wrap:wrap}
.hstat{background:rgba(10,22,40,0.6);border:1px solid var(--border);border-radius:10px;padding:12px 20px;text-align:center}
.hstat-num{font-size:24px;font-weight:800;color:white}
.hstat-label{font-size:11px;color:var(--muted);margin-top:2px}

.section{margin-bottom:56px}
.sec-tag{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:6px}
.sec-title{font-size:22px;font-weight:800;color:white;margin-bottom:4px}
.sec-sub{font-size:13px;color:var(--muted);margin-bottom:24px}

/* RISK MATRIX SUMMARY */
.matrix-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:40px}
.matrix-cell{border-radius:14px;padding:22px;text-align:center;border:1px solid}
.mc-critical{background:rgba(239,68,68,0.1);border-color:rgba(239,68,68,0.35)}
.mc-high{background:rgba(245,158,11,0.1);border-color:rgba(245,158,11,0.35)}
.mc-medium{background:rgba(56,189,248,0.08);border-color:rgba(56,189,248,0.3)}
.mc-low{background:rgba(34,197,94,0.08);border-color:rgba(34,197,94,0.3)}
.mc-num{font-size:42px;font-weight:900;margin-bottom:4px}
.mc-label{font-size:12px;font-weight:700;margin-bottom:6px}
.mc-desc{font-size:11px;color:var(--muted);line-height:1.5}
.mc-critical .mc-num{color:var(--red)}
.mc-critical .mc-label{color:#FCA5A5}
.mc-high .mc-num{color:var(--orange)}
.mc-high .mc-label{color:#FCD34D}
.mc-medium .mc-num{color:var(--accent)}
.mc-medium .mc-label{color:var(--accent)}
.mc-low .mc-num{color:var(--green)}
.mc-low .mc-label{color:#86EFAC}

/* RISK CARDS */
.risk-card{background:rgba(15,32,68,0.5);border:1px solid var(--border);border-radius:18px;
  margin-bottom:20px;overflow:hidden}
.risk-header{display:flex;align-items:center;gap:16px;padding:22px 28px;border-bottom:1px solid var(--border)}
.risk-id{font-family:monospace;font-size:13px;font-weight:700;padding:5px 14px;border-radius:20px}
.rid-c{background:rgba(239,68,68,0.15);color:#FCA5A5;border:1px solid rgba(239,68,68,0.3)}
.rid-h{background:rgba(245,158,11,0.15);color:#FCD34D;border:1px solid rgba(245,158,11,0.3)}
.rid-m{background:rgba(56,189,248,0.12);color:var(--accent);border:1px solid rgba(56,189,248,0.25)}
.rid-l{background:rgba(34,197,94,0.1);color:#86EFAC;border:1px solid rgba(34,197,94,0.3)}
.risk-title{font-size:16px;font-weight:800;color:white;flex:1}
.sev-pill{font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px}
.sev-c{background:rgba(239,68,68,0.2);color:#F87171;border:1px solid rgba(239,68,68,0.4)}
.sev-h{background:rgba(245,158,11,0.2);color:#FBBF24;border:1px solid rgba(245,158,11,0.4)}
.sev-m{background:rgba(56,189,248,0.15);color:#38BDF8;border:1px solid rgba(56,189,248,0.35)}
.sev-l{background:rgba(34,197,94,0.12);color:#4ADE80;border:1px solid rgba(34,197,94,0.3)}

.risk-body{display:grid;grid-template-columns:1fr 1fr;gap:0}
.risk-field{padding:16px 28px;border-bottom:1px solid var(--border)}
.risk-field:nth-child(even){border-left:1px solid var(--border)}
.risk-field.full{grid-column:1/-1;border-left:none}
.risk-field:last-child,.risk-field:nth-last-child(2){border-bottom:none}
.rf-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px}
.rf-value{font-size:13px;color:var(--text);line-height:1.7}
.rf-value strong{color:white}

.mitigation-list{list-style:none;display:flex;flex-direction:column;gap:6px}
.mitigation-list li{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:var(--text);line-height:1.6}
.mitigation-list li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0;margin-top:1px}

.likelihood-bar{display:flex;align-items:center;gap:10px;margin-top:6px}
.l-bar-bg{flex:1;height:6px;background:rgba(148,163,184,0.2);border-radius:3px;overflow:hidden}
.l-bar-fill{height:100%;border-radius:3px}
.l-text{font-size:11px;color:var(--muted);white-space:nowrap}

/* LEGEND */
.legend{display:flex;gap:20px;flex-wrap:wrap;margin-bottom:32px;
  background:rgba(15,32,68,0.4);border:1px solid var(--border);border-radius:12px;padding:16px 20px}
.legend-item{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted)}
.l-dot{width:12px;height:12px;border-radius:3px;flex-shrink:0}

/* TEST CASE MAPPING */
.tc-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}
.tc-chip{font-size:10px;font-weight:600;padding:2px 8px;border-radius:6px;
  background:rgba(27,79,216,0.15);border:1px solid rgba(37,99,235,0.3);color:#60A5FA;font-family:monospace}

footer{text-align:center;padding:40px;border-top:1px solid var(--border);color:var(--muted);font-size:11px;position:relative;z-index:5}
@media(max-width:768px){
  .matrix-grid{grid-template-columns:1fr 1fr}
  .risk-body{grid-template-columns:1fr}
  .risk-field:nth-child(even){border-left:none}
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
  <span class="nav-title">⚠️ Risk & Mitigation Register</span>
  <span class="nav-badge">Deliverable 04</span>
</nav>

<div class="page">
<div class="doc-header">
  <div class="doc-eyebrow">⚠️ Quality Assurance Assessment — Deliverable 04 of 05</div>
  <div class="doc-title">Risk & Mitigation Register</div>
  <div class="doc-sub">Comprehensive risk analysis covering financial integrity, API dependency, data security, concurrency hazards, and operational continuity — with full mitigation strategies for each identified risk.</div>
  <div class="header-stats">
    <div class="hstat"><div class="hstat-num" style="color:var(--red)">6</div><div class="hstat-label">Critical Risks</div></div>
    <div class="hstat"><div class="hstat-num" style="color:var(--orange)">7</div><div class="hstat-label">High Risks</div></div>
    <div class="hstat"><div class="hstat-num" style="color:var(--accent)">4</div><div class="hstat-label">Medium Risks</div></div>
    <div class="hstat"><div class="hstat-num" style="color:var(--green)">2</div><div class="hstat-label">Low Risks</div></div>
    <div class="hstat"><div class="hstat-num">19</div><div class="hstat-label">Total Risks</div></div>
  </div>
</div>

<!-- MATRIX SUMMARY -->
<div class="section">
  <div class="sec-tag">Overview</div>
  <div class="sec-title">Risk Severity Matrix</div>
  <div class="sec-sub">Distribution of identified risks by severity and category</div>
  <div class="matrix-grid">
    <div class="matrix-cell mc-critical">
      <div class="mc-num">6</div>
      <div class="mc-label">🔴 CRITICAL</div>
      <div class="mc-desc">Release blockers. Must be resolved and retested before any production deployment.</div>
    </div>
    <div class="matrix-cell mc-high">
      <div class="mc-num">7</div>
      <div class="mc-label">🟠 HIGH</div>
      <div class="mc-desc">Must be addressed before release. May be accepted temporarily with documented mitigation.</div>
    </div>
    <div class="matrix-cell mc-medium">
      <div class="mc-num">4</div>
      <div class="mc-label">🔵 MEDIUM</div>
      <div class="mc-desc">Should be addressed in current or next sprint. Limited business impact if mitigated.</div>
    </div>
    <div class="matrix-cell mc-low">
      <div class="mc-num">2</div>
      <div class="mc-label">🟢 LOW</div>
      <div class="mc-desc">Monitor and address in backlog. Acceptable short-term risk with existing guardrails.</div>
    </div>
  </div>

  <div class="legend">
    <div class="legend-item"><div class="l-dot" style="background:var(--red)"></div>CRITICAL — Financial integrity or security breach risk</div>
    <div class="legend-item"><div class="l-dot" style="background:var(--orange)"></div>HIGH — Significant functional or UX failure risk</div>
    <div class="legend-item"><div class="l-dot" style="background:var(--accent)"></div>MEDIUM — Limited impact with existing fallbacks</div>
    <div class="legend-item"><div class="l-dot" style="background:var(--green)"></div>LOW — Acceptable risk, monitor only</div>
  </div>
</div>

<!-- CRITICAL RISKS -->
<div class="section">
  <div class="sec-tag">🔴 Critical Risks</div>
  <div class="sec-title">Release Blocking Risk Entries</div>
  <div class="sec-sub">These must be resolved and verified before any production deployment</div>

  <!-- R01 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R01</span>
      <span class="risk-title">Incorrect Outlet-to-Company Credit Allocation</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Financial Integrity — Business Logic</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 2 — Business Logic (Mapping Engine)</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">The most critical business risk in the entire feature. If Outlet-to-Company mapping logic is incorrect, credits are applied to the wrong company. This causes financial loss for one company and illegal enrichment of another — with no visible error to the user. The damage may only be discovered during manual financial reconciliation, potentially weeks or months later.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">Medium<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:50%;background:var(--orange)"></div></div><span class="l-text">50%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>Severe.</strong> Direct financial loss. Potential legal liability. Regulatory non-compliance. Loss of client trust. Breach of SLA.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Validate mapping at DB level before any write (TC30) — not just from UI data</li>
          <li>Lock the mapping at transaction time (snapshot at S4) — prevent race with concurrent mapping updates</li>
          <li>Implement automated regression test TC29 on every release cycle and after any Brand/Outlet restructure</li>
          <li>Add a pre-submission validation step that cross-checks UI outlet list against DB mapping</li>
          <li>Add financial reconciliation daily job comparing DB credits to QuickBooks quotations per company</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC29</span><span class="tc-chip">TC30</span></div></div></div>
    </div>
  </div>

  <!-- R02 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R02</span>
      <span class="risk-title">Partial SMS Credit Write — Non-Atomic Transaction</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Data Integrity — Atomicity</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 5 — Database</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">If the database transaction is not fully atomic, a failure mid-write (e.g., after crediting Company A but before Company B) leaves the system in an inconsistent state. Company A has excess credits; Company B is under-credited. The QuickBooks quotation exists for the full amount. No rollback occurs. This is an undetectable financial inconsistency without an explicit comparison job.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">Low (if implemented correctly)<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:20%;background:var(--green)"></div></div><span class="l-text">20%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>Catastrophic.</strong> Financial inconsistency across companies. Undetectable by user. Requires manual forensic reconciliation.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>All credit writes MUST be wrapped in a single database transaction (BEGIN / COMMIT / ROLLBACK)</li>
          <li>TC22 explicitly tests mid-transaction failure to verify complete rollback of all partial writes</li>
          <li>TC23 verifies DB state snapshot matches pre-transaction values after rollback</li>
          <li>Transaction log must record ROLLED_BACK status with Transaction ID for every failure</li>
          <li>Automated post-transaction DB balance verification job comparing expected vs actual per company</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC21</span><span class="tc-chip">TC22</span><span class="tc-chip">TC23</span><span class="tc-chip">TC25</span></div></div></div>
    </div>
  </div>

  <!-- R03 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R03</span>
      <span class="risk-title">Duplicate QuickBooks Invoice Creation</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Financial Integrity — Idempotency</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 3 — QuickBooks Integration</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">Without idempotency protection (unique Transaction IDs), a retry, double-click, or network replay could create two or more QuickBooks quotations for the same top-up event. This results in double-billing the client and potentially double-crediting SMS tokens — a direct financial fraud risk.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">High without controls<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:70%;background:var(--red)"></div></div><span class="l-text">70%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>Severe.</strong> Double billing of client. Potential double SMS credit. Financial audit failure. Client relationship damage.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Generate a unique Transaction ID (UUID v4) at validation time (S4) before any API call</li>
          <li>Pass Transaction ID as idempotency key in every QuickBooks API request header</li>
          <li>If duplicate Transaction ID detected by API — return existing quotation ID, do NOT create new</li>
          <li>Submit button disabled immediately on first click to prevent double-click (TC26)</li>
          <li>TC16 explicitly validates idempotent behaviour — verified in QuickBooks portal</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC16</span><span class="tc-chip">TC26</span><span class="tc-chip">TC28</span></div></div></div>
    </div>
  </div>

  <!-- R04 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R04</span>
      <span class="risk-title">QuickBooks API Complete Unavailability</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">External Dependency — Service Availability</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 3 — QuickBooks Integration</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">QuickBooks is an external third-party SaaS service with its own SLA. During planned or unplanned downtime, the entire SMS top-up workflow is blocked. Without proper retry logic and graceful degradation, the system may hang indefinitely, throw unhandled exceptions, or — most critically — proceed to credit SMS tokens without a valid quotation.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">Medium (monthly scheduled maintenance)<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:40%;background:var(--orange)"></div></div><span class="l-text">40%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>High.</strong> Complete feature unavailability. Delayed SMS credits. Financial operation blocked.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Implement exponential backoff retry: Attempt 1 (wait 2s) → Attempt 2 (wait 5s) → Attempt 3 (wait 10s)</li>
          <li>After all retries fail: abort flow completely, display user-friendly error with Transaction ID reference</li>
          <li>Never proceed to SMS credit step without confirmed QuickBooks quotation ID</li>
          <li>Trigger admin alert on consecutive API failures (circuit breaker pattern)</li>
          <li>Document escalation path for finance team during QuickBooks maintenance windows</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC13</span><span class="tc-chip">TC14</span><span class="tc-chip">TC15</span></div></div></div>
    </div>
  </div>

  <!-- R05 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R05</span>
      <span class="risk-title">SQL Injection / Security Bypass Attack</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Security — Input Sanitisation</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 1 — UI / Layer 2 — Business Logic</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">A malicious Finance Executive (or an external attacker who has gained authenticated access) could attempt SQL injection, XSS, or server-side request forgery through the top-up amount fields. Client-side-only validation provides zero protection against direct API manipulation via tools like Postman or curl.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">Low (authenticated users)<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:25%;background:var(--accent)"></div></div><span class="l-text">25%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>Catastrophic.</strong> Data breach, database corruption, unauthorised financial manipulation, regulatory penalty.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>ALL database queries must use parameterised statements — no string concatenation in SQL</li>
          <li>Server-side validation must be implemented independently of client-side (never trust client input)</li>
          <li>Input type enforcement: numeric-only fields reject non-numeric at both UI and API layer</li>
          <li>Output encoding for all rendered values — prevent XSS in success/error messages</li>
          <li>TC09 specifically tests injection attempts at both client and server layers</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC09</span></div></div></div>
    </div>
  </div>

  <!-- R06 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-c">R06</span>
      <span class="risk-title">Rollback Mechanism Failure — Undetected Inconsistency</span>
      <span class="sev-pill sev-c">🔴 CRITICAL</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Data Integrity — Recovery</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 5 — Database</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">In the worst-case scenario, if both the credit write AND the rollback mechanism fail simultaneously, the system enters an unknown state. Without an admin escalation path, this inconsistency may go undetected. The DB is in a partially written state with no automatic recovery — requiring dangerous manual intervention without transaction context.</div>
      </div>
      <div class="risk-field"><div class="rf-label">Likelihood</div>
        <div class="rf-value">Very Low<div class="likelihood-bar"><div class="l-bar-bg"><div class="l-bar-fill" style="width:10%;background:var(--green)"></div></div><span class="l-text">10%</span></div></div>
      </div>
      <div class="risk-field"><div class="rf-label">Business Impact</div><div class="rf-value"><strong>Catastrophic.</strong> Financial data corruption. Manual forensic recovery required. Potential audit failure.</div></div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Implement dedicated admin alert on rollback failure — send immediate notification with Transaction ID and context</li>
          <li>Flag affected transaction in DB as INCONSISTENT_STATE with maximum detail for manual recovery</li>
          <li>Maintain pre-transaction balance snapshot in transaction log to enable manual reversal</li>
          <li>TC25 tests this extreme edge case — verify admin escalation mechanism exists and fires correctly</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC25</span></div></div></div>
    </div>
  </div>
</div>

<!-- HIGH RISKS -->
<div class="section">
  <div class="sec-tag">🟠 High Risks</div>
  <div class="sec-title">High Severity Risk Entries</div>
  <div class="sec-sub">Must be addressed before production release</div>

  <!-- R07 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R07</span>
      <span class="risk-title">Race Condition — Concurrent Multi-User Submission</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Concurrency — Data Integrity</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 5 — Database</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">When two Finance Executives submit top-up transactions for the same Brand simultaneously, a race condition on the Company credit record could result in a "lost update" — where one transaction's write overwrites the other's. Final company balance would be incorrect (showing only one submission's credits instead of both).</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Implement row-level locking (SELECT FOR UPDATE) on Company credit records during write phase</li>
          <li>Use database-level atomic increment operations (e.g., UPDATE credits SET balance = balance + X) rather than read-modify-write cycles</li>
          <li>TC27 tests simultaneous submission — verified at DB level by summing both inputs</li>
          <li>Transaction isolation level must be at minimum READ COMMITTED</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC27</span></div></div></div>
    </div>
  </div>

  <!-- R08 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R08</span>
      <span class="risk-title">Double-Click Submission — Duplicate Processing</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">UI — Concurrency</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 1 — UI</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">A user rapidly double-clicking the Submit button could trigger two simultaneous API calls before the first response is received. Without button-state management, this results in two QuickBooks quotations and potentially double SMS credits — without the user realising any error has occurred.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Disable Submit button immediately on first click — re-enable only after final result received</li>
          <li>Server-side: Transaction ID uniqueness check prevents duplicate processing even if UI fails</li>
          <li>TC26 verifies via browser DevTools Network tab that exactly ONE API request is sent</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC26</span></div></div></div>
    </div>
  </div>

  <!-- R09 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R09</span>
      <span class="risk-title">Client-Side Validation Only — Server-Side Bypass</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Security — Validation</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 1 — UI / Layer 2 — Business Logic</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">If input validation exists only on the client side (JavaScript), any authenticated user can bypass it using browser developer tools, Postman, or curl. Negative values, text strings, or injected payloads could reach the server and the QuickBooks API unchecked.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Server-side validation must mirror all client-side rules independently</li>
          <li>TC06, TC08, TC09 tested via Postman to explicitly bypass client-side validation</li>
          <li>Any server-side validation failure must return HTTP 400 with descriptive error body</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC06</span><span class="tc-chip">TC08</span><span class="tc-chip">TC09</span></div></div></div>
    </div>
  </div>

  <!-- R10 -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R10</span>
      <span class="risk-title">Malformed QuickBooks Response — Unhandled Exception</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Integration — Error Handling</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 3 — QuickBooks Integration</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description</div>
        <div class="rf-value">QuickBooks may return unexpected responses — HTML error pages instead of JSON, empty response bodies, or partial JSON. If the system does not guard against this, an unhandled JSON parsing exception could expose raw server errors to the user, crash the transaction flow, and leave the audit log incomplete.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Mitigation Strategy</div>
        <ul class="mitigation-list">
          <li>Wrap all API response parsing in try/catch blocks</li>
          <li>Validate response structure before accessing nested fields (defensive parsing)</li>
          <li>Log full raw response body on parse failure — never expose to user</li>
          <li>TC17 specifically tests malformed JSON, HTML response, and empty body scenarios</li>
        </ul>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC17</span></div></div></div>
    </div>
  </div>

  <!-- R11–R13 compact -->
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R11</span>
      <span class="risk-title">Decimal Precision Mismatch — Financial Discrepancy</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Financial Accuracy — Data Type Handling</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 2 — Business Logic</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description & Mitigation</div>
        <div class="rf-value">Floating-point arithmetic can produce rounding errors (e.g., 100.999 + 200.001 ≠ 301.00 in some environments). <strong>Mitigation:</strong> Use fixed-precision arithmetic (DECIMAL type in DB, avoid float/double for monetary values). System must explicitly define and enforce maximum 2 decimal places. TC10 tests this boundary.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC10</span></div></div></div>
    </div>
  </div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R12</span>
      <span class="risk-title">Incomplete Audit Log — Compliance Gap</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Regulatory Compliance — Audit Trail</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 5 — Database</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description & Mitigation</div>
        <div class="rf-value">If audit log entries are incomplete (missing Transaction ID, user ID, amounts, or status), financial reconciliation and regulatory audits become impossible. <strong>Mitigation:</strong> Define mandatory audit log schema. Verify all required fields in TC24. Audit log write failure must NOT silently pass — log the log failure to a secondary channel.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC24</span></div></div></div>
    </div>
  </div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-h">R13</span>
      <span class="risk-title">Missing or Invalid Client Email — Null Pointer Exception</span>
      <span class="sev-pill sev-h">🟠 HIGH</span>
    </div>
    <div class="risk-body">
      <div class="risk-field"><div class="rf-label">Category</div><div class="rf-value">Email Service — Data Quality</div></div>
      <div class="risk-field"><div class="rf-label">Affected Layer</div><div class="rf-value">Layer 4 — Email Service</div></div>
      <div class="risk-field full"><div class="rf-label">Risk Description & Mitigation</div>
        <div class="rf-value">If the client's email address in QuickBooks is null, empty, or malformed, the system may throw an unhandled null pointer or SMTP exception — potentially crashing the flow before SMS credits are applied, despite the email step being non-blocking by design. <strong>Mitigation:</strong> Explicitly validate email field before any send attempt. Catch null/empty as a graceful skip. TC19 tests null, empty, whitespace, and invalid format variants.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC19</span></div></div></div>
    </div>
  </div>
</div>

<!-- MEDIUM RISKS -->
<div class="section">
  <div class="sec-tag">🔵 Medium Risks</div>
  <div class="sec-title">Medium Severity Risk Entries</div>
  <div class="sec-sub">Address within current or next sprint with monitored workarounds</div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-m">R14</span>
      <span class="risk-title">SMTP Service Downtime Blocks Notification</span>
      <span class="sev-pill sev-m">🔵 MEDIUM</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">SMTP outages prevent client notification emails. <strong>By design, email failure is non-blocking</strong> — SMS credits proceed regardless. However, without a retry queue, the failure is permanent. <strong>Mitigation:</strong> Implement email retry queue (e.g., dead-letter queue with 3 retry attempts over 24 hours). Finance Executive shown a non-critical warning. TC18 validates non-blocking behaviour.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC18</span></div></div></div>
    </div>
  </div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-m">R15</span>
      <span class="risk-title">Outlet Dropdown Performance Under Maximum Load</span>
      <span class="sev-pill sev-m">🔵 MEDIUM</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">Brands with 50+ outlets may cause UI rendering delays or dropdown freezing. Aggregation of 50 outlet amounts before submission may also cause perceptible delay. <strong>Mitigation:</strong> Paginate or virtualise large outlet lists. Implement client-side debounced aggregation. TC03 establishes performance baseline and documents acceptable thresholds.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC03</span></div></div></div>
    </div>
  </div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-m">R16</span>
      <span class="risk-title">Stale Email Template Content</span>
      <span class="sev-pill sev-m">🔵 MEDIUM</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">Email template caching or incorrect variable binding could result in a previous transaction's data (amount, client name, brand) appearing in the current email. Clients receive an email with the wrong financial details. <strong>Mitigation:</strong> Each email must be freshly rendered per-transaction. TC20 explicitly verifies email content accuracy for each field, and runs two consecutive transactions to detect cross-contamination.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC20</span></div></div></div>
    </div>
  </div>

  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-m">R17</span>
      <span class="risk-title">Scientific Notation Input Bypass (e.g., 1e9)</span>
      <span class="sev-pill sev-m">🔵 MEDIUM</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">Input such as "1e9" (1,000,000,000) may pass type="number" HTML validation while being an unexpectedly large value. Some numeric parsers accept scientific notation. <strong>Mitigation:</strong> Explicitly disallow scientific notation in server-side validation. Define and enforce a maximum permitted top-up value. TC08 specifically tests this input variant.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC08</span><span class="tc-chip">TC11</span></div></div></div>
    </div>
  </div>
</div>

<!-- LOW RISKS -->
<div class="section">
  <div class="sec-tag">🟢 Low Risks</div>
  <div class="sec-title">Low Severity Risk Entries</div>
  <div class="sec-sub">Monitor and address in backlog — acceptable with existing guardrails</div>
  <div class="risk-card">
    <div class="risk-header">
      <span class="risk-id rid-l">R18</span>
      <span class="risk-title">UI Field Reset on Partial Validation Error</span>
      <span class="sev-pill sev-l">🟢 LOW</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">If one outlet field fails validation and the system resets all other fields, the Finance Executive must re-enter all amounts — a poor UX experience that may lead to re-entry errors. <strong>Mitigation:</strong> Only highlight and focus the invalid field. All valid fields retain their values. TC05 and TC12 document expected field isolation behaviour. Log as UX defect if reset occurs.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC05</span><span class="tc-chip">TC12</span></div></div></div>
    </div>
  </div>
  <div class="risk-card" style="margin-bottom:0">
    <div class="risk-header">
      <span class="risk-id rid-l">R19</span>
      <span class="risk-title">Missing API Timeout Configuration (Hardcoded)</span>
      <span class="sev-pill sev-l">🟢 LOW</span>
    </div>
    <div class="risk-body">
      <div class="risk-field full"><div class="rf-label">Risk & Mitigation</div>
        <div class="rf-value">If QuickBooks API timeout is hardcoded (e.g., always 30s), it cannot be adjusted for different environments or QuickBooks SLA changes without a code deployment. <strong>Mitigation:</strong> Timeout value must be environment-variable configurable. TC14 records the actual configured timeout value in the test report for documentation.</div>
      </div>
      <div class="risk-field full"><div class="rf-label">Test Cases</div><div class="rf-value"><div class="tc-chips"><span class="tc-chip">TC14</span></div></div></div>
    </div>
  </div>
</div>

</div>
<footer>
  Sourav · QA Engineering Intern Assessment · Mulah Technologies, Malaysia · Hiredly · v1.0 — 26 February 2026<br>
  GoSMS SMS Top-Up | Risk & Mitigation Register | MikeTango / QuickBooks Integration
</footer>
</body>
</html>`
