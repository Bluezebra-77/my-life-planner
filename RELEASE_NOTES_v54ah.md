# My Life Planner v54ah — Desktop Update Repair

Built directly from the working v54ag package. No planner feature/rendering logic was changed. The update system now registers the published service worker with a versioned URL, automatically applies a detected update, and uses a cache-busted reload fallback. The service worker also fetches same-origin app-shell HTML/JS/CSS/JSON with no-store while online.
