#!/usr/bin/env node
// Capture-checkpoint Stop hook - deterministic backstop for the knowledge-capture system.
// Fires at the end of every assistant turn. Loop-guarded and FAILS SAFE (never loops).
// To DISABLE: remove the "Stop" block from your Claude Code settings.json (or delete this file).
let data = '';
process.stdin.on('data', c => (data += c));
process.stdin.on('end', () => {
  let input;
  try { input = JSON.parse(data.replace(/^﻿/, '').trim() || '{}'); }
  catch (_) { process.exit(0); } // unparseable -> do not risk a loop, let the turn end
  if (!input || input.stop_hook_active) { process.exit(0); } // already reminded -> let the turn end
  const reason = "Capture-check (HOW-TO step 4): if this turn produced an UNLOGGED fix / playbook / principle / doc / person-fact, surface the one-line proposal; else stop silently.";
  process.stdout.write(JSON.stringify({ decision: "block", reason: reason }));
  process.exit(0);
});