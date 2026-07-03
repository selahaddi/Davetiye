---
name: Midnight & Gild
colors:
  surface: '#f4fafd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9ec'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1f'
  on-surface-variant: '#44474d'
  inverse-surface: '#2b3234'
  inverse-on-surface: '#ebf2f4'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c18'
  on-tertiary-container: '#85847e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#f4fafd'
  on-background: '#161d1f'
  surface-variant: '#dde4e6'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style
This design system is built for a high-end, digital-first wedding experience. It blends the gravitas of traditional luxury with the sharpness of modern editorial design. The brand personality is sophisticated, confident, and meticulously curated, evoking the feeling of a premium physical invitation translated into a seamless digital interface.

The aesthetic utilizes **Minimalism** through generous whitespace and **High-Contrast** elements to create a sense of hierarchy and drama. It avoids the "crafty" tropes of wedding design in favor of clean lines, architectural structure, and a premium digital feel that prioritizes readability and effortless navigation for guests.

## Colors
The palette is anchored by **Midnight Navy**, providing a deep, stable foundation that replaces standard blacks for a more sophisticated, "ink-on-paper" feel. **Refined Gold** is used sparingly as an accent for calls to action, highlights, and decorative dividers, suggesting metallic foil. 

The background uses a **Champagne Cream** instead of pure white to soften the digital glare while maintaining a fresh, contemporary look. Text on light surfaces should primarily use the Midnight Navy or a deep Charcoal to ensure high legibility and contrast.

## Typography
The typography strategy relies on a dramatic contrast between serif and sans-serif styles. 

**Bodoni Moda** serves as the display typeface. Its high stroke contrast and vertical stress evoke the world of high-fashion editorial and traditional copperplate engraving. Use this for names, section headers, and key decorative quotes.

**Outfit** provides the functional balance. As a geometric sans-serif, it brings a crisp, technological clarity to the details: dates, locations, and instructional text. Use the uppercase "Label Caps" style for small metadata and navigation items to reinforce the modern, structured layout.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to mimic the proportions of a physical invitation card, centered within the viewport. On mobile, it transitions to a fluid vertical stack with generous side margins.

Spacing is intentionally expansive. Elements are given significant room to "breathe," using an 8px base unit. Section transitions should feel rhythmic and unhurried. Use asymmetrical layouts (e.g., text aligned to the left with large whitespace to the right) to create a modern, editorial vibe rather than a standard centered wedding template.

## Elevation & Depth
To maintain a premium feel, the design system avoids heavy shadows and traditional skeuomorphism. Instead, it uses **Ambient Shadows** and **Tonal Layering**:

1.  **The Base Layer:** The Champagne Cream background acts as the primary canvas.
2.  **The Card Layer:** White or Navy "cards" sit on the base with an extremely soft, diffused shadow (15% opacity, 30px blur) to suggest high-quality paper stock.
3.  **Gold Accents:** Gold elements are flat but can utilize subtle linear gradients to simulate a "satin" finish rather than a glittery texture.
4.  **Glassmorphism:** Use very subtle backdrop blurs (8px) on fixed navigation bars to maintain a contemporary digital edge without distracting from the content.

## Shapes
The shape language is primarily **Soft (0.25rem)**. This slight rounding takes the edge off the high-contrast color palette, making the interface feel approachable yet architectural. 

Images (engagement photos, venue shots) should either be perfectly rectangular for a rigid editorial look or use a "soft corner" (rounded-lg) to contrast against the sharp typography. Interactive elements like buttons should never be fully pill-shaped; stick to the small radius to maintain the "card-stock" metaphor.

## Components

### Buttons
Primary buttons use the Midnight Navy background with Gold text or vice-versa. They are rectangular with a 4px corner radius. The text should be in the `label-caps` style for a formal appearance.

### Cards
Cards are the primary container for information (RSVP details, Schedule). They should feature a thin 1px border in a slightly darker shade of the background color or a soft ambient shadow.

### Input Fields
Inputs for the RSVP form should be "minimalist underline" style or a very light-tinted box. Use `Outfit` for the input text to ensure clarity. Focus states should be indicated by a transition of the bottom border to Gold.

### Chips/Tags
Use these for dietary requirements or guest categories. They should be low-contrast (Cream on Navy or light Slate on Cream) to ensure they don't compete with the primary calls to action.

### Dividers
Avoid standard grey lines. Use thin Gold lines or a single, centered decorative dot to separate sections, reinforcing the "Midnight & Gild" theme.