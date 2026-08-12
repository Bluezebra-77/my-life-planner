# v54t focused test checklist

## New behaviour
1. Open Home → Today — Time Sensitive with a due-today appointment visible.
2. Tick the appointment checkbox.
3. Confirm the appointment stays visible but moves below all currently outstanding rows.
4. Confirm the checkbox remains ticked after the move.
5. Confirm tapping the appointment row still opens the appointment.

## Regression gate
- iPhone portrait: Lists → Projects three-dot menus visible and working.
- iPhone portrait: Lists → To-dos and indented steps three-dot menus visible and working.
- Project step Complete / Mark incomplete still works.
- Ordinary to-do Complete / Mark incomplete still works.
- Recurring completion still advances to the next valid occurrence and refreshes views.
- Birthday/Anniversary Quick Add and annual rollover remain available.
- Global Home Timer remains available.
- Backup/export and restore/import remain available.
- Version displays as v54t and installed PWA updates without reinstalling.

Do not accept v54t as the stable baseline until these user checks pass.
