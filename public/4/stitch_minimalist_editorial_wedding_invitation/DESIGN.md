---
name: Neo-Urban Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#f8f5f5'
  on-tertiary: '#313030'
  tertiary-container: '#dcd9d8'
  on-tertiary-container: '#5f5e5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies **High-Tech Minimalism**, tailored for a fast-paced, urban digital landscape. The brand personality is precise, efficient, and sophisticated, catering to a demographic that values speed and clarity above all else. 

The aesthetic is characterized by a "Digital Noir" feel—fusing a monochrome base with high-energy electric accents. We utilize a mix of **Minimalism** and **Glassmorphism** to create a UI that feels like an advanced head-up display (HUD). Expect heavy whitespace interrupted by razor-sharp geometric elements, ultra-thin lines, and translucent surfaces that suggest depth without sacrificing the speed of a flat interface. The emotional response should be one of total control and cutting-edge reliability.

## Colors

The palette is strictly functional and high-contrast. The default state is a deep, "obsidian" **Dark Mode**.

- **Primary (#00F0FF):** An "Electric Cyan" used exclusively for interactive triggers, progress indicators, and critical data points. It should feel like it's emitting light.
- **Secondary (#FFFFFF):** Pure white, reserved for primary text and high-priority icons to ensure maximum legibility against dark backgrounds.
- **Tertiary (#1A1A1A):** A "Carbon" grey used for container backgrounds and elevated surfaces.
- **Neutral (#0A0A0A):** The "Void" base color for the entire application, providing a foundation for high-contrast layouts.

Success, warning, and error states should bypass traditional greens/reds where possible, instead using varying stroke weights of the primary color or pure white, unless accessibility requirements dictate otherwise.

## Typography

The typography system relies on a dual-font strategy to reinforce the high-tech narrative. 

**Geist** is the primary typeface for all UI and content. Its grotesque, technical structure provides the "ultra-modern" look required for an urban lifestyle app. We use tight letter-spacing on large display sizes to create a compact, impactful visual rhythm.

**JetBrains Mono** is used for labels, metadata, and data-heavy tables. This monospaced choice introduces a "developer-tool" precision to the interface, suggesting accuracy and real-time processing. All small labels should be set in uppercase with increased tracking to maintain legibility and a systematic feel.

## Layout & Spacing

The layout philosophy follows a **Rigid Fluidity** model. We utilize a 12-column grid for desktop and a 4-column grid for mobile, but with a focus on asymmetrical compositions that feel dynamic.

- **Spacing Rhythm:** Based on a 4px baseline grid. Internal component padding should be tight (8px/12px) to feel "dense" and efficient, while layout sections should use large "breathing rooms" (80px+) to maintain a premium, minimalist feel.
- **Breakpoints:** Mobile (<600px), Tablet (600px - 1024px), Desktop (>1024px).
- **Alignment:** Elements should be strictly snapped to the grid. Use hard vertical lines (1px strokes) instead of traditional spacing to separate content columns where possible, reinforcing the "schematic" look.

## Elevation & Depth

In this system, depth is communicated through **Optical Transparency** rather than physical shadows.

- **Backdrop Blurs:** High-elevation elements (modals, navigation bars) use a 20px - 40px background blur with a 40% opacity fill of the Tertiary color (#1A1A1A).
- **Inner Glows:** Instead of drop shadows, use 1px inner borders (Secondary color at 10% opacity) to define the edges of containers. 
- **Active State Elevation:** Interactive elements should use the Primary color (#00F0FF) as an outer glow (0px 0px 12px) when focused or active, making them appear as if they are "powering up."
- **Z-Index Layering:** Content exists on a flat plane; only system-level overlays (menus, alerts) utilize the glassmorphism depth.

## Shapes

The shape language is **Strictly Geometric**. We use a `0` roundedness setting (0px border-radius) for all primary UI elements, including buttons, input fields, and cards. 

This sharp-edge approach conveys a sense of precision and architectural structure. The only exception to the "sharp" rule is the use of circular icons or specific "status pips" to differentiate them from functional containers. Every container should feel like a cut piece of glass or metal.

## Components

- **Buttons:** 0px radius. "Primary" buttons are solid #FFFFFF with #000000 text. "Action" buttons are ghost-style with a 1px #00F0FF border and #00F0FF text.
- **Input Fields:** 1px bottom-border only (Secondary 40% opacity). When focused, the border becomes Primary (#00F0FF) and extends 1px upward on the left/right sides.
- **Chips:** Monospaced text (JetBrains Mono) inside a 1px Secondary border. No background fill unless active.
- **Cards:** No shadows. Use 1px #1A1A1A borders. For featured content, use a subtle 10% Primary color tint as a background hover state.
- **Lists:** Separated by 1px horizontal rules. Use Chevron-Right icons for navigation, styled as ultra-thin (0.5px) lines.
- **Checkboxes/Radios:** Square 16px boxes. When checked, they fill with the Primary color and use a "cross" (X) instead of a checkmark to maintain the technical aesthetic.
- **Additional Component - The Data Strip:** A horizontal element for displaying real-time metrics using JetBrains Mono, featuring a 2px Primary color left-accent bar.