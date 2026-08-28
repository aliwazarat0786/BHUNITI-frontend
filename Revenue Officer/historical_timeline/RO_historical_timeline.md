---
name: BHUNEXIS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
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
  label-md:
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
  base: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  sidebar-width: 280px
  table-row-height: 40px
---

## Brand & Style
The design system is engineered for land governance, property administration, and legal compliance. It balances the authority of a government institution with the technical precision of a GIS-integrated enterprise platform. 

The aesthetic is **Enterprise Minimalism**: a high-density, high-legibility style that prioritizes data throughput over decorative elements. It utilizes heavy whitespace within containers to separate complex datasets, while maintaining a compact overall footprint to minimize scrolling during intensive audit workflows. The emotional response is one of absolute reliability, transparency, and institutional permanence.

## Colors
This design system utilizes a sophisticated Slate-based palette to ensure professional sobriety. 

- **Primary (Deep Navy):** Used for navigation, headers, and primary actions to establish authority.
- **Secondary (Indigo Slate):** Used for supporting UI elements, secondary buttons, and icons.
- **Semantic Accents:** Emerald, Amber, and Rose are reserved strictly for status communication (Verification, Review, and Mismatch). They should be used with low-saturation backgrounds (e.g., Emerald-50) when used in large blocks like table rows or alerts.
- **Background:** A cool Slate-50 tint to reduce eye strain during prolonged data entry sessions.

## Typography
Inter is the foundation of the design system, selected for its exceptional legibility in data-dense environments. 

For all numerical data, particularly in land area (sq. meters) or financial reconciliation tables, use `tabular-nums` to ensure columns align vertically for easier visual scanning. Labels should use a slightly heavier weight and uppercase styling to differentiate metadata from user-generated content.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. The primary sidebar and right-hand "Detail Panels" are fixed-width to ensure tool consistency, while the central workspace (Maps or Tables) is fluid.

- **Grid:** Use a 12-column grid for dashboard views.
- **Density:** High density is the default. Gutters are kept at 16px to maximize information per square inch.
- **Breakpoints:** 
    - Mobile (<768px): Single column, hidden sidebar (drawer).
    - Tablet (768px - 1280px): Collapsed sidebar (icons only).
    - Desktop (>1280px): Full expanded sidebar and multi-pane reconciliation views.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than aggressive shadows. 

- **Surface 0 (Background):** Slate-50.
- **Surface 1 (Cards/Panels):** Pure White (#FFFFFF) with a 1px border of Slate-200.
- **Surface 2 (Overlays/Modals):** Pure White with a subtle "Ambient Shadow" (0px 4px 12px rgba(15, 23, 42, 0.08)).
- **GIS Overlays:** Floating map controls use a background blur (8px) and a slightly thicker Slate-300 border to separate them from the map background.

## Shapes
The design system uses "Soft" geometry. A 4px (0.25rem) radius is the standard for almost all UI components, including buttons, input fields, and cards. This provides a modern touch without sacrificing the professional, "square" feel required for government software. Status badges and tags may use a slightly higher 12px radius to distinguish them as interactive or volatile metadata.

## Components
- **Data Reconciliation Tables:** Features alternating row stripes in Slate-50, "Sticky" headers, and fixed first-columns for property IDs. Status cells use the semantic color palette in a "Subtle Badge" format (light background, dark text).
- **GIS Map Overlays:** Translucent panels with a blur effect, anchored to the map corners. Buttons within these overlays are 32x32px for precision.
- **Sidebars:** Primary navigation is dark (Deep Navy) to provide a strong visual anchor. Sub-navigation is light with an Indigo active-state indicator line on the left.
- **Timeline:** A vertical thread using the Primary color for completed land transfer milestones and a dashed Slate-300 line for pending or future legal actions.
- **Status Badges:** Small, high-contrast indicators. Use a dot icon within the badge to denote "Live" or "Synced" statuses.
- **Input Fields:** Use 1px Slate-300 borders that transition to Indigo-500 on focus. Labels are consistently positioned above the field, never as placeholders.