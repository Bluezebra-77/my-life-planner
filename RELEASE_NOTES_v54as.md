# My Life Planner v54as — Attachment Integrity + Completed To-do Cleanup

Built from v54ar.

## Attachment integrity
- Brain Inbox → To-do/Project conversion now uses a write-and-verify path before removing the source Inbox item.
- Brain Inbox → Appointment captures the attachment before older conversion wrappers can clear temporary state.
- Appointment edit now visibly shows/opens inherited attachments.
- To-do and Appointment list rows show an image/attachment cue.

## Completed To-do cleanup
- Lists → To-dos now offers **Delete completed older than 2 months**.
- Only completed To-dos with a valid recorded `completedAt` older than two calendar months are eligible.
- The action shows a count and asks for confirmation.
- Nothing is automatically deleted.
- Future completed To-dos are guaranteed a completion timestamp; marking incomplete clears it.

The v54ap IndexedDB recovery system is unchanged. Existing seven recovery snapshots age out normally after cleanup.
