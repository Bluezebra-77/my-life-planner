# v54ab Test Checklist — Timeline Delete for All Items

## Focused test
1. Open Timeline → Next 7 Days.
2. Open each available dated item type and confirm a Delete button is present.
3. Delete disposable examples and confirm they disappear immediately from Timeline and their corresponding List.
4. For a to-do step and project step, confirm only the step is removed, not its parent.
5. For a project deadline, confirm the warning says the project and its steps will be removed.
6. For a recurring task, confirm the warning says the recurring task is removed, not only one occurrence.
7. Cancel each confirmation once and confirm nothing is deleted.

## Protected regression checks
- Appointment Delete from Timeline still works.
- Recurring completion and Undo last completion still work.
- Project-step and ordinary to-do Mark incomplete still work.
- Project-step and To-do Pending/Mark active still work.
- Today timed appointment priority remains correct.
- iPhone portrait three-dot menus remain visible in Projects and To-dos.
- Backup/export and restore/import remain valid.
- Existing planner data survives update.

Do not promote v54ab to stable until user testing passes.
