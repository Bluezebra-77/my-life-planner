# Development v54bn — Brain Inbox storage repair

Built from Development v54bm.

- Preserves the v54bm Timeline All / Schedule addition.
- Reduces newly attached Brain Inbox photos to a safer on-device storage size.
- Makes Brain Inbox capture saving transactional: if Safari rejects the storage write, the in-memory change is rolled back and the capture dialog stays open with the photo still available.
- Gives a specific storage-full message for quota failures rather than implying the item was saved.
- No planner data schema, recurrence calculation, Timeline edit/delete behaviour, or existing saved attachment format is changed.
