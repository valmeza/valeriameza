## ADDED Requirements

### Requirement: Profile introduction copy
The system SHALL render the `01 / PROFILE` section with concise copy that identifies the author as a software engineer and includes a brief statement about being motivated by solving problems.

#### Scenario: Intro text is shown
- **WHEN** the home page loads
- **THEN** the profile section displays software engineer copy and a short motivation statement

### Requirement: Developer day counter
The system SHALL display a live count of full days elapsed since `2020-02-01` in the `01 / PROFILE` section.

#### Scenario: Counter is computed at runtime
- **WHEN** a user opens the portfolio on any date after `2020-02-01`
- **THEN** the profile section shows the number of whole days elapsed since `2020-02-01`

### Requirement: Primary focus status copy
The system SHALL show a status summary that describes the author as a fullstack developer with emphasis on backend, database, and cloud work.

#### Scenario: Status summary is visible
- **WHEN** the profile section renders
- **THEN** the status card states the current focus on fullstack work and the backend, database, and cloud emphasis
