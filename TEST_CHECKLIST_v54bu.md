# Development v54bu test checklist

## Version / update
- [ ] Home header shows DEV v54bu.
- [ ] Settings/About and Developer information show v54bu.
- [ ] Check for Updates settles on v54bu with no flashing/reload loop.
- [ ] Existing planner data remains present.

## Advance notice
- [ ] A To-do due 10 October with 7 days before appears in Home Today — Time Sensitive on/after 3 October.
- [ ] It still displays 10 October as the actual deadline.
- [ ] A future To-do before its advance window does not appear early.
- [ ] A zero-days-before future To-do does not appear until due.
- [ ] Pending behaviour remains unchanged.
- [ ] An active dated project step with days-before follows the same advance-window rule.
- [ ] Timeline retains the actual due date; no synthetic reminder date is created.
- [ ] Advance-notice-only items do not enter Today’s Progress until due.

## Protected regression
- [ ] v54bt Today’s Progress immediate To-do/Cleaning refresh remains correct.
- [ ] Appointments remain blue/non-actionable and ordering remains correct.
- [ ] Recurring completion/undo and advanced recurrence remain correct.
- [ ] Project Next, step ordering and Pending remain correct.
- [ ] Lists search clear and Custom List tick/untick remain correct.
- [ ] Timeline All/Schedule and period filters retain edit/delete behaviour.
- [ ] Brain Inbox attachments survive close/reopen.
- [ ] Manual Export/Import and automatic recovery remain available with IndexedDB attachment storage.
- [ ] Help and Quick Start Return links work; Quick Start shows Development v54bu.
