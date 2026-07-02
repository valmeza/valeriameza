## ADDED Requirements

### Requirement: Full-name profile introduction
The system SHALL render the top-of-page profile introduction using the full name "Valeria Meza" and SHALL also acknowledge "Val" as a shorthand name in supporting copy.

#### Scenario: Full name and shorthand are visible
- **WHEN** the home page loads
- **THEN** the opening profile content shows "Valeria Meza" and references "Val" as the shorthand name

### Requirement: Engineering-journey framing
The system SHALL present the opening hero copy as a concise, professional introduction to Valeria Meza's engineering journey and SHALL describe her as a Software Engineer with a passion for solving mysteries and puzzles.

#### Scenario: Hero copy is shown
- **WHEN** the hero section renders
- **THEN** the lead text frames the portfolio as an engineering journey and identifies Valeria Meza as a Software Engineer who enjoys solving mysteries and puzzles

### Requirement: Portfolio-specific terminal commands
The system SHALL render the session.log command panel with portfolio-specific, nerdy command-style lines that reinforce the engineering theme and SHALL NOT use placeholder scaffolding commands.

#### Scenario: Command panel is visible
- **WHEN** the header section renders
- **THEN** the command list uses Valeria Meza portfolio-themed command lines instead of generic build-template placeholders

