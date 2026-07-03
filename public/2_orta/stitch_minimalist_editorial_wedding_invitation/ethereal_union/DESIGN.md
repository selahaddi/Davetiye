---
name: Ethereal Union
colors:
  surface: '#fdf8f7'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f1'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1c1b1b'
  on-surface-variant: '#474741'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#777770'
  outline-variant: '#c8c7bf'
  surface-tint: '#5f5e5b'
  primary: '#181916'
  on-primary: '#ffffff'
  primary-container: '#2d2d2a'
  on-primary-container: '#969490'
  inverse-primary: '#c8c6c2'
  secondary: '#6c5e06'
  on-secondary: '#ffffff'
  secondary-container: '#f7e382'
  on-secondary-container: '#73640e'
  tertiary: '#181815'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c2d29'
  on-tertiary-container: '#95948f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2dd'
  primary-fixed-dim: '#c8c6c2'
  on-primary-fixed: '#1c1c19'
  on-primary-fixed-variant: '#474743'
  secondary-fixed: '#f7e382'
  secondary-fixed-dim: '#dac769'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#524700'
  tertiary-fixed: '#e4e2dc'
  tertiary-fixed-dim: '#c8c7c1'
  on-tertiary-fixed: '#1b1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#fdf8f7'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-lg: 120px
  stack-md: 64px
  stack-sm: 32px
---

## Brand & Style

This design system is built upon a foundation of **Editorial Minimalism**. It treats digital space with the same reverence as premium heavy-stock paper, focusing on the luxury of "nothingness"—generous whitespace that allows every detail to breathe. The target audience seeks a high-end, bespoke experience that feels personal yet authoritative.

The emotional response should be one of quiet sophistication, timelessness, and intimate elegance. By stripping away decorative clutter, we elevate the essential information (the couple, the date, the location) to the status of art. The interface avoids standard web tropes in favor of a layout that feels curated, like a page from a high-fashion boutique journal.

## Colors

The palette is rooted in a warm, organic off-white that prevents the digital screen from feeling sterile. 

- **Primary (#2D2D2A):** A deep charcoal used for all primary information and headers. It provides a sharp, high-contrast anchor against the background.
- **Secondary (#C5B358):** A muted, matte champagne gold used sparingly for accents, interactive states, and decorative rules.
- **Tertiary (#70706B):** A soft warm slate for secondary details, labels, and helper text, creating a gentle hierarchy.
- **Background (#FAFAF8):** The canvas of the design, providing a tactile, paper-like warmth.

## Typography

Typography is the primary visual driver of this design system. We utilize a high-contrast pairing of a classic serif and a functional sans-serif.

- **Headlines:** Playfair Display is used for names and major section headers. It should be set with slight negative letter-spacing in large formats to increase the editorial feel.
- **Body:** Inter is used for logistics and descriptions. We prefer a lighter weight (300) for large body text to maintain the "airy" aesthetic.
- **Labels:** Small caps with generous letter spacing are used for navigational elements and metadata (e.g., "THE CEREMONY", "RSVP BY").

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the editorial integrity of the "page," and transitions to a single-column fluid flow on mobile.

- **Vertical Rhythm:** We use large "stack" increments to separate story chapters (e.g., The Couple, The Venue, The Registry).
- **Margins:** Desktop margins are intentionally wide (80px+) to create a frame around the content.
- **Alignment:** Central alignment is preferred for primary displays (invitations, quotes), while left-alignment is used for dense logistical information (itineraries).

## Elevation & Depth

This design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and subtle outlines.

- **Surfaces:** Floating cards are discouraged. Content should feel as though it is printed directly onto the background.
- **Dividers:** Use very thin (0.5pt to 1pt) lines in the secondary champagne color or a faint 10% opacity version of the primary charcoal.
- **Focus:** Selection and depth are indicated by subtle background shifts—moving from `#FAFAF8` to a slightly cooler white or adding a very soft, high-diffusion "glow" rather than a traditional drop shadow.

## Shapes

The shape language is "Soft" (0.25rem). This choice balances the sharp, traditional lines of the serif typography with a modern, approachable touch.

- **Standard Elements:** Input fields and buttons use the base `rounded` (4px).
- **Images:** Photography should use `rounded-lg` (8px) to soften the edges of the frame.
- **Interactive Elements:** Use the soft radius consistently—avoid fully pill-shaped or sharp-edged buttons to maintain the bespoke editorial character.

## Components

### Buttons
- **Primary:** Solid Charcoal (#2D2D2A) with Off-White text. Rectangular with soft 4px corners. No shadows.
- **Secondary:** Transparent background with a 1px Gold (#C5B358) border. Label-caps typography style.

### Input Fields
- **Design:** Minimalist underline style or a very light gray border on three sides.
- **Focus State:** The underline or border transitions to Gold (#C5B358).

### Cards
- **Usage:** Used for specific event details (e.g., Rehearsal Dinner vs. Ceremony).
- **Styling:** No background color (transparent); defined by a 1px thin border or a very subtle shift in background tone.

### Itinerary Lists
- Vertical lines connecting "dots" or timestamps. The lines should be the muted champagne accent.

### Image Masonry
- Use staggered layouts for "Our Story" photo galleries to mimic a scrapbook or high-end magazine spread. Use generous gaps between images.