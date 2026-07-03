---
name: Petal & Stone
colors:
  surface: '#fbf8ff'
  surface-dim: '#d5d8f9'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#ececff'
  surface-container-high: '#e5e6ff'
  surface-container-highest: '#dee0ff'
  on-surface: '#161a32'
  on-surface-variant: '#504446'
  inverse-surface: '#2b2f48'
  inverse-on-surface: '#f0efff'
  outline: '#827376'
  outline-variant: '#d4c2c4'
  surface-tint: '#7e525c'
  primary: '#7b5059'
  on-primary: '#ffffff'
  primary-container: '#966871'
  on-primary-container: '#fffbff'
  inverse-primary: '#f0b8c3'
  secondary: '#615c69'
  on-secondary: '#ffffff'
  secondary-container: '#e4ddec'
  on-secondary-container: '#65606d'
  tertiary: '#5d5d4e'
  on-tertiary: '#ffffff'
  tertiary-container: '#767566'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#f0b8c3'
  on-primary-fixed: '#31111a'
  on-primary-fixed-variant: '#633b44'
  secondary-fixed: '#e7e0ef'
  secondary-fixed-dim: '#cbc4d3'
  on-secondary-fixed: '#1d1a24'
  on-secondary-fixed-variant: '#494551'
  tertiary-fixed: '#e6e3d0'
  tertiary-fixed-dim: '#c9c7b5'
  on-tertiary-fixed: '#1c1c11'
  on-tertiary-fixed-variant: '#48473a'
  background: '#fbf8ff'
  on-background: '#161a32'
  surface-variant: '#dee0ff'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies a "Petal & Stone" narrative—a juxtaposition of organic softness and architectural permanence. The aesthetic is rooted in **Minimalism** with a touch of **Tactile** refinement. It is designed for high-end wedding experiences, targeting couples who value understated luxury, timelessness, and meticulous detail.

The UI should evoke a sense of calm, romance, and exclusivity. Visuals are characterized by generous whitespace, subtle transitions, and a focus on high-quality editorial photography. The interface acts as a silent frame for life's most significant moments, prioritizing legibility and emotional resonance over loud decorative elements.

## Colors

The palette is a sophisticated, low-saturation blend of organic and mineral tones:

*   **Primary (Petal):** A muted, dusty rose (#B5838D) used for primary actions, accents, and emotional highlights.
*   **Secondary (Stone):** A refined slate grey (#6D6875) used for secondary buttons, icon outlines, and supporting UI elements.
*   **Tertiary (Cream):** A warm, muted cream (#F4F1DE) used as the foundation for containers, cards, and section backgrounds to avoid the sterile feel of pure white.
*   **Neutral (Deep Slate):** A dark, desaturated navy-grey (#4A4E69) reserved for high-contrast typography and structural lines.

Backgrounds should primarily use the Tertiary Cream, creating a warm, paper-like feel. Surface overlays use pure white with high transparency to maintain the "Petal" softness.

## Typography

The typography strategy relies on the contrast between the high-contrast elegance of **Playfair Display** and the understated, geometric clarity of **DM Sans**.

- **Headlines:** Use Playfair Display for all emotive and structural headings. Increase letter spacing slightly for a more "airy" and luxurious feel.
- **Body & UI:** DM Sans provides a clean, neutral balance that ensures legibility for details like guest lists and itineraries.
- **Labels:** Labels and small utility text should always be set in DM Sans with increased letter spacing and uppercase styling to evoke a stationery-inspired aesthetic.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy to maintain an editorial, magazine-like structure. 

- **Desktop:** 12-column grid with a max-width of 1280px. Margins are generous (64px) to create an intentional sense of "negative space."
- **Mobile:** 4-column fluid grid with 20px margins.
- **Spacing Rhythm:** Based on an 8px scale. Use `lg` (48px) and `xl` (80px) spacing between major sections to emphasize the "Stone" (architectural) quality of the layout. Smaller `sm` (12px) and `md` (24px) units are reserved for "Petal" (delicate) internal component spacing.

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Ambient Shadows** rather than stark physical displacement. 

- **Shadows:** Use extremely soft, long-range shadows with low opacity (e.g., 4% alpha). Shadows should be tinted with the Primary color (#B5838D) to create a warm glow rather than a grey drop.
- **Planes:** Primary surfaces use the Tertiary Cream. Secondary surfaces (like modals or dropdowns) use pure White with a subtle 1px border in a lightened version of the Secondary Stone color.
- **Glassmorphism:** Use subtle background blurs (8px to 12px) on sticky navigation bars to allow the colors of wedding photography to bleed through softly as the user scrolls.

## Shapes

The shape language is **Soft**. To maintain a balance between the organic "Petal" and the structural "Stone," avoid overly round or pill-shaped buttons. 

- **Elements:** Standard components use a 4px (0.25rem) radius for a "sharp yet approachable" look.
- **Cards/Images:** Larger containers and imagery use an 8px (0.5rem) radius.
- **Dividers:** Use hairline-thin (0.5px or 1px) strokes in the Secondary color at 20% opacity to separate content without creating visual noise.

## Components

- **Buttons:** Primary buttons are filled with the Primary Dusty Rose. Text is White, set in uppercase DM Sans. Secondary buttons use a transparent background with a 1px Stone border.
- **Input Fields:** Use a "stationery" style: only a bottom border (1px Stone) with the label floating above in small caps. Avoid heavy boxed inputs.
- **Cards:** Cards should have no border, utilizing a very subtle Ambient Shadow and the Tertiary Cream background to distinguish them from the main page surface.
- **Chips/Tags:** Used for guest categories or dietary requirements. These should be semi-transparent versions of the Primary color with no border and 4px rounded corners.
- **Imagery:** All images should feature a subtle "Stone" overlay or desaturation to ensure they sit harmoniously within the color palette.
- **Date Pickers:** Feature Playfair Display for the month/year selection to maintain the elegant, celebratory tone.