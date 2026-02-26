# 📋 GoSMS SMS Top-Up Feature — Complete QA Assessment

![QA Assessment Cover](https://raw.githubusercontent.com/Ishansourav/Quality-Assurance-Engineering-Intern/main/QA-Assessment-Intern.png)

> **Product:** GoSMS | **Company:** MikeTango <br>**Integration:** QuickBooks Accounting System <br>
> **Document Type:** Full QA Session Analysis — README Reference <br>
> **Scope:** End-to-end QA planning, architecture analysis, failure modelling, test design <br>
> **Status:** Submission Ready

---

## 📑 Table of Contents

1. [Overview](#1-overview)
2. [Product & Feature Context](#2-product--feature-context)
3. [Why This Feature Is Complex — Hidden Depths](#3-why-this-feature-is-complex--hidden-depths)
4. [System Architecture — All 5 Layers](#4-system-architecture--all-5-layers)
5. [Complete Failure Point Matrix — 24 Failure Points](#5-complete-failure-point-matrix--24-failure-points)
6. [State Machine Model — 10 States, 18 Transitions](#6-state-machine-model--10-states-18-transitions)
7. [Flow Design with Mitigation Logic](#7-flow-design-with-mitigation-logic)
8. [All 30 Test Cases — Category by Category](#8-all-30-test-cases--category-by-category)
9. [Risk Register — 10 Risks with Mitigations](#9-risk-register--10-risks-with-mitigations)
10. [Assumptions Log](#10-assumptions-log)
11. [QA Methodology Applied in This Session](#11-qa-methodology-applied-in-this-session)
12. [Deliverables Produced](#12-deliverables-produced)
13. [Interview Preparation — Key Points to Know](#13-interview-preparation--key-points-to-know)
14. [Glossary of Terms Used](#14-glossary-of-terms-used)

---

## 1. Overview

### 1.1 What This QA Assessment was.

This QA Assessment was a complete, professional-grade QA assessment of a real-world software feature — the **SMS Top-Up Workflow** in the **GoSMS** product built by **MikeTango**, integrated with **QuickBooks** as its accounting system.

The QA Assessment was structured to simulate a real QA Engineer's approach to an interview technical assessment — beginning from raw feature understanding and progressing to submission-ready documentation, professional flowcharts, and a complete test case library.

### 1.2 What Was Produced in This QA Assessment

| Deliverable | Format | Content |
|---|---|---|
| QA Test Plan Document | `.docx` (Word) | 9 sections, title page, full professional formatting |
| Professional Flowchart | `.html` | Complete decision tree with all paths, mitigations, state labels |
| Test Case Tables | `.html` | 30 test cases, full card format, summary table |
| README File | `.md` | This file — QA Assessment overview|

### 1.3 The Core Workflow Being Tested

```
Finance Executive
    ↓
[Authenticate]
    ↓
[Select Brand]
    ↓
[Load Outlets per Brand]
    ↓
[Enter Top-Up Amounts per Outlet]
    ↓
[Validate Inputs + Generate Transaction ID]
    ↓
[Call QuickBooks API → Generate Quotation]
    ↓
[Send Email to Client]
    ↓
[Credit SMS to Companies (mapped from Outlets)]
    ↓
[Log Transaction]
    ↓
[Show Success]
```

### 1.4 Phases Completed in This QA Assessment

| Phase | Title | Output |
|---|---|---|
| Phase 1 | Deep Feature Analysis | Hidden complexity identified — not a form submit |
| Phase 2 | System Layer Breakdown | 5 architecture layers mapped |
| Phase 3 | Failure Matrix | 24 failure points documented |
| Phase 4 | State Machine Design | 10 states, 18+ transitions |
| Phase 5 | Flow Design | Complete decision tree with mitigation |
| Phase 6 | Test Case Design | 30 test cases across 7 categories |
| Phase 7 | Risk & Mitigation | 10 risks with engineering mitigations |
| Phase 8 | Document Submission | Full .docx, .html flowchart, .html test tables |

---

## 2. Product & Feature Context

### 2.1 Product Information

```
Product Name   : GoSMS
Company        : MikeTango
Feature        : SMS Credit Top-Up Workflow
Integration    : QuickBooks (external accounting system)
Primary User   : Finance Executive
```

### 2.2 Business Purpose of This Feature

The SMS Top-Up feature exists to allow a Finance Executive to **purchase and allocate SMS sending credits** to business outlets. Because the company operates a **multi-brand, multi-outlet, multi-company structure**, the credits must be allocated to the correct legal entity (Company), not just any sub-unit.

The QuickBooks integration ensures that every top-up generates a **formal financial quotation** — this is required for accounting, audit, and compliance purposes. No SMS credit can be allocated without a corresponding financial record in QuickBooks.

### 2.3 Key Actors and Their Roles

| Actor | Role |
|---|---|
| Finance Executive | The human user. Initiates the process. Selects brand, enters amounts, submits. |
| GoSMS System | Orchestrates the entire workflow. Validates, maps, calls APIs, writes to DB. |
| QuickBooks API | External accounting system. Creates and stores formal quotations/invoices. |
| SMTP Email Service | Sends confirmation to client after quotation is created. |
| Database | Stores SMS credit balances per Company and all transaction audit logs. |

### 2.4 Data Entities Involved

```
Brand
  └── Outlet (many per brand)
        └── Company (one per outlet, but multiple outlets can share a company)

Transaction
  ├── Transaction ID (unique per submission)
  ├── Brand ID
  ├── Outlet[] (each with top-up amount)
  ├── Company[] (derived from outlet mapping)
  ├── QuickBooks Quotation ID
  ├── Total Amount
  ├── Finance Executive User ID
  ├── Timestamp
  └── Status (SUCCESS | FAILED | ROLLED_BACK)
```

### 2.5 The Critical Data Relationship

The most important — and most dangerous — relationship in this system is:

```
Outlet ──mapped to──► Company
```

This mapping determines **which legal entity receives SMS credits**. If this mapping is wrong, credits go to the wrong company. This is a **financial integrity defect** — not just a bug.

---

## 3. Why This Feature Is Complex — Hidden Depths

### 3.1 Surface Appearance vs Reality

**What it looks like:** A form where you pick a brand, type some numbers, and click submit.

**What it actually is:** A 5-layer orchestrated financial transaction involving external API dependency, multi-entity allocation logic, atomic database operations, and concurrent access control.

### 3.2 The Three Categories of Hidden Complexity

---

#### Complexity 1 — Multi-Entity Financial Allocation

The system doesn't just credit "the brand". It must:

1. Identify which outlets belong to the selected brand
2. Map each outlet to its parent company
3. Aggregate top-up amounts per company (not per outlet)
4. Write separate credit entries per company

**Example:**

```
Brand X has 4 Outlets:
  Outlet A → Company Alpha   (top-up: 100)
  Outlet B → Company Alpha   (top-up: 200)
  Outlet C → Company Beta    (top-up: 300)
  Outlet D → Company Gamma   (top-up: 400)

Expected DB writes:
  Company Alpha  += 300  (100+200)
  Company Beta   += 300
  Company Gamma  += 400

QuickBooks Invoice Total = 1000
```

Any error in the mapping layer means Company Alpha might receive Company Beta's credits. This is a **silent financial error** — the UI might show "Success" while the DB is corrupted.

---

#### Complexity 2 — External API Dependency (QuickBooks)

Introducing an external API into a financial transaction creates an entirely new class of failure modes:

| Failure Mode | Risk |
|---|---|
| API Unreachable | Entire flow blocks — what happens to the user? |
| API Timeout | How long do we wait? What triggers? Do we retry? |
| API Returns Error | Do we proceed without a quotation? Never. |
| Duplicate Invoice | If retry creates 2 invoices, financial records are wrong |
| Malformed Response | Does the system crash or handle gracefully? |
| Auth Failure | Are credentials checked before each call? |

The key design question: **should SMS credits ever be applied without a successful QuickBooks quotation?**

**Answer: No. Never. This is a hard rule.**

If the quotation fails, the credit must not be applied. The QuickBooks record is the financial source of truth.

---

#### Complexity 3 — Transactional Integrity

The system must treat multiple operations as a single atomic unit:

```
ATOMIC UNIT:
  ┌─────────────────────────────────────────┐
  │  BEGIN TRANSACTION                      │
  │    Write credit to Company Alpha        │
  │    Write credit to Company Beta         │
  │    Write credit to Company Gamma        │
  │    Write audit log entry                │
  │  COMMIT                                 │
  └─────────────────────────────────────────┘
  
  If ANY write fails → ROLLBACK ALL
```

If Company Alpha is credited but Company Beta's write fails, and no rollback occurs:
- Company Alpha has extra SMS credits it didn't pay for correctly
- Company Beta is missing credits the Finance Executive paid for
- The financial books don't match

This is a **regulatory compliance defect** in a financial system.

---

## 4. System Architecture — All 5 Layers

### 4.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 1: UI / PRESENTATION                             │
│  Brand dropdown | Outlet list | Input fields | Button   │
├─────────────────────────────────────────────────────────┤
│  LAYER 2: BUSINESS LOGIC                                │
│  Validation | Mapping | Aggregation | Total calculation │
├─────────────────────────────────────────────────────────┤
│  LAYER 3: EXTERNAL INTEGRATION (QuickBooks)             │
│  API call | Response handling | Retry | Deduplication   │
├─────────────────────────────────────────────────────────┤
│  LAYER 4: EMAIL SERVICE                                 │
│  SMTP send | Content build | Failure handling           │
├─────────────────────────────────────────────────────────┤
│  LAYER 5: DATABASE                                      │
│  Atomic write | Credit update | Log | Rollback          │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Layer 1 — UI / Presentation Layer

**What it does:** Captures user input and renders system responses.

**Components and their specific risks:**

| Component | Specific Risk |
|---|---|
| Brand Dropdown | Empty state not handled; data fails to load; no retry offered |
| Outlets List | Partial outlet list returned; outlet count mismatch vs DB |
| Top-Up Input Fields | Empty; negative; text; special chars; overflow; decimal edge |
| Submit Button | Double-click causes 2 API calls; not disabled during processing |
| Error Messages | Missing, unclear, not field-specific, appears in wrong location |
| Success Screen | Wrong transaction details shown; no Transaction ID displayed |

**Why UI layer matters in QA:**
UI validation is the first line of defence, but it is NOT the only line. A QA engineer must test what happens when UI validation is bypassed (e.g., via Postman/API tools). The system's server-side validation must be independent and equally strict.

### 4.3 Layer 2 — Business Logic Layer

**What it does:** All validation rules, company-to-outlet mapping, amount aggregation, and decision routing before any external call is made.

**This is the most dangerous layer for silent errors.**

| Logic Component | Risk Detail |
|---|---|
| Input Validation Engine | Boundary values not enforced; negative values accepted at server; text not rejected |
| Outlet-to-Company Mapping | Wrong company assigned; unmapped outlet silently skipped; stale cache used |
| Top-Up Aggregation | Incorrect sum; floating point precision errors; outlet value overwrites another |
| Total Gate (total > 0) | Zero total bypass allows API call with no financial value |
| Transaction ID Generation | Non-unique IDs; ID not persisted before API call; ID not in rollback logs |

**The aggregation logic in detail:**

```
For each outlet in selected brand:
  company_id = get_company(outlet.id)         // mapping step
  company_totals[company_id] += outlet.amount  // aggregation step

// Then send to QuickBooks:
invoice_total = sum(company_totals.values())   // total step

// Then write to DB:
for each company_id, amount in company_totals:
  UPDATE company_credits SET balance += amount WHERE id = company_id
```

Any error in any of these three sub-steps produces a different class of defect:
- Mapping error → wrong company gets credit
- Aggregation error → wrong amount written
- Total error → QuickBooks invoice doesn't match credits applied

### 4.4 Layer 3 — External Integration Layer (QuickBooks)

**What it does:** Makes an HTTP API call to QuickBooks to create a formal financial quotation.

**This is the highest-risk layer because:**
1. It is outside our control
2. It introduces network-dependent failure modes
3. A partial success (quotation created, credit not applied) creates an orphaned financial record

**The API call structure:**

```
POST /quickbooks/api/quotations
Headers:
  Authorization: Bearer {api_token}
  Content-Type: application/json
  Idempotency-Key: {transaction_id}

Body:
{
  "client_id": "...",
  "transaction_reference": "{transaction_id}",
  "line_items": [
    { "company_id": "alpha", "amount": 300 },
    { "company_id": "beta",  "amount": 300 },
    { "company_id": "gamma", "amount": 400 }
  ],
  "total": 1000
}
```

**Response handling requirements:**

| HTTP Response | System Behaviour Required |
|---|---|
| 200 OK + valid body | Proceed to email + credit |
| 200 OK + malformed body | Parse error → abort → do NOT credit |
| 400 Bad Request | Log + abort + show error to user |
| 401 Unauthorised | Log + escalate to admin + abort |
| 422 Unprocessable | Log + abort + show specific message |
| 500 Server Error | Retry (3x) → if all fail → abort |
| 503 Unavailable | Retry (3x) → queue → admin alert |
| Timeout | Retry (3x) → abort → log timeout |

**Retry logic design:**

```
Attempt 1 → Wait 2 seconds
Attempt 2 → Wait 5 seconds  
Attempt 3 → Wait 10 seconds
If all 3 fail → ABORT | LOG | ALERT ADMIN | SHOW USER ERROR
```

**Idempotency key:**
The Transaction ID sent in the `Idempotency-Key` header ensures QuickBooks can detect duplicate requests. If the same Transaction ID arrives twice (e.g., user resubmits), QuickBooks returns the existing quotation rather than creating a second one.

### 4.5 Layer 4 — Email Service Layer

**What it does:** Sends a post-quotation confirmation email to the client.

**Critical architectural decision: Email is NON-BLOCKING.**

This means:
- If the email fails, the transaction CONTINUES to the credit step
- Email failure is logged and queued for retry
- The Finance Executive receives a non-critical warning, not an error
- The SMS credit is applied regardless of email success

**Why this design decision was made:**
Email delivery is outside the system's control and is not a financial requirement. The QuickBooks quotation IS the financial requirement. The email is a notification. Blocking a financial credit because of a notification failure would be poor system design.

**Email content must include:**
- Brand name
- Total amount (matching QuickBooks invoice exactly)
- Client name
- Transaction ID / Reference number
- Date of transaction
- List of outlets and amounts (optional but recommended)

### 4.6 Layer 5 — Database Layer

**What it does:** Writes SMS credit balances and creates the immutable transaction audit log.

**This layer must implement atomic transactions:**

```sql
BEGIN TRANSACTION;

  -- Write credits
  UPDATE company_credits 
  SET balance = balance + 300 
  WHERE company_id = 'alpha';

  UPDATE company_credits 
  SET balance = balance + 300 
  WHERE company_id = 'beta';

  UPDATE company_credits 
  SET balance = balance + 400 
  WHERE company_id = 'gamma';

  -- Write audit log
  INSERT INTO transaction_log 
  (transaction_id, brand_id, total, quotation_id, user_id, status, timestamp)
  VALUES ('{txn_id}', '{brand_id}', 1000, '{qb_id}', '{user_id}', 'SUCCESS', NOW());

COMMIT;

-- If any statement above fails:
ROLLBACK;
```

**Concurrency protection:**

```sql
-- Before writing, lock the rows being updated
SELECT balance FROM company_credits 
WHERE company_id IN ('alpha', 'beta', 'gamma') 
FOR UPDATE;  -- Row-level lock prevents concurrent modifications
```

---

## 5. Complete Failure Point Matrix — 24 Failure Points

### 5.1 Failure Points Catalogue

| ID | Failure Scenario | Layer | Impact | Probability | Related Test Case |
|---|---|---|---|---|---|
| FP01 | No brand selected on submit | UI | Medium | High | TC04 |
| FP02 | Outlets fail to load from DB | UI/DB | High | Medium | — |
| FP03 | Empty top-up field submitted | UI/Logic | Medium | High | TC05 |
| FP04 | Negative value in top-up field | UI/Logic | High | Medium | TC06 |
| FP05 | Text/special character input | UI/Logic | Medium | Medium | TC08, TC09 |
| FP06 | Zero total submitted | Logic | High | Medium | TC07 |
| FP07 | Decimal precision error in total | Logic | High | Low | TC10 |
| FP08 | Overflow/out-of-range value | UI/Logic | Medium | Low | TC11 |
| FP09 | Wrong company mapping | Logic | **CRITICAL** | Low | TC29, TC30 |
| FP10 | QuickBooks API unreachable | Integration | **CRITICAL** | Medium | TC13 |
| FP11 | QuickBooks API timeout | Integration | **CRITICAL** | Medium | TC14 |
| FP12 | Quotation creation returns error | Integration | **CRITICAL** | Low | TC15 |
| FP13 | Duplicate quotation created | Integration | **CRITICAL** | Low | TC16, TC28 |
| FP14 | API returns malformed response | Integration | High | Low | TC17 |
| FP15 | SMTP service unavailable | Email | Medium | Medium | TC18 |
| FP16 | Client email missing/invalid | Email | Medium | Medium | TC19 |
| FP17 | SMS credit DB write failure | DB | **CRITICAL** | Low | TC21 |
| FP18 | Partial credit applied on failure | DB | **CRITICAL** | Low | TC22 |
| FP19 | No rollback on credit failure | DB | **CRITICAL** | Low | TC23 |
| FP20 | Race condition on concurrent submit | DB | **CRITICAL** | Low | TC27 |
| FP21 | Double-click duplicate submission | UI/DB | High | High | TC26 |
| FP22 | Transaction log not written | DB | High | Low | TC24 |
| FP23 | Email content shows wrong amount | Email | Medium | Low | TC20 |
| FP24 | No error message on API failure | UI/UX | High | Medium | TC13–TC17 |

### 5.2 Impact Level Definitions

| Impact | Definition |
|---|---|
| **CRITICAL** | Financial data corruption, regulatory non-compliance, data loss, silent incorrect allocation |
| **HIGH** | Feature fails for user, data integrity at risk, requires immediate fix |
| **MEDIUM** | Degraded experience, non-blocking issue, logged for resolution |
| **LOW** | Minor UX issue, cosmetic, workaround available |

### 5.3 Most Critical Failure Points — Deep Analysis

**FP09 — Wrong Company Mapping:**
This is the most dangerous silent failure. The system could show "Success" to the user while having credited the wrong legal entity. By the time anyone notices, reconciliation is difficult and may require manual DB correction and client communication. Prevention: map validation at the business logic layer with an explicit pre-write mapping assertion and post-write reconciliation log.

**FP18 — Partial Credit Applied:**
If Company Alpha is credited (DB write 1 succeeds) and then Company Beta's write fails (DB write 2 fails), and no rollback is triggered:
- Company Alpha has credits they didn't fully pay for (or the payment has no corresponding credit for Beta)
- Company Beta is missing credits despite a QuickBooks quotation existing
- The financial books are inconsistent between GoSMS and QuickBooks

Prevention: wrapping all credit writes in a single atomic DB transaction with a ROLLBACK on any exception.

**FP13 — Duplicate Quotation:**
If a Finance Executive's connection drops mid-submission, they may resubmit. Without an idempotency key, QuickBooks creates two quotations for the same transaction. Finance then has to manually void one. Prevention: Transaction ID as idempotency key sent in the API request header.

---

## 6. State Machine Model — 10 States, 18 Transitions

### 6.1 Complete State Definitions

| State ID | State Name | Description |
|---|---|---|
| **S0** | Initial | Page loaded. No user action. Awaiting interaction. |
| **S1** | Brand Selected | User has selected a valid Brand. System ready to fetch outlets. |
| **S2** | Outlets Loaded | All outlets for selected Brand fetched and rendered. Inputs active. |
| **S3** | Top-Up Entered | Finance Executive has entered amounts in one or more outlet fields. |
| **S4** | Validated | All fields passed validation. Total > 0. Transaction ID generated. Mapping validated. |
| **S5** | Quotation Created | QuickBooks API responded successfully. Quotation ID received. |
| **S6** | Email Sent | Confirmation email dispatched (or queued if SMTP failed). |
| **S7** | SMS Credited | All company credit DB writes completed within atomic transaction. |
| **S8** | Error | Any step failed. Error state. Rollback triggered if applicable. |
| **S9** | Success | All steps complete. Transaction logged. Success screen shown. |

### 6.2 Valid Transition Table

| From | To | Trigger | Condition |
|---|---|---|---|
| S0 | S1 | User selects Brand | Brand dropdown has valid selection |
| S1 | S2 | System loads Outlets | DB query returns ≥1 outlet |
| S2 | S3 | User enters amounts | ≥1 field modified |
| S3 | S4 | User clicks Submit | All fields valid; total > 0; Transaction ID generated |
| S4 | S5 | API call made | QuickBooks returns HTTP 200 with valid quotation |
| S5 | S6 | Email triggered | SMTP send attempted (success or queued) |
| S6 | S7 | DB write begins | Atomic transaction opened; all writes queued |
| S7 | S9 | Transaction commit | All writes succeed; COMMIT issued; log written |

### 6.3 Error Transition Table

| From | To | Error Trigger | System Response |
|---|---|---|---|
| S0 | S8 | Page load failure | Generic error; reload option |
| S1 | S8 | No brand selected on submit | Inline error; no API call |
| S2 | S8 | Outlets fail to load | Retry button; no input fields enabled |
| S3 | S8 | Invalid input submitted | Field-level error highlighting; preserve valid values |
| S4 | S8 | Total = 0 | Block submission; "total must be > 0" |
| S4 | S8 | Mapping validation fails | Log + block + admin alert |
| S5 | S8 | QuickBooks API failure | Abort all; do NOT email; do NOT credit |
| S5 | S8 | Timeout after 3 retries | Abort; log; admin alert; user error |
| S5 | S8 | Duplicate detected | Return existing quotation; do NOT create second |
| S6 | S8* | Email SMTP failure | Log; queue retry; CONTINUE to credit (non-blocking) |
| S7 | S8 | Credit DB write failure | ROLLBACK all; log; user error with Tx ID |
| S7 | S8 | Partial credit applied | ROLLBACK all; restore pre-transaction state |

> **Note:** S6 → S8 is marked with `*` because it is a non-blocking error — the overall flow continues to S7 despite the email error.

### 6.4 State Coverage in Test Cases

| State | Covered By |
|---|---|
| S0 | TC01, TC04 |
| S1 | TC01, TC02, TC04 |
| S2 | TC01, TC02, TC03, TC30 |
| S3 | TC05–TC12 |
| S4 | TC01, TC06, TC07, TC09, TC16, TC26 |
| S5 | TC13, TC14, TC15, TC16, TC17 |
| S6 | TC18, TC19, TC20 |
| S7 | TC21, TC22, TC23, TC29 |
| S8 | All error test cases (TC04–TC25) |
| S9 | TC01, TC02, TC03, TC16, TC18, TC19, TC27, TC28 |

**All 10 states are covered. No untested state exists.**

---

## 7. Flow Design with Mitigation Logic

### 7.1 Complete Decision Tree (Text Representation)

```
START (S0)
│
├─► Authenticate Finance Executive
│     │
│     ├─[NOT authenticated]─► Redirect to Login → END
│     │
│     └─[Authenticated]
│           │
│           ▼
│         Load Brand Dropdown
│           │
│           ├─[Brand NOT selected]─► Show error: "Please select a Brand" → Loop back
│           │
│           └─[Brand Selected] (S1)
│                 │
│                 ▼
│               Load Outlets for Brand (S2)
│                 │
│                 ├─[Load FAILED]─► Show retry button → Loop back
│                 │
│                 └─[Outlets Loaded]
│                       │
│                       ▼
│                     Finance Executive Enters Top-Up Amounts (S3)
│                       │
│                       ▼
│                     Finance Executive Clicks Submit
│                       │
│                       ▼
│                     ⚠ DISABLE Submit Button (anti-double-click)
│                       │
│                       ▼
│                     Validate All Input Fields
│                       │
│                       ├─[INVALID]─► Highlight fields; show inline errors; RE-ENABLE button → Loop
│                       │
│                       └─[VALID]
│                             │
│                             ▼
│                           Check Total > 0
│                             │
│                             ├─[Total = 0]─► Error: "Total must be > 0"; re-enable → Loop
│                             │
│                             └─[Total > 0]
│                                   │
│                                   ▼
│                                 Generate Unique Transaction ID (S4)
│                                   │
│                                   ▼
│                                 Validate Outlet → Company Mapping
│                                   │
│                                   ├─[Mapping INVALID]─► Log; alert admin; show error → END
│                                   │
│                                   └─[Mapping VALID]
│                                         │
│                                         ▼
│                                       CALL QuickBooks API
│                                         │
│                                         ├─[API UNREACHABLE / TIMEOUT]
│                                         │     │
│                                         │     ▼
│                                         │   Retry (Attempt 1 → 2s → Attempt 2 → 5s → Attempt 3 → 10s)
│                                         │     │
│                                         │     ├─[All retries FAILED]─► Queue; alert admin; user error → END
│                                         │     │
│                                         │     └─[Retry SUCCEEDED]─► Continue ↓
│                                         │
│                                         ├─[Duplicate Transaction ID detected]─► Return existing quotation → S9
│                                         │
│                                         ├─[API returns ERROR (4xx/5xx)]─► Abort; log; user error → END
│                                         │
│                                         ├─[Malformed response]─► Parse error; log; abort → END
│                                         │
│                                         └─[Quotation CREATED successfully] (S5)
│                                               │
│                                               ▼
│                                             Fetch client email from QuickBooks
│                                               │
│                                               ▼
│                                             Send Confirmation Email
│                                               │
│                                               ├─[Email FAILED / Missing email]
│                                               │     │
│                                               │     ▼
│                                               │   Log failure; add to retry queue; notify FE
│                                               │   → CONTINUE to credit (NON-BLOCKING) (S6*)
│                                               │
│                                               └─[Email SENT] (S6)
│                                                     │
│                                                     ▼
│                                                   OPEN ATOMIC DB TRANSACTION
│                                                     │
│                                                     ▼
│                                                   Acquire row-level locks on company credit rows
│                                                     │
│                                                     ▼
│                                                   Write SMS Credits per Company (S7)
│                                                     │
│                                                     ├─[ANY write FAILS]
│                                                     │     │
│                                                     │     ▼
│                                                     │   ROLLBACK ALL writes
│                                                     │   Log: status=ROLLED_BACK + Tx ID
│                                                     │   Show user error → END
│                                                     │
│                                                     └─[All writes SUCCEED]
│                                                           │
│                                                           ▼
│                                                         Write Audit Log Entry
│                                                           │
│                                                           ▼
│                                                         COMMIT Transaction
│                                                           │
│                                                           ▼
│                                                         Re-enable Submit Button
│                                                           │
│                                                           ▼
│                                                         SHOW SUCCESS (S9)
│                                                         Display: Transaction ID + Summary
│                                                           │
│                                                           ▼
│                                                         END
```

### 7.2 Mitigation Summary Table

| Risk Point | Mitigation Design |
|---|---|
| Double-click submit | Disable button on first click; re-enable after result |
| Duplicate API call | Idempotency key (Transaction ID) in all API requests |
| API unreachable | Retry 3x with exponential backoff (2s, 5s, 10s) |
| API timeout | Configurable timeout; abort after threshold; do not credit |
| Partial credit | Atomic DB transaction; ROLLBACK on any write failure |
| Concurrent updates | Row-level DB locking (SELECT FOR UPDATE) |
| Mapping error | Pre-write mapping assertion at business logic layer |
| Email failure | Non-blocking; retry queue; admin notification |
| Invalid input | Client-side AND server-side independent validation |
| No rollback mechanism | Escalation alert if rollback itself fails; manual review queue |

---

## 8. All 30 Test Cases — Category by Category

### 8.1 Test Case Summary Table

| TC ID | Title | Priority | Category | State Path | Failure Points |
|---|---|---|---|---|---|
| TC01 | Complete Valid End-to-End Transaction | CRITICAL | Happy Path | S0→S9 | — |
| TC02 | Valid — Single Outlet / Single Company | HIGH | Happy Path | S0→S9 | FP09 |
| TC03 | Valid — Maximum Outlets Per Brand | MEDIUM | Volume | S0→S9 | FP07 |
| TC04 | No Brand Selected — Submit Attempt | HIGH | Validation | S0→S8 | FP01 |
| TC05 | Empty Top-Up Field | HIGH | Validation | S3→S8 | FP03 |
| TC06 | Negative Number Input | HIGH | Validation | S3→S8 | FP04 |
| TC07 | Zero Value All Fields | HIGH | Validation | S3→S8 | FP06 |
| TC08 | Text / Alphabetic Input | HIGH | Validation | S3→S8 | FP05 |
| TC09 | Injection Attack Attempt | HIGH | Security | S3→S8 | FP05 |
| TC10 | Decimal Precision Edge Cases | MEDIUM | Validation | S3→S4/S8 | FP07 |
| TC11 | Overflow / Extremely Large Number | MEDIUM | Validation | S3→S8 | FP08 |
| TC12 | Mixed Valid and Invalid Fields | HIGH | Validation | S3→S8 | FP05 |
| TC13 | API Unreachable — Retry + Abort | CRITICAL | Integration | S5→S8 | FP10 |
| TC14 | API Request Timeout | CRITICAL | Integration | S5→S8 | FP11 |
| TC15 | API 4xx / 5xx Error Response | CRITICAL | Integration | S5→S8 | FP12 |
| TC16 | Duplicate Quotation Prevention | CRITICAL | Integration | S5 idempotent | FP13 |
| TC17 | Malformed API Response | HIGH | Integration | S5→S8 | FP14 |
| TC18 | SMTP Service Unavailable | MEDIUM | Email | S6→S8→S9 | FP15 |
| TC19 | Missing / Invalid Client Email | MEDIUM | Email | S6→S8→S9 | FP16 |
| TC20 | Email Content Accuracy | MEDIUM | Email | S6→S9 | FP23 |
| TC21 | SMS Credit DB Write — Full Failure | CRITICAL | Database | S7→S8 | FP17 |
| TC22 | Partial Credit Mid-Transaction | CRITICAL | Database | S7→S8 | FP18 |
| TC23 | Rollback DB State Verification | CRITICAL | Database | S7→S8 | FP19 |
| TC24 | Audit Log Completeness | HIGH | Database | S9 | FP22 |
| TC25 | Rollback Mechanism Failure | CRITICAL | Database | S8→Alert | FP17, FP19 |
| TC26 | Double-Click Submit Prevention | HIGH | Concurrency | S4→S9 (×1) | FP21 |
| TC27 | Two Users Simultaneous Submit | HIGH | Concurrency | S4→S9 (×2) | FP20 |
| TC28 | Resubmission After Error | HIGH | Concurrency | S8→S9 | FP13, FP21 |
| TC29 | Credits Split Across Companies | CRITICAL | Allocation | S4→S9 | FP09 |
| TC30 | Mapping Consistency Check | CRITICAL | Allocation | S2→S9 | FP09 |

### 8.2 Priority Breakdown

```
CRITICAL  : 10 test cases  (TC01, TC13, TC14, TC15, TC16, TC21, TC22, TC23, TC25, TC29, TC30)
HIGH      : 15 test cases  (TC02, TC04, TC05, TC06, TC07, TC08, TC09, TC12, TC17, TC24, TC26, TC27, TC28)
MEDIUM    :  5 test cases  (TC03, TC10, TC11, TC18, TC19, TC20)
```

### 8.3 Category Breakdown

```
Category 1 — Happy Path         :  3 test cases  (TC01–TC03)
Category 2 — Input Validation   :  9 test cases  (TC04–TC12)
Category 3 — Integration        :  5 test cases  (TC13–TC17)
Category 4 — Email              :  3 test cases  (TC18–TC20)
Category 5 — Database           :  5 test cases  (TC21–TC25)
Category 6 — Concurrency        :  3 test cases  (TC26–TC28)
Category 7 — Allocation/Mapping :  2 test cases  (TC29–TC30)
                                ────────────────
TOTAL                           : 30 test cases
```

### 8.4 The 10 Release Blockers (CRITICAL Test Cases)

These 10 test cases must PASS before this feature is production-ready. Any failure here is a blocker:

```
TC01 — Complete valid transaction must work end-to-end
TC13 — API failure must not credit SMS
TC14 — Timeout must not credit SMS
TC15 — API error responses must be handled gracefully
TC16 — Duplicate submissions must not create 2 invoices
TC21 — DB write failure must trigger full rollback
TC22 — Partial credit scenario must trigger full rollback
TC23 — Rollback must restore exact pre-transaction state
TC25 — Rollback failure must escalate to admin
TC29 — Credits must be split correctly across companies
TC30 — Outlet-to-company mapping must be consistent
```

### 8.5 Test Execution Recommended Order

```
Phase 1 (Foundation):  TC01 → Verify the happy path works before testing failures
Phase 2 (Validation):  TC04, TC05, TC06, TC07 → Gates work before complex tests
Phase 3 (Integration): TC13, TC14, TC15, TC16 → API failure handling verified
Phase 4 (DB Integrity): TC21, TC22, TC23 → Atomicity verified
Phase 5 (Allocation):  TC29, TC30 → Financial accuracy verified
Phase 6 (Concurrency): TC26, TC27, TC28 → Multi-user safety
Phase 7 (Regression):  TC02, TC03, TC10, TC11, TC12 → Edge cases
Phase 8 (Email):       TC18, TC19, TC20 → Non-blocking behaviour
```

---

## 9. Risk Register — 10 Risks with Mitigations

### 9.1 Risk Register Table

| Risk ID | Risk Description | Impact | Likelihood | Priority | Mitigation | Verification |
|---|---|---|---|---|---|---|
| R01 | Duplicate QuickBooks quotation created by retry or double-click | Critical | Medium | P1 | Unique Transaction ID as idempotency key before API call | TC16, TC26 |
| R02 | QuickBooks API downtime blocks entire flow with no fallback | Critical | Medium | P1 | Retry 3x + queue + admin alert | TC13, TC14 |
| R03 | Partial SMS credit: some companies credited, others not | Critical | Low | P1 | Atomic transaction; ROLLBACK on any write failure | TC22, TC23 |
| R04 | Race condition corrupts company balance on concurrent submit | Critical | Low | P1 | Row-level locking (SELECT FOR UPDATE) | TC27 |
| R05 | Wrong company receives SMS credits (mapping error) | Critical | Low | P1 | Pre-write mapping validation; post-write audit log | TC29, TC30 |
| R06 | Email failure blocks SMS credit (if treated as blocking) | High | Medium | P2 | Email step must be non-blocking; credit proceeds regardless | TC18 |
| R07 | Zero or negative top-up bypasses validation at server level | High | Medium | P2 | Independent server-side validation; parameterised API checks | TC06, TC07 |
| R08 | Injection attack via top-up input field | High | Low | P2 | Input sanitisation; parameterised DB queries | TC09 |
| R09 | Rollback mechanism itself fails | Critical | Very Low | P1 | Admin escalation + manual reconciliation flag + TX ID | TC25 |
| R10 | Outlet mapping changes between validation and credit write | High | Very Low | P2 | Mapping snapshot locked at S4; immutable for transaction duration | TC30 |

### 9.2 Risk Priority Matrix

```
               LIKELIHOOD
               Low          Medium       High
I  Critical  | R03,R04,     R01,R02,    |
M            | R05,R09,R10  |            |
P  High      | R08         R06,R07      |
A  Medium    |             FP01,FP03    FP01 |
C  Low       |             FP15         |
T
```

---

## 10. Assumptions Log

| ID | Assumption | Impact if Wrong |
|---|---|---|
| A01 | Each Brand may contain outlets from different Companies | If all outlets share one company, mapping tests TC29/TC30 are less meaningful |
| A02 | SMS credits are allocated per Company (not Brand/Outlet) | If per-outlet, the aggregation and mapping logic changes entirely |
| A03 | QuickBooks quotation is mandatory prerequisite for credits | If credits can be applied without quotation, all integration failure test cases change |
| A04 | Atomicity is required — partial success is a defect | If partial success is accepted by the business, TC22 and TC23 pass criteria change |
| A05 | Only authenticated Finance Executives access this feature | If role-based access is missing, add a security test category |
| A06 | Outlet-to-Company mapping is stored in GoSMS DB | If mapping comes from QuickBooks API, mapping failure modes change |
| A07 | Email sent to client email in QuickBooks record | If email address is in GoSMS DB, TC19 preconditions change |
| A08 | Email failure is non-blocking for credit step | If email is blocking, TC18 expected result changes entirely |
| A09 | Unique Transaction ID is or will be generated per submission | If no Transaction ID, FP13 (duplicate prevention) has no technical implementation |
| A10 | System supports concurrent multi-user access | If single-user only, TC27 is out of scope |

---

## 11. QA Methodology Applied in This Session

### 11.1 Techniques Used

**Black-box testing techniques:**
- Equivalence Partitioning — dividing inputs into valid/invalid partitions (TC05–TC12)
- Boundary Value Analysis — testing at limits (TC10, TC11)
- Decision Table Testing — all input combinations and their outcomes
- State Transition Testing — every state and every transition (full S0–S9 coverage)

**White-box thinking:**
- Understanding the system's internal architecture to identify hidden failure modes
- Knowing the DB transaction model to design atomicity tests
- Understanding the API call chain to identify timeout and retry scenarios

**Error guessing:**
- Double-click submission (TC26) — from experience knowing this is a common real-world bug
- Injection attacks (TC09) — security awareness applied to input fields
- Rollback mechanism failure (TC25) — second-order failure thinking

**Risk-based testing:**
- Prioritising test cases by business impact (financial defects = CRITICAL)
- Mapping every test case to a failure point for full traceability

### 11.2 Test Levels Covered

| Level | Test Cases |
|---|---|
| Unit-level thinking | Individual validation rules (TC04–TC12) |
| Integration testing | API integration (TC13–TC17), DB (TC21–TC25) |
| System testing | End-to-end flows (TC01, TC02, TC03) |
| Regression hooks | TC30 (mapping consistency — must run every release) |

### 11.3 What Was NOT Covered (Out of Scope for This Assessment)

- Performance / load testing (not specified in the assessment brief)
- Accessibility testing (WCAG compliance)
- Mobile responsiveness testing
- Multi-language / localisation testing
- PDF/print format of quotation
- QuickBooks portal UI verification (only API responses were in scope)
- Historical transaction search or reporting UI

### 11.4 QA Thinking Pattern Applied

```
Step 1: Understand the feature beyond its description
         → What looks simple is often complex underneath

Step 2: Map the architecture
         → Every layer is a separate risk domain

Step 3: Identify failure modes before writing test cases
         → The failure matrix drives test case creation

Step 4: Model the system as a state machine
         → Every state = 1+ test cases
         → Every error transition = 1+ test cases

Step 5: Design test cases that prove the system is correct
         → Not just "does it work" but "is the data correct at DB level"

Step 6: Prioritise by business impact
         → Financial integrity = CRITICAL
         → UX degradation = MEDIUM

Step 7: Document for the team, not just for yourself
         → Every test case must be reproducible by any QA engineer
```

---

## 12. Deliverables Produced

### 12.1 Deliverable 1 — QA Test Plan Document (`GoSMS_QA_TestPlan.docx`)

**Format:** Microsoft Word (.docx)
**Pages:** ~40+ pages
**Sections:**
1. Title Page (with metadata table)
2. Feature Overview (workflow, actors, complexity analysis)
3. Assumptions (10 documented assumptions)
4. System Architecture Breakdown (5 layers, detailed tables per layer)
5. Complete Failure Point Matrix (24 failure points, full table)
6. State Transition Model (state definitions + valid + error transition tables)
7. Test Cases — 30 test cases with full detail
8. Risk & Mitigation Register (10 risks)
9. Test Case Summary (all 30 in condensed table)
10. Conclusion (key principles + release criteria)

**Professional features included:**
- Header with document title on every page
- Footer with confidentiality notice
- Colour-coded tables (blue headers, alternating rows)
- Priority badges (red=Critical, orange=High, yellow=Medium)
- Consistent Arial font throughout
- All tables use DXA widths for cross-platform compatibility

### 12.2 Deliverable 2 — Professional Flowchart (`GoSMS_Flowchart.html`)

**Format:** HTML (renders in any browser)
**Content:**
- Complete decision tree from START to END
- All 12 decision gates (brand selection, outlet loading, validation, total check, mapping, API availability, duplicate check, quotation creation, email, credit write)
- All YES/NO branches with correct colours (green = YES, red = NO)
- Retry logic visualised for QuickBooks API
- Non-blocking email path clearly shown
- Rollback path clearly labelled
- State labels (S0–S9) on each step
- Test case references on decision nodes
- State transition quick-reference table at bottom
- Dark professional colour theme

### 12.3 Deliverable 3 — Test Case Tables (`GoSMS_TestCases.html`)

**Format:** HTML (renders in any browser)
**Content:**
- All 30 test cases as individual cards
- Each card contains: TC ID, Title, Priority Badge, Category, Precondition, Numbered Steps, Expected Result (green box), Notes (orange box), Failure Point Reference, State Transition
- 7 category headers with case counts
- Complete summary table at the bottom
- Colour-coded priority system throughout

### 12.4 Deliverable 4 — This README (`README.md`)

**Format:** Markdown
**Content:** Deep analysis of all data, decisions, and knowledge from this session

---

## 13. Interview Preparation — Key Points to Know

### 13.1 Questions They Are Likely to Ask

**Q: Why did you create a Transaction ID before calling the QuickBooks API?**
> A: To enable idempotency. If the same request is retried (due to timeout, double-click, or connection drop), the Transaction ID acts as a deduplication key. QuickBooks can check: "Has this ID been processed before?" If yes, return the existing quotation. This prevents duplicate invoices from appearing in the financial records.

**Q: Why is email non-blocking?**
> A: Email delivery is a notification concern, not a financial concern. The QuickBooks quotation is the financial record of the transaction. The SMS credit is the delivery of the service. Neither of these should be blocked by an SMTP failure, which is outside our system's control. If email failed for every transaction during an SMTP outage, the business would stop allocating SMS credits — which is a much bigger problem than a delayed email.

**Q: What happens if the rollback fails?**
> A: This is a critical edge case (TC25). The first response is an admin escalation alert with the Transaction ID. The transaction must be flagged for manual review. This ensures a human can verify the DB state and correct any inconsistency. Without this fallback, a rollback failure leaves the system in an unknown state with no visibility.

**Q: How do you test for race conditions?**
> A: By opening two authenticated sessions simultaneously and submitting for the same brand at the same time (TC27). The expected result is that both transactions complete correctly and the final company credit balance equals the sum of both submissions. The implementation must use row-level DB locking (SELECT FOR UPDATE) to prevent concurrent writes from corrupting the balance.

**Q: What is the most critical test case in your suite?**
> A: TC22 — Partial Credit Mid-Transaction. This is the atomicity test. If Company Alpha is credited and Company Beta's write fails, and no rollback occurs, we have a financial inconsistency. The QuickBooks invoice says 1000 was collected, but only part of the credits were applied. This violates the fundamental integrity of the system and is the hardest class of defect to detect because the UI may show "Success."

**Q: How do you know if the credits went to the right companies?**
> A: You cannot rely on the UI for this. You must query the DB directly before and after the transaction (TC29, TC30). Compare each company's balance before → after against the expected allocation from the outlet mapping. The UI showing "Success" is not sufficient evidence that the correct companies were credited.

**Q: What is equivalence partitioning?**
> A: Dividing input ranges into partitions where all values in a partition should produce the same result. For the top-up field: valid partition (1 to MAX), invalid negative partition (< 0), invalid text partition, invalid zero. You test one representative from each partition rather than every possible value.

### 13.2 Key Vocabulary for the Interview

| Term | Definition |
|---|---|
| Atomicity | All operations in a transaction succeed together or are all rolled back — no partial state |
| Idempotency | The same operation can be performed multiple times with the same result — no duplicates |
| Race condition | Two concurrent operations interfere with each other, causing unpredictable results |
| State transition testing | Testing every state a system can be in and every valid/invalid path between states |
| Boundary value analysis | Testing at the exact limits of valid input ranges |
| Equivalence partitioning | Dividing inputs into classes where all values behave the same |
| Non-blocking | A step that can fail without stopping the overall process |
| Rollback | Reversing all DB writes in a failed transaction to restore the pre-transaction state |
| Failure point | A specific location in the system where a failure can occur |
| Test traceability | The ability to trace every test case to a specific requirement or failure point |

### 13.3 What This Assessment Demonstrates

| Skill Demonstrated | How |
|---|---|
| Structured thinking | Organised into phases: analysis → architecture → failures → tests |
| Financial system awareness | Atomicity, idempotency, rollback, audit log design |
| External API risk modelling | Timeout, retry, duplicate, malformed response all covered |
| State machine fluency | 10 states, 18 transitions, every state has test coverage |
| Security awareness | Injection testing included in standard validation category |
| Documentation quality | Submission-ready .docx with professional formatting |
| Business awareness | Every risk mapped to business impact, not just technical impact |
| Depth of coverage | 24 failure points, 10 risks, 30 test cases, 10 assumptions |

---

## 14. Glossary of Terms Used

| Term | Full Meaning |
|---|---|
| GoSMS | The product being tested — an SMS credit management system |
| MikeTango | The company that built GoSMS |
| QuickBooks | External accounting software used to generate financial quotations |
| Outlet | A business sub-unit within a Brand (e.g., a store location) |
| Brand | A top-level business entity that contains multiple Outlets |
| Company | The legal entity that receives SMS credits (mapped from Outlets) |
| Finance Executive | The user role that initiates the SMS Top-Up workflow |
| Transaction ID | A unique identifier generated per submission used for deduplication and audit |
| Idempotency Key | Same as Transaction ID — ensures the same request processed twice produces the same result |
| Atomic Transaction | A DB operation where all writes succeed together or all are reversed |
| ROLLBACK | DB command that reverses all writes made since BEGIN TRANSACTION |
| COMMIT | DB command that finalises all writes made since BEGIN TRANSACTION |
| SMTP | Simple Mail Transfer Protocol — the standard for sending emails |
| Row-level Locking | SELECT FOR UPDATE — prevents concurrent DB writes to the same record |
| Retry Logic | Automatically repeating a failed operation with delay before giving up |
| Exponential Backoff | Retry delays that grow with each attempt (2s, 5s, 10s) to reduce server pressure |
| State Machine | A model of a system that can be in exactly one of a set of defined states at any time |
| State Transition | The movement from one state to another, triggered by an event |
| Equivalence Partition | A set of inputs that all produce the same system behaviour |
| Boundary Value | The exact limit of a valid input range (e.g., MAX, MAX+1, MAX-1) |
| FP (Failure Point) | A specific location in the system where a defined failure can occur |
| TC (Test Case) | A documented set of steps and expected results for a specific test scenario |
| Release Blocker | A defect or failing test case that prevents the feature from being released |
| Audit Log | An immutable record of every transaction with full details for reconciliation |
| Non-blocking | A process step that can fail without halting the overall workflow |
| Happy Path | The test case where all inputs are valid and all systems respond correctly |
| Error State | S8 in the state machine — reached when any step fails |
| Traceability | The ability to link test cases to failure points, risks, and requirements |

---

## 📎 Files in This Repository

```
GoSMS_QA_Assessment/
│
├── README.md                    ← This file — complete session analysis
│
├── GoSMS_QA_TestPlan.docx      ← Submission-ready Word document (full test plan)
│
├── GoSMS_Flowchart.html        ← Professional interactive flowchart (open in browser)
│
└── GoSMS_TestCases.html        ← All 30 test cases in formatted card layout (open in browser)
```

---

## 📊 Statistics

```
Total Phases Completed          : 8
Total Architecture Layers Mapped: 5
Total Failure Points Identified : 24
Total States in State Machine   : 10
Total State Transitions Mapped  : 18 (8 valid + 12 error)
Total Test Cases Produced       : 30
Total Risks Documented          : 10
Total Assumptions Logged        : 10
Total Risk Registers Entries    : 10
Total Deliverable Files         : 4
Critical Test Cases             : 10
High Priority Test Cases        : 15
Medium Priority Test Cases      :  5
States with Full Coverage       : 10/10 (100%)
Failure Points with TC Coverage : 22/24 (92%)
```

---

## ⚠️ Critical Quality Gates — Release Criteria

Before the GoSMS SMS Top-Up feature is released to production, ALL of the following must be true:

```
✅ TC01 passes   — Happy path works end-to-end
✅ TC13 passes   — API failure does NOT apply credits
✅ TC14 passes   — Timeout does NOT apply credits
✅ TC15 passes   — API errors handled gracefully
✅ TC16 passes   — No duplicate QuickBooks quotations
✅ TC21 passes   — DB write failure triggers full rollback
✅ TC22 passes   — Partial credit scenario fully rolled back
✅ TC23 passes   — Rollback confirmed at DB level (not UI)
✅ TC25 passes   — Rollback failure triggers admin alert
✅ TC29 passes   — Credits split correctly per company
✅ TC30 passes   — Mapping consistent across UI, logic, and DB
```

If any of these 10 test cases fails → **RELEASE BLOCKED**.

---

*GoSMS QA Assessment — Document*
*Prepared by: QA Engineer Candidate | MikeTango / QuickBooks Integration |*
