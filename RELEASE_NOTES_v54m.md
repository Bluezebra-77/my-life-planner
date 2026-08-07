# My Life Planner v54m — Recurring Logger Fix

## Critical correction
Recurring completion was stopping before it could advance because the activity deduplication helper called a function (`v52dActivity`) that does not exist. Project completion could appear to work because its underlying toggle saved first and only then reached the broken logger; recurring completion reached the logger before changing the next due date.

v54m changes the logger to read the existing activity log through the real `v52dRead` helper. No storage keys or planner data schemas are changed.

## Protected behaviour
A recurring occurrence completed from Home must disappear from Today, advance to the next valid date (or finish at its configured limit), persist, and refresh Recurring Tasks, This Week and Timeline.
