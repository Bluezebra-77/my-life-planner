# My Life Planner — Feature Register
**Current confirmed baseline:** v54bc — Progress and Time Sensitive Repair
**Reconciled:** 8 September 2026

## Confirmed working
- Home is an action dashboard; daypart Daily Rhythm / Evening Routine placement and established Home order are retained.
- Today’s Progress uses the v54ay day-scoped actionable calculation, changes correctly on complete/reopen, and can be hidden/shown.
- Appointments use the distinctive v54ba blue treatment and have no completion checkbox.
- Ordinary To-dos support completion/reopening, Pending with optional reason, and confirmation-protected cleanup of completed To-dos older than two calendar months.
- Project steps support dates, Timeline placement, reorder, Pending, reversible completion and the advancing Next marker.
- Recurring Tasks support overdue/due-today/upcoming Home display, completion/advance and Undo last completion.
- Consolidated Pending covers Pending To-dos, Pending project steps and legacy waiting records as Pending notes.
- Custom Lists show all items, remain collapsible and support reversible completion.
- Clearing Lists search immediately restores the full Lists view.
- Timeline supports direct Delete for relevant dated items and uses the Timeline name throughout.
- Brain Inbox image preview is tappable; attachments survive conversion to Project, To-do and Appointment.
- Automatic daily IndexedDB recovery and manual backup/export are retained and confirmed working.
- Desktop/iPhone updater/cache repair is retained.
- Task timer exists and works.
- Planner Health is good for now. Daily Companion/routines are working as expected and should be left alone.

## Review — not confirmed bugs
- Continue natural-use review of Home information density/duplication.
- Today — Time Sensitive full ordering is implemented as: **Overdue → Appointments → other due/time-sensitive items → Projects last**.

## On hold
- **Project Templates / Recurring Projects:** keep the concept, but previous implementations are abandoned. If resumed, redesign from scratch.

## Longer-term / separate projects
- Future My Life Planner direction: consider a true distributed/native iPhone and Android app once the planner is settled.
- Photography Hub remains a separate future project requiring more work.
- Accounting App is a possible separate future project.
