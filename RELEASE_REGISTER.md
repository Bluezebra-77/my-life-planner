# My Life Planner — Release Register

## Current status — 1 October 2026
- **Development v54bt — active iPhone test build.** Built from v54bs; targeted Today’s Progress consistency repair.
- **Development v54bs — superseded by v54bt.** Backup/attachment baseline retained unchanged except for the progress repair.
- **Tester 1.2 — distributed external test build.** Leave untouched while iPhone and Android testers use it.
- **v54bj — frozen confirmed baseline.**

## Release rules
- Never develop directly on Tester/Stable.
- Development changes are tested before promotion.
- A future Tester release is a complete package promoted from an accepted Development build.
- Before issue, verify JavaScript syntax, JSON validity, ZIP integrity, package completeness, data/workflow preservation, protected regression areas, and version identity across Home, Settings/About, Developer information, app.js, service worker/cache, manifest, version.json, asset references and current-version guides/docs.
- Tester releases must contain no personal seeded planner data.

## Historical register from v54bs
# My Life Planner — Release Register

| Release | Channel | Built from | Status | Date | Notes |
|---|---|---|---|---|---|
| v54bj | Confirmed baseline | v54bi + Home/Lists repair | Frozen | 2026-09-23 | User-confirmed working baseline. Keep unchanged. |
| Tester 1.0 | Tester / Stable | v54bj | Accepted clean-install tester release | 2026-09-23 | Safari clean-install verified: no personal name/lists, Daily Rhythm blank, zero item counts, Daily Thought present. |
| Development v54bk | Development | v54bj | Superseded by v54bl | 2026-09-23 | Private branch starting point. |
| Development v54bl | Development | v54bk | Superseded by v54bm | 2026-09-23 | First Use guide, Quick Start return navigation, Help refresh and stale current-wording cleanup. |
| Development v54bm | Development | v54bl | Active — iPhone test | 2026-09-24 | Timeline All / Schedule addition; Schedule contains Recurring Tasks then Appointments by date. |

| Development v54bq | Development | v54bm | Active / iPhone test | 2026-09-24 | Brain Inbox storage repair; preserves Timeline All / Schedule. |

## Rules
- Never develop directly on a Tester/Stable release.
- Development builds can advance through any number of versions.
- A future Tester release is a complete package promoted from one accepted Development build; testers do not need intermediate builds.
- Before promotion, run the protected regression checks and verify upgrade/data preservation from the previous Tester release.
- Tester releases must not contain personal seeded planner data.

## Development v54bq — active test build
Complete standalone Development release; v54bp is not a prerequisite. Adds IndexedDB attachment storage/migration and preserves Timeline, Brain Inbox transactional saving, updater safeguards and visible version consistency. Awaiting iPhone acceptance.
