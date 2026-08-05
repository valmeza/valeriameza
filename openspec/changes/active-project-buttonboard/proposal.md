## Why

All projects currently listed in the `03 / active work` section are marked Archived, so the section label overpromises: there is no active work to show. Buttonboard is a live, production project built on a modern edge stack, and it belongs at the top of the projects list as the first thing a visitor sees.

The single project-name link also conflates different destinations: one icon cannot represent a website, a repository, and a video at the same time, and projects without a repository are left without a link.

## What Changes

- Add a new project entry for Buttonboard with status `Live` and the `button-board.jpeg` thumbnail stored in `public/projects/`.
- Position Buttonboard as the first row in the projects table so it leads the list.
- Replace the single project link with three independent icon links per row — website, GitHub, and YouTube.
- Route each icon to its own URL (website → `https://buttonboard.space`, GitHub → the repository, YouTube → the video) and gray out icons whose URL is absent.
- Add the Hobbyist YouTube link.
- Preserve the current table rendering, mobile card layout, and terminal visual treatment.

## Capabilities

### New Capabilities
- `projects-list`: The projects table content and ordering, including which project leads the list and how each project exposes its website, repository, and video links.

### Modified Capabilities

## Impact

- `src/pages/index.astro` for the new first-position project entry and the restructured `websiteUrl`, `githubUrl`, and `youtubeUrl` fields.
- `src/components/ProjectTable.astro` for the three-icon link set with grayed-out placeholders for missing URLs.
- OpenSpec artifacts for the new `projects-list` capability.
- No layout, routing, dependency, or deployment changes are expected.
