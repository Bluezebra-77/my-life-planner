# v54tR1 Test Checklist

## Primary test
1. On Home, open Today — Time Sensitive with at least one appointment and one other outstanding item.
2. Tick the appointment.
3. Confirm the appointment remains visibly ticked.
4. Confirm it immediately moves below all outstanding items in that section.

## Protected regression checks
- Lists → Projects: three-dot menus remain visible in iPhone portrait and work.
- Lists → To-dos: three-dot menus remain visible in iPhone portrait and work, including to-do steps.
- Ordinary to-do Mark incomplete still works.
- Project-step Mark incomplete still works.
- Recurring completion still advances the occurrence and refreshes Home/Timeline.
- Birthday/Anniversary Quick Add remains present.
- Global Home Timer remains present.
- Backup export/import remains available.

Do not accept v54tR1 as stable until the primary test and protected checks pass on the user's devices.
