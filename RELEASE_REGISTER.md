# My Life Planner — Release Register

| Release | Channel | Built from | Status | Date | Notes |
|---|---|---|---|---|---|
| v54bj | Confirmed baseline | v54bi + Home/Lists repair | Frozen | 2026-09-23 | User-confirmed working baseline. Keep unchanged. |
| Tester 1.0 | Tester / Stable | v54bj | Tester release | 2026-09-23 | Sanitised new-install defaults; no silent Development updates. |
| Development v54bk | Development | v54bj | Active | 2026-09-23 | Private branch for ongoing amendments. |

## Rules
- Never develop directly on a Tester/Stable release.
- Development builds can advance through any number of versions.
- A future Tester release is a complete package promoted from one accepted Development build; testers do not need intermediate builds.
- Before promotion, run the protected regression checks and verify upgrade/data preservation from the previous Tester release.
- Tester releases must not contain personal seeded planner data.
