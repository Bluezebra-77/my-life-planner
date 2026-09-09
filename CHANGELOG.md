## v54bd — Progress and Time Sensitive Repair
- Built from confirmed v54ba; rejected v54bc not used as a base.
- Corrected the actual Hide/Show button function references.
- Preserved the v54ba Today renderer and appointment inclusion.
- Enforced Time Sensitive order by replacing only the existing sort key.

## v54ba — Appointment Display Repair
- Built from confirmed v54ay after rejecting v54az.
- Removed the actual non-persistent appointment checkbox from shared reminder rows.
- Added distinctive appointment styling to Home/reminder rows, Appointments list and Timeline.
- Preserved overdue red styling.

## v54ay — Today’s Progress
- Replaced misleading all-time progress formula with a day-scoped actionable formula.
- Added persistent Show/Hide control.

## v54ax — Desktop Update Repair
- Updater/cache-only repair from v54aw.

## v54aw — Corrected Lists Repair
- Rebuilt from accepted v54au.
- Removed the real Custom Lists five-item preview limit.
- Added authoritative clear/reset to the real Lists search input.
- Today/appointment code left unchanged from v54au.

## v54au — Recurring Home Repair
- Corrected Upcoming recurring Home preview to use the established recurring model.

## v54at — Upcoming Recurring Tasks on Home
- Home Recurring now shows overdue, due today and the next three upcoming active recurring tasks.
- Lists and recurrence logic are unchanged.

## v54as — Attachment Integrity + Completed To-do Cleanup
- Added verified Brain Inbox attachment transfer for To-dos and Appointments.
- Added Appointment attachment preview and list attachment cues.
- Added explicit deletion of completed To-dos older than two calendar months.

## v54ar — Attachment Consistency
- Tidied Brain Inbox attachment preview on narrow iPhone screens.
- Preserved attachments across Brain Inbox conversion to Project, To-do and Appointment.

## v54aq — Brain Inbox Image Integrity
- Made Brain Inbox attachment previews directly openable.
- Preserved Brain Inbox attachments through Project conversion and later Project edits.
- Added Project attachment viewing using the existing viewer.

## v54ap — Reliable Daily Recovery
- Moved automatic recovery snapshots from quota-prone localStorage to IndexedDB.
- Added write/read verification, app-open snapshot creation, seven-day retention and visible failure status.
- Preserved manual JSON Export/Share as the independent backup route.

## v54ao — Pending Visual Polish
- Strengthened the visual treatment of Pending / Pending — reason text.
- Presentation only; no workflow logic changed.

## v54an — Desktop Daypart Placement Repair
- Made v54al Home/daypart placement authoritative after legacy Home-order optimisers.
- Fixes Daily Rhythm / Evening Routine remaining at the bottom on desktop while iPhone was correct.
- Preserves v54am Project Next label and all planner workflow logic.

## v54am — Home Project Next Label
- Added a visible **Next** status to the first incomplete non-Pending step in expanded Home project cards.
- Presentation only; project ordering and Pending/dependency logic are unchanged.

## v54al — Daypart Routine + Home Priority Order
- Reordered Home action sections.
- Moved Daily Rhythm/Evening Routine into the existing daypart companion area.
- Presentation only; no planner workflow logic changed.

## v54ak — Consolidated Pending
- Replaced the separate Waiting For presentation with a consolidated Pending view of Pending to-dos, Pending project steps and preserved standalone Pending notes.
- Kept the existing menu-based Pending workflow and underlying data format unchanged.

## v54aj — Visible Pending Status
- Added a dedicated Pending/reason line beneath normal text/date for ordinary to-dos and project steps across Home, Lists and Timeline.
- Pending remains controlled only from the three-dot menu.

## v54aiR1 — Pending Menu Repair
- Corrected Home menu selector from nonexistent `.item-menu-wrap` to the actual `.item-menu-anchor` emitted by compactMenu().

## v54ai — Pending Menu Consistency
- Removed extra inline Pending checkboxes/circles added by the repair chain.
- Restored Pending to the established three-dot menu workflow with optional reason prompt for ordinary to-dos and project steps.
- Preserved v54ah desktop/PWA update repair and Home data/rendering behaviour.

## v54ah — Desktop Update Repair
- Fixed desktop tabs remaining on an older version after a newer deployment was detected.
- Update checks now apply published versions automatically using a version-addressed worker and reload fallback.
- No planner feature/rendering logic changed from v54ag.

## v54ag — Stabilised Pending/Home
- Rebuilt from accepted v54ad; consolidates Pending availability and Home surfacing while aligning PWA asset/cache versions.

## v54ad — Timeline Naming Consistency
- Renamed the bottom Planner tab to Timeline so both routes to the same screen use the same name.

## v54ac — Home Action Dashboard
- Removed the duplicate This Week section from Home; Timeline remains the weekly planning view.

## v54ab — Timeline delete for all dated items

Extends direct Timeline deletion from appointments to every Timeline item type while preserving item-specific delete semantics.

## v54ab — Timeline appointment delete
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
