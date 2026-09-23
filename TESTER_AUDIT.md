# Tester Distribution Audit — 2026-09-23

Audited source: confirmed v54bj stable package.

## Hard-coded defaults found
- Personal Daily Rhythm entries.
- Personal Evening Routine entries.
- Photography, Vinted, household-area and photography-oriented suggestion pools.
- BPE/photography/medication-specific form examples.

## Tester 1.0 sanitisation
- Daily Rhythm starts blank for a new installation.
- Evening Routine starts blank for a new installation.
- Seeded task/category and choice pools start blank.
- Personal/domain-specific examples are replaced with generic examples.
- Existing controls for users to create their own routines, lists, projects and tasks remain.
- Automatic silent published-version checking is disabled in Tester 1.0, so Development builds are not silently consumed.

The frozen v54bj package is unchanged.
