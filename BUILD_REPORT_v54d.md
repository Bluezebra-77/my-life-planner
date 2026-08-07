# Build Report — v54d

Baseline: uploaded v54cR2 recovery/current working package.

## Purpose
Fix the recurring-task completion regression encountered during real-life use without altering the saved-data schema.

## Technical changes
- Replaced the final recurring completion handler with one authoritative complete/advance path.
- Explicitly refreshes every time-based surface after completion.
- Uses a button-style completion circle for recurring items in Today to avoid a stale checked native checkbox state.
- Keeps existing optional end-date/end-count logic.
- Updated app, manifest and service-worker identities to v54d.
- Consolidated older v54c recovery/build documents into the project-history archive to return the root package to 19 files.
