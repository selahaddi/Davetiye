---
name: Bohemian Rhapsody
colors:
  surface: '#1d0f14'
  surface-dim: '#1d0f14'
  surface-bright: '#46343a'
  surface-container-lowest: '#180a0f'
  surface-container-low: '#26171c'
  surface-container: '#2b1b20'
  surface-container-high: '#36252b'
  surface-container-highest: '#423035'
  on-surface: '#f7dce2'
  on-surface-variant: '#d4c2c8'
  inverse-surface: '#f7dce2'
  inverse-on-surface: '#3d2c31'
  outline: '#9c8d92'
  outline-variant: '#504348'
  surface-tint: '#f6b4d1'
  primary: '#f6b4d1'
  on-primary: '#4e2139'
  primary-container: '#5d2e46'
  on-primary-container: '#d596b3'
  inverse-primary: '#834e68'
  secondary: '#ffb4a9'
  on-secondary: '#5e1610'
  secondary-container: '#7c2c23'
  on-secondary-container: '#ff9a8c'
  tertiary: '#ffb865'
  on-tertiary: '#482a00'
  tertiary-container: '#5a3500'
  on-tertiary-container: '#de9b48'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd8e7'
  primary-fixed-dim: '#f6b4d1'
  on-primary-fixed: '#350c23'
  on-primary-fixed-variant: '#68374f'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#400101'
  on-secondary-fixed-variant: '#7c2c23'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#ffb865'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#1d0f14'
  on-background: '#f7dce2'
  surface-variant: '#423035'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
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
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

The design system is rooted in the "New Bohemian" aesthetic—a sophisticated blend of artistic expression, warmth, and soulful layering. It moves away from the cold sterility of modern tech toward a tactile, lived-in digital experience. 

The personality is expressive and eclectic. It targets an audience that values craftsmanship, storytelling, and a departure from the "default" look of the web. The UI should evoke the feeling of a well-curated studio or a lush, sun-drenched lounge. 

**Design Style: Tactile Minimalism with Editorial Flourish**
This style rejects flat containers in favor of layered depth, subtle textures (like grain and soft noise), and high-contrast typography. It uses "Modern Organic" elements—combining the structure of a clean grid with the warmth of an earthy palette and rich, serif-driven information hierarchy.

## Colors

The palette is a rich, nocturnal landscape inspired by heritage dyes and natural pigments.

- **Primary (Deep Plum):** Used for primary surfaces, deep backgrounds, and high-impact brand moments. It provides a soulful, grounded base.
- **Secondary (Burnt Sienna):** Used for secondary actions, accents, and emotional highlights. It brings heat and vitality to the design.
- **Tertiary (Golden Ochre):** The "light" in the room. Used for interactive states, progress indicators, and draws the eye to essential information.
- **Neutral (Deep Espresso/Black Cherry):** Reserved for core text on light backgrounds or deepest shadows in dark mode.
- **Surface (Parchment/Paper):** A warm off-white used for cards or inverted sections to provide a tactile, editorial feel.

The color mode is primarily **Dark**, utilizing the Deep Plum and Neutral tones to create a moody, immersive environment.

## Typography

This design system employs a "High-Contrast Pairing" strategy to balance bohemian character with digital utility.

- **The Display Face (Playfair Display):** Used for headlines and large quotes. It provides the "Rhapsody"—an elegant, high-contrast serif that feels literary and premium.
- **The Workhorse (Hanken Grotesk):** Used for body copy, UI labels, and data. It is a sharp, modern sans-serif that ensures high readability and prevents the design from feeling overly "retro."

**Key Rules:**
1. **Headline Treatment:** Always use tighter letter-spacing for headlines to create a dense, editorial feel.
2. **Micro-copy:** Use Hanken Grotesk in uppercase with slight tracking for labels to maintain a clean, architectural look within the lush environment.
3. **Hierarchy:** Headlines should be significantly larger than body text to create the "layered" visual narrative required.

## Layout & Spacing

The layout philosophy is **Fluid Editorial**. It uses a 12-column grid for desktop but encourages intentional "breaking" of the grid—such as images overlapping columns or asymmetrical text alignment—to evoke a free-spirited feel.

- **Rhythm:** An 8px base unit drives all spacing. 
- **Breathing Room:** Large vertical gaps (`stack-lg`) are encouraged between major sections to mimic the airy feel of a gallery.
- **Mobile Adaptations:** Margins shrink to 20px, and typography shifts to the mobile-specific variants to maintain readability while preserving the high-contrast drama.
- **Safe Areas:** Content should be centered within a 1280px container on large screens to prevent eye-strain across the deep, dark backgrounds.

## Elevation & Depth

This design system avoids sterile shadows. Depth is communicated through **Tonal Layering** and **Soft Diffusion**.

1. **Tonal Layers:** Objects closer to the user are lighter in tone. A base background of Neutral (`#25161B`) will host cards in Deep Plum (`#5D2E46`).
2. **Ambient Glows:** Instead of black shadows, use ultra-diffused shadows tinted with the Secondary color (Burnt Sienna) at very low opacity (10-15%). This creates a "warm glow" rather than a cold drop-shadow.
3. **Inner Borders:** Subtle 1px inner borders (top and left) in a lighter shade of the surface color create a "carved" or "embossed" look, adding to the tactile, physical quality of the UI.
4. **Grain:** Apply a subtle noise overlay (3-5% opacity) to primary surfaces to simulate the texture of paper or matte fabric.

## Shapes

The shape language is **Softly Structured**. It avoids the clinical look of sharp corners while steering clear of overly bubbly, "app-like" pill shapes.

- **Base Radius:** 0.5rem (8px) for standard components like input fields and buttons.
- **Large Components:** Cards and featured sections use 1rem (16px) to emphasize the "layered" paper feel.
- **Interactive Elements:** Buttons may use a slightly more generous radius than inputs to feel more inviting to the touch.
- **Container Blending:** Images should feature the same corner radius as the cards they inhabit to maintain a cohesive, "framed" appearance.

## Components

**Buttons**
Buttons are high-contrast statements. Primary buttons use the Golden Ochre background with deep Neutral text. Secondary buttons are "Ghost" style with a Burnt Sienna border and serif typography for a sophisticated touch.

**Cards**
Cards are the heart of the "layered" look. They should have a subtle inner glow and a soft grain texture. Use the `headline-md` for card titles to maintain the editorial vibe.

**Input Fields**
Fields should be understated. Use a bottom-border-only style or a very dark, low-contrast fill. When focused, the border transitions to Burnt Sienna with a soft outer glow.

**Chips & Tags**
Small, capsules with uppercase `label-sm` text. They should use a semi-transparent version of the Secondary color to feel like stained glass over the background.

**Lists**
Lists should be separated by thin, low-opacity lines in the Burnt Sienna tone. Icons used in lists should be "Hand-drawn" style or thin-stroke weight to match the artistic brand personality.

**Special Component: The "Artistic Break"**
A specific component for long-form content that uses a large, italicized Playfair Display quote or pull-text, centered with ample whitespace and a decorative Golden Ochre horizontal rule.