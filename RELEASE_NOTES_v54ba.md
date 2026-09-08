# v54ba — Appointment Display Repair

Built from the confirmed v54ay baseline.

## Repair
- Removed the non-persistent appointment checkbox at the actual shared reminder-row renderer.
- Appointments are now explicitly non-actionable in Home/weekly reminder rows.
- Added a distinctive blue appointment treatment to Home reminder rows, the Appointments list, and Timeline.
- Overdue red remains reserved for overdue items and takes precedence.

No appointment-completion data model has been added; appointments continue to age naturally out of Today.
