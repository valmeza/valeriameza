## Context

The projects section (`03 / active work`) renders an array of project objects in `src/pages/index.astro` through the shared `ProjectTable.astro` component. Every entry currently carries `status: 'Archived'`, which makes the "active work" framing read as stale. The change adds one live project, Buttonboard, places it first, and reworks how project links are presented: instead of a single name-link with one icon, each row carries three icon buttons — website, GitHub, and YouTube — where each icon links to its own URL or renders grayed out when that URL is missing.

## Goals / Non-Goals

**Goals:**
- Add Buttonboard as a `Live` project with a website link to https://buttonboard.space.
- Position Buttonboard as the first row in the projects table.
- Replace the single project link with three independent icon links (website, GitHub, YouTube).
- Gray out and disable icons whose URL is not provided, so every row shows the full icon set.
- Add the Hobbyist YouTube link to the existing data.
- Keep the section and page copy consistent with the terminal theme.

**Non-Goals:**
- Do not change the projects section header, ordering of existing projects, or any other section.
- Do not add new dependencies.
- Do not change thumbnail handling.

## Decisions

- Add the Buttonboard entry at the top of the `projects` array in `src/pages/index.astro`.
  - Rationale: the table renders rows in array order, so first position is a data change with no component work.
  - Alternative considered: sorting logic in the component. Rejected because it adds behavior for a one-project need.

- Replace the single `repoUrl` field with separate `websiteUrl`, `githubUrl`, and `youtubeUrl` fields.
  - Rationale: each icon is now an independent link, so one URL field cannot describe the row anymore.
  - Alternative considered: keeping `repoUrl` and adding site/video fields. Rejected because `repoUrl` no longer maps to a single icon and would complicate the icon mapping.

- Render a fixed icon set of three buttons in `ProjectTable.astro`: website, GitHub, YouTube.
  - Rationale: a stable order and full set keeps the rows aligned; missing links render grayed out and non-interactive (`aria-hidden`, `pointer-events: none`).
  - Alternative considered: only rendering icons that have links. Rejected because the user explicitly wants all three visible with grayed-out placeholders.

- Reference the `button-board.jpeg` thumbnail placed in `public/projects/`.
  - Rationale: the user provided the image; pointing at `/projects/button-board.jpeg` keeps it with the other project thumbnails and lets `ProjectTable.astro` render it in the existing thumbnail slot.

- Use the stack label "Astro, Cloudflare Workers, Cloudflare D1".
  - Rationale: matches the user-provided stack verbatim and reads clearly in the Stack column.
  - Alternative considered: a shortened "Astro, Workers, D1". Rejected until the long label proves it cannot wrap cleanly.

## Risks / Trade-offs

- [The long stack label may wrap awkwardly on narrow screens] → The mobile card layout stacks fields vertically, so wrapping is acceptable; revisit the label only if it looks broken.
- [Three icons per row add visual weight] → Small outlined icon buttons with muted idle color keep the row compact; disabled icons are dimmed to read as placeholders.

## Migration Plan

1. Restructure each project entry to use `websiteUrl`, `githubUrl`, and `youtubeUrl`, moving the existing repo/site links and adding the Hobbyist YouTube link.
2. Update `ProjectTable.astro` to render the three-icon link set with grayed-out placeholders for missing URLs.
3. Verify the projects table renders Buttonboard first with status `Live`.
4. Run the build and check the section at desktop and mobile widths.
5. Rollback is a revert of the project data and `ProjectTable.astro`.

## Open Questions
