# Reconcile Routine — keep the people/client cards honest

Self-contained runbook. Run it **on demand** (you say "reconcile the brain"). It dedupes and
reconciles every person/client card against the other places facts live — without ever
destroying a true fact.

This is the safety net that catches drift between sessions; the instant correction-trigger
handles in-session fixes.

---

## What it does (the loop)
1. **Scan the sources** for person/client facts:
   - canonical cards: `people/*.md` + `clients/*.md`
   - the everyday memory notes
   - `reference/index.md` + `principles/index.md`
   - active project notes (for durable person/client facts buried in status).
2. **For each entity, compare** what each source says.
3. **Resolve** with the contradiction resolver below.
4. **Write** the resolved truth into the canonical card (scope-tagged, dated).
5. **Point the duplicates at the card** — leave a one-line "canonical: see clients/<x>.md"
   where a fact used to be duplicated; don't delete project state, just stop it duplicating.
6. **Report** to you: a short "merged X · updated Y · couldn't decide Z ❓" summary.

---

## The contradiction resolver (the core safety logic)
When source A and source B disagree about the same entity:

| Case | Situation | Action |
|---|---|---|
| **1. Stale** | Same scope, B genuinely corrects A (e.g. a number changed) | **UPDATE** the card; old value → struck/removed |
| **2. Conditional** | Different scope, detectable from the wording OR the task/file that was open when it was said | **SPLIT** — keep BOTH as scoped rules (`(scope: outreach)` vs `(scope: proposal)`) |
| **3. Unknown** | Scope can't be determined | **KEEP BOTH**, write both under the entity's facts, add a ❓ line under "Open questions", and surface it in the report for you to answer |

**Hard rules:**
- **Never destructive-overwrite a fact you can't explain.** A flagged conflict beats a lost truth.
- **Recency ≠ truth.** A newer statement is often a *special case*, not a correction.
- **Read actions, not just words.** The scope that reconciles two facts is often in *what you
  were doing* when you said it (which file/task was open), not in the sentence itself.
- **Ask once, learn forever.** A resolved ❓ becomes a permanent scoped rule on the card.

---

## Output
- Updated cards (scope-tagged, `updated:` bumped).
- A short run report: date · merged · updated · conflicts flagged (❓) · anything that needs you.
