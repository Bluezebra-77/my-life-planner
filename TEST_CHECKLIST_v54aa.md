# v54aa Test Checklist — Timeline Appointment Delete

## New behaviour
1. Open **Timeline → Next 7 Days**.
2. Tap an existing non-recurring appointment.
3. Confirm **Delete** is visible alongside Cancel and Save appointment.
4. Tap Delete, confirm the prompt, and verify the appointment disappears from Timeline and Lists.
5. Open **Add appointment** and confirm Delete is **not** shown for a new unsaved appointment.
6. If convenient, open a repeating appointment and confirm the delete prompt clearly warns that the full repeating appointment will be removed. Cancel that prompt unless you intend to delete the series.

## Focused regression checks
- Appointment Edit + Save still works from Timeline.
- Lists → Appointments edit/delete still works.
- Ordinary To-do Pending remains working.
- Project Step Pending remains working and Next step skips Pending steps.
- Recurring completion still advances correctly and Undo last completion restores the previous occurrence.
- Lists → Projects and Lists → To-dos three-dot menus remain visible in iPhone portrait.
- Today — Time Sensitive retains overdue-first and timed-appointment priority behaviour.
- Existing planner data survives the update; backup/restore remains available.

Do not promote v54aa to stable until these user-flow checks pass.
