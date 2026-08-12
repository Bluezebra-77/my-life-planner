# v54u — Recurring-task Undo / Mark Incomplete

Test build based on the user-confirmed v54sR2 stable baseline.

## One functional change

Recurring tasks completed in v54u retain a one-level recovery snapshot. In Lists → Recurring tasks, **Undo last completion** restores the occurrence that was just completed, restores the previous completion count/status, and removes the matching recurring activity record so Evening Reflection / Hidden Statistics are not inflated by an accidental completion.

The protected v54m recurring advance calculation remains the completion engine. This build wraps that path only to capture the state needed for undo.

Undo is intentionally limited to the most recent recurring completion made after installing v54u. Older historical completions do not gain an artificial undo snapshot.

No Today sorting, timed-item prioritisation, project-step undo, ordinary to-do undo, or portrait-menu behaviour is changed.
