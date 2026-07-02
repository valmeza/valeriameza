## Context

The portfolio is a static Astro site with the profile content rendered on the home page. The existing `01 / PROFILE` block currently contains placeholder language and a fixed status statement that does not match your actual role or focus. This change only touches that section, but one requirement is intentionally dynamic: the developer-since value should stay accurate without requiring a rebuild.

## Goals / Non-Goals

**Goals:**
- Replace placeholder profile copy with concise, accurate language.
- Present your primary focus as fullstack development with stronger emphasis on backend, database, and cloud work.
- Compute and display a live days-since-developer value anchored to February 2020.
- Keep the section lightweight so it fits the existing terminal-style layout and does not introduce a broader page restructure.

**Non-Goals:**
- Do not redesign the overall portfolio layout.
- Do not introduce a CMS, API, or persisted profile data source.
- Do not add a framework or dependency just for this counter.

## Decisions

### 1. Compute the day counter at runtime in the browser
The counter should be calculated when the page loads so the value stays current on a static deployment. This avoids stale build-time values and keeps the implementation simple.

Alternatives considered:
- Build-time calculation in Astro frontmatter: simpler, but the value would only change when the site is rebuilt.
- Server-side rendering: unnecessary for a static portfolio and adds no value here.

### 2. Keep the profile content localized to the home page
The profile copy, status card text, and counter are all part of a single section, so the simplest path is to keep the content near `src/pages/index.astro` rather than splitting it across a larger content system.

Alternatives considered:
- Extracting the content into a JSON or content module: useful later, but premature for one section change.
- Adding a CMS or editable content layer: out of scope for a static portfolio update.

### 3. Use a fixed developer start date constant
The counter should derive from a single explicit start date, using `2020-02-01` as the anchor unless the user later provides a more exact day. A fixed constant keeps the logic deterministic and easy to validate.

Alternatives considered:
- Prompting for the exact day in February 2020: more precise, but unnecessary for the current request.
- Inferring from an approximate month only: too vague for a testable implementation.

## Risks / Trade-offs

- [Client-side script adds a small amount of JS] → Keep the script inline and narrowly scoped to one text node so the runtime cost stays minimal.
- [Assuming February 1, 2020 as the start date] → Document the constant clearly so it can be adjusted later if you want a different exact date.
- [Copy changes could drift from the rest of the terminal tone] → Keep the profile text short, technical, and aligned with the existing section framing.
- [Browser clock differences can affect the displayed count around midnight] → Use the local page runtime date consistently and accept that the number updates naturally as the day changes.
