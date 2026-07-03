---
name: Coastal Serenity
colors:
  surface: '#e2ffff'
  surface-dim: '#c2e0e0'
  surface-bright: '#e2ffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#dbfaf9'
  surface-container: '#d5f4f4'
  surface-container-high: '#d0eeee'
  surface-container-highest: '#cae8e8'
  on-surface: '#022020'
  on-surface-variant: '#414845'
  inverse-surface: '#193535'
  inverse-on-surface: '#d8f7f6'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#3e6659'
  primary: '#3e6659'
  on-primary: '#ffffff'
  primary-container: '#8fb9aa'
  on-primary-container: '#224a3f'
  inverse-primary: '#a5d0c0'
  secondary: '#645e4b'
  on-secondary: '#ffffff'
  secondary-container: '#ece2c9'
  on-secondary-container: '#6b6450'
  tertiary: '#8c4e35'
  on-tertiary: '#ffffff'
  tertiary-container: '#ec9d80'
  on-tertiary-container: '#6b341d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0ecdc'
  primary-fixed-dim: '#a5d0c0'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#264e42'
  secondary-fixed: '#ece2c9'
  secondary-fixed-dim: '#cfc6ae'
  on-secondary-fixed: '#201b0c'
  on-secondary-fixed-variant: '#4c4634'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#6f3720'
  background: '#e2ffff'
  on-background: '#022020'
  surface-variant: '#cae8e8'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
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
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style
This design system captures the restorative essence of the shoreline. It targets users seeking a calm, meditative digital environment, moving away from high-density, high-stress interfaces. 

The aesthetic is a blend of **Minimalism** and **Soft Organicism**. It prioritizes breathability and sensory lightness, using subtle gradients and natural textures to evoke the feeling of sunlight hitting moving water. The emotional response should be one of immediate decompression, clarity, and gentle invitation. All interactions should feel fluid and unhurried, reflecting the rhythmic nature of tides.

## Colors
The palette is derived directly from the coastal landscape:
- **Primary (Seafoam):** A muted, refreshing green-blue used for main actions and brand presence.
- **Secondary (Sand):** A warm, grounding beige used for large surface areas and containers to avoid the sterile feel of pure white.
- **Tertiary (Coral):** A soft, sun-baked clay tone used sparingly for accents, highlights, and secondary interactions.
- **Neutral (Deep Mist):** A desaturated, cool grey-blue used for secondary text and subtle borders.

The background should default to a very pale tint of the Secondary Sand (#FAF9F6) to maintain a warm, organic feel.

## Typography
The typography strategy emphasizes "airiness." By utilizing **Plus Jakarta Sans** for headlines, we introduce soft, rounded terminals that feel approachable. **Work Sans** provides a grounded, legible foundation for body text.

Key typographic principles:
- **Generous Tracking:** Increased letter-spacing on labels and headers to prevent visual crowding.
- **Line Height:** Expanded leading (1.6x for body) to ensure a comfortable, unhurried reading pace.
- **Weight:** Prefer Light (300) and Regular (400) weights to maintain a "weightless" aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model with significantly wider margins than standard applications to simulate the vastness of the horizon.

- **Desktop:** 12-column grid with 64px outer margins. Use "contained" layouts that don't stretch to the screen edges to maintain focus.
- **Mobile:** 4-column grid with 24px margins.
- **Rhythm:** Use an 8px base unit, but prioritize large "white space" blocks (80px+) between major sections to allow the eye to rest. Elements should never feel packed; if in doubt, add more padding.

## Elevation & Depth
In this design system, depth is conveyed through **Tonal Layers** and **Soft Ambient Shadows** rather than sharp offsets.

- **Surface Stacking:** Use slight variations in the Sand palette to indicate hierarchy. A card might be a shade lighter than the background it sits on.
- **Shadows:** Shadows should be extremely diffused (Blur: 32px-64px), low opacity (5-8%), and tinted with the primary seafoam or neutral mist color rather than pure black. This creates a "floating on water" effect.
- **Glassmorphism:** Use high-diffusion backdrop blurs (20px+) on navigation bars to mimic the translucency of sea glass.

## Shapes
Shapes are inspired by water-worn pebbles and driftwood. 
- Avoid sharp 90-degree angles entirely. 
- Use the **Rounded** setting (0.5rem base) for standard components like input fields.
- For primary buttons and decorative imagery, use disproportionate corner radii (e.g., top-left: 40px, bottom-right: 40px) to create "organic" or "pebble" shapes that feel less industrial.

## Components
- **Buttons:** Primary buttons use the Seafoam Green with white text. Use a "pill" or "soft pebble" shape. On hover, the button should subtly expand rather than just change color.
- **Chips:** Small, Sand-colored capsules with Neutral Mist text. Use for tags or filters, mimicking small stones.
- **Input Fields:** Soft beige backgrounds with a bottom-only border in Seafoam for a cleaner, less "boxed-in" feel.
- **Cards:** No heavy borders. Use the soft ambient shadow and a 1rem corner radius. Content inside should have at least 32px of internal padding.
- **Navigation:** A floating "Island" dock at the bottom of the screen or a glassmorphic top bar with high transparency.
- **Progress Indicators:** Use fluid, wave-like animations rather than mechanical spinning wheels or linear bars.