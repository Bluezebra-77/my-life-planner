# Development v54bq

Built as a complete standalone Development package. It supersedes v54bp; v54bp does not need to be installed first.

- Moves Brain Inbox attachment payloads from quota-sensitive localStorage to IndexedDB.
- Planner records keep lightweight attachment references while accepted previews and conversion workflows remain available.
- Existing embedded attachments migrate automatically on first launch.
- Export / Share backups remain self-contained and include attachment data; Import restores attachment data to IndexedDB.
- Requests persistent browser storage where supported and reports planner data separately from attachment storage.
- Retains the v54bm Timeline All | Schedule addition, v54bo transactional Brain Inbox save behaviour, and updater/version consistency repairs.
