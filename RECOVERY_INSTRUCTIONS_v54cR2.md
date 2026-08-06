# v54cR2 iPhone update recovery

This recovery is for an installed iPhone PWA or normal Safari session that remains controlled by an older service worker.

1. Upload every file in this folder to the GitHub Pages repository root.
2. In normal Safari on the affected iPhone, open the site address ending in `/recover-v54cR2.html`.
3. Tap **Recover update to v54cR2**.
4. The page unregisters old service workers and removes only caches whose names begin `my-life-planner-`.
5. Planner data in local storage is not cleared.
6. The page then opens the current `index.html` from the network.
7. Fully close and reopen the installed planner. Confirm v54cR2.

Do not delete the installed app and do not clear Safari website data.
