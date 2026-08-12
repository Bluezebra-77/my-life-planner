# v54u Test Checklist — Recurring-task Undo

## Focused test

1. Create or choose an active recurring task that is due today or overdue. Note its current due date and completed-occurrence count if visible.
2. Complete it from Home/Today using the normal completion circle.
3. Confirm the completed occurrence disappears and the recurring task advances to its next valid date exactly as before.
4. Open Lists → Recurring tasks. Confirm the task offers **Undo last completion**.
5. Tap Undo last completion.
6. Confirm the previous due occurrence is restored, the task becomes active again, and it reappears in Home/Today if that restored date is due/overdue.
7. Confirm the completion count/status is restored and the accidental completion no longer contributes to Evening Reflection / Hidden Statistics.
8. Complete the restored occurrence again and confirm normal complete-and-advance still works.

## End-rule checks

- For a recurrence ending after a number of occurrences, complete the final occurrence so the recurrence finishes, then undo it. Confirm the recurrence becomes active again with the prior due date/count.
- If convenient, repeat with an end-date recurrence that finishes on completion.

## Protected regression checks

- Recurring completion from Home/Today still advances immediately and refreshes Home/Timeline.
- Recurring three-dot management actions still work.
- Advanced recurrence such as every second Thursday of the month remains correct.
- Lists → Projects and Lists → To-dos retain visible three-dot menus in iPhone portrait.
- Project-step Mark incomplete and ordinary to-do Mark incomplete still work.
- Birthday/Anniversary Quick Add and annual rollover remain present.
- Global Home Timer remains present.
- Backup/export and restore/import remain available.

Do not promote v54u to stable until the focused recurring undo workflow and protected recurring completion path are user-tested.
