# My Life Planner v54e — Update Reliability Checklist

## Current release
- [ ] Desktop shows v54e.
- [ ] Safari shows v54e.
- [ ] Installed iPhone Home Screen app reaches v54e without deleting the app or website data.
- [ ] Header, About and Developer information agree on v54e.
- [ ] Existing planner data is unchanged.

## Update mechanism
- [ ] Settings → App maintenance → Check for updates reports v54e as current once updated.
- [ ] `service-worker.js` is registered without a `?v=` query.
- [ ] A published version mismatch changes the update button to `Update to v…`.
- [ ] Applying an update causes one fresh reload and does not loop.

## Regression
- [ ] Recurring complete-and-advance still works.
- [ ] This Week and Timeline refresh after recurring completion.
- [ ] Project templates and Smart Projects still work.
- [ ] Cleaning by Area still works.
