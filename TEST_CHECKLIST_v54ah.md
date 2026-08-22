# v54ah Regression Checklist

## Desktop update
- Deploy v54ah while a desktop tab is on an older version; published version check should trigger upgrade.
- Desktop Home/About/Developer must all show v54ah after reload.
- A manual Check for updates must still work.
- app.js/style.css/manifest/service-worker/version.json all reference v54ah.

## Protected iPhone/PWA behaviour
- Home → Today — Time Sensitive remains populated.
- Home → Needs Attention remains populated.
- Pending remains available on ordinary to-dos and project steps in appropriate Home/List/edit routes.
- Overdue Pending items remain red/OVERDUE.
- iPhone portrait three-dot menus remain visible.
- Recurring completion and Undo last completion remain functional.
- Timeline direct Delete remains functional.
- Timed appointment ordering remains functional.
