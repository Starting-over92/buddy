# HOW-TO — operating rules for the Knowledge Library

This library is **one shared brain across every project**. It's built so a **cheaper model
could inherit it later (the "student")** — but for now **you and Buddy operate it by hand.**
Markers below: 🖐 done now · 📦 built now for the student · ⏸ deferred (with a trigger).

---

## The loop (wraps every piece of work)
```
① TASK → ② RETRIEVE → ③ DO THE WORK → ④ CAPTURE → (library richer) → ⟲
                                                   ⑤ TIDY (occasionally)
```

### ② RETRIEVE  🖐
- Read MASTER-INDEX → pick shelf(es) → open that shelf's `index.md` (a **map** — links + keywords only) → open the 1–3 leaf files it points to.
- Follow each entry's `[[links]]` **one hop** to pull the related cluster.
- **Read `hard-won` only; skip `basic`** (basics are deposits for the student, not for Buddy).
- Outcomes: **FULL HIT** (use it) · **PARTIAL HIT** (thin/stale → use + fill gap + capture) ·
  **MISS** (nothing → fallback: Buddy's own knowledge → web research → ask you → then capture).

### ④ CAPTURE  🖐 write · 📦 for the student
**The trigger — WHEN to run the gate (self-firing; Buddy does NOT wait to be asked):** at the end of any substantive turn or finished unit of work — not only when a test passes — Buddy silently runs the gate over what it just produced or learned. It fires when Buddy (a) authored a reusable artifact (playbook, principle, design/strategy doc, a tooling fix that worked), (b) settled a non-trivial decision or research question, or (c) learned a durable fact about a person/client. If anything clears the gate, Buddy surfaces it as **one batched list at the end of the turn** — one line each: `Worth logging: <shelf/card> — <title>? (ok/skip/edit)`. Buddy never silently writes to a shelf; it never waits to be asked. **Buddy proposes; you approve.**

**The gate — log ONLY if all are true:**
1. **Reusable** — it'll come up again.
2. **A *weak* model wouldn't already know it** (calibrate to the student, NOT to Buddy). Basics ARE kept, tagged `basic`.
3. **Cost-to-learn** — it took a bug, research, a decision, or a mistake.
4. **Generalizes OR is a durable entity fact** — it applies beyond this one instance, OR it's a specific lasting fact about a person/client.
Any "no" on a *general lesson* → skip. **But a person/client-specific fact is never skipped — it ROUTES to that entity's card** (the "generalizes" test doesn't apply to cards). Then: write it terse → correct shelf + domain (or the entity card) → **tag it** → **add `[[links]]`** by hand.

**Borderline?** If you're unsure whether something clears the gate, **propose it** (one line) and let the user decide — never silently skip *or* silently save. The human is the tie-breaker.

**Indexes stay maps.** A capture = a **new leaf file** + **one router line** in the shelf `index.md`. Never paste content into an index.

**Playbook fold-back (close the loop).** If a fix was hit while *running a playbook*, the capture isn't done until that playbook absorbs it:
- bump the fix's `hits:` count each time it's applied;
- **1st hit** → add a `[[link]]` to the fix from the playbook step;
- **2nd hit on the same playbook** → **fold it in** — a line in the step, or best, bake it into the playbook's fast-path script so the problem stops happening. Keep ONE copy (the fix entry); the playbook *references* it, never duplicates it. This is what keeps a playbook from going stale.

### ⑤ TIDY / PRUNE  🖐 now · ⏸ becomes an autonomous "dream cycle" later
- **At capture:** check the shelf index for a near-duplicate → merge instead of adding.
- **On failure:** a retrieved entry gave a wrong result → flag it stale.
- **Occasionally:** dedupe · expire stale · **archive** dead weight (soft-delete to `archive/`, never hard-delete).
- When Buddy notices a pattern across entries → it **proposes a principle → you approve** (manual synthesis for now).
- **You approve all removals.**

---

## Entry format
Frontmatter, then terse body. Fixes keep the 4-line shape (Symptom/Cause/Fix/Tags).
```
added: 2026-01-01 · domain: devops · level: hard-won · confidence: high · hits: 1
links: [[reference/your-stack]], [[playbooks/deploy]]
```
- `level`: **basic** (a weak model wouldn't know it, but it's foundational — stored, Buddy skips reading) ·
  **hard-won** (specific to your world / debugged — Buddy reads these).
- `links`: point **note → note** only. ❌ Never link to a project's live file (sealed per-project, brittle).
  A `[[shelf/name]]` link resolves to `shelf/name.md`, or to `shelf/name/index.md` when `name` is a folder (e.g. `[[fixes/web]]` → the web domain map).
- `hits`: how many times this fix has been applied. Bump it on each use; at **≥2 on the same playbook**, fold the fix into that playbook (see the fold-back rule in CAPTURE).
- **Dates** (`added:` / `since:`): don't trust the computer's clock — confirm today's date (ask the user, or pull it from a reliable source) before stamping.

---

## Build / Operate / Defer
- 📦 **BUILD now (for the student):** the 5 shelves, domains, `basic`+`hard-won` tags, `[[links]]`, metadata.
- 🖐 **OPERATE now (you + Buddy):** Buddy retrieves / captures / links by hand; you approve principles & removals.
- ⏸ **DEFER (parked, see design doc):** autonomous dream-cycle (self-running synthesis · contradiction-
  detection · salience · auto-promotion) · auto pattern-match link registry · search-by-meaning (vectors) ·
  central brain + MCP · weak-model read rules · heavy infra. Each has a trigger in the design doc.

---

## Two boundaries
1. **Projects are sealed; knowledge is pooled.** Work stays inside its project folder, but every reusable
   lesson flows into this one shared library and links across projects.
2. **Indexes are maps; content lives in leaf files.** Each shelf `index.md` links only (title + keywords); every entry / playbook / card is its own file, so a capture never fattens an index. Don't over-build, though — a new shelf or domain folder is created only when it has real content (tiny shelves can stay a single file until they grow).
