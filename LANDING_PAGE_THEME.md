# Landing Page Theme

A modern, tech-focused theme extracted from the Principal AI landing page. Features a clean dark aesthetic with vibrant cyan accents and smooth animations.

## Design System Overview

### Color Palette

#### Primary Colors
- **Primary**: `#00C2FF` - Bright cyan, main brand color
- **Secondary**: `#0098CC` - Darker cyan for secondary actions
- **Accent**: `#0066FF` - Blue accent for highlights
- **Background**: `#000000` - Pure black
- **Text**: `#ffffff` - Pure white

#### Gradients
The theme features several signature gradients:
- **Primary Gradient**: `linear-gradient(90deg, #00D9FF 0%, #0099FF 50%, #0066FF 100%)`
- **Brand Gradient**: `linear-gradient(135deg, #00C2FF, #0098CC)`
- **Background Gradient**: `linear-gradient(180deg, #0a1628 0%, #000000 100%)`

#### Semantic Colors
- **Border**: `rgba(0, 194, 255, 0.2)` - Translucent cyan
- **Background Secondary**: `#0a1628` - Deep blue-black
- **Background Tertiary**: `#0f1c2e` - Lighter blue-black
- **Text Secondary**: `#d1d5db` - Light gray
- **Text Tertiary**: `#9ca3af` - Medium gray
- **Text Muted**: `#6b7280` - Darker gray

### Typography

#### Font Families
- **Body**: `Inter, "Geist Sans", system-ui, -apple-system, sans-serif`
- **Heading**: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif`
- **Monospace**: `"SF Mono", Monaco, Inconsolata, "Fira Code", monospace`

#### Font Sizes
Scale from 12px to 96px with 19 steps for precise control.

#### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

#### Line Heights
- Tight: 1.05 (for large headlines)
- Heading: 1.2
- Body: 1.6
- Relaxed: 1.7

### Spacing

14-step spacing scale: `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 128]`

### Layout

#### Breakpoints
- Mobile: `640px`
- Tablet: `768px`
- Desktop: `1024px`
- Large Desktop: `1280px`
- Extra Large: `1400px`

#### Border Radius
Scale from 0 to 24px with 12 steps: `[0, 2, 4, 6, 7, 8, 9, 10, 12, 14, 16, 24]`

#### Shadows
- None
- Small: `0 1px 3px 0 rgba(0, 0, 0, 0.1)`
- Medium: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- Cyan Glow: `0 4px 12px rgba(0, 194, 255, 0.4)`
- Subtle Cyan: `0 6px 24px rgba(0, 194, 255, 0.1)`
- Deep: `0 8px 32px rgba(0, 0, 0, 0.4)`

## Usage

### Basic Import

```typescript
import { landingPageTheme, landingPageLightTheme } from '@principal-ade/industry-theme';
```

### With ThemeProvider

```tsx
import { ThemeProvider, landingPageTheme } from '@principal-ade/industry-theme';

function App() {
  return (
    <ThemeProvider theme={landingPageTheme}>
      <YourComponents />
    </ThemeProvider>
  );
}
```

### Accessing Theme Values

```tsx
import { useTheme } from '@principal-ade/industry-theme';

function MyComponent() {
  const { theme } = useTheme();

  return (
    <div style={{
      background: theme.colors.background,
      color: theme.colors.text,
      padding: theme.space[4], // 16px
      borderRadius: theme.radii[4], // 8px
    }}>
      Content
    </div>
  );
}
```

## Component Patterns

### Navigation Bar

```tsx
<nav style={{
  position: 'fixed',
  top: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(0, 194, 255, 0.2)',
  padding: '16px 24px',
}}>
  {/* Navigation content */}
</nav>
```

### Hero Section

```tsx
<div style={{
  background: '#000000',
  backgroundImage: `
    linear-gradient(rgba(209, 213, 219, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(209, 213, 219, 0.25) 1px, transparent 1px)
  `,
  backgroundSize: '100px 100px',
  padding: '100px 20px',
}}>
  <h1 style={{
    fontSize: 'clamp(32px, 6vw, 84px)',
    fontWeight: 600,
    background: 'linear-gradient(90deg, #00D9FF 0%, #0099FF 50%, #0066FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>
    Your Heading
  </h1>
</div>
```

### Button Variants

#### Primary Button
```tsx
<button style={{
  padding: '8px 20px',
  background: '#00C2FF',
  color: '#000000',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
}}>
  Primary Action
</button>
```

#### Secondary Button
```tsx
<button style={{
  padding: '8px 16px',
  background: 'transparent',
  color: '#00C2FF',
  border: '1px solid rgba(0, 194, 255, 0.3)',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
}}>
  Secondary Action
</button>
```

### Card/Section

```tsx
<div style={{
  background: 'rgba(0, 194, 255, 0.05)',
  border: '1px solid rgba(0, 194, 255, 0.2)',
  borderRadius: '12px',
  padding: '32px',
}}>
  {/* Card content */}
</div>
```

### Hover Effects

```tsx
// Button hover
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-2px)';
  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 194, 255, 0.4)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = 'none';
}}

// Link hover
onMouseEnter={(e) => {
  e.currentTarget.style.color = '#00C2FF';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = '#d1d5db';
}}
```

## Design Principles

### 1. High Contrast
Pure black background with white text ensures maximum readability and a modern, premium feel.

### 2. Cyan as Primary
The bright cyan (`#00C2FF`) serves as the main brand color, used for:
- Primary CTAs
- Links and interactive elements
- Borders and accents
- Hover states

### 3. Subtle Depth
Use translucent colors for depth without heavy shadows:
- `rgba(0, 194, 255, 0.05)` for card backgrounds
- `rgba(0, 194, 255, 0.1)` for hover states
- `rgba(0, 194, 255, 0.2)` for borders

### 4. Grid Backgrounds
Optional grid overlays add tech aesthetic:
```css
background-image:
  linear-gradient(rgba(209, 213, 219, 0.25) 1px, transparent 1px),
  linear-gradient(90deg, rgba(209, 213, 219, 0.25) 1px, transparent 1px);
background-size: 100px 100px;
```

### 5. Smooth Transitions
All interactive elements use smooth transitions:
```css
transition: all 0.2s ease;
```

### 6. Responsive Typography
Use clamp() for fluid typography:
```css
font-size: clamp(32px, 6vw, 84px);
```

## Light Mode

The `landingPageLightTheme` provides an inverted color scheme for light mode:
- White background with near-black text
- Slightly darker cyan for better contrast
- Adjusted opacity values for subtle effects

Switch between themes:

```tsx
const [isDark, setIsDark] = useState(true);

<ThemeProvider theme={isDark ? landingPageTheme : landingPageLightTheme}>
  {/* Your app */}
</ThemeProvider>
```

## Animations

### Framer Motion Integration

The landing page uses Framer Motion for smooth animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Common Animation Patterns

#### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

#### Staggered Children
```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
  />
))}
```

## Accessibility

The theme maintains WCAG AA contrast ratios:
- White text on black background: 21:1
- Cyan (#00C2FF) on black: 8.59:1
- Light gray (#d1d5db) on black: 11.63:1

Ensure interactive elements have:
- Clear focus states
- Sufficient touch targets (minimum 44x44px)
- Semantic HTML
- ARIA labels where needed

## Browser Support

The theme uses modern CSS features:
- CSS Grid
- Flexbox
- Backdrop filters
- CSS custom properties
- Gradient text (with WebKit fallback)

Recommended browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Next Steps

To migrate your landing page to use this theme:

1. Import the theme
2. Wrap your app with ThemeProvider
3. Replace hardcoded colors with theme values
4. Use theme spacing and typography scales
5. Apply component variants where applicable
6. Test responsive behavior at all breakpoints
7. Verify accessibility with screen readers and contrast checkers
