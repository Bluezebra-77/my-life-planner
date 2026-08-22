# My Life Planner v54aiR1 — Pending Menu Repair

Fixes a concrete selector error in v54ai. compactMenu() creates `.item-menu-anchor`, but v54ai searched for `.item-menu-wrap`; therefore the Pending-enabled Home menu was never installed. v54aiR1 targets the actual menu element. Pending remains menu-based: Mark pending prompts for a reason, then the menu changes to Mark active. No extra checkbox is restored.
