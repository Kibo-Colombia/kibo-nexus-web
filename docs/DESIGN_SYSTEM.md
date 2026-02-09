# Kibo Design System

## Core Philosophy

**Engineering Hope. Building Legacy.**
The design should reflect stability, growth, and clarity. Kibo designs are minimalist, functional, and visually striking without relying on gradients or glows.

## Aesthetics

- **Minimalist**: Avoid unnecessary decorations.
- **Solid Colors**: NO GRADIENTS.
- **Clean Edges**: NO BLURS OR GLOWS.
- **High Contrast**: Ensure readability.

## Color Hierarchy (STRICT)

**1. Green Palette (Primary/Default)**

- **Status**: **ONLY ALLOWED PALETTE**.
- Used for: **ALL** Main actions, buttons, borders, backgrounds, text, and interactions.
- Values:
  - `var(--color-primary)` / `#A9D9C7` (Mint - Saving)
  - `var(--color-kibo-dark)` / `#1E4332` (Dark Green Background)
  - `var(--color-forest)` / `#477365` (Forest Green)
  - `var(--color-white)` / `#F2F2F2` (Text / Foreground)

**2. Blue (Living)**

- **Status**: **MANUAL SELECTION ONLY**.
- Values:
  - `var(--color-living)` / `#65A1C9` (Living Blue)

**3. Red (Present)**

- **Status**: **MANUAL SELECTION ONLY**.
- Values:
  - `var(--color-present)` / `#C24656` (Red)

**4. Purple (Future)**

- **Status**: **MANUAL SELECTION ONLY**.
- Values:
  - `var(--color-future)` / `#614FBB` (Future Purple)

## Component Rules

- **Buttons**:
  - Primary: Transparent background with Green border and text (`.kibo-button-primary`). Hover fills with Green.
  - Text Links: White or Green.
- **Cards**:
  - `.kibo-card`: Dark Green background (`#1E4332`), Green border (`#A9D9C7`).
- **Inputs**:
  - Background: Secondary/Dark (`#1B4034`).
  - Border: Green (`#A9D9C7`).
  - Focus: Bright Green (`#A9D9C7`).

## Typography

- **Headings**: `Outfit` (Bold, typically Green or White).
- **Body**: `Geist Mono` or `Outfit` (Clean, readable, typically White/Foreground).

## Spacing & Layout

- Use generous padding (`p-6`, `p-8` for cards).
- Centers content with `max-w-6xl` containers.
