# Development v54bo — iPhone Update Stabilisation

Built from v54bn.

- Keeps the Timeline All / Schedule addition.
- Keeps the Brain Inbox photo-storage repair.
- Removes the duplicate legacy v54ax service-worker registration/reload path.
- Makes the current version-addressed updater the single authority for worker activation and reload.
- Adds a session reload guard so controller/message events cannot repeatedly reload the same target version.

No planner data schema, recurrence calculation, task workflow or Timeline item editing semantics were intentionally changed.
