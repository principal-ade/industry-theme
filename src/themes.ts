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
