## Context

The home page currently uses a terminal-inspired header plus a profile/about section to introduce the portfolio. The structure works, but the copy still reads like scaffold text and does not clearly present Valeria Meza, her `Val` shorthand, or the engineering story the site is meant to communicate.

The implementation lives in `src/components/TerminalHeader.astro` and `src/pages/index.astro`, with shared framing handled by `SectionFrame.astro` and page-wide styling already established in the existing terminal theme. This change is content-heavy rather than structural.

## Goals / Non-Goals

**Goals:**
- Introduce Valeria Meza by full name and acknowledge `Val` as the shorthand name.
- Reframe the hero/profile copy around a professional engineering journey.
- Keep the `session.log` motif, but replace generic scaffold commands with portfolio-specific command lines.
- Preserve the current compact, responsive, terminal-like presentation.

**Non-Goals:**
- Do not change the page layout, routing, or deployment model.
- Do not add new dependencies or new UI components.
- Do not redesign the capability matrix or projects sections.

## Decisions

- Keep the existing `TerminalHeader` and `SectionFrame` structure.
  - Rationale: the current layout already supports the desired tone; the problem is the words, not the frame.
  - Alternative considered: create a new hero component. Rejected because it would add structural churn without improving the result.

- Replace the generic command list with a curated set of portfolio-themed commands.
  - Rationale: the terminal shell treatment is one of the strongest visual cues in the site, so the commands should reinforce the portfolio story instead of referencing the scaffolding used to build the app.
  - Alternative considered: remove the command panel entirely. Rejected because the panel is part of the site's identity and the user explicitly wants to keep that theme.

- Keep the intro concise and professional, with personality in the phrasing rather than in length.
  - Rationale: the portfolio needs to read quickly and feel credible on desktop and mobile.
  - Alternative considered: longer resume-style paragraphs. Rejected because the page is a single-screen portfolio, not a biography page.

- Preserve responsive wrapping by relying on the existing typography and panel layout.
  - Rationale: the current dark theme and box styling already support compact content; longer names and richer text should be handled by the existing responsive classes.
  - Alternative considered: adjust the section structure or introduce new breakpoint-specific markup. Rejected until the copy proves it cannot fit.

## Risks / Trade-offs

- [Longer full-name copy may wrap awkwardly] → Keep the name line short and let supporting text carry the alias explanation.
- [The new command list could feel forced if it is too literal] → Keep the commands short, specific, and aligned with the portfolio narrative.
- [More personality could reduce clarity] → Keep the intro grounded in role, focus, and motivation rather than decorative language.

## Migration Plan

1. Update the hero/profile copy in the existing components.
2. Verify the page still fits the current terminal layout at desktop and mobile widths.
3. Run the build or preview check to confirm the updated copy renders correctly.
4. If the copy does not fit, trim wording before changing layout.

Rollback is simple: revert the copy-only changes in `TerminalHeader.astro` and `src/pages/index.astro`.

## Open Questions

- Should the visible hero title lean more toward "Valeria Meza" or a shorter "Val Meza" treatment with the full name in supporting text?
- Should the command list lean closer to a literal shell transcript or a more metaphorical portfolio narrative?

