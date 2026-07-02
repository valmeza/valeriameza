## ADDED Requirements

### Requirement: Capability matrix content
The system SHALL render the `02 / capability matrix` section with the following skill labels: HTML, CSS, JavaScript, Java, SQL, Oracle DB, Oracle APEX, OCI, DevOps, and AI.

#### Scenario: Capability labels are shown
- **WHEN** the home page loads
- **THEN** the capability matrix displays the full listed skill set

### Requirement: Compact matrix presentation
The system SHALL present the capability matrix as a compact, wrap-friendly set of items that remains readable on both desktop and mobile layouts.

#### Scenario: Section remains readable on narrow screens
- **WHEN** the page is viewed on a mobile-width viewport
- **THEN** the capability matrix items wrap cleanly without overlapping or truncating the section content
