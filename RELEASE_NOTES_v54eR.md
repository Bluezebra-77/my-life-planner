# My Life Planner v54eR — PWA Transition Reliability

- Replaces the failing all-or-nothing service-worker pre-cache with a transition-safe installer.
- Only core app files are pre-cached; missing optional documents cannot block activation.
- Keeps network-first navigation and no-store version checks.
- Preserves planner localStorage and user data.
- Specifically supports upgrading an installed v54cR/v54cR2 Home Screen app whose worker was registered with a version query.
