# v54w Test Checklist — Project Step Pending

## Focused test
1. Open Lists → Projects and expand a project with at least two incomplete steps.
2. Open the first step’s three-dot menu and choose **Mark pending**.
3. Enter a short reason, or leave the reason blank.
4. Confirm the step remains visible and displays **Pending** (and the reason when supplied).
5. Confirm the project’s **Next** step changes to the next incomplete Active step.
6. Open the Pending step menu and choose **Mark active**.
7. Confirm it becomes eligible as the project Next step again.
8. Edit the Pending step’s name/date, save, and confirm its Pending state/reason is retained.
9. Move a Pending step up/down and confirm its status/reason is retained.

## Regression gate
- Project step Complete / Mark incomplete still works and statistics undo remains correct.
- Project Move up / Move down persists.
- Lists → Projects three-dot menus are visible on iPhone portrait.
- Lists → To-dos three-dot menus are visible on iPhone portrait.
- Recurring completion still advances correctly; Undo last completion restores the previous occurrence.
- Today — Time Sensitive still keeps overdue items first and timed appointments ahead of untimed items due today.
- Waiting For is unchanged.
- Existing data survives the update; export/import remains available.
