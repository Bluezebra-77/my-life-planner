# My Life Planner — Project History and Handover
## Current confirmed baseline
**v54bc — Progress and Time Sensitive Repair**, confirmed working 8 September 2026.

## Current posture
Use naturally; avoid speculative feature work. Preserve working behaviour and let real use identify changes.

## Protected behaviour
- v54ay Today’s Progress including reversible completion and Show/Hide.
- v54ba appointment blue treatment and no completion checkbox.
- v54ax updater/cache repair.
- v54aw Custom Lists and Lists search-clear.
- v54au Home Recurring.
- v54ap IndexedDB automatic daily recovery.
- Pending system, daypart placement/Home order, Project Next, Timeline Delete, Brain Inbox attachment preservation and old-completed-To-do cleanup.

## Review item
Verify Today — Time Sensitive as **Overdue → Appointments → other due/time-sensitive items → Projects last**.

## On hold
Project Templates / Recurring Projects. Previous implementations are not a valid starting point; redesign from scratch.

## Future
- Native/distributed iPhone and Android My Life Planner.
- Photography Hub as a separate project needing more work.
- Possible Accounting App.

## Build discipline
Always build from the last confirmed baseline. Failed builds are discarded. Before delivery, syntax-check JavaScript/service worker, validate JSON/version consistency, verify ZIP integrity and 19-file extraction, and inspect the actual renderer/data path being changed.
