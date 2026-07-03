---
name: Terracotta & Olive
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#55433d'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#88726c'
  outline-variant: '#dbc1b9'
  surface-tint: '#984629'
  primary: '#954427'
  on-primary: '#ffffff'
  primary-container: '#b45c3d'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#536343'
  on-secondary: '#ffffff'
  secondary-container: '#d3e6bd'
  on-secondary-container: '#576847'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767470'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#793014'
  secondary-fixed: '#d6e9c0'
  secondary-fixed-dim: '#bacda5'
  on-secondary-fixed: '#121f06'
  on-secondary-fixed-variant: '#3c4b2d'
  tertiary-fixed: '#e6e2dd'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#484743'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system is rooted in the "New Mediterranean" aesthetic—a blend of rustic warmth and modern refinement. It targets couples seeking an artisanal, tactile experience for their wedding digital presence. The emotional response is one of grounded elegance, intimacy, and hospitality.

The visual style leans into **Minimalist-Tactile**. It prioritizes high-quality typography and expansive whitespace but grounds them with organic textures and a warm, low-contrast UI. Elements should feel like high-end stationery: thoughtful, weighted, and timeless. Avoid clinical precision in favor of hand-crafted subtle imperfections.

## Colors

The palette is derived from natural pigments and sun-drenched landscapes. 

- **Primary (Terracotta):** A burnt orange used for primary calls to action and focal highlights. It evokes clay and warmth.
- **Secondary (Olive):** A deep, desaturated green used for supportive elements, botanical icons, and secondary buttons. It provides a grounded, organic contrast.
- **Tertiary (Cream):** The foundation of the system. This off-white/cream should be used for all page backgrounds to avoid the harshness of pure white.
- **Neutral (Charcoal):** A soft black with warm undertones used for body text and deep borders, ensuring legibility without breaking the earthy mood.

Apply a subtle, low-opacity grain texture overlay (2-3% opacity) to all Tertiary surfaces to mimic the feel of heavyweight paper.

## Typography

The typography strategy pairs a high-contrast, editorial serif with a highly legible, utilitarian serif.

- **Headlines:** Use Playfair Display. It provides the "refined" aspect of the brand. Use "Display" sizing for hero sections with tight letter spacing.
- **Body:** Use Source Serif 4. Its slightly sturdier construction ensures long-form reading (story, schedule, RSVP details) remains comfortable and authoritative.
- **Labels:** Use Work Sans for small UI metadata, buttons, and navigation. Setting this in uppercase with increased tracking provides a modern, clean contrast to the romantic serifs.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. The rhythm is based on an 8px square grid, reinforcing a structured but spacious feel.

- **Desktop:** 12-column grid, 1120px max-width, 24px gutters. Use generous vertical margins (80px - 120px) between sections to allow content to breathe.
- **Mobile:** 4-column grid with 20px side margins. 
- **Alignment:** Elements should alternate between centered alignment for romantic moments (hero, quotes) and left-aligned for informational moments (RSVP forms, schedules).

## Elevation & Depth

To maintain the artisanal feel, avoid traditional drop shadows. Depth is achieved through:

- **Tonal Layers:** Use a slightly darker cream or a very pale "Dusty Rose" for nested containers (e.g., a card sitting on the main cream background).
- **Low-Contrast Outlines:** Use 1px solid borders in a faded Olive or Terracotta (at 20% opacity) to define shapes without creating "weight."
- **Layered Elements:** Overlap images and text boxes slightly to create a scrapbook or "collaged" effect.
- **Soft Insets:** For input fields, use a subtle inner stroke rather than an outer shadow to simulate a debossed letterpress effect.

## Shapes

The shape language is "Softly Geometric." While the system uses a base roundedness for standard UI components, it encourages the use of **Organic Masks** for imagery.

- **Standard Elements:** Use `rounded-md` (0.5rem) for cards and inputs.
- **Featured Elements:** Use `rounded-xl` (1.5rem) or asymmetrical "blob" masks for engagement photos to lean into the artisanal narrative.
- **Buttons:** Use the standard `rounded-md` for a sturdy, reliable feel, or full `pill` for a softer interaction.

## Components

- **Buttons:** Primary buttons are solid Terracotta with White text. Secondary buttons are Olive outlines with Olive text. All buttons use Work Sans labels in uppercase.
- **Cards:** Use a "Letterpress" style—a 1px border in a shade slightly darker than the background, with no shadow. 
- **Input Fields:** Backgrounds should be 100% white or a very pale cream to stand out from the page background. Use a 1px Olive border that thickens to 2px on focus.
- **Chips/Tags:** Use Olive or Terracotta backgrounds at 10% opacity with full-strength text color for a soft, dyed-fabric look.
- **RSVP Progress:** Use a thin, elegant line with small circular nodes rather than a bulky progress bar.
- **Lists:** Use custom botanical icons (e.g., a small olive leaf) as bullet points for schedule or menu lists.
- **Modals:** Use a heavy backdrop blur (12px) to keep the focus on the content while maintaining the warm color glow of the background.