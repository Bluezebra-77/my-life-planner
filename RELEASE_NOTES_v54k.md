# My Life Planner v54k — Protected Render Fix

## Purpose
Narrow recovery from v54j. Fixes stale v54i symbol references accidentally left inside the v54j Home renderer. Those references could clear Today and then throw before rows were redrawn.

## Changes
- Today renderer now uses the current v54j/v54k management-row functions consistently.
- Recurring Home delete uses the current delete function.
- Recurring normalisation calls the current function.
- Dedicated recurring completion button remains unchanged.
- Backup import strips an optional UTF-8 BOM and gives a clear message if the app ZIP is selected instead of the JSON planner backup.
- No storage keys or planner data schema changed.
