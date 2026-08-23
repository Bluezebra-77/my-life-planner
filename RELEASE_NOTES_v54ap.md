# My Life Planner v54ap — Reliable Daily Recovery

Built from user-confirmed v54ao.

The old automatic recovery stored up to five full planner copies in localStorage. As planner data grows, those full copies can exhaust the browser's localStorage quota; the old function silently caught that failure, which could leave the dated backup list stuck on an old date even while live planner saves continued.

v54ap moves automatic daily recovery snapshots to IndexedDB. Existing localStorage recovery copies are migrated before being removed. A snapshot is created/verified when the planner opens and refreshed on saves, the latest seven dated snapshots are retained, and write failures are shown visibly.

Manual **Save backup file / Share backup** remains unchanged and is still the independent/off-device backup route.
