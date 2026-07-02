## Why

The current `01 / PROFILE` section uses placeholder copy that does not reflect your actual role or focus. Replacing it now gives the portfolio a sharper first impression and adds a small dynamic detail that makes the page feel more personal and intentional.

## What Changes

- Replace the dummy about text with a concise statement that you are a software engineer.
- Add a dynamic "days as a developer" value based on a February 2020 start date.
- Rewrite the status card to reflect your real focus: fullstack development, with stronger emphasis on backend, database, and cloud work.
- Keep the section short, readable, and visually striking so it still fits the terminal-style layout.

## Capabilities

### New Capabilities
- `profile-section`: Profile copy and status content for the `01 / PROFILE` section, including the developer-since counter and updated focus statement.

### Modified Capabilities

## Impact

Affected code includes `src/pages/index.astro` and any small helper logic needed to compute the developer-day counter. The visual treatment in the existing profile card should remain intact while the copy and dynamic value change.
