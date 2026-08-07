> Current hardening baseline: **v54m**

# My Life Planner v54a — Workflow & Stability

Upload every file in this folder to the root of the GitHub Pages repository, replacing the previous app files.

Then open **Settings → App maintenance → Check for updates** and confirm **v54a** in the Header, About and Developer Dashboard.

This release restores accepted Home ordering and collapse controls, recurring-task visibility and editing, Cleaning by Area entry controls, full project-step editing from Lists/search, consistent completion statistics and daily routine reset behaviour. Existing data keys and Convert-as-Move are preserved.

Complete `TEST_CHECKLIST_v54a.md` before accepting the build.


## v54a Project Templates
Use Lists → Projects → Templates to create reusable workflows.


## Protected Regression Gate
From v54m onward, accepted workflows are behavioural contracts. Every release starts from the last accepted source, changes the minimum necessary code, and must pass `TEST_CHECKLIST_v54i.md` before it becomes the next golden baseline. Static syntax/package checks are necessary but are not sufficient for acceptance.
