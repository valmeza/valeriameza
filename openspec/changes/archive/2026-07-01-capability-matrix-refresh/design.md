## Context

The portfolio is already structured as a static Astro home page with a dedicated `02 / capability matrix` section. The current implementation shows a short list of generic technologies, but the section needs to reflect your actual working stack: HTML, CSS, JS, Java, SQL, Oracle DB, Oracle APEX, OCI, DevOps, and AI.

## Goals / Non-Goals

**Goals:**
- Replace placeholder skills with your real capability set.
- Preserve the current compact, terminal-inspired presentation.
- Keep the matrix readable across desktop and mobile widths.

**Non-Goals:**
- Do not introduce a new data source or CMS.
- Do not redesign the section into a large visual component.
- Do not add runtime logic beyond simple content rendering.

## Decisions

### 1. Keep the matrix as a static content array
The skills are editorial content, so a plain array in the page frontmatter remains the simplest and most maintainable source of truth.

Alternatives considered:
- Moving the skills into a separate content file: useful later, but unnecessary for a small content refresh.
- Building a dynamic filterable matrix: more complexity than this section needs.

### 2. Preserve the existing wrap-friendly chip layout
The current chip layout already works well for a compact capability matrix. Reusing it keeps the section visually consistent and avoids unnecessary layout churn.

Alternatives considered:
- Converting to a table or multi-column grid: potentially useful, but less aligned with the current terminal aesthetic.
- Adding icons or badges for each skill: more decorative than needed.

### 3. Keep the list ordered by practical breadth
The content should read from foundational web skills into backend, Oracle platform, infrastructure, and AI coverage. That makes the matrix feel intentional rather than alphabetized.

Alternatives considered:
- Alphabetical ordering: easy to maintain, but weaker as a narrative.
- Grouping into multiple subsections: clearer categorization, but more visual weight than needed right now.

## Risks / Trade-offs

- [A longer skill list may wrap more aggressively on narrow screens] → Keep the existing flex-wrap layout and verify mobile spacing.
- [The matrix could feel too dense if labels are inconsistent] → Normalize labels before rendering and keep them short.
- [The section could read like a simple tag cloud] → Use deliberate ordering to make the stack progression visible.
- [Skill names may drift over time] → Keep the source array in one place so updates stay low-friction.
