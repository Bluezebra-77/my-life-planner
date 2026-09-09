# v54bd — Progress and Time Sensitive Repair

Built from the confirmed v54ba baseline. v54bc is rejected and is not used as a base.

## Progress repair
The actual HTML Hide/Show buttons were calling `v54baSetProgressVisible()`, but the implemented function is `v54aySetProgressVisible()`. The two button handlers now call the real function directly.

## Time Sensitive ordering
The confirmed v54ba Today renderer and appointment inclusion are left unchanged. Only the existing `v54vTodaySortKey` is overridden:
1. Overdue
2. Appointments due today
3. Other due/time-sensitive items
4. Project steps due today

Timed appointments keep saved-time ordering inside the appointment group.
