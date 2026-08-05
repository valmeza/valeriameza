## ADDED Requirements

### Requirement: Buttonboard leads the projects list
The system SHALL render the Buttonboard project as the first row in the `03 / active work` projects table.

#### Scenario: Buttonboard is shown first
- **WHEN** the home page loads
- **THEN** the projects table shows Buttonboard as the first row, above Dadlister, Hobbyist, and Coffee Project

### Requirement: Buttonboard status
The system SHALL render the Buttonboard project with status `Live` and SHALL display a pulsing green indicator dot beside the `Live` status.

#### Scenario: Live status is visible
- **WHEN** the home page loads
- **THEN** the Buttonboard row displays `Live` as its status with a pulsing green dot beside it

### Requirement: Project link icon set
The system SHALL render three link icons in each project row — website, GitHub, and YouTube — in that order. An icon SHALL link to the project's corresponding URL when one is provided and SHALL render grayed-out and non-interactive when that URL is absent.

#### Scenario: Provided links are clickable
- **WHEN** the home page loads
- **THEN** the Buttonboard row's website icon links to `https://buttonboard.space`, the Hobbyist row's GitHub and YouTube icons link to their repository and video, and every icon opens its link in a new tab

#### Scenario: Missing links are grayed out
- **WHEN** the home page loads
- **THEN** icons without a corresponding URL render grayed-out, do not link anywhere, and are hidden from assistive technology

### Requirement: Buttonboard stack label
The system SHALL render the Buttonboard project stack as `Astro, Cloudflare Workers, Cloudflare D1`.

#### Scenario: Stack is shown
- **WHEN** the home page loads
- **THEN** the Buttonboard row displays the stack `Astro, Cloudflare Workers, Cloudflare D1`
