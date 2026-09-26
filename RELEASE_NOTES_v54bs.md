# Development v54bs

Built from confirmed Development v54br.

- Preserves Timeline All | Schedule and its existing period filters.
- Preserves the confirmed Brain Inbox IndexedDB attachment-storage repair.
- Makes automatic daily recovery snapshots self-contained again: attachment image/document bytes are embedded in the recovery snapshot even though primary planner data stores only lightweight attachment references.
- Recovery restore now writes attachment bytes back to the attachment IndexedDB store before saving the lightweight planner record, avoiding a return to localStorage quota pressure.
- Manual Export / Share backups remain self-contained and import continues to restore attachment bytes.
- Version identifiers advanced consistently to Development v54bs.
