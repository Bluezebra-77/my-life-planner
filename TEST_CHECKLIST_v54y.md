# v54y Test Checklist — Project Templates Phase 1

1. Open Lists → Projects and choose ⋯ on an existing project.
2. Choose **Save as template**.
3. Confirm Project Templates opens and the saved template shows the same step names in the same order.
4. Confirm completed/pending state from the original project is not represented as completed in the template.
5. Edit the template name/notes/steps, save, close and reopen Templates; confirm changes persist.
6. Export a planner backup after saving a template. (Phase 1 stores templates in the main planner data.)
7. Delete a test template and confirm the original project is unaffected.

## Regression gate
- Project Step Pending / Mark active still works and Next step skips Pending steps.
- Ordinary To-do Pending / Mark active still works.
- Project-step, ordinary To-do and recurring Undo remain available.
- Recurring completion still advances correctly.
- Lists → Projects and Lists → To-dos three-dot menus remain visible in iPhone portrait.
- Today timed appointments retain their accepted ordering/time display.
- Existing planner data, Backup / Export and Restore / Import remain functional.
