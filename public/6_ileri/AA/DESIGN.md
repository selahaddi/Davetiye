---
name: Midnight & Gild
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#c3cee6'
  on-tertiary: '#263143'
  tertiary-container: '#a8b3ca'
  on-tertiary-container: '#3a4559'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
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
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is a high-contrast, dramatic, and luxurious framework tailored for the premium wedding industry. It targets an affluent, style-conscious audience seeking exclusivity and timeless elegance. The emotional response is one of awe, intimacy, and sophisticated celebration.

The style is **High-Contrast / Modern Luxury**. It leverages deep, nocturnal backgrounds to make metallic accents and crisp typography emerge with cinematic intensity. It avoids traditional "bridal" whites in favor of a moody, "after-dark" aesthetic that feels more like a high-end gala than a conventional ceremony.

## Colors

The palette is anchored by **Midnight Navy** (Secondary) and **Deep Slate** (Tertiary), which provide the vast, dark canvas required for a dramatic atmosphere. 

- **Primary (Metallic Gold):** Used sparingly for high-impact accents, call-to-action elements, and decorative flourishes. It should simulate the warmth of gold leaf.
- **Secondary (Midnight):** The primary background color for all major surfaces.
- **Tertiary (Shadow Slate):** Used for nested containers, card backgrounds, and subtle depth variations.
- **Neutral (Moonlight White):** A high-contrast off-white used exclusively for body text and essential icons to ensure legibility against the dark void.

## Typography

Typography in this design system relies on the interplay between the dramatic, high-contrast strokes of **Bodoni Moda** and the understated, geometric clarity of **DM Sans**.

Headlines should be treated as editorial elements. Use `display-lg` for hero sections with tight letter spacing. For body content, `DM Sans` provides a clean, modern counterpoint that ensures the UI doesn't feel overly "antique." Labels and small metadata should always use uppercase with generous letter spacing to evoke the feeling of luxury brand engraving.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model with expansive margins to create a sense of "gallery space." High-end design requires breathing room; therefore, whitespace (or "darkspace" in this context) is used aggressively to separate content blocks.

- **Desktop:** 12-column grid with 64px outer margins.
- **Tablet:** 8-column grid with 40px outer margins.
- **Mobile:** 4-column grid with 20px outer margins.

Vertical rhythm should be loose. Use larger padding values (80px+) between major sections to maintain the dramatic, slow-paced user experience.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Outlines** rather than heavy shadows. In a dark UI, traditional shadows are often invisible. 

- **Level 1 (Base):** Midnight Navy (#0F172A).
- **Level 2 (Containers):** Shadow Slate (#1E293B) with a 1px solid border in a low-opacity Gold or Slate.
- **Level 3 (Popovers/Modals):** Deepest Black with a 1px Gold border (#D4AF37) to "lift" the element off the page using light rather than shadow.

Use subtle radial gradients (dark blue to black) in backgrounds to create a sense of vignetting, drawing the eye toward the center of the content.

## Shapes

The shape language uses **Rounded** (0.5rem base) geometry to soften the high-contrast "sharpness" of the typography and colors. This ensures the aesthetic feels welcoming and romantic rather than cold or aggressive. 

Large containers like cards should use `rounded-xl` (1.5rem) to create a soft, premium feel, while buttons and input fields use the standard `rounded` (0.5rem) for a more structured, architectural look.

## Components

### Buttons
Primary buttons are solid Gold (#D4AF37) with Navy text, using `label-md` typography. Secondary buttons are "Ghost" style: transparent background with a 1.5px Gold border and Gold text.

### Cards
Cards use the Tertiary background (#1E293B) with a subtle 1px border. On hover, the border opacity increases, or a thin Gold top-border appears to signal interactivity.

### Inputs
Text fields are dark-filled with a Moonlight White bottom-border only, mimicking high-end stationery. The label floats above in small-caps Gold.

### Chips & Tags
Used for wedding categories or tags. These are pill-shaped with a very thin Slate border and Moonlight White text.

### Interactive Elements
Checkboxes and Radios should be custom-styled to use Gold accents when selected. Use a delicate gold "check" or "dot" rather than a standard system-style icon.

### Imagery
Photos should utilize a slightly de-saturated or warm-toned filter to harmonize with the Navy and Gold theme. Use large, full-bleed imagery where possible to emphasize the dramatic brand personality.