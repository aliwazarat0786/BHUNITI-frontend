---
name: Institutional Intelligence
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-white: '#ffffff'
  border-subtle: '#e2e8f0'
  status-success: '#10b981'
  status-warning: '#f59e0b'
  status-error: '#ef4444'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  tabular-nums:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for high-stakes governance and administrative precision. It embodies the concept of "Institutional Intelligence"—a marriage between the stoic authority of government and the technical sophistication of modern GIS systems. The personality is trustworthy, calculated, and transparent.

The aesthetic follows a **Modern Corporate** style with a focus on **Enterprise Minimalism**. It prioritizes high information density, structural clarity, and visual sobriety. By utilizing generous whitespace and thin, precise borders, the UI communicates a sense of order and legal permanence. This system avoids trendy aesthetics in favor of a timeless, professional interface that reduces cognitive load for long-duration analytical tasks.

## Colors
The palette is rooted in a professional "Slate and Navy" foundation to ensure institutional weight. 

- **Primary (#0f172a):** A deep charcoal-navy used for typography, primary navigation backgrounds, and high-emphasis headers.
- **Secondary (#3b82f6):** A technical "GIS Blue" used for interactive elements, map data visualization, and primary calls to action.
- **Neutral/Background:** The system uses a layered white-on-gray approach. Pure white (#ffffff) is reserved for interactive "cards" and input surfaces, while the very light gray (#f8f9fa) serves as the base architectural layer to distinguish different functional sections.
- **Semantic Status:** Success, Warning, and Error colors are used sparingly for data validation and system alerts, utilizing high-legibility shades that pass WCAG AA accessibility standards against white backgrounds.

## Typography
Inter is used across the entire system for its exceptional clarity and institutional feel. 

Typography is organized into a strict hierarchy to manage complex data. All numerical data—especially property dimensions, coordinates, and financial figures—must use the `tabular-nums` setting to ensure vertical alignment in tables. Labels use an uppercase, slightly tracked-out style to act as clear metadata identifiers. For mobile devices, large headlines scale down to ensure readability without excessive wrapping.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model designed for professional workspaces.

- **Grid:** A 12-column grid is utilized for dashboard layouts. 
- **The Workspace:** Sidebars and utility panels are fixed (e.g., 280px) to provide a stable frame for the user, while the central workspace—where maps and data tables reside—is fluid to maximize the use of available screen real estate.
- **Breakpoints:** 
  - **Desktop (1280px+):** Full multi-pane view with persistent navigation.
  - **Tablet (768px - 1279px):** Collapsed navigation icons; detail panels become overlays.
  - **Mobile (<768px):** Stacked single-column layout with a hidden hamburger drawer.
- **Rhythm:** A 4px baseline grid ensures tight, professional alignment across dense components.

## Elevation & Depth
Visual hierarchy is achieved primarily through **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Base):** The background is set to the neutral gray (#f8f9fa).
- **Level 1 (Surface):** Primary content containers (cards, data tables) are pure white with a 1px solid border (#e2e8f0).
- **Level 2 (Interactive/Floating):** Modals, dropdowns, and GIS tool-overlays use a very soft ambient shadow (0px 4px 12px rgba(15, 23, 42, 0.05)) to suggest they sit just above the surface without appearing overly "heavy" or distracting.
- **Depth separation:** Avoid using deep shadows; instead, use slightly different background shades or thin borders to denote hierarchy.

## Shapes
The design system employs a **Soft** shape language. A standard 4px (0.25rem) radius is used for buttons, inputs, and cards to maintain a crisp, professional appearance that feels modern but remains grounded. This subtle rounding prevents the interface from feeling "sharp" or aggressive while maintaining the precision expected of a government-grade platform. Fully rounded (pill) shapes are reserved exclusively for status tags and badges to differentiate them from interactive buttons.

## Components
- **Buttons:** Primary buttons use the navy background with white text. Secondary buttons use a white background with a 1px border. "GIS actions" (e.g., Draw, Measure) use the secondary blue as an accent color.
- **Data Tables:** High-density with 40px row heights. Use alternating row backgrounds (white and light gray) and sticky headers. Status columns use subtle badges (e.g., a light green background with dark green text).
- **Input Fields:** Pure white background, 1px border (#e2e8f0), and 4px corner radius. On focus, the border transitions to the secondary blue with a 2px outer glow.
- **GIS Map Overlays:** Small, floating toolbars anchored to map edges. These should have a slight backdrop blur and be framed by a 1px border to separate them from the map's texture.
- **Cards:** Used for grouping property details. Cards are always pure white with no shadow in the default state, relying on the gray background for separation.
- **Sidebars:** Navigation should use the primary navy for the top-level app bar to establish brand authority, while secondary navigation uses light gray to maintain legibility.