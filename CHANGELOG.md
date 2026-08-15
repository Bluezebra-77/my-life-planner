## v54aa — Timeline appointment delete
- Existing appointments now show **Delete** in the appointment edit dialog, including when opened from Timeline.
- Delete is hidden when adding a new appointment.
- Repeating appointments explicitly confirm that the full repeating appointment will be removed.

## v54x — Ordinary To-do Pending status
- Ordinary non-recurring to-dos can be marked Pending or returned to Active.
- Marking Pending can store an optional short reason.
- Completing a Pending to-do clears its Pending state and reason.
- Project-step Pending, Waiting For and recurring-task behaviour are unchanged.
- Built from accepted v54w.

## v54w — Project Step Pending status
- Project steps can be marked Pending or returned to Active.
- Marking Pending can store an optional short reason.
- Pending project steps remain visible but are skipped when choosing the project Next step.
- Ordinary to-dos, Waiting For and recurring-task behaviour are unchanged.
- Built from accepted v54v.

## v54v — Today timed appointment priority
- Today — Time Sensitive keeps overdue items first, then shows today’s timed appointments before untimed items and displays appointment times.
- Built from accepted v54u; no recurrence/completion logic changed.

## v54s — Undo Ordinary To-do Completion (8 August 2026)
- Adds explicit Mark incomplete for completed ordinary to-dos and to-do steps.
- Reverses their completion metadata and matching activity/statistics record when reopened.
- Recurring tasks are not changed.
- No other functional changes.

## v54r — Undo Project Step Completion (8 August 2026)
- Renames the completed project-step action to Mark incomplete.
- Reverses project-step completion metadata and its activity/statistics record when reopened.
- No other functional changes.

## v54q — Project Step Reordering (8 August 2026)
- Adds Move up / Move down to project-step menus only.
- Saves project step order and refreshes project Next-step views without altering dates or completion state.

## v54p — Global Home Timer (8 August 2026)
- Added one Home Timer shortcut that reuses the existing Focus Timer. No task, recurrence, project, birthday or storage behaviour changed.

## v54j
## v54n — Birthday rollover
- Annual dates now calculate and display the real next occurrence instead of using a placeholder year 2000.
- Reminder remains configurable with a 7-day default; optional birth year is supported.

## v54m — Protected Render Fix
- Fixed stale renderer symbol references in v54j that could clear Today and stop Home redraws.
- Kept recurring completion logic isolated and improved backup import error handling.

- Dedicated recurring completion controls on Home Today and Recurring Tasks; direct complete-and-advance action independent of generic row controls.

# Changelog

## v51 - Production release

- Consolidated migration infrastructure, advanced recurrence, tags, Today’s Focus workspace, focus timer, Convert, Quick Add, Planner Health, Home optimisation and collapsible Settings.
- Corrected iPhone timer/Quick Add overlap and mobile Cleaning-list action access.

## v50

- Added true recurring tasks separate from appointments.
- Recurring obligations remain due or overdue until completed.
- Added daily, weekly, every-N-weeks, monthly and yearly schedules.
- Corrected upgrade preservation for Today's Focus quick one-offs.

## v49

- Added Today's Focus and improved Home workflow.
- Added expandable project steps and more forgiving Lists search.

## Earlier releases

Earlier builds progressively introduced Brain Inbox, Timeline, custom lists, responsive Lists navigation, attachments, app maintenance, settings customisation, compact menus, projects, routines and mobile refinements. The in-app About history retains the major public milestones.

## v52a — Internal Calm Interface build

- Moved section explanations behind information buttons across Lists and Planner.

## v52a Corrected
- Reordered Home, aligned section controls with titles and removed duplicate presentation between Today and Needs Attention.

## v52b — Internal Intelligent Planner build

- Added Planner Health 2.0, considerate repeated-task suggestions and an in-app Help & Guides centre.

## v52c — Daily Companion, Part 1
- Added a time-aware Home brief and actionable glance cards.

## v52c Corrected
- Restored repeated-task suggestion history and immediate suggestion refresh.
- Added a compact expandable iPhone Daily Companion layout.

## v52d — Daily Companion Part 2
- Added evening and weekly reflections, gentle encouragement, planner memory patterns and hidden statistics.

## v52e — Cleaning by Area
- Added room filtering, counts and optional grouping to the Cleaning list.

## v52f — Internal Polish Release
- Consistency, smart form defaults, search shortcuts, accessibility, mobile spacing and friendly empty-state improvements.

## v53 — Corrected Workflow Edition
- Rebuilt from accepted v52f after rejecting the earlier v53 package.
- Preserved Home ordering, collapsible sections, menus and all shared forms.
- Changed Today’s Focus Convert to remove the source only after a successful destination save.

## v53a — Workflow & Stability
- Restored accepted Home, recurrence, Cleaning by Area, editing, reflection and routine-reset behaviour.

## v53a Patch
- Restored advanced nth-weekday recurrence for appointments, added routine reset consistency, renamed Evening Routine and completed iPhone header correction.

## v53a Final Polish Patch
- Rebuilt iPhone Home headings into separate title and controls rows.
- Clearing Lists search now immediately restores the full Lists view and clears match status.

## v54a — Project Templates
- Added reusable project workflows and independent project creation from templates.
- Added optional step-date offsets relative to a project due date.

## v54b — Smart Projects
- Added dated to-do/project steps to Timeline and mobile-safe project management.

## v54cR22
- Added optional recurring end rules, expandable Home previews and recurring-date refresh across Home and Timeline.

## v54d
- Corrected recurring-task complete-and-advance behaviour on Home.
- Added explicit time-view refresh after recurrence advances.
- Added next-due confirmation and lighter Home preview controls.

## v54e
- Rebuilt PWA update discovery around a stable service-worker URL and a network-only version manifest.
- Added reliable asynchronous update detection and fresh reload after worker activation.

## v54f
- Transition-safe service-worker installation; optional missing files can no longer block a PWA update.

## v54g
- Fixed recurring completion for restored/legacy records without an explicit active status and unified recurring complete-and-advance behaviour across Home views.

## v54i
- Hardening release: recurring completion compatibility plus Home Today/This Week Edit/Delete management consistency.
- Introduced a protected behavioural regression gate for accepted workflows.


## v54u — Recurring-task Undo
- Added one-level Undo last completion for recurring tasks, restoring the prior occurrence and reversing its activity/statistics record.
