# My Life Planner v54aeR4 — Pending Today Cache Repair

The Pending/Today code from v54aeR3 is retained. This repair fixes the stale asset references in index.html, which were still requesting app.js/style.css/manifest with the old v54w query version and could cause the installed PWA to run old code.
