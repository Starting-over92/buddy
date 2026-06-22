# DESIGN — why this library is built the way it is

The **rationale** behind the knowledge library: the problem it solves, the one rule everything obeys,
and the decisions behind each shelf. Operating rules live in [HOW-TO.md](HOW-TO.md); the router is
[MASTER-INDEX.md](MASTER-INDEX.md). Read this once to understand *why*, then those two to *use* it.

## Purpose
Build a knowledge library so a **cheaper / open model (the "student")** inherits everything you learn
and is useful from day one — and so an **agent can read this memory directly**. Two consequences fall
out of that goal and explain most of the design:
1. **Context must stay short.** A model shouldn't load the whole library to answer one question.
   *(This is the moat: the brain gets smarter as it grows, without each answer getting bigger or costlier.)*
2. **It must be plain + portable.** Markdown files + an index, no database — so it travels, and anyone can read it.

## The one rule: indexes are maps, content lives in leaf files
**Every shelf is a folder = an `index.md` (a MAP: links + keywords only) → one file per entry.
An index never holds content.**

**Why — the failure mode it fixes:** if indexes are allowed to accumulate content, the index of a
busy shelf can grow to thousands of tokens with every procedure pasted inline. Then *every* lookup
loads *everything*, the index stops being a router, and context blows up. Map→leaf means retrieval
loads **only the one entry it needs** — the index is a cheap table of contents you scan, then you
open one file. This is also what keeps cost flat as the library grows.

**Why one file per entry (not bundles):**
- **Atomic retrieval** — load exactly one fix / playbook / fact, nothing else.
- **Individually linkable** — `[[shelf/entry]]` points at a real file.
- **Per-entry metadata** — e.g. a fix's `hits:` count lives on the fix.
- **Clean diffs + open-source clarity** — one change touches one file; contributors see atomic units.

## The shelves, and the granularity decision behind each
A "leaf" is the smallest unit you'd retrieve on its own. That unit differs by shelf — chosen, not accidental:
- **fixes** — one *bug→fix* per file, in **per-domain folders** (usually the biggest shelf; folders keep it navigable). Each fix is atomic and carries its own `hits:` count.
- **playbooks** — one *procedure* per file (flat; a domain is just a tag in the index).
- **reference** — one *fact-cluster* per file (e.g. your stack, a service's API).
- **principles** — grouped one-liners, a few per themed file. They're **read as a set** (your operating rules), not retrieved one at a time — so the *file* is the unit, not the line.
- **skills** — the index *is* the map; the skills live **outside** the library (in project folders), so it only points to them.
- **people / clients** — one card per entity = the single source of truth.

## Other load-bearing rules (and their why)
- **Build for the student, operate by hand.** You capture for a future weak model, but a human still curates now (Buddy proposes → you approve). `level: basic|hard-won` lets the curator skip basics they already know.
- **The capture gate.** Log only what's reusable + non-obvious + cost-to-learn + generalizes — so the library stays signal, not noise. *(Junk would also bloat the maps and erode the moat.)*
- **Count-based fold-back** (fixes → playbooks). A playbook drifts stale as fixes pile up beside it. So a fix carries a `hits:` count: 1st hit on a playbook = link it; 2nd = **fold it into the playbook** (ideally its fast-path script). The playbook stays current; the fix isn't duplicated.
- **Newer isn't truer (the contradiction rule).** A new fact that seems to clash with an old one usually means a *hidden condition*, not that the old one is wrong. Never silently overwrite: keep both with their scopes, or flag and ask. A true fact is never lost.
- **Links point note → note, never to a project's live file.** Project folders are sealed and brittle; the library is the shared, durable layer.
- **Archive, never hard-delete.** History is cheap and you approve removals — a bad prune is always recoverable.
- **Folder-link convention.** `[[shelf/name]]` → `shelf/name.md`, or `shelf/name/index.md` when `name` is a folder (e.g. `[[fixes/web]]` → the web domain map).

## How to change the library safely (the refactor discipline)
When restructuring content, **transform with deterministic code, then verify — never let a model
copy content verbatim** (it paraphrases). Prove integrity by **reassembling the new files and diffing
against the original**. A verbatim split also preserves the original's *mistakes*, so a follow-up audit
fixes those separately.
