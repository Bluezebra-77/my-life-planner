# My Life Planner v54e — PWA Update Reliability

## Why this release exists
The installed iPhone Home Screen app could remain on an older release even when GitHub Pages, desktop and Safari had already updated.

## Root causes corrected
- Service-worker registrations previously used a version query in the worker URL. An installed older app therefore kept checking its old query URL rather than one stable worker address.
- The manual update check called `registration.update()` and immediately looked for `registration.waiting`, even though installation can finish asynchronously.
- Workers also called `skipWaiting()` during install, while the UI was simultaneously expecting a worker to remain in `waiting`. Those two strategies conflicted.

## v54e design
- Service worker is now always registered at the stable `./service-worker.js` URL.
- `version.json` is fetched network-only to discover the published release independently of the cached app shell.
- Update checks wait for worker installation instead of assuming it is immediate.
- Activation claims all clients and tells open windows which worker version is active.
- A controller change reloads `index.html` with a one-time cache-busting parameter.
- Existing local planner storage is not cleared or renamed.
