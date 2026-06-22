# Master Index — the Knowledge Library

**Buddy reads this first, every session.** It routes to the right shelf so Buddy reads only
what's relevant (short context). The operating rules live in [HOW-TO.md](HOW-TO.md); the *why*
behind the design in [DESIGN.md](DESIGN.md).

**Structure (uniform):** every shelf is a folder — an `index.md` that is a **map** (links +
keywords only) pointing to its entries, which each live in **their own file**. Indexes never
hold content.

## Shelves
| Shelf | What's on it | Reach for it when… |
|---|---|---|
| [fixes/](fixes/index.md) | bug → cause → fix | something broke / you're debugging |
| [playbooks/](playbooks/index.md) | step-by-step "how to do X" | running a known procedure |
| [principles/](principles/index.md) | rules / how you work | deciding *how* to act |
| [reference/](reference/index.md) | stable facts about your world | you need a fact (your stack, a client, where things live) |
| [skills/](skills/index.md) | packaged, runnable capabilities | a task a skill already covers |
| [people/](people/index.md) + [clients/](clients/index.md) | one card per person/client (loaded at session start) | working FOR or ABOUT someone → open their card first |
| archive/ | retired entries (soft-deleted) | rarely — history only |

## Domains
Domains are simply **the areas you work in** — they were set when you installed Buddy (from your
answer to "what do you do"), and new ones are added only when there's real content to put in them.
The `fixes` shelf splits into one folder per domain; the other shelves just tag a domain in their index.

## How to use it (summary — full rules in HOW-TO.md)
1. **RETRIEVE** — pick the shelf(es) by need → open that shelf's `index.md` (a map) → open the
   1–3 leaf files it points to → follow their `[[links]]` one hop.
2. **MISS** — nothing fits → fall back (Buddy's own knowledge → web research → ask you) → then capture.
3. **PARTIAL HIT** — found something thin/stale → use it + fill the gap + capture the missing piece.
4. **CAPTURE** — after the task, save what's worth keeping (gate in HOW-TO) → right shelf, tagged + linked.
5. Read **`hard-won`** entries; skip **`basic`** ones — basics are stored so a cheaper model can
   inherit them later, not for Buddy to re-read.
