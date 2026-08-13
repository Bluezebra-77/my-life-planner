# v54x Test Checklist — Ordinary To-do Pending

## New behaviour
1. In Lists → To-dos, open an incomplete ordinary to-do's three-dot menu.
2. Choose **Mark pending** and enter an optional reason.
3. Confirm the to-do stays visible and shows **Pending** plus the reason.
4. Reopen the menu, choose **Mark active**, and confirm the Pending label/reason clears.
5. Mark the to-do Pending again, then complete it. Confirm completion works normally and Pending is cleared.
6. Edit a Pending to-do before completing it and confirm its Pending state/reason survives the edit.

## Focused regression checks
- Project steps still support Mark pending / Mark active and Next step skips Pending project steps.
- Ordinary to-do Mark incomplete still reverses completion and its statistics/activity record.
- Recurring completion still advances correctly and Undo last completion still restores the previous occurrence.
- Lists → Projects and Lists → To-dos three-dot menus remain visible in iPhone portrait.
- Today — Time Sensitive retains overdue-first and timed-appointment priority behaviour.
- Existing planner data survives the update; backup/restore remains available.

Do not promote v54x to stable until these user-flow checks pass.
