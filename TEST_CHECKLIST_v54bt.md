# Development v54bt test checklist

## Version / update
- [ ] Home header shows DEV v54bt.
- [ ] Settings/About and Developer information show v54bt.
- [ ] Check for Updates settles on v54bt with no flashing/reload loop.
- [ ] Existing planner data remains present.

## Today’s Progress
- [ ] Note the starting completed/total count.
- [ ] Complete an eligible overdue/due ordinary To-do: completed increases by 1 immediately and total does not shrink.
- [ ] Mark that To-do incomplete: completed decreases by 1 immediately and total remains stable.
- [ ] Complete a due/overdue recurring task: progress updates immediately and recurrence advances normally.
- [ ] Complete a due/overdue Cleaning task: completed increases by 1 immediately and total remains stable even though Cleaning next due advances.
- [ ] Complete/reopen an eligible project step: progress updates immediately.
- [ ] Today’s Focus completion still updates immediately.
- [ ] Appointments do not count in progress.
- [ ] Daily Rhythm and Evening Routine do not count in progress.
- [ ] Leaving and returning to Home does not change an already-correct progress count.

## Protected regression
- [ ] Timeline All and Schedule retain their accepted filtering/edit/delete behaviour.
- [ ] Recurring completion/undo and advanced recurrence remain correct.
- [ ] Project Next, step ordering, Pending and Mark incomplete remain correct.
- [ ] Lists search clear and Custom List tick/untick remain correct.
- [ ] Brain Inbox photo/document attachment opens after close/reopen.
- [ ] Manual Export/Import and automatic recovery remain available; attachment storage remains IndexedDB-based.
- [ ] Help and Quick Start Return links work; Quick Start shows Development v54bt.
