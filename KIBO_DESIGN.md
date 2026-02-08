# Kibo Design System

## Core Philosophy

**Engineering Hope. Building Legacy.**
The design should reflect stability, growth, and clarity.

## Aesthetics

- **Minimalist**: Avoid unnecessary decorations.
- **Solid Colors**: No gradients.
- **Clean Edges**: No blurs or glows.
- **High Contrast**: Ensure readability.

## Color Hierarchy (STRICT)

**1. Green Palette (Primary/Default)**

- Used for: Main actions, buttons, borders, backgrounds, standard interactions.
- Values:
  - `var(--color-primary)` / `#A9D9C7` (Mint - Saving)
  - `var(--color-kibo-dark)` / `#1E4332` (Dark Green Background)
  - `var(--color-forest)` / `#477365` (Forest Green)

**2. Blue (Secondary/Accents)**

- Used for: Titles, headings, active states, important highlights.
- Values:
  - `var(--color-accent)` / `#65A1C9` (Living Blue)

**3. Red (Feedback/Alerts)**

- Used for: Destructive actions, errors, notifications, "Present" state distinctions.
- Values:
  - `var(--color-present)` / `#C24656` (Red)

**4. Purple (Rare/Last Resort)**

- Used for: **ONLY** when absolutely necessary for a 4th distinct category. Avoid if possible.
- Values:
  - `var(--color-secondary)` / `#614FBB` (Future Purple)

## Component Rules

- **Buttons**:
  - Primary: Transparent background with Green border and text (`.kibo-button-primary`). Hover fills with Green.
  - Text Links: White or Green.
- **Cards**:
  - `.kibo-card`: Dark Green background (`#1E4332`), Green border (`#A9D9C7`).
- **Inputs**:
  - Background: Secondary/Dark (`#1B4034` or similar).
  - Border: Green (`#A9D9C7`).
  - Focus: Blue (`#65A1C9`) or bright Green.

## Typography

- **Headings**: `Outfit` (Bold, typically Blue or White).
- **Body**: `Geist Mono` or `Outfit` (Clean, readable, typically White/Foreground).

## Spacing & Layout

- Use generous padding (`p-6`, `p-8` for cards).
- Centers content with `max-w-6xl` containers.
