# Development v54bn acceptance checklist

## Brain Inbox storage repair
- Add a Brain Inbox item with a short title and an iPhone photo; save succeeds and the item remains after closing/reopening the app.
- Open the saved image from Brain Inbox and confirm it displays correctly.
- Edit the item and confirm title/note/photo remain intact.
- Add a Brain Inbox item without an attachment and confirm normal save still works.
- If Safari storage is deliberately full, a failed save leaves the capture dialog open rather than closing as though it succeeded.

## Preserve v54bm Timeline
- Timeline All retains the existing complete dated-item view.
- Timeline Schedule shows only Recurring Tasks and Appointments.
- Within a date, recurring tasks appear before the appointment group; appointments are chronological.
- Existing Timeline edit/delete actions still work.

## Protected regression checks
- Existing planner information remains present after update.
- Today’s Progress Hide/Show works.
- Appointments remain blue with no completion checkbox.
- Lists search, Custom Lists, Pending, Recurring completion/undo, Project Next and backup controls remain available.
