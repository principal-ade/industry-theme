/**
 * Collection of available themes for PrincipleMD
 */

import { Theme } from './index';
export { defaultMarkdownTheme, defaultEditorTheme, defaultTerminalTheme } from './defaultThemes';
export { landingPageTheme, landingPageLightTheme } from './landingPageTheme';

// Regal theme (previous default) - Dark Academia with warm amber gold
export const regalTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Crimson Text", "Georgia", "Times New Roman", serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors (light mode default) - Dark Academia theme with muted gold
  colors: {
    // Base colors
    text: '#f1e8dc', // Warm cream
    background: '#1a1f2e', // Deep midnight blue
    primary: '#d4a574', // Warm amber gold
    secondary: '#e0b584', // Lighter amber on hover
    accent: '#c9b8a3', // Muted gold
    highlight: '#363338', // Amber highlight
    muted: '#8b7968', // Faded bronze

    // Status colors - Jewel tones
    success: '#5c8a72', // Forest green
    warning: '#d4a574', // Amber (same as primary for consistency)
    error: '#a85751', // Burgundy red
    info: '#d4a574', // Using primary amber

    // Additional semantic colors
    border: '#3f3a3c', // Gold border
    backgroundSecondary: '#212738', // Slightly lighter navy
    backgroundTertiary: '#2d3446', // Tertiary dark blue
    backgroundLight: '#292a34', // Very light amber
    backgroundHover: '#363338', // Amber hover
    surface: '#212738', // Dark navy surface
    textSecondary: '#c9b8a3', // Muted gold
    textTertiary: '#8b7968', // Faded bronze
    textMuted: '#8b7968', // Faded bronze

    // Search highlight colors
    highlightBg: '#534724', // Amber/yellow highlight
    highlightBorder: '#8c701a', // Stronger amber for border

    // Text on primary background
    textOnPrimary: '#1a1f2e', // Dark text on warm amber primary
    // Text on secondary background
    textOnSecondary: '#1a1f2e', // Dark text on lighter amber secondary
    // Text on accent background
    textOnAccent: '#1a1f2e', // Dark text on muted gold accent
  },

  // Component variants
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'text',
      bg: 'muted',
      '&:hover': {
        bg: 'backgroundSecondary',
      },
    },
    ghost: {
      color: 'primary',
      bg: 'transparent',
      '&:hover': {
        bg: 'muted',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'background',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 2,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 2,
    },
  },
};

// Terminal theme - Minimalistic developer-focused dark theme with transparency
export const terminalTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - More monospace focused
  fonts: {
    body: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
    heading: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
    monospace: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 500,
    bold: 600,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.4,
    relaxed: 1.8,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
    '0 8px 12px 0 rgba(0, 0, 0, 0.08)',
    '0 16px 24px 0 rgba(0, 0, 0, 0.10)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Dark terminal theme
  colors: {
    // Base colors - Dark terminal inspired
    text: '#e4e4e4', // Light gray
    background: '#0a0a0a', // Almost black
    primary: '#66b3ff', // Bright terminal blue
    secondary: '#80c4ff', // Lighter blue
    accent: '#66ff99', // Bright terminal green
    highlight: '#18283d', // Dark blue highlight
    muted: '#1a1a1a', // Dark gray

    // Status colors - Terminal inspired
    success: '#66ff99', // Bright green
    warning: '#ffcc66', // Bright amber
    error: '#ff6666', // Bright red
    info: '#66b3ff', // Bright blue

    // Additional semantic colors
    border: '#1a1a1a', // Dark border
    backgroundSecondary: '#0f0f0f', // Slightly lighter black
    backgroundTertiary: '#141414', // Even lighter black
    backgroundLight: '#0d0d0d', // Very subtle lighter
    backgroundHover: '#0d1520', // Subtle blue-tinted hover
    surface: '#0f0f0f', // Dark surface
    textSecondary: '#b3b3b3', // 70% white
    textTertiary: '#808080', // 50% white
    textMuted: '#666666', // 40% white

    // Search highlight colors
    highlightBg: '#40391e', // Yellow highlight
    highlightBorder: '#7f7530', // Stronger yellow for border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on blue primary
    // Text on secondary background
    textOnSecondary: '#0a0a0a', // Dark text on lighter blue secondary
    // Text on accent background
    textOnAccent: '#0a0a0a', // Dark text on bright green accent
  },

  // Light mode for terminal theme
  modes: {
    light: {
      // Base colors - Light terminal
      text: '#1a1a1a', // Almost black
      background: '#ffffff', // White
      primary: '#0066cc', // Classic terminal blue
      secondary: '#0052a3', // Darker blue
      accent: '#00cc88', // Terminal green
      highlight: '#e6f2ff', // Very light blue highlight
      muted: '#f5f5f5', // Light gray

      // Status colors - Terminal inspired
      success: '#00cc88', // Green
      warning: '#ffaa00', // Amber
      error: '#ff3333', // Red
      info: '#0066cc', // Blue

      // Additional semantic colors
      border: '#e6e6e6', // Light border
      backgroundSecondary: '#fafafa', // Very light gray
      backgroundTertiary: '#f5f5f5', // Light gray
      backgroundLight: '#fafafa', // Very subtle lighter
      backgroundHover: '#f5f9fd', // Very subtle blue hover
      surface: '#ffffff', // White surface
      textSecondary: '#666666', // 60% black
      textTertiary: '#999999', // 40% black
      textMuted: '#b3b3b3', // 30% black

      // Search highlight colors
      highlightBg: '#fff9c4', // Light yellow highlight
      highlightBorder: '#fff389', // Stronger yellow for border

      // Text on backgrounds
      textOnPrimary: '#ffffff', // White text on blue primary
      textOnSecondary: '#ffffff', // White text on darker blue secondary
      textOnAccent: '#ffffff', // White text on green accent
    },
  },

  // Component variants
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 1,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 1,
    },
  },
};

// Matrix theme - Classic Matrix green-on-black terminal look
export const matrixTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - Classic terminal/Matrix fonts
  fonts: {
    body: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
    heading: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
    monospace: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 500,
    bold: 600,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
    tight: 1.3,
    relaxed: 1.7,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 0 5px rgba(0, 216, 53, 0.15)',
    '0 0 10px rgba(0, 216, 53, 0.2)',
    '0 0 15px rgba(0, 216, 53, 0.25)',
    '0 0 20px rgba(0, 216, 53, 0.3)',
    '0 0 30px rgba(0, 216, 53, 0.4)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Matrix inspired theme with softer whites and green accents
  colors: {
    // Base colors - Softer whites with Matrix green accents
    text: '#a8a8a8', // Much softer white for main text
    background: '#000000', // Pure black background
    primary: '#00d835', // Softer Matrix green for primary actions
    secondary: '#00a828', // Darker softer green for secondary
    accent: '#00d835', // Softer Matrix green accent
    highlight: '#002008', // Dark green highlight
    muted: '#0a0a0a', // Very dark gray

    // Status colors - More variety while keeping Matrix feel
    success: '#00d835', // Softer Matrix green
    warning: '#d4a000', // Softer amber warning
    error: '#d63333', // Softer red for errors
    info: '#00a8d6', // Softer cyan for info

    // Additional semantic colors
    border: '#002b0b', // Subtle green border
    backgroundSecondary: '#0a0a0a', // Very dark gray
    backgroundTertiary: '#111111', // Slightly lighter dark gray
    backgroundLight: '#000602', // Very faint green glow
    backgroundHover: '#001104', // Subtle green hover
    surface: '#050505', // Almost black
    textSecondary: '#808080', // Even softer gray for secondary text
    textTertiary: '#606060', // Much softer medium gray
    textMuted: '#484848', // Much softer darker gray

    // Search highlight colors
    highlightBg: '#00360d', // Green highlight
    highlightBorder: '#006c1b', // Stronger green for border

    // Text on primary background
    textOnPrimary: '#000000', // Black text on green primary
    // Text on secondary background
    textOnSecondary: '#000000', // Black text on darker green secondary
    // Text on accent background
    textOnAccent: '#000000', // Black text on green accent
  },

  // Component variants
  buttons: {
    primary: {
      color: 'black',
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 0, // No rounded corners for authentic terminal look
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 0,
    },
  },
};

// Matrix Minimal theme - Matrix aesthetic with white primary/secondary
export const matrixMinimalTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - Classic terminal/Matrix fonts
  fonts: {
    body: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
    heading: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
    monospace: '"Courier New", "Courier", "Lucida Console", "Monaco", monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 500,
    bold: 600,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
    tight: 1.3,
    relaxed: 1.7,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 2px rgba(0, 0, 0, 0.05)',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.15)',
    '0 8px 16px rgba(0, 0, 0, 0.2)',
    '0 0 20px rgba(0, 216, 53, 0.1)', // Subtle softer green glow for special elements
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Minimal Matrix theme with white primary/secondary and green accents
  colors: {
    // Base colors - Whites with Matrix green as accent only
    text: '#a8a8a8', // Much softer white for main text
    background: '#000000', // Pure black background
    primary: '#b8b8b8', // Much softer off-white for primary
    secondary: '#909090', // Much softer light gray for secondary
    accent: '#00d835', // Softer Matrix green for accents only
    highlight: '#001605', // Very subtle green highlight
    muted: '#0a0a0a', // Very dark gray

    // Status colors - Practical colors
    success: '#00d835', // Softer Matrix green for success
    warning: '#d4a000', // Softer amber warning
    error: '#d63333', // Softer red for errors
    info: '#00a8d6', // Softer cyan for info

    // Additional semantic colors
    border: '#121212', // Subtle off-white border
    backgroundSecondary: '#0a0a0a', // Very dark gray
    backgroundTertiary: '#111111', // Slightly lighter dark gray
    backgroundLight: '#040404', // Very faint off-white glow
    backgroundHover: '#000b03', // Very subtle green hover
    surface: '#050505', // Almost black
    textSecondary: '#808080', // Even softer gray for secondary text
    textTertiary: '#606060', // Much softer medium gray
    textMuted: '#484848', // Much softer darker gray

    // Search highlight colors
    highlightBg: '#002b0b', // Green highlight for search
    highlightBorder: '#005615', // Stronger green for border

    // Text on primary background
    textOnPrimary: '#000000', // Black text on off-white primary
    // Text on secondary background
    textOnSecondary: '#000000', // Black text on light gray secondary
    // Text on accent background
    textOnAccent: '#000000', // Black text on green accent
  },

  // Component variants
  buttons: {
    primary: {
      color: 'black',
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 0, // No rounded corners for terminal look
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 0,
    },
  },
};

// Enterprise theme - Best for enterprise solutions, high-level consulting, and stability
export const enterpriseTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - Professional, authoritative fonts
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(10, 25, 47, 0.1), 0 1px 2px 0 rgba(10, 25, 47, 0.06)',
    '0 4px 6px -1px rgba(10, 25, 47, 0.1), 0 2px 4px -1px rgba(10, 25, 47, 0.06)',
    '0 10px 15px -3px rgba(10, 25, 47, 0.1), 0 4px 6px -2px rgba(10, 25, 47, 0.05)',
    '0 20px 25px -5px rgba(10, 25, 47, 0.1), 0 10px 10px -5px rgba(10, 25, 47, 0.04)',
    '0 25px 50px -12px rgba(10, 25, 47, 0.25)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Enterprise: Midnight Navy, Glacier White, Circuit Gold, Slate Grey
  colors: {
    // Base colors
    text: '#F8FAFC', // Glacier White - crisp, clean
    background: '#0A192F', // Midnight Navy - deep, authoritative
    primary: '#D4AF37', // Circuit Gold - sophisticated accent
    secondary: '#E5C464', // Lighter gold for hover states
    accent: '#D4AF37', // Circuit Gold
    highlight: '#122540', // Lighter navy for highlights
    muted: '#475569', // Slate Grey

    // Status colors - Professional palette
    success: '#10B981', // Emerald green
    warning: '#D4AF37', // Circuit Gold (consistency)
    error: '#DC2626', // Professional red
    info: '#3B82F6', // Professional blue

    // Additional semantic colors
    border: '#1E3A5F', // Mid-tone navy border
    backgroundSecondary: '#0D2240', // Slightly lighter navy
    backgroundTertiary: '#122540', // Even lighter navy
    backgroundLight: '#0B1E38', // Very subtle lighter navy
    backgroundHover: '#142D4C', // Navy hover state
    surface: '#0D2240', // Surface color
    textSecondary: '#CBD5E1', // Light slate for secondary text
    textTertiary: '#475569', // Slate Grey
    textMuted: '#64748B', // Lighter slate

    // Search highlight colors
    highlightBg: '#3D3215', // Gold-tinted highlight
    highlightBorder: '#8B7722', // Stronger gold border

    // Text on primary background
    textOnPrimary: '#0A192F', // Midnight Navy on gold
    // Text on secondary background
    textOnSecondary: '#0A192F', // Midnight Navy on lighter gold secondary
    // Text on accent background
    textOnAccent: '#0A192F', // Midnight Navy on gold accent
  },

  // Light mode variant
  modes: {
    light: {
      text: '#0A192F', // Midnight Navy
      background: '#F8FAFC', // Glacier White
      primary: '#D4AF37', // Circuit Gold
      secondary: '#B8942E', // Darker gold for hover
      accent: '#D4AF37', // Circuit Gold
      highlight: '#FEF9E7', // Light gold tint
      muted: '#E2E8F0', // Light slate

      success: '#059669', // Darker emerald
      warning: '#B8942E', // Darker gold
      error: '#B91C1C', // Darker red
      info: '#2563EB', // Darker blue

      border: '#CBD5E1', // Slate border
      backgroundSecondary: '#F1F5F9', // Slightly darker white
      backgroundTertiary: '#E2E8F0', // Light slate
      backgroundLight: '#FFFFFF', // Pure white
      backgroundHover: '#EEF2F6', // Subtle hover
      surface: '#FFFFFF', // White surface
      textSecondary: '#475569', // Slate Grey
      textTertiary: '#64748B', // Lighter slate
      textMuted: '#94A3B8', // Even lighter slate

      highlightBg: '#FEF9E7', // Light gold highlight
      highlightBorder: '#D4AF37', // Gold border

      // Text on backgrounds
      textOnPrimary: '#0A192F', // Midnight Navy on gold
      textOnSecondary: '#0A192F', // Midnight Navy on darker gold secondary
      textOnAccent: '#0A192F', // Midnight Navy on gold accent
    },
  },

  // Component variants
  buttons: {
    primary: {
      color: '#0A192F', // Midnight Navy text on gold
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
  },
};

// Neural Pulse theme - Best for high-speed processing, developer tools, and cutting-edge tech
export const neuralPulseTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - Modern, technical fonts
  fonts: {
    body: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 0 5px rgba(0, 245, 255, 0.1)',
    '0 0 10px rgba(0, 245, 255, 0.15)',
    '0 0 20px rgba(0, 245, 255, 0.2)',
    '0 0 30px rgba(0, 245, 255, 0.25)',
    '0 0 40px rgba(138, 43, 226, 0.3)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Neural Pulse: Deep Charcoal, Electric Cyan, Digital Violet, Pure White
  colors: {
    // Base colors
    text: '#FFFFFF', // Pure White - max contrast
    background: '#121212', // Deep Charcoal - true dark mode
    primary: '#00F5FF', // Electric Cyan - vibrant digital energy
    secondary: '#00C4CC', // Darker cyan for hover
    accent: '#8A2BE2', // Digital Violet - buttons and data viz
    highlight: '#1A2A2A', // Cyan-tinted highlight
    muted: '#2A2A2A', // Dark grey

    // Status colors - Vibrant tech palette
    success: '#00FF88', // Neon green
    warning: '#FFB800', // Bright amber
    error: '#FF4757', // Bright red
    info: '#00F5FF', // Electric Cyan

    // Additional semantic colors
    border: '#2A2A2A', // Subtle dark border
    backgroundSecondary: '#1A1A1A', // Slightly lighter charcoal
    backgroundTertiary: '#222222', // Even lighter charcoal
    backgroundLight: '#181818', // Very subtle lighter
    backgroundHover: '#1E2828', // Cyan-tinted hover
    surface: '#1A1A1A', // Dark surface
    textSecondary: '#B0B0B0', // Light grey
    textTertiary: '#808080', // Medium grey
    textMuted: '#606060', // Darker grey

    // Search highlight colors
    highlightBg: '#1A2A35', // Cyan-tinted highlight
    highlightBorder: '#00F5FF', // Electric Cyan border

    // Text on primary background
    textOnPrimary: '#121212', // Deep Charcoal on cyan
    // Text on secondary background
    textOnSecondary: '#121212', // Deep Charcoal on darker cyan secondary
    // Text on accent background
    textOnAccent: '#FFFFFF', // White text on violet accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#121212', // Dark text on cyan
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'accent',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'accent',
      '&:hover': {
        bg: '#1A1A2E', // Violet-tinted background
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 2,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: 2,
    },
  },
};

// Human-Centric theme - Best for creative AI, user-friendly interfaces, and collaborative tools
export const humanCentricTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography - Warm, friendly fonts
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.65,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.8,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 4, 8, 12, 16, 20, 24, 32],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(13, 92, 99, 0.08), 0 1px 2px 0 rgba(13, 92, 99, 0.04)',
    '0 4px 6px -1px rgba(13, 92, 99, 0.1), 0 2px 4px -1px rgba(13, 92, 99, 0.06)',
    '0 10px 15px -3px rgba(13, 92, 99, 0.1), 0 4px 6px -2px rgba(13, 92, 99, 0.05)',
    '0 20px 25px -5px rgba(13, 92, 99, 0.1), 0 10px 10px -5px rgba(13, 92, 99, 0.04)',
    '0 25px 50px -12px rgba(13, 92, 99, 0.2)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Human-Centric: Forest Teal, Soft Stone, Terracotta, Eucalyptus
  colors: {
    // Base colors
    text: '#0D5C63', // Forest Teal - balanced and calm
    background: '#F2F2F2', // Soft Stone - warm and inviting
    primary: '#E27D60', // Terracotta - the human touch
    secondary: '#C96A50', // Darker terracotta for hover
    accent: '#85B09A', // Eucalyptus - soft secondary
    highlight: '#E8F0EC', // Light eucalyptus tint
    muted: '#D9D9D9', // Soft grey

    // Status colors - Natural, warm palette
    success: '#85B09A', // Eucalyptus
    warning: '#E2A860', // Warm amber
    error: '#D64545', // Warm red
    info: '#0D5C63', // Forest Teal

    // Additional semantic colors
    border: '#D0D0D0', // Soft border
    backgroundSecondary: '#FFFFFF', // Pure white
    backgroundTertiary: '#E8E8E8', // Slightly darker stone
    backgroundLight: '#FAFAFA', // Very light
    backgroundHover: '#EBE8E5', // Warm hover
    surface: '#FFFFFF', // White surface
    textSecondary: '#4A8A8F', // Lighter teal
    textTertiary: '#6B9B9F', // Even lighter teal
    textMuted: '#8BABAD', // Muted teal

    // Search highlight colors
    highlightBg: '#FCE8E3', // Light terracotta
    highlightBorder: '#E27D60', // Terracotta border

    // Text on primary background
    textOnPrimary: '#FFFFFF', // White on terracotta
    // Text on secondary background
    textOnSecondary: '#FFFFFF', // White on darker terracotta secondary
    // Text on accent background
    textOnAccent: '#FFFFFF', // White on eucalyptus
  },

  // Dark mode variant
  modes: {
    dark: {
      text: '#F2F2F2', // Soft Stone
      background: '#0D5C63', // Forest Teal
      primary: '#E27D60', // Terracotta
      secondary: '#F09A7D', // Lighter terracotta for hover
      accent: '#85B09A', // Eucalyptus
      highlight: '#0A4A50', // Darker teal highlight
      muted: '#1A6B72', // Lighter teal

      success: '#85B09A', // Eucalyptus
      warning: '#E2A860', // Warm amber
      error: '#E85555', // Lighter red
      info: '#85B09A', // Eucalyptus

      border: '#1A6B72', // Teal border
      backgroundSecondary: '#0A4A50', // Darker teal
      backgroundTertiary: '#0E5A61', // Mid teal
      backgroundLight: '#0B4F56', // Subtle lighter
      backgroundHover: '#0E6068', // Teal hover
      surface: '#0A4A50', // Dark surface
      textSecondary: '#C5D5D7', // Light teal-grey
      textTertiary: '#9BBFC2', // Medium teal-grey
      textMuted: '#7AA5A8', // Darker teal-grey

      highlightBg: '#1A3A3D', // Dark terracotta tint
      highlightBorder: '#E27D60', // Terracotta border

      // Text on backgrounds
      textOnPrimary: '#FFFFFF', // White on terracotta
      textOnSecondary: '#0D5C63', // Forest Teal on lighter terracotta secondary
      textOnAccent: '#0D5C63', // Forest Teal on eucalyptus
    },
  },

  // Component variants
  buttons: {
    primary: {
      color: '#FFFFFF', // White text on terracotta
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: '#FCE8E3', // Light terracotta background
      },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textSecondary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 4,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: 4,
    },
  },
};

// Slate theme - Sophisticated grey-based theme with vibrant accents
export const slateTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Grey-based with vibrant accents
  colors: {
    // Base colors - Various shades of grey with white accents
    text: '#9ca3af', // Medium grey for most text
    background: '#1a1c1e', // Very dark charcoal
    primary: '#d1d5db', // Light grey for primary
    secondary: '#6b7280', // Medium grey for secondary
    accent: '#f59e0b', // Vibrant amber
    highlight: '#353838', // Light grey highlight
    muted: '#2d3134', // Dark grey

    // Status colors - Vibrant and practical
    success: '#10b981', // Emerald green
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#3b82f6', // Blue

    // Additional semantic colors - Grey palette
    border: '#2d3034', // Subtle grey border
    backgroundSecondary: '#22252a', // Slightly lighter dark grey
    backgroundTertiary: '#2d3134', // Even lighter dark grey
    backgroundLight: '#202325', // Very faint grey
    backgroundHover: '#27292c', // Subtle grey hover
    surface: '#1f2124', // Near-black surface
    textSecondary: '#e5e7eb', // Light grey for important text (closer to white)
    textTertiary: '#6b7280', // Darker grey
    textMuted: '#4b5563', // Even darker grey

    // Search highlight colors
    highlightBg: '#513c19', // Amber highlight
    highlightBorder: '#875d14', // Stronger amber for border

    // Text on primary background
    textOnPrimary: '#1a1c1e', // Dark text on light grey primary
    // Text on secondary background
    textOnSecondary: '#e5e7eb', // Light text on medium grey secondary
    // Text on accent background
    textOnAccent: '#1a1c1e', // Dark text on amber accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#1a1c1e', // Dark text on light grey
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: '#9ca3af', // Darker grey on hover
      },
    },
    secondary: {
      color: '#e5e7eb', // Light text on medium grey
      bg: 'secondary',
      borderWidth: 0,
      '&:hover': {
        bg: '#4b5563', // Darker grey on hover
      },
    },
    ghost: {
      color: 'textSecondary',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'textSecondary', // Headers in lighter grey/white
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textTertiary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
  },
};

// Slate Neon theme - Slate's sophisticated greys with neon green and hot pink accents
export const slateNeonTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Slate greys with tangerine primary and neon green accent
  colors: {
    // Base colors - Slate greys with tangerine primary
    text: '#d0d6e0', // Near-white grey for most text
    background: '#1a1c1e', // Very dark charcoal
    primary: '#ff6b35', // Bright tangerine
    secondary: '#ff8257', // Lighter tangerine for hover
    accent: '#00ff00', // Neon green accent
    highlight: '#2a1f18', // Tangerine-tinted highlight
    muted: '#2d3134', // Dark grey

    // Status colors
    success: '#10b981', // Emerald green
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#3b82f6', // Blue

    // Additional semantic colors - Grey palette with tangerine touches
    border: '#2d3034', // Subtle grey border
    backgroundSecondary: '#22252a', // Slightly lighter dark grey
    backgroundTertiary: '#2d3134', // Even lighter dark grey
    backgroundLight: '#202325', // Very faint grey
    backgroundHover: '#2a1f18', // Tangerine-tinted hover
    surface: '#1f2124', // Near-black surface
    textSecondary: '#e5e7eb', // Light grey for important text
    textTertiary: '#6b7280', // Darker grey
    textMuted: '#4b5563', // Even darker grey

    // Search highlight colors
    highlightBg: '#2a1f18', // Tangerine highlight
    highlightBorder: '#ff6b35', // Tangerine border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on tangerine primary
    // Text on secondary background
    textOnSecondary: '#ffffff', // White text on lighter tangerine secondary
    // Text on accent background
    textOnAccent: '#1a1c1e', // Dark text on neon green accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#ffffff', // White text on tangerine
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'textSecondary',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'textSecondary',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textTertiary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 3,
    },
  },
};

// Slate Gold theme - Slate's sophisticated greys with Enterprise's Circuit Gold accents
export const slateGoldTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.25)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Slate greys with Deep Sapphire blue primary and Circuit Gold accents
  colors: {
    // Base colors - Slate greys with blue primary and gold accent
    text: '#d0d6e0', // Near-white grey for most text
    background: '#1a1c1e', // Very dark charcoal
    primary: '#2563EB', // Deep Sapphire blue - primary action color
    secondary: '#1d4ed8', // Darker blue for hover
    accent: '#E4C04A', // Bright Circuit Gold accent
    highlight: '#2a2720', // Gold-tinted highlight
    muted: '#2d3134', // Dark grey

    // Status colors
    success: '#10b981', // Emerald green
    warning: '#E4C04A', // Circuit Gold
    error: '#ef4444', // Red
    info: '#2563EB', // Deep Sapphire blue

    // Additional semantic colors - Grey palette with blue/gold touches
    border: '#2d3034', // Subtle grey border
    backgroundSecondary: '#22252a', // Slightly lighter dark grey
    backgroundTertiary: '#2d3134', // Even lighter dark grey
    backgroundLight: '#202325', // Very faint grey
    backgroundHover: '#1e2a3d', // Blue-tinted hover
    surface: '#1f2124', // Near-black surface
    textSecondary: '#e5e7eb', // Light grey for important text
    textTertiary: '#6b7280', // Darker grey
    textMuted: '#4b5563', // Even darker grey

    // Search highlight colors
    highlightBg: '#1e2a3d', // Blue highlight
    highlightBorder: '#2563EB', // Deep Sapphire blue border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on blue primary
    // Text on secondary background
    textOnSecondary: '#ffffff', // White text on darker blue secondary
    // Text on accent background
    textOnAccent: '#1a1c1e', // Dark text on gold accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#ffffff', // White text on blue
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'accent',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'accent',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'textSecondary',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'textSecondary',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textTertiary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: 3,
    },
  },
};

/**
 * Ice Tangerine Dark Theme
 *
 * A dark version of the ice tangerine theme with deep navy backgrounds and vibrant tangerine accents.
 * Midnight navy meets hot tangerine for a sleek, modern aesthetic.
 */
export const iceTangerineDarkTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading:
      '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Deep navy backgrounds with tangerine/teal accents
  colors: {
    // Base colors
    text: '#d0e5ea', // Light ice blue for primary text
    background: '#0d274d', // Deep navy/midnight blue
    primary: '#ff6b35', // Bright tangerine - primary action color
    secondary: '#ff8257', // Lighter tangerine for hover
    accent: '#0893d2', // Bright teal accent
    highlight: '#1a3452', // Lighter navy highlight
    muted: '#1a3856', // Muted navy

    // Status colors
    success: '#10b981', // Emerald green
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#0893d2', // Bright teal (matches accent)

    // Additional semantic colors
    border: '#1e3a5f', // Navy border
    backgroundSecondary: '#0f2e58', // Slightly lighter navy for cards/sections
    backgroundTertiary: '#123461', // Even lighter navy
    backgroundLight: '#0b1f3f', // Darker navy
    backgroundDark: '#0a1829', // Extra dark navy
    backgroundHover: '#2a1f18', // Dark tangerine tint hover
    primaryBlade: '#0e2b53', // Primary blade/panel color
    surface: '#0f2e58', // Navy surface
    textSecondary: '#9fc4d4', // Muted ice blue for secondary text
    textTertiary: '#7ba8bc', // Darker ice blue
    textMuted: '#5a8a9e', // Even darker ice blue

    // Search highlight colors
    highlightBg: '#2a1f18', // Dark tangerine highlight
    highlightBorder: '#ff6b35', // Tangerine border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on tangerine primary
    // Text on secondary background
    textOnSecondary: '#ffffff', // White text on lighter tangerine
    // Text on accent background
    textOnAccent: '#ffffff', // White text on teal accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#ffffff', // White text on tangerine
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'accent',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'accent',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'textSecondary',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'text',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textTertiary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: 3,
    },
  },
};

/**
 * Ice Tangerine Theme
 *
 * A fresh, light theme with cool ice blue backgrounds and vibrant tangerine accents.
 * Cool ice blue meets hot tangerine for a fresh, vibrant summer tech aesthetic.
 */
export const iceTangerineTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading:
      '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],

  fontScale: 1.0,

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
    light: 300,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    body: 1.6,
    heading: 1.3,
    tight: 1.25,
    relaxed: 1.75,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(12, 23, 65, 0.08)',
    '0 4px 6px -1px rgba(12, 23, 65, 0.1)',
    '0 10px 15px -3px rgba(12, 23, 65, 0.1)',
    '0 20px 25px -5px rgba(12, 23, 65, 0.15)',
    '0 25px 50px -12px rgba(12, 23, 65, 0.2)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Ice blue backgrounds with tangerine/teal accents
  colors: {
    // Base colors
    text: '#0c3741', // Dark teal for primary text
    background: '#dff1f5', // Light ice blue
    primary: '#ff6b35', // Bright tangerine - primary action color
    secondary: '#e55a2a', // Darker tangerine for hover
    accent: '#0893d2', // Bright teal accent
    highlight: '#fff4f0', // Light tangerine tint highlight
    muted: '#e8f4f6', // Muted ice blue

    // Status colors
    success: '#10b981', // Emerald green
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#0893d2', // Bright teal (matches accent)

    // Additional semantic colors
    border: '#dffff5', // Very light cyan border
    backgroundSecondary: '#ffffff', // White for cards/sections
    backgroundTertiary: '#eef8fa', // Slightly darker ice blue
    backgroundLight: '#fafeff', // Almost white ice
    backgroundDark: '#0d274d', // Deep navy/midnight blue for dark backgrounds
    backgroundHover: '#fff0eb', // Light tangerine hover
    primaryBlade: '#edf5f8', // Primary blade/panel color
    surface: '#ffffff', // White surface
    textSecondary: '#3e6b77', // Muted teal for secondary text
    textTertiary: '#5a8a96', // Lighter teal
    textMuted: '#7fa8b2', // Even lighter teal

    // Search highlight colors
    highlightBg: '#fff4f0', // Light tangerine highlight
    highlightBorder: '#ff6b35', // Tangerine border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on tangerine primary
    // Text on secondary background
    textOnSecondary: '#ffffff', // White text on darker tangerine
    // Text on accent background
    textOnAccent: '#ffffff', // White text on teal accent
  },

  // Component variants
  buttons: {
    primary: {
      color: '#ffffff', // White text on tangerine
      bg: 'primary',
      borderWidth: 0,
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'accent',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'accent',
      '&:hover': {
        bg: 'highlight',
      },
    },
    ghost: {
      color: 'textSecondary',
      bg: 'transparent',
      '&:hover': {
        bg: 'backgroundHover',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'text',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    caption: {
      fontSize: 1,
      color: 'textTertiary',
    },
  },

  cards: {
    primary: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 3,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: 3,
    },
  },
};
