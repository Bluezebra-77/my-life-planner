# My Life Planner v54l — Recurring Advance Fix

This narrow patch fixes recurring occurrences that remained in Today after Complete.

- Normalises legacy/restored recurrence unit labels (daily/weekly/monthly/yearly and plural forms).
- Guarantees that a successful recurring completion moves `nextDue` strictly beyond today, or finishes the recurrence.
- Uses the same canonical advance path from the completion circle and the three-dot Complete action.
- Refreshes Today, Recurring Tasks, This Week and Timeline after the saved date has advanced.
- No planner storage keys or backup schema are changed.
