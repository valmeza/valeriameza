## Why

The current profile and hero copy still reads like placeholder portfolio text. It does not clearly introduce Valeria Meza, explain the `Val` shorthand, or frame the page around the engineering story the portfolio is meant to tell.

## What Changes

- Replace the generic hero/profile text with copy that introduces Valeria Meza by full name and acknowledges `Val` as a shorthand name.
- Rework the opening line so the portfolio feels like an intentional engineering journey rather than a template shell.
- Keep the terminal-inspired presentation and `session.log` motif, but retheme the command list so it feels specific to a software engineer portfolio.
- Preserve the compact, high-performance single-page layout and the existing visual treatment.

## Capabilities

### New Capabilities
- `profile-intro`: Profile and hero content for the top-of-page introduction, including the full-name introduction, alias handling, and terminal-themed opening narrative.

### Modified Capabilities

## Impact

- `src/components/TerminalHeader.astro` for the hero copy and session.log command list.
- `src/pages/index.astro` for the profile/about section copy and any linked opening narrative.
- OpenSpec artifacts for the new `profile-intro` capability.
- No layout, routing, or deployment changes are expected.
