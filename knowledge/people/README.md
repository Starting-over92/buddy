# People & Client Memory — how this shelf works

This is the **canonical home for everything Buddy knows about a person or a client.**
One card per entity. The card is the single source of truth — when a fact about a
person/client lives here, no other file should contradict it.

Two folders:
- `people/`  — individuals (you, your contacts).
- `clients/` — businesses you work for or represent (including your own brand + each client).
  - **Not every business is a client.** A supplier, vendor, or tool you *use* but don't work
    **for** isn't a card — it goes in a short `reference` note instead.

Why it exists: person/client facts tend to scatter across the everyday memory, the `reference`
shelf, project notes, and bio docs — so they drift out of sync and get re-asked. This shelf fixes
that: **one card, auto-opened when you work on that entity, kept honest by an on-demand reconcile.**

---

## The card template (every card follows this)

```markdown
---
entity: <Full Name>
type: person | client | brand
slug: <kebab-case>
canonical: true          # this card is THE source of truth for this entity
updated: <YYYY-MM-DD>
confidence: high | med | low
links: [[clients/example-co]], [[people/your-name]]
---

# <Name> — <one-line who they are>

## Snapshot
- 2–4 lines: role / relationship to you / the few facts that matter most.

## How to talk TO them
- channel, language level, tone, length…   ‹scope: where this applies›

## How to talk ABOUT them   (in your name — outreach, content, proposals)
- positioning / brand rules…   ‹scope: …›

## Do
- the things that work with this entity.

## NEVER   (hard rules — breaking one is a recurring mistake)
- the things that have gone wrong before. Each is load-bearing; apply every time.

## Facts   (each one scoped + dated)
- <fact>   ‹scope: when it applies›   ‹since: YYYY-MM-DD›   ‹conf: high|med|low›

## Open questions / conflicts   ❓
- flagged by the reconcile pass; awaiting your answer. Empty = clean.

## Where their stuff lives   (pointers — NOT live state)
- files, trackers, repos, project folders. Live status stays in the project note.
```

---

## The two ideas that make it work

**1. Every fact/rule carries a SCOPE.** Not `"this client: no pricing"` but
`"this client: no pricing ‹scope: cold outreach›"`. Scope is *when the rule applies*. This is what
lets two "contradictory" facts both be true — they apply in different contexts.

**2. Contradictions are never silently overwritten.** An apparent contradiction usually means
a *hidden condition*, not that the old fact is wrong. The resolver (run by `_reconcile-routine.md`):

| Case | Situation | Action |
|---|---|---|
| 1 | Same scope, the new fact genuinely corrects the old | **UPDATE** — old was stale |
| 2 | Different scope (from your words OR the task at hand) | **SPLIT** — keep both as conditional rules |
| 3 | Scope unclear | **KEEP BOTH**, flag ❓, ask you once |

Rules: **never destructive-overwrite · recency ≠ truth · prefer a flagged conflict over a lost true fact.**

---

## Operating rules (also mirrored in CLAUDE.md)
- **Before doing anything FOR or ABOUT an entity, open its card first.**
- **Session start:** read `people/index.md` + `clients/index.md`.
- **New-fact / correction trigger (instant — propose, don't auto-write):** the moment you reveal or
  correct a person/client fact, Buddy surfaces a one-line proposal *now* (not at session end, not behind
  the knowledge-capture gate) and writes it on your ok. It tags the scope.
- **Confirmed card facts are trusted** — Buddy doesn't re-ask or hedge them unless something contradicts them.
- **Reconcile** on demand (say "reconcile the brain") via `_reconcile-routine.md`.
