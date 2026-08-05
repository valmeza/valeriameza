## 1. Content Update

- [x] 1.1 Draft the Buttonboard project entry with stack `Astro, Cloudflare Workers, Cloudflare D1`, a `Live` status, and the live site link `https://buttonboard.space`.
- [x] 1.2 Place the `button-board.jpeg` project image in `public/projects/` and reference it as the entry thumbnail.
- [x] 1.3 Add the Hobbyist YouTube link to its project entry.

## 2. Implementation

- [x] 2.1 Restructure every project entry to use separate `websiteUrl`, `githubUrl`, and `youtubeUrl` fields, moving the existing repo and site links into the matching field.
- [x] 2.2 Add the Buttonboard entry as the first item in the `projects` array in `src/pages/index.astro`.
- [x] 2.3 Update `src/components/ProjectTable.astro` to render the three-icon link set (website, GitHub, YouTube) where each icon links to its own URL.
- [x] 2.4 Render grayed-out, non-interactive placeholders for icons whose URL is missing.
- [x] 2.5 Keep the existing project entries and their ordering unchanged.
- [x] 2.6 Render a pulsing green indicator dot beside the `Live` status in `ProjectTable.astro`.

## 3. Verification

- [x] 3.1 Run `npm run build` and confirm the site builds without errors.
- [x] 3.2 Preview the projects section and confirm Buttonboard renders first with status `Live` and a pulsing green indicator dot, its website icon links to `https://buttonboard.space`, and the `button-board.jpeg` thumbnail displays.
- [x] 3.3 Confirm the GitHub and YouTube icons link out correctly for the projects that provide them and that missing links render grayed out.
- [x] 3.4 Check the projects section at desktop and mobile widths to confirm the icon set and stack label render cleanly.
