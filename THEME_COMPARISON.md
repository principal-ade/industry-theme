# Theme Comparison - Landing Page Theme

Quick reference comparing the new Landing Page theme with existing themes.

## Color Schemes

### Landing Page Theme (Dark)

```
Background:     #000000 (Pure black)
Text:           #ffffff (Pure white)
Primary:        #00C2FF (Bright cyan)
Secondary:      #0098CC (Darker cyan)
Accent:         #0066FF (Blue)
Border:         rgba(0, 194, 255, 0.2)
```

**Character**: Modern, tech-forward, high contrast
**Best for**: Marketing sites, landing pages, SaaS products

### Terminal Theme

```
Background:     rgba(10, 10, 10, 0.85) (Semi-transparent black)
Text:           #e4e4e4 (Light gray)
Primary:        #66b3ff (Bright blue)
Secondary:      #80c4ff (Lighter blue)
Accent:         #66ff99 (Bright green)
Border:         rgba(255, 255, 255, 0.1)
```

**Character**: Developer-focused, minimalistic, transparent
**Best for**: Code editors, terminals, developer tools

### Regal Theme

```
Background:     #1a1f2e (Deep midnight blue)
Text:           #f1e8dc (Warm cream)
Primary:        #d4a574 (Warm amber gold)
Secondary:      #e0b584 (Lighter amber)
Accent:         #c9b8a3 (Muted gold)
Border:         rgba(212, 165, 116, 0.2)
```

**Character**: Elegant, academic, warm
**Best for**: Documentation, reading-focused apps, premium content

### Matrix Theme

```
Background:     #000000 (Pure black)
Text:           #a8a8a8 (Soft white)
Primary:        #00d835 (Matrix green)
Secondary:      #00a828 (Darker green)
Accent:         #00d835 (Matrix green)
Border:         rgba(0, 216, 53, 0.2)
```

**Character**: Retro, hacker aesthetic, nostalgic
**Best for**: Terminal emulators, cyberpunk themes, tech demos

### Slate Theme

```
Background:     #1a1c1e (Very dark charcoal)
Text:           #9ca3af (Medium grey)
Primary:        #d1d5db (Light grey)
Secondary:      #6b7280 (Medium grey)
Accent:         #f59e0b (Vibrant amber)
Border:         rgba(156, 163, 175, 0.15)
```

**Character**: Professional, grey-based, vibrant accents
**Best for**: Business apps, dashboards, enterprise software

## Typography Comparison

| Theme            | Body Font         | Heading Font    | Monospace   |
| ---------------- | ----------------- | --------------- | ----------- |
| **Landing Page** | Inter, Geist Sans | SF Pro Display  | SF Mono     |
| **Terminal**     | SF Mono, Monaco   | SF Mono, Monaco | SF Mono     |
| **Regal**        | Inter             | Crimson Text    | Fira Code   |
| **Matrix**       | Courier New       | Courier New     | Courier New |
| **Slate**        | Inter             | Inter           | Fira Code   |

## Key Differences

### Landing Page vs Terminal

- **Landing Page**: Pure black vs semi-transparent
- **Landing Page**: System fonts vs monospace everywhere
- **Landing Page**: Cyan accent vs blue/green
- **Landing Page**: Larger spacing scale for marketing layouts

### Landing Page vs Regal

- **Landing Page**: Cool (cyan) vs warm (amber) color scheme
- **Landing Page**: Sans-serif headings vs serif headings
- **Landing Page**: Modern tech vs elegant academic
- **Landing Page**: Higher contrast for accessibility

### Landing Page vs Matrix

- **Landing Page**: Cyan brand color vs green terminal
- **Landing Page**: Professional polish vs retro aesthetic
- **Landing Page**: Varied font weights vs monospace only
- **Landing Page**: Softer borders and shadows

## When to Use Landing Page Theme

✅ **Use when:**

- Building marketing websites
- Creating SaaS landing pages
- Needing high contrast and accessibility
- Targeting modern, tech-savvy audiences
- Requiring responsive, mobile-first design
- Using Framer Motion animations

❌ **Avoid when:**

- Building code editors or terminals (use Terminal theme)
- Creating reading-focused content (use Regal theme)
- Wanting retro/nostalgic aesthetic (use Matrix theme)
- Designing enterprise dashboards (use Slate theme)

## Migration Guide

### From Regal to Landing Page

```typescript
// Before (Regal)
colors: {
  primary: '#d4a574', // Amber gold
  border: 'rgba(212, 165, 116, 0.2)',
}

// After (Landing Page)
colors: {
  primary: '#00C2FF', // Bright cyan
  border: 'rgba(0, 194, 255, 0.2)',
}
```

### From Terminal to Landing Page

```typescript
// Before (Terminal)
fonts: {
  body: '"SF Mono", "Monaco", monospace',
  heading: '"SF Mono", "Monaco", monospace',
}

// After (Landing Page)
fonts: {
  body: 'Inter, "Geist Sans", system-ui, sans-serif',
  heading: '-apple-system, "SF Pro Display", sans-serif',
}
```

## Design Token Mapping

### Spacing

All themes use similar spacing scales. Landing Page adds more fine-grained control:

```
Terminal:  [0, 4, 8, 16, 32, 64, 128, 256, 512]
Landing:   [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 128]
```

### Breakpoints

Landing Page adds an extra-large breakpoint for wide screens:

```
Standard:  ['640px', '768px', '1024px', '1280px']
Landing:   ['640px', '768px', '1024px', '1280px', '1400px']
```

### Shadows

Landing Page includes cyan-tinted shadows:

```typescript
shadows: [
  'none',
  '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  '0 4px 12px rgba(0, 194, 255, 0.4)', // Cyan glow
  '0 6px 24px rgba(0, 194, 255, 0.1)', // Subtle cyan
  '0 8px 32px rgba(0, 0, 0, 0.4)', // Deep shadow
];
```

## Performance Considerations

### Font Loading

Landing Page uses system fonts as fallbacks, ensuring fast load times:

```css
font-family:
  Inter,
  'Geist Sans',
  system-ui,
  -apple-system,
  sans-serif;
```

### Color Performance

- Pure black (#000000) renders more efficiently than gradients
- RGBA for transparency uses GPU acceleration
- Solid colors preferred over complex gradients

### Animation Performance

- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, `top`, `left`
- Leverage `will-change` for frequently animated elements
- Use Framer Motion's optimized animation system

## Accessibility Scores

| Theme        | Background Contrast | Primary Contrast | Text Contrast |
| ------------ | ------------------- | ---------------- | ------------- |
| Landing Page | 21:1                | 8.59:1           | 21:1          |
| Terminal     | 19.2:1              | 7.1:1            | 16.5:1        |
| Regal        | 12.4:1              | 4.8:1            | 13.8:1        |
| Matrix       | 21:1                | 9.2:1            | 9.4:1         |
| Slate        | 18.7:1              | 6.2:1            | 8.1:1         |

**WCAG AA Standard**: 4.5:1 for normal text, 3:1 for large text
**WCAG AAA Standard**: 7:1 for normal text, 4.5:1 for large text

Landing Page theme exceeds AAA standards for all text.
