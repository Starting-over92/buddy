# Reconcile Routine — keep the whole brain honest (on-demand)

**Trigger — you say:** "reconcile the brain" · "run the brain audit" · "run the memory routine".
**Cadence:** on-demand (run it whenever you like; it isn't scheduled by default).

## What it checks (the whole workspace)
Stale facts · duplicates · conflicts · dead files/folders · broken `[[links]]` · index↔file
mismatches, across:
- the everyday memory (the memory folder + its `MEMORY.md` index)
- the knowledge library (fixes / playbooks / principles / reference / skills + people/clients cards + indexes)
- each project's folder + its progress/scope docs

## How to run
Buddy sweeps the sources above, compares what each says about the same thing, and resolves
differences with the contradiction rule (newer ≠ truer — see `people/_reconcile-routine.md`).
For a big library it can fan the scan out across several passes, then merge the findings.

## Rules
- Auto-apply ONLY safe mechanical fixes: a file contradicting its own body, a broken `[[link]]`, an index line.
- PROPOSE + await your ok for: any deletion/archive, overwriting a contradiction, or resolving an unknown (❓).
- **Archive (soft-delete to `archive/`), never hard-delete.**

## After every run
Buddy gives a short report — "merged X · updated Y · couldn't decide Z ❓" — and logs it.

## Cards-specific resolver
For people/client card contradictions specifically, use `people/_reconcile-routine.md`
(scope-tagging + the contradiction resolver).
