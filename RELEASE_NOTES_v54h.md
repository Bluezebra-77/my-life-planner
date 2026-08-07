# My Life Planner v54h — Hardening Release

## Purpose
This release deliberately adds no new feature family. It protects previously accepted behaviour and fixes two workflow regressions.

## Fixes
- Recurring tasks restored from older backups are normalised as active unless explicitly paused or completed.
- Completing a recurring occurrence from Home uses the same complete-and-advance path everywhere.
- Home Today and This Week now expose the normal management menu for each supported item type.
- To-dos, dated to-do steps, project steps, cleaning tasks, appointments, annual dates and recurring tasks can be edited/deleted or managed without navigating back through Lists.

## Development rule from v54h onward
- Start from the last accepted source only.
- Make the smallest possible code change.
- Accepted workflows are protected by the regression gate in TEST_CHECKLIST_v54h.md.
- No build is accepted solely because syntax/ZIP checks pass.
