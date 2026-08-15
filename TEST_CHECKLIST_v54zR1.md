# v54zR1 focused test checklist

1. Lists → Projects → Project Templates: confirm saved templates are still visible.
2. Tap **Use template** on a saved template.
3. Enter a fresh project name and a due date, then Create project.
4. Confirm the new project appears under Projects with the template steps in the same order.
5. Confirm all new steps are incomplete and Active, with no old Pending reason/completion state.
6. Where the template contains day offsets, confirm step dates are calculated backwards from the new project due date.
7. Change/complete a step in the new project and confirm the saved template is unchanged.
8. Quick regression: Project/To-do three-dot menus in iPhone portrait; recurring task complete + Undo; Project step Pending; ordinary To-do Pending.

## v54zR1 persistence repair — critical checks
- Save a project as a template and confirm it appears under Project Templates.
- Close the template dialog, make an unrelated planner change that saves data, then reopen Project Templates; the template must remain.
- Fully close/reopen the planner/PWA; the saved template must remain.
- Upgrade/reload the service worker; the saved template must remain.
- Use the saved template to create a project; template must remain afterwards.
- Export a backup after saving a template, restore it, and confirm the template is present.
