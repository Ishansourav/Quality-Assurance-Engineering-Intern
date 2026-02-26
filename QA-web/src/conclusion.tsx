export const conclusionHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conclusion & QA Insights — GoSMS | Sourav</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#0A1628;--navy2:#0F2044;--blue:#1B4FD8;--blue2:#2563EB;--accent:#38BDF8;
  --green:#22C55E;--red:#EF4444;--orange:#F59E0B;--purple:#8B5CF6;
  --text:#E2E8F0;--muted:#94A3B8;--border:rgba(148,163,184,0.15)}
body{font-family:'Inter',sans-serif;background:var(--navy);color:var(--text);min-height:100vh}
.bg-grid{position:fixed;inset:0;background-image:linear-gradient(rgba(56,189,248,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.025) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0}
.bg-glow{position:fixed;bottom:-20%;right:-10%;width:600px;height:600px;background:radial-gradient(ellipse,rgba(139,92,246,0.12) 0%,transparent 70%);pointer-events:none;z-index:0}
nav{position:sticky;top:0;z-index:100;background:rgba(10,22,40,0.9);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);padding:14px 40px;display:flex;align-items:center;gap:16px}
.nav-back{color:var(--accent);text-decoration:none;font-size:13px;font-weight:600}
.nav-back:hover{color:white}
.nav-title{font-size:14px;font-weight:700;color:white}
.nav-badge{font-size:11px;padding:3px 10px;border-radius:12px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.35);color:#A78BFA;margin-left:auto}

.page{max-width:960px;margin:0 auto;padding:48px 40px 80px;position:relative;z-index:5}

.doc-header{background:linear-gradient(135deg,rgba(139,92,246,0.15),rgba(15,32,68,0.8));
  border:1px solid rgba(139,92,246,0.3);border-radius:20px;padding:40px 48px;margin-bottom:48px;text-align:center}
.doc-eyebrow{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--purple);margin-bottom:12px}
.doc-title{font-size:36px;font-weight:900;color:white;margin-bottom:10px}
.doc-sub{font-size:15px;color:var(--muted);max-width:640px;margin:0 auto;line-height:1.7}

.section{margin-bottom:56px}
.sec-tag{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--purple);margin-bottom:6px}
.sec-title{font-size:22px;font-weight:800;color:white;margin-bottom:4px}
.sec-sub{font-size:13px;color:var(--muted);margin-bottom:24px}

.card{background:rgba(15,32,68,0.5);border:1px solid var(--border);border-radius:16px;padding:28px;margin-bottom:16px}
.card-title{font-size:15px;font-weight:700;color:white;margin-bottom:14px;display:flex;align-items:center;gap:10px}
.card-body{font-size:13px;color:var(--muted);line-height:1.8}
.card-body p{margin-bottom:10px}
.card-body p:last-child{margin-bottom:0}
.card-body strong{color:var(--text)}

/* KEY FINDINGS */
.findings-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.finding{border-radius:14px;padding:22px;border:1px solid}
.finding-c{background:rgba(239,68,68,0.08);border-color:rgba(239,68,68,0.25)}
.finding-h{background:rgba(245,158,11,0.08);border-color:rgba(245,158,11,0.25)}
.finding-pos{background:rgba(34,197,94,0.07);border-color:rgba(34,197,94,0.25)}
.finding-rec{background:rgba(56,189,248,0.06);border-color:rgba(56,189,248,0.2)}
.finding-icon{font-size:28px;margin-bottom:10px}
.finding-title{font-size:13px;font-weight:700;margin-bottom:6px}
.finding-c .finding-title{color:#FCA5A5}
.finding-h .finding-title{color:#FCD34D}
.finding-pos .finding-title{color:#86EFAC}
.finding-rec .finding-title{color:var(--accent)}
.finding-body{font-size:12px;color:var(--muted);line-height:1.6}

/* RELEASE CRITERIA */
.criteria-list{display:flex;flex-direction:column;gap:10px}
.criteria-item{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;
  border-radius:12px;border:1px solid}
.cr-blocker{background:rgba(239,68,68,0.06);border-color:rgba(239,68,68,0.2)}
.cr-required{background:rgba(245,158,11,0.06);border-color:rgba(245,158,11,0.2)}
.cr-recommended{background:rgba(56,189,248,0.05);border-color:rgba(56,189,248,0.15)}
.cr-icon{font-size:18px;flex-shrink:0;margin-top:1px}
.cr-title{font-size:13px;font-weight:700;margin-bottom:3px}
.cr-blocker .cr-title{color:#FCA5A5}
.cr-required .cr-title{color:#FCD34D}
.cr-recommended .cr-title{color:var(--accent)}
.cr-desc{font-size:12px;color:var(--muted);line-height:1.5}

/* MONITORING PLAN */
.monitor-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.monitor-card{background:rgba(15,32,68,0.4);border:1px solid var(--border);border-radius:12px;padding:18px}
.monitor-icon{font-size:24px;margin-bottom:8px}
.monitor-title{font-size:13px;font-weight:700;color:white;margin-bottom:4px}
.monitor-desc{font-size:11px;color:var(--muted);line-height:1.5}
.monitor-freq{display:inline-block;margin-top:8px;font-size:10px;font-weight:600;padding:2px 8px;
  border-radius:6px;background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.2);color:var(--accent)}

/* SUMMARY TABLE */
.summary-table{width:100%;border-collapse:collapse;font-size:13px}
.summary-table th{background:rgba(15,32,68,0.8);color:var(--accent);font-size:11px;font-weight:700;
  letter-spacing:1px;text-transform:uppercase;padding:12px 16px;text-align:left;border:1px solid rgba(37,99,235,0.2)}
.summary-table td{padding:11px 16px;border:1px solid var(--border);color:var(--text);font-size:12px}
.summary-table tr:nth-child(even) td{background:rgba(15,32,68,0.3)}
.summary-table tr:last-child td{font-weight:700;background:rgba(27,79,216,0.1);color:white}

/* SIGNATURE BLOCK */
.signature{background:linear-gradient(135deg,rgba(27,79,216,0.12),rgba(139,92,246,0.1));
  border:1px solid rgba(139,92,246,0.25);border-radius:20px;padding:40px;text-align:center;margin-top:48px}
.sig-name{font-size:28px;font-weight:900;background:linear-gradient(135deg,white,var(--accent),var(--purple));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px}
.sig-role{font-size:14px;color:var(--muted);margin-bottom:20px}
.sig-details{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;font-size:12px;color:var(--muted);margin-bottom:24px}
.sig-details span{color:var(--text)}
.sig-statement{max-width:560px;margin:0 auto;font-size:13px;color:var(--muted);line-height:1.8;
  border-top:1px solid var(--border);padding-top:20px;font-style:italic}

/* checklist */
.checklist{list-style:none;display:flex;flex-direction:column;gap:8px}
.checklist li{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--text);line-height:1.6;
  padding:10px 16px;border-radius:10px;background:rgba(34,197,94,0.06);border:1px solid rgba(34,197,94,0.15)}
.checklist li::before{content:'✓';color:var(--green);font-weight:800;flex-shrink:0}

footer{text-align:center;padding:40px;border-top:1px solid var(--border);color:var(--muted);font-size:11px;position:relative;z-index:5}
@media(max-width:768px){
  .findings-grid{grid-template-columns:1fr}
  .monitor-grid{grid-template-columns:1fr}
  .sig-details{flex-direction:column;gap:8px;align-items:center}
  .page{padding:32px 20px 60px}
  nav{padding:14px 20px}
}
</style>
</head>
<body>
<div class="bg-grid"></div>
<div class="bg-glow"></div>

<nav>
  <a href="/" class="nav-back">← Back to Hub</a>
  <span style="color:var(--border)">|</span>
  <span class="nav-title">🏁 Conclusion & QA Insights</span>
  <span class="nav-badge">Deliverable 05</span>
</nav>

<div class="page">
<div class="doc-header">
  <div class="doc-eyebrow">🏁 Quality Assurance Assessment — Deliverable 05 of 05</div>
  <div class="doc-title">Conclusion & QA Insights</div>
  <div class="doc-sub">Final professional assessment, key findings, release recommendation criteria, post-release monitoring plan, and QA philosophy alignment for the GoSMS SMS Top-Up feature.</div>
</div>

<!-- COMPLETE ASSESSMENT SUMMARY -->
<div class="section">
  <div class="sec-tag">Assessment Summary</div>
  <div class="sec-title">Complete Deliverable Breakdown</div>
  <div class="sec-sub">What was produced and what it covers</div>
  <div class="card" style="padding:0;overflow:hidden">
    <table class="summary-table">
      <thead><tr><th>Deliverable</th><th>Content</th><th>Coverage</th></tr></thead>
      <tbody>
        <tr><td><strong>01 — QA Test Plan</strong></td><td>Feature overview, 9-step workflow analysis, 6 actor roles, 10 assumptions (A01–A10), 24 failure point catalogue (FP01–FP24), test strategy, environment specification</td><td>100% feature scope</td></tr>
        <tr><td><strong>02 — QA Flowchart</strong></td><td>Multi-layer decision flowchart: 5 architectural layers, all decision gates, retry logic (3× exponential backoff), rollback indicators, state transition reference table (S0–S9)</td><td>All 10 states + all error paths</td></tr>
        <tr><td><strong>03 — Test Cases</strong></td><td>30 test cases across 7 categories with full preconditions, numbered steps, expected results, state transitions, failure point references, and QA notes</td><td>10 Critical · 15 High · 5 Medium</td></tr>
        <tr><td><strong>04 — Risk Register</strong></td><td>19 identified risks across 6 severity tiers: financial integrity, API dependency, security, concurrency, email, compliance — each with likelihood rating, business impact, and mitigation strategy</td><td>6 Critical · 7 High · 4 Medium · 2 Low</td></tr>
        <tr><td><strong>05 — Conclusion</strong></td><td>Key findings, release criteria, post-release monitoring plan, QA philosophy, professional summary, and candidate submission statement</td><td>Final assessment complete</td></tr>
        <tr><td><strong>TOTAL</strong></td><td>Complete QA submission for GoSMS SMS Top-Up Feature | MikeTango / QuickBooks Integration</td><td>v1.0 — Final</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- KEY FINDINGS -->
<div class="section">
  <div class="sec-tag">Key Findings</div>
  <div class="sec-title">Critical Analysis Insights</div>
  <div class="sec-sub">What a thorough QA analysis of this feature revealed</div>
  <div class="findings-grid">
    <div class="finding finding-c">
      <div class="finding-icon">🔴</div>
      <div class="finding-title">Hidden Financial Risk in Mapping Logic</div>
      <div class="finding-body">The Outlet-to-Company credit mapping is the most dangerous component in the system. An incorrect mapping produces no error — it simply credits the wrong company. This is undetectable without explicit DB-level verification. Standard UI testing would miss this entirely.</div>
    </div>
    <div class="finding finding-c">
      <div class="finding-icon">⚛️</div>
      <div class="finding-title">Atomicity is the Core Safety Requirement</div>
      <div class="finding-body">In a system with multi-company credit writes, atomicity is non-negotiable. A partial write (Company A credited, Company B not) produces a financial inconsistency that may not surface until a manual audit — by which time recovery is complex and disruptive.</div>
    </div>
    <div class="finding finding-h">
      <div class="finding-icon">🔌</div>
      <div class="finding-title">External API Creates a Single Point of Failure</div>
      <div class="finding-body">The entire top-up workflow is gated on QuickBooks API availability. Without retry logic, graceful degradation, and admin alerting, even brief QuickBooks maintenance windows will completely block financial operations for Finance Executives.</div>
    </div>
    <div class="finding finding-h">
      <div class="finding-icon">🔑</div>
      <div class="finding-title">Idempotency is Essential, Not Optional</div>
      <div class="finding-body">Without unique Transaction IDs enforced server-side, double-click submissions, network retries, or manual re-submissions can create duplicate QuickBooks invoices and double SMS credits. In a financial system, this is equivalent to billing the client twice.</div>
    </div>
    <div class="finding finding-pos">
      <div class="finding-icon">✅</div>
      <div class="finding-title">Non-Blocking Email Architecture is Correct</div>
      <div class="finding-body">The design decision to make email delivery non-blocking (transaction continues to credit step regardless of email outcome) is the correct approach. Tying credit application to email delivery would create an unnecessary dependency on a lower-criticality system.</div>
    </div>
    <div class="finding finding-rec">
      <div class="finding-icon">🛡</div>
      <div class="finding-title">Server-Side Validation is Mandatory</div>
      <div class="finding-body">Any system relying solely on client-side validation is vulnerable to bypass via API tools (Postman, curl). Negative values, injection strings, or overflow numbers must be rejected at the server layer, completely independent of what the UI enforces.</div>
    </div>
  </div>
</div>

<!-- RELEASE CRITERIA -->
<div class="section">
  <div class="sec-tag">Release Recommendation</div>
  <div class="sec-title">Go / No-Go Release Criteria</div>
  <div class="sec-sub">Conditions that must be met before the feature is approved for production deployment</div>
  <div class="criteria-list">
    <div class="criteria-item cr-blocker">
      <span class="cr-icon">🚫</span>
      <div>
        <div class="cr-title">RELEASE BLOCKERS (Must ALL pass)</div>
        <div class="cr-desc">TC01 (E2E success), TC16 (idempotency), TC21–TC23 (atomicity & rollback), TC22 (partial write), TC25 (rollback failure escalation), TC29 (multi-company allocation), TC30 (mapping consistency) — all must have PASS status with DB-level verification. Any FAIL on these test cases = immediate NO-GO. Feature must not be deployed until all blockers are resolved and retested.</div>
      </div>
    </div>
    <div class="criteria-item cr-required">
      <span class="cr-icon">⚠️</span>
      <div>
        <div class="cr-title">REQUIRED BEFORE RELEASE (Must ALL pass)</div>
        <div class="cr-desc">TC09 (injection security), TC13–TC15 (API failure handling), TC26 (double-click prevention), TC27 (concurrent users), TC06 (negative values server-side), TC24 (audit log completeness). These are not blockers but must pass to maintain quality standards. Any FAIL requires a fix within the same sprint before go-live.</div>
      </div>
    </div>
    <div class="criteria-item cr-recommended">
      <span class="cr-icon">💡</span>
      <div>
        <div class="cr-title">RECOMMENDED (Should pass, may defer with justification)</div>
        <div class="cr-desc">TC03 (performance baseline), TC10 (decimal precision), TC11 (overflow), TC17 (malformed response), TC18–TC20 (email service). These can be deferred to next sprint with documented risk acceptance, provided compensating controls exist (e.g., SMTP monitoring, manual email fallback).</div>
      </div>
    </div>
    <div class="criteria-item cr-recommended" style="background:rgba(34,197,94,0.05);border-color:rgba(34,197,94,0.2)">
      <span class="cr-icon">✅</span>
      <div>
        <div class="cr-title" style="color:#86EFAC">GO CONDITION</div>
        <div class="cr-desc">Zero open CRITICAL defects. Zero open HIGH defects classified as release blockers. All RELEASE BLOCKER test cases passed with DB-level evidence. Risk Register reviewed and signed off. Audit log schema confirmed. Admin escalation mechanism verified. Post-release monitoring dashboards in place.</div>
      </div>
    </div>
  </div>
</div>

<!-- WHAT WAS DELIVERED -->
<div class="section">
  <div class="sec-tag">Completeness Check</div>
  <div class="sec-title">Assessment Delivery Checklist</div>
  <div class="sec-sub">Every requested deliverable — verified and completed</div>
  <ul class="checklist">
    <li><strong>Deep feature analysis</strong> — 9-step workflow breakdown, hidden complexity identification (multi-entity allocation, external API dependency, atomicity requirement), business context understanding</li>
    <li><strong>Business logic breakdown</strong> — Outlet-to-Company mapping engine, credit aggregation per company, total calculation rules, idempotency key generation</li>
    <li><strong>System architecture understanding</strong> — 5-layer architecture (UI → Business Logic → QuickBooks API → Email → Database) with risk profile per layer</li>
    <li><strong>Risk & failure point analysis</strong> — 24 failure points (FP01–FP24), 19 risk register entries, severity ratings, likelihood assessments, and business impact statements</li>
    <li><strong>State transition modelling</strong> — 10 states (S0–S9) with all valid transitions, error transitions, and key test case references per state</li>
    <li><strong>Flow design with mitigation</strong> — Professional QA flowchart with retry logic (3× exponential backoff), rollback indicators, non-blocking email path, idempotency gate, concurrency protection annotation</li>
    <li><strong>Professional test case design</strong> — 30 test cases (TC01–TC30) across 7 categories with full preconditions, numbered steps, expected results, and failure point references</li>
    <li><strong>Risk & Mitigation Register</strong> — 19 risks with severity, likelihood, impact, and complete mitigation strategies, mapped to relevant test cases</li>
    <li><strong>Professional conclusion</strong> — Key findings, release criteria (blockers vs required vs recommended), post-release monitoring plan, and QA philosophy statement</li>
  </ul>
</div>

<!-- POST-RELEASE MONITORING -->
<div class="section">
  <div class="sec-tag">Post-Release Plan</div>
  <div class="sec-title">Post-Release Monitoring Strategy</div>
  <div class="sec-sub">What to monitor after go-live to ensure continued financial integrity</div>
  <div class="monitor-grid">
    <div class="monitor-card">
      <div class="monitor-icon">📊</div>
      <div class="monitor-title">DB Balance Reconciliation</div>
      <div class="monitor-desc">Automated daily job compares DB company credit balances against QuickBooks quotation line items. Discrepancies trigger immediate admin alert.</div>
      <span class="monitor-freq">Daily — Automated</span>
    </div>
    <div class="monitor-card">
      <div class="monitor-icon">🔌</div>
      <div class="monitor-title">QuickBooks API Health Monitor</div>
      <div class="monitor-desc">Real-time API availability monitoring. Alert on 3+ consecutive failures. Track response time percentiles (p95, p99) for SLA monitoring.</div>
      <span class="monitor-freq">Real-time</span>
    </div>
    <div class="monitor-card">
      <div class="monitor-icon">📋</div>
      <div class="monitor-title">Transaction Audit Log Review</div>
      <div class="monitor-desc">Weekly review of FAILED and ROLLED_BACK transaction log entries. Identify patterns. Verify no entry lacks a Transaction ID or status field.</div>
      <span class="monitor-freq">Weekly</span>
    </div>
    <div class="monitor-card">
      <div class="monitor-icon">📧</div>
      <div class="monitor-title">Email Retry Queue Drain</div>
      <div class="monitor-desc">Monitor email retry queue for stale entries (>24h undelivered). Alert if queue depth exceeds threshold — may indicate persistent SMTP failure.</div>
      <span class="monitor-freq">Daily</span>
    </div>
    <div class="monitor-card">
      <div class="monitor-icon">🔄</div>
      <div class="monitor-title">Duplicate Transaction Detection</div>
      <div class="monitor-desc">Scan transaction log daily for any duplicate Transaction IDs or QuickBooks quotation IDs — evidence of idempotency failure or double-credit scenario.</div>
      <span class="monitor-freq">Daily — Automated</span>
    </div>
    <div class="monitor-card">
      <div class="monitor-icon">🗺</div>
      <div class="monitor-title">Mapping Drift Regression</div>
      <div class="monitor-desc">Run TC29 and TC30 regression suite after every Brand restructure, outlet reassignment, or quarterly release cycle to detect mapping drift.</div>
      <span class="monitor-freq">Per Release + Quarterly</span>
    </div>
  </div>
</div>

<!-- QA PHILOSOPHY -->
<div class="section">
  <div class="sec-tag">QA Philosophy</div>
  <div class="sec-title">Professional QA Mindset Applied</div>
  <div class="card">
    <div class="card-title">🧠 How This Feature Was Approached</div>
    <div class="card-body">
      <p>This assessment was approached not as a checklist exercise, but as a <strong>professional quality assurance investigation</strong> of a financially consequential system. The thinking framework applied was: <em>"Every failure path that is not explicitly tested is a failure path that will eventually be hit in production — with real financial consequences."</em></p>
      <p>The most critical insight identified early was that this feature's primary risk is <strong>silent failure</strong> — failures that produce no visible error but create invisible financial discrepancies. A wrong company mapping, a partial write without rollback, a duplicate invoice without idempotency — these do not crash the system. They pass through undetected, and only surface during a financial audit.</p>
      <p>This is why the test strategy emphasises <strong>DB-level verification</strong> over UI-level confirmation. The UI can display "Success" while the database holds incorrect values. Every critical test case requires a SQL query to verify the actual state of company credit balances — not just what the screen shows.</p>
      <p>The layered architecture analysis was not performed merely to describe the system — it was performed to identify where each category of risk lives, so that test cases could be designed to target those exact layers with maximum precision and minimal redundancy.</p>
      <p>This is the approach of a QA engineer who thinks in <strong>systems, not checklists</strong> — understanding that quality assurance in a financial product is ultimately about protecting the integrity of every transaction, for every user, under every possible failure condition.</p>
    </div>
  </div>
</div>

<!-- SIGNATURE BLOCK -->
<div class="signature">
  <div class="sig-name">Sourav</div>
  <div class="sig-role">Quality Assurance Engineering Intern — Assessment Candidate</div>
  <div class="sig-details">
    <span>Company: <span>Mulah Technologies, Malaysia</span></span>
    <span>Platform: <span>Hiredly</span></span>
    <span>Role: <span>Quality Assurance Associate MY</span></span>
    <span>Date: <span>26 February 2026</span></span>
  </div>
  <div class="sig-statement">
    "This assessment represents my understanding of professional Quality Assurance engineering — not as a testing checklist, but as a disciplined, systematic investigation into everything that could go wrong in a financially consequential system, and the rigorous strategies required to prevent it."
  </div>
</div>

</div>
<footer>
  Sourav · QA Engineering Intern Assessment · Mulah Technologies, Malaysia · Hiredly · v1.0 — 26 February 2026<br>
  GoSMS SMS Top-Up Feature | MikeTango / QuickBooks Integration | Conclusion & Final Submission
</footer>
</body>
</html>`
