## Context

This change creates a personal technical portfolio with a terminal/TUI visual language on a static Astro site. The requirements span page composition, responsive presentation, keyboard-oriented cues, and a deployment path to GitHub Pages, so the implementation needs a clear structure before coding begins.

## Goals / Non-Goals

**Goals:**
- Deliver a static portfolio that matches the terminal-inspired requirements in the specs.
- Keep the UI consistent through a shared layout system, mono typography, and TUI-style framing.
- Support GitHub Pages publishing with correct asset resolution for the deployed path.
- Keep the first version simple enough to extend later without reworking the structure.

**Non-Goals:**
- Do not introduce a CMS, backend, or database in this phase.
- Do not build dynamic content editing workflows.
- Do not optimize for rich motion or image-heavy branding treatments.

## Decisions

### 1. Use Astro as the site framework
Astro is the right fit because the portfolio is content-heavy, mostly static, and should ship with a minimal runtime. It keeps the implementation simple while leaving room for future dynamic sections if needed.

Alternatives considered:
- Next.js or another app framework: more runtime weight than the portfolio needs.
- Plain HTML/CSS: simpler, but less maintainable once shared layout patterns and multiple sections are introduced.

### 2. Use Tailwind CSS with a custom TUI theme layer
Tailwind gives a fast way to keep spacing, borders, and responsive behavior consistent. A custom theme layer can centralize the terminal palette, mono typography, and border styles so the TUI look does not drift between components.

Alternatives considered:
- Handwritten CSS modules: workable, but slower to keep consistent across sections.
- Component library styling: would bias the site toward generic product UI rather than a distinct terminal aesthetic.

### 3. Model the page as reusable content sections
The page should be composed from shared layout primitives for the terminal header, framed sections, and data-table style project listings. This keeps the About, Skills, and Projects areas visually coherent and makes future additions lower risk.

Alternatives considered:
- One-off section markup per page: faster initially, but harder to maintain the TUI style consistently.
- A more abstract design system: unnecessary for the current scope and would add indirection without payoff.

### 4. Treat keyboard cues as guidance, not as a complex navigation subsystem
The requirements call for keyboard-oriented cues, so the UI should visibly communicate navigation shortcuts and support keyboard-friendly interaction patterns. This design keeps the interface accessible with anchors, focus states, and explicit hints instead of inventing a custom control system.

Alternatives considered:
- Full custom keyboard router: too much complexity for a static portfolio.
- Mouse-only interaction: fails the stated design direction.

### 5. Configure GitHub Pages explicitly for static hosting
GitHub Pages is the deployment target, so the build must account for the repository subpath and static asset resolution. Deployment should be handled as a repository workflow so publishing stays repeatable and does not depend on manual steps.

Alternatives considered:
- Manual upload of build output: brittle and easy to drift.
- Another hosting platform: outside the project scope and unnecessary for the current requirement.

## Risks / Trade-offs

- [GitHub Pages path handling] → Configure the build base path and validate links after deployment.
- [Terminal styling becoming hard to read on mobile] → Use responsive spacing, line wrapping, and section stacking so the layout degrades cleanly.
- [Keyboard cues not matching real behavior] → Keep cues aligned with actual focusable elements and anchors.
- [Visual consistency drifting across components] → Centralize typography, borders, spacing tokens, and colors in the theme layer.

## Migration Plan

1. Scaffold the Astro project and Tailwind theme.
2. Implement the shared layout and section primitives.
3. Add the content sections and terminal hero.
4. Wire GitHub Pages build/deploy configuration.
5. Validate local build output and the published path.

Rollback strategy:
- Revert the deployment workflow and restore the previous site state if GitHub Pages publishing breaks.
- Keep the site static so rollback is limited to source and workflow changes.

## Open Questions

- Should the initial projects section render as a table, a list of terminal commands, or a hybrid of both?
- Should keyboard hints be displayed persistently or only on the hero and project controls?
- Should the first deployment target be the repository root or a project subpath under GitHub Pages?
