# My Life Planner - Development v54bt

Private development branch built from Development v54bs.

## Current development change
- Repairs Today’s Progress immediate refresh after ordinary To-do completion or reopening.
- Keeps completed-today eligible To-dos in the day denominator instead of temporarily shrinking the total.
- Includes due/overdue Cleaning tasks in Today’s Progress and retains their completed-today contribution after their next due date advances.
- Corrects the stale Quick Start current-version label.

## Development rule
Do not publish this branch to testers automatically. Changes are tested here first and promoted later as a complete Tester release.

## Data safety
Planner information remains in the existing browser data store. No planner schema migration is required. Use Settings -> Backup and restore for manual exports; automatic daily recovery snapshots remain retained.
