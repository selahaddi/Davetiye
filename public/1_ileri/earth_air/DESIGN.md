---
name: Earth & Air
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c17'
  on-surface-variant: '#484739'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#797868'
  outline-variant: '#cac7b4'
  surface-tint: '#636115'
  primary: '#636115'
  on-primary: '#ffffff'
  primary-container: '#e8e58b'
  on-primary-container: '#68661a'
  inverse-primary: '#cdca73'
  secondary: '#006c50'
  on-secondary: '#ffffff'
  secondary-container: '#90f3cc'
  on-secondary-container: '#007054'
  tertiary: '#5d5e5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1e1e1'
  on-tertiary-container: '#636464'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eae78c'
  primary-fixed-dim: '#cdca73'
  on-primary-fixed: '#1d1d00'
  on-primary-fixed-variant: '#4a4900'
  secondary-fixed: '#93f5cf'
  secondary-fixed-dim: '#77d9b3'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513c'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2db'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

# Earth & Air Design System

## Brand & Style
The "Earth & Air" brand identity is built upon a foundation of grounded stability and ethereal clarity. By shifting toward a palette of sun-drenched yellows, minty teals, and soft silver tones, the brand evokes a sense of organic sophistication and luminous freshness. 

The design style is **Corporate / Modern** with a touch of **Minimalism**. It prioritizes legibility, professional balance, and a harmonious relationship between content and white space. The mood is focused, mature, and environmentally conscious, utilizing airier and more energetic tones than previous iterations.

## Colors
The color palette moves away from muted olive tones toward a lighter, more vibrant natural spectrum.

*   **Primary (#e8e58b):** A pale, sun-bleached yellow that serves as the anchor for action items, signifying clarity and energy.
*   **Secondary (#83e5bf):** A fresh, minty teal used for supporting elements, providing a cool, organic balance to the warm primary.
*   **Tertiary (#c3c3c3):** A neutral silver-grey that provides a clean contrast, perfect for highlighting subtle callouts or accents.
*   **Neutral (#797771):** A warm, stone-like grey used for text and structural borders to maintain a soft but legible interface.

The light mode foundation ensures a clean, paper-like background that feels approachable and professional.

## Typography
The system utilizes **Inter** for all typographic roles. Inter provides a neutral, highly legible geometric sans-serif aesthetic that excels in digital interfaces.

Headlines use a semi-bold weight to establish clear hierarchy without appearing overly heavy. Body text is optimized for readability with generous line heights, while labels use a medium weight to remain distinct at smaller scales. The use of a single typeface family creates a cohesive, modern feel that focuses on functional clarity.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a base-8 spacing rhythm. This ensures that all components and margins scale proportionally. 

On desktop, a 12-column grid is used with 16px gutters and 24px margins. On mobile devices, the layout reflows to a 4-column structure with 16px margins to maximize screen real estate. The spacing is designed to be intentional, using white space to group related items and separate distinct sections without the need for heavy visual dividers.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows. In keeping with the grounded brand personality, surfaces use subtle shifts in background color and low-contrast outlines to indicate hierarchy. 

Where shadows are necessary for high-level modals or floating action buttons, they are extra-diffused and use a soft neutral tint (#797771) at low opacity. This creates a soft, ambient lift that feels integrated into the interface rather than hovering detachedly above it.

## Shapes
The UI has moved from a sharp, clinical aesthetic to a more organic, **Rounded** shape language. 

Elements now feature a standard radius of 0.5rem (8px), with larger containers using up to 1.5rem for a softer, more inviting appearance. This change complements the organic color palette and the Inter typeface, reinforcing the brand's shift toward an approachable and modern user experience.

## Components
*   **Buttons:** Feature 8px rounded corners. Primary buttons use the Sun Yellow (#e8e58b) fill with dark text for readability; secondary buttons use a ghost style with a Mint (#83e5bf) outline.
*   **Cards:** Utilize a subtle neutral-tinted background with a 16px corner radius and a 1px soft border.
*   **Inputs:** Maintain a clean, rectangular feel but with the standard 8px rounding. Focus states are highlighted with the Tertiary grey (#c3c3c3) glow or a 2px Primary yellow border.
*   **Chips:** Highly rounded (pill-shaped) to distinguish them from actionable buttons, using desaturated versions of the secondary teal for categorization.