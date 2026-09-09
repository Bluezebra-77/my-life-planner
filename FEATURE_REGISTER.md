## v54ab

- Direct Delete is available for every item opened from Timeline.

## v54ab
- Timeline appointment editing: an existing appointment can be deleted directly from its edit dialog.

## v54x
- Ordinary To-do Pending status: Mark pending / Mark active in To-do menus.
- Optional Pending reason is shown with the to-do in Lists.
- Completing the to-do clears its Pending status and reason.

## v54w
- Project Step Pending status: Mark pending / Mark active in Project-step menus.
- Optional Pending reason is shown with the step in project views.
- Project Next-step selection ignores incomplete Pending steps and moves to the next incomplete Active step.

## v54v
- Home Today — Time Sensitive: timed appointments due today display their time and sort ahead of untimed items due today. Overdue items remain first.

## v54s — Undo / Mark Incomplete (Phase 2)
- Scope: ordinary to-dos and their steps only.
- Completed to-dos and to-do steps can be reopened using Mark incomplete.
- Undo removes the completion timestamp and corresponding activity record.
- Recurring-task undo remains deliberately excluded.

## v54r — Undo / Mark Incomplete (Phase 1)
- Scope: project steps only.
- Completed project steps can be reopened using Mark incomplete.
- Undo removes the completion timestamp and corresponding activity record.
- Recurring-task undo is deliberately excluded from this phase.

## v54j protected recurring interaction
- Recurring completion uses a dedicated explicit button/action path in both Home surfaces.

# Feature Register - v51

## Daily working flow

- Today's Focus quick entry using Return
- Notes, estimated minutes, pinning and reordering
- Focus timer with minimise and persistence
- Convert quick items into structured planner records
- Needs Attention choices: random, useful and extra useful

## Planning and organisation

- To-dos, appointments, recurring tasks, projects and project steps
- Cleaning schedules, Waiting For, birthdays and custom lists
- Brain Inbox capture and voice entry where browser support permits
- Timeline filters for Today, Tomorrow, Next 7 Days, This Month and All Upcoming
- Tags and partial search

## Intelligence and safety

- Planner Health suggestions
- Suggestion snooze/dismiss memory
- Safe migration framework and automatic backups
- Today's Focus safety mirror
- Data export/import and developer diagnostics

## Interface

- Quick Add from major views
- Collapsible Home sections
- Collapsible Settings sections with remembered state
- Responsive iPhone and desktop layouts

## v52a internal milestone

- Progressive disclosure across Lists and Planner sections.
- Standardised calm section headings with information on demand.

## Delivered in v52a Corrected
- Morning-priority Home ordering.
- Compact Home heading controls.
- Cross-panel duplicate suppression between Today and Needs Attention.

## Delivered in v52b

- Planner Health 2.0 grouped and contextual suggestions.
- Repeated Today’s Focus pattern memory with opt-in recurring conversion.
- Help & Guides in Settings.

## Delivered in v52c
- Time-aware Daily Companion brief.
- Morning summary counts and estimated workload.
- Actionable Home dashboard cards for health, backup, inbox, waiting and recurring work.

## v52c correction
- Compact, expandable Daily Companion presentation on phones while retaining the full desktop brief.
- Safe migration of repeated-task learning from the v52b history key.

## Delivered in v52d
- Evening Reflection and configurable Weekly Reflection.
- Gentle encouragement based on recorded progress.
- Planner Memory 2.0 completion-pattern suggestions.
- Hidden Statistics in Settings.

## v52e
- Cleaning by Area filters, room counts, remembered view and grouped room sections.

## Delivered in v52f
- Remembered room suggestions and recurrence defaults.
- Keyboard-first global Lists search.
- Accessibility, mobile spacing and empty-state polish.

## v53a
- Home recurring editing, recurring visibility in Today, unified completion history and daily routine reset.

## v53a Patch
- Monthly weekday-position recurrence for recurring tasks and appointments.
- Independent Daily Rhythm and Evening Routine resets.

## v53a Final Polish Patch
- Responsive two-row Home headings on phones.
- Reliable automatic Lists-search reset.

## v54a
- Project Templates: create, edit, delete, save from an existing project and create new project instances.

## v54b Smart Projects
- Dated child steps on Timeline, parent milestones, next-step summaries and iPhone portrait management menus.

## v54cR22
- Recurring tasks may continue, end on a date, or end after a set number of occurrences.
- Home Brain Inbox and Recurring Tasks previews expand on demand.

## v54d
- Recurring completion confirmation reports the next due date or finished recurrence.
- Home Brain Inbox and Recurring preview controls use compact Show all / Show less actions.

## v54e infrastructure
- Stable service-worker registration URL.
- Network-only published-version check via version.json.
- Controller-change fresh reload for installed PWA updates.

## v54i protected workflow standard
- Accepted Home, recurrence, search, project, cleaning, routine and backup workflows are now treated as protected behaviours and must pass the regression gate before a release is accepted.

## v54m protected workflows
- Home Today rendering and recurring completion are protected regression-gate workflows.


## v54n protected birthday workflow
- Birthdays store month/day as the annual recurrence source.
- Next occurrence is calculated automatically each year.
- Passed dates roll to the next year.
- Reminder defaults to 7 days before.
- Optional birth year is separate from recurrence year.


## v54p — Global Home Timer
- Home quick action opens the existing timer without requiring a Today's Focus item.
- Existing linked Focus Timer behaviour remains unchanged.


## v54q — Project Step Reordering
- Project steps can be moved up or down from their three-dot menu.
- Reordering is persistent and feeds the project Next-step calculation.


## v54u
- Recurring tasks: one-level Undo last completion from Lists → Recurring tasks.
