# v54ap Regression Checklist

## Automatic recovery
- Open Settings → Backup and restore: status shows a recent **Last verified automatic recovery**.
- Today's dated recovery snapshot appears even if no task was edited after opening the app.
- Make an edit/save: today's snapshot time advances.
- Reload/reopen: today's recovery remains available.
- Existing old daily backups migrate into the recovery list where available.
- Recovery list retains at most seven dated snapshots.
- Restore a snapshot: a safety snapshot is created first and restore succeeds.
- If IndexedDB cannot write, a visible warning appears rather than silently pretending backup succeeded.
- Save backup file and Share backup still produce the manual JSON backup route.

## Protected workflows
- Pending colour and Pending menu/reason/display remain intact.
- Consolidated Pending remains intact.
- Home order and Daily Rhythm/Evening Routine placement remain intact on desktop/iPhone.
- Project Next label remains and advances after completion.
- Today — Time Sensitive and Needs Attention remain populated.
- Recurring completion/Undo remains intact.
- Timeline Delete remains intact.
- Timed appointment ordering remains intact.
- iPhone portrait three-dot menus remain visible.
- Desktop/iPhone updater and version/cache consistency remain intact.
