# My Life Planner — Bug Register
**Current confirmed baseline:** v54bc — Progress and Time Sensitive Repair
**Reconciled:** 8 September 2026

## Open confirmed functional bugs
**None currently confirmed.**

## Verification / review item
### Today — Time Sensitive full ordering
Desired order: **Overdue → Appointments → other due/time-sensitive items → Projects last**.
Appointment placement after overdue items has been confirmed previously, but the complete category sequence has not yet been explicitly audited end-to-end. Treat this as verification unless real use exposes a defect.

## Recently closed
- **v54ba Appointment display:** blue appointment treatment confirmed; unnecessary/non-persistent appointment checkbox removed. v54az was rejected because it targeted the wrong rendering path; v54ba was rebuilt from confirmed v54ay.
- **v54ay Today’s Progress:** meaningful day-scoped calculation; complete/reopen both update correctly; Show/Hide works.
- **v54ax Desktop updater/cache:** confirmed on desktop and iPhone.
- **v54aw Lists/Custom Lists:** all custom-list items, collapse, reversible tick and search-clear repair confirmed.
- **v54au Home Recurring:** overdue, today and upcoming active recurring tasks repaired.
- **v54ap Automatic recovery:** IndexedDB daily recovery subsequently confirmed in real-world use.

## Regression lessons
- Build from the last user-confirmed baseline. If a build fails, discard it rather than stacking fixes on it.
- Inspect the actual renderer/data path before patching; do not guess CSS selectors or field names.
- Pending controls must use the actual direct menu wrapper/anchor.
- Home daypart placement must remain authoritative after legacy Home optimisers/rerenders.
- Recurring code must use the real recurrence schema (`nextDue` plus active-status logic).
- Lists fixes must use the real renderer/search input (`renderCustomLists`, `globalListSearch`).
- Before delivery: syntax-check app/service worker, validate JSON/version consistency, verify ZIP integrity and 19-file extraction, and regression-check protected workflows.
