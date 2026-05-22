---
name: Vivid Prism
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ffb0cd'
  on-secondary: '#640039'
  secondary-container: '#aa0266'
  on-secondary-container: '#ffbad3'
  tertiary: '#2fd9f4'
  on-tertiary: '#00363e'
  tertiary-container: '#009fb4'
  on-tertiary-container: '#002f36'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
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
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 640px
  gutter: 20px
---

## Brand & Style
The design system is built for a high-energy, digital-first link directory experience that prioritizes visual delight and "eye-candy" aesthetics. The brand personality is audacious, fluid, and premium, targeting a creative audience that views their digital presence as a piece of art. 

We utilize a **Glassmorphism** style layered over deep, atmospheric backgrounds. This creates a sense of physical depth through translucency and blurred light. The UI should evoke a sense of "Luminescence"—where elements appear to emit light or reflect vibrant surroundings. Generous whitespace is used not just for clarity, but as a luxury signifier, allowing the vibrant gradients and frosted surfaces to breathe.

## Colors
The palette is centered on a "Midnight Neon" theme. The base is a deep, dark blue-toned neutral to provide maximum contrast for the vibrant accents. 

- **Primary (Electric Violet):** Used for main actions and brand presence.
- **Secondary (Hyper Pink):** Used for highlights and emotional "pop."
- **Tertiary (Cyber Cyan):** Used for secondary actions and success states.
- **Surface Strategy:** Use semi-transparent versions of these colors (10-20% opacity) for glass backgrounds to pick up the underlying gradients. Avoid solid grays; use tinted neutrals to maintain the premium feel.

## Typography
We employ a pairing of **Sora** and **Outfit**. Sora provides a geometric, technical, yet friendly structure for headlines. Its wide stance and bold weights feel modern and high-end. **Outfit** is used for body and labels to ensure maximum legibility within the glass cards.

Keep headline tracking tight to emphasize the "bold" personality. For body text on glass surfaces, ensure a slightly higher font weight (Medium/500) if the background blur is intense to maintain accessibility.

## Layout & Spacing
The layout follows a **Centered Fluid** model. Since this is a link directory, the content is vertically stacked and centered on the screen with a restricted maximum width (640px) to maintain a mobile-first, app-like feel even on desktop.

- **Margins:** Use wide horizontal margins (at least 24px) on mobile to create a floating appearance.
- **Rhythm:** Vertical spacing between cards should be generous (16px to 24px) to emphasize individual links.
- **Grid:** Use a simple 1-column stack for the directory, but utilize a 2-column "mini-card" grid for secondary social icons at the bottom.

## Elevation & Depth
Depth is achieved through **multi-layered glassmorphism** rather than traditional shadows.

1.  **Backdrop Blur:** All cards must have a `backdrop-filter: blur(16px)`.
2.  **Translucency:** Surface colors should be white or primary-tinted at 10% opacity.
3.  **The "Glass Edge":** Use a 1px solid border at 20% white opacity. Apply a `linear-gradient` to the border itself (top-left to bottom-right) to simulate a light catch on the edge of the glass.
4.  **Shadows:** Use large, very soft "Ambient Glows" instead of drop shadows. A shadow should be a low-opacity version of the primary or secondary color, diffused 40px or more, to make the card appear as if it's floating above a light source.

## Shapes
We use a **Rounded** shape language to keep the UI feeling soft and approachable despite the high-tech color palette. 

- **Cards:** Use `rounded-lg` (16px) for the main link containers.
- **Buttons:** Primary buttons use `rounded-xl` (24px) or full pill shapes to distinguish them from cards.
- **Interactive States:** On hover, shapes can slightly expand (scale 1.02) to reinforce the tactile, "squishy" premium feel.

## Components
- **Link Cards:** The core component. A frosted glass rectangle with a 1px "light-catch" border. Icons should be placed in a circular glass container on the left.
- **Primary Buttons:** Apply the `accent_gradient`. Use white text with a slight drop shadow for readability. On hover, apply a white inner-glow.
- **Chips:** Small, pill-shaped elements with 20% primary color backgrounds. Used for categories or "New" badges.
- **Input Fields:** Dark, semi-transparent backgrounds (40% black) with a bright cyan bottom-border focus state.
- **Profile Avatar:** Always circular, with a thick 3px gradient border to separate it from the background.
- **Social Icons:** Use "Ghost" style—just the icon with no background, until hovered, where a glass circle appears behind it.