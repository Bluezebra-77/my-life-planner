## v54ab

- Usability gap fixed: Timeline items no longer require a detour to Lists for deletion.

## v54ab
- Usability gap fixed: Timeline appointments previously opened an edit dialog with Save/Cancel only, forcing deletion through Lists.

## v54x
- No unrelated bug fix. One-change ordinary To-do Pending test build from accepted v54w.

## v54w
- No unrelated bug fix. One-change Project Step Pending test build from accepted v54v.

## v54v
- No unrelated bug fix. One-change presentation/priority build from v54u.

## Corrected in v54j
- Recurring completion circles rendered but did not respond reliably on iPhone Home views.

# Bug and Usability Register - v51

## Closed for v51

- Today's Focus migration loss
- Recurring responsibilities advancing before completion
- Nth-weekday monthly recurrence missing
- Irrelevant monthly recurrence controls shown for weekly tasks
- Brain Inbox microphone overlap
- Daily Rhythm customisation regression
- Broken/duplicative Smart Lists experiment
- Timer and Quick Add overlap on desktop and iPhone
- Cleaning-list action menu inaccessible in iPhone portrait
- Converted cleaning task not refreshing its next due date and Needs Attention
- Waiting For and Evening Routine missing from Home
- Long Settings screen requiring excessive scrolling

## Open design review

- Decide whether the progress bar motivates or communicates enough value; retain for now.
- Review Home/Timeline distinction after extended real-life use.
- Generated-task timer remains a future enhancement.

## v52a design refinement

- Permanent explanatory text across Lists and Planner reduced working space; moved behind information buttons.

## Corrected in v52a
- Today and Needs Attention could show the same underlying work in two forms, including a dated child step and its parent item.
- Home collapse controls could fall onto a separate row on iPhone, creating excessive empty space.

## v52b observation items

- Pattern learning begins with v52b and cannot infer repetitions that occurred before installation.
- Continue monitoring whether Planner Health suggestions are useful without becoming repetitive.

## v52c observation list
- Test whether the Daily Companion summary remains useful without adding clutter.
- Evening and weekly reflections remain planned for the second Daily Companion milestone.

## Corrected in v52c
- Repeated Today’s Focus suggestions could disappear because v52c did not read the v52b habit-history key and did not refresh Planner Health immediately.
- Daily Companion occupied excessive vertical space on iPhone.

## v52d design safeguards
- Reflections are optional, dismissible and non-judgemental.
- Completion statistics begin from v52d activity logging; historic totals are not invented.

## Future wants
- Optional notifications and reminders from the installed app.

## v52f polish review
- Standardised small control tap targets and compact iPhone spacing.
- Corrected stale asset version references during release packaging.

## Corrected in v53
- Rejected v53 regression package reverted Home ordering, removed Home collapse controls, broke Waiting For Edit and Birthday saving.
- Corrected v53 was rebuilt from v52f and applies only the guarded Convert-as-Move workflow.

## Corrected in v53a
- Home order/collapse regressions, mobile heading collisions, missing recurring visibility/editing, missing Cleaning Room/Area selection, search-step editing, reflection count mismatch and routine reset.

## Corrected in v53a Patch
- Advanced recurrence was not obvious/available for Zoom appointments.
- Daily Rhythm lacked Reset.
- iPhone information icons could cover section names.

## Corrected in v53a Final Polish Patch
- Home titles could collapse into narrow vertical fragments beside controls on iPhone.
- Clearing Lists search could leave the previous filter and match status active.

## v54a
- No known regressions introduced; Project Templates are a new isolated local-storage feature.

## Corrected in v54b
- Timeline omitted dated child steps.
- Project edit menus could be inaccessible in iPhone portrait.

## Corrected in v54cR22
- Newly advanced recurring occurrences were visible in Timeline but missing from Home This Week.
- Home Brain Inbox preview had no way to reveal captures beyond the first three.

## Corrected in v54d
- Recurring item in Home Today could remain visibly checked instead of disappearing and advancing.
- Recurring Home completion control could require the three-dot menu rather than the visible completion circle.

## Corrected in v54e
- Installed iPhone PWA could remain on an older release while desktop and Safari showed the new release.
- Manual update check could falsely report the current version because it checked worker waiting state before installation completed.

## Corrected in v54f
- Installed iPhone PWA could remain on v54cR because the replacement worker could fail installation if any pre-cached optional asset was unavailable.

## Corrected in v54g
- Recurring tasks restored from older backups could be visible but refuse to advance because newer completion code required `status === active`. Legacy/non-paused records are now normalised and treated as active.

## Corrected in v54i
- Legacy/restored recurring tasks could appear but refuse to advance because status was missing or non-standard.
- Home Today/This Week could navigate to an item without exposing its normal Edit/Delete management actions.

## v54m
- Fixed: Today could blank after stale v54i function references were called by v54j.
- Improved: backup import distinguishes planner JSON from an application ZIP.


## v54n
- Fixed annual-date editor showing artificial year 2000.
- Fixed confusing annual-date display by showing the calculated next occurrence with year.


## v54u
- Adds guarded recovery for accidental recurring completion without changing the protected recurrence-advance calculation.
