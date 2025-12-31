/**
 * Collection of default themes for PrincipleMD
 */

import { Theme } from './index';

// Default theme for rendered markdown
export const defaultMarkdownTheme: Theme = {
  // Spacing scale
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
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Light, high-contrast theme
  colors: {
    text: '#1a1a1a',
    background: '#ffffff',
    primary: '#007acc',
    secondary: '#005a9e',
    accent: '#1a1a1a',
    highlight: 'rgba(0, 122, 204, 0.1)',
    muted: '#f0f0f0',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
    border: 'rgba(0, 0, 0, 0.1)',
    backgroundSecondary: '#f8f9fa',
    backgroundTertiary: '#e9ecef',
    backgroundLight: 'rgba(0, 0, 0, 0.03)',
    backgroundHover: 'rgba(0, 0, 0, 0.05)',
    surface: '#ffffff',
    textSecondary: '#555555',
    textTertiary: '#888888',
    textMuted: '#aaaaaa',
    highlightBg: 'rgba(255, 235, 59, 0.3)',
    highlightBorder: 'rgba(255, 235, 59, 0.6)',

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on blue primary
  },

  // Component variants
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      '&:hover': { bg: 'secondary' },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': { bg: 'highlight' },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': { bg: 'backgroundHover' },
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
      borderColor: 'border',
      borderRadius: 2,
    },
  },
};

// Default theme for terminals
export const defaultTerminalTheme: Theme = {
  // Spacing scale
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Courier New", Courier, monospace',
    heading: '"Courier New", Courier, monospace',
    monospace: '"Courier New", Courier, monospace',
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
    body: 1.4,
    heading: 1.2,
    tight: 1.3,
    relaxed: 1.6,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  sizes: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: [0, 2, 4, 6, 8, 12, 16, 24],
  shadows: [
    'none',
    '0 0 5px rgba(255, 193, 7, 0.1)',
    '0 0 10px rgba(255, 193, 7, 0.15)',
    '0 0 15px rgba(255, 193, 7, 0.2)',
    '0 0 20px rgba(255, 193, 7, 0.25)',
    '0 0 30px rgba(255, 193, 7, 0.3)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Amber on black retro terminal
  colors: {
    text: '#ffc107',
    background: '#000000',
    primary: '#ffc107',
    secondary: '#ffb300',
    accent: '#ffffff',
    highlight: 'rgba(255, 193, 7, 0.1)',
    muted: '#1a1a1a',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
    border: 'rgba(255, 193, 7, 0.2)',
    backgroundSecondary: '#0a0a0a',
    backgroundTertiary: '#111111',
    backgroundLight: 'rgba(255, 193, 7, 0.03)',
    backgroundHover: 'rgba(255, 193, 7, 0.05)',
    surface: '#050505',
    textSecondary: '#e0e0e0',
    textTertiary: '#b0b0b0',
    textMuted: '#808080',
    highlightBg: 'rgba(255, 193, 7, 0.2)',
    highlightBorder: 'rgba(255, 193, 7, 0.4)',

    // Text on primary background
    textOnPrimary: '#000000', // Black text on amber primary
  },

  // Component variants
  buttons: {
    primary: {
      color: 'black',
      bg: 'primary',
      borderWidth: 0,
      '&:hover': { bg: 'secondary' },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': { bg: 'highlight' },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': { bg: 'backgroundHover' },
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
      borderRadius: 0,
    },
    secondary: {
      bg: 'backgroundSecondary',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 0,
    },
  },
};

// Default theme for file editors
export const defaultEditorTheme: Theme = {
  // Spacing scale
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Typography
  fonts: {
    body: '"Fira Code", "SF Mono", Monaco, Inconsolata, monospace',
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
    '0 12px 24px rgba(0, 0, 0, 0.25)',
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50],

  // Colors - Dark theme for code editors
  colors: {
    text: '#d4d4d4',
    background: '#1e1e1e',
    primary: '#569cd6',
    secondary: '#408ac9',
    accent: '#c586c0',
    highlight: 'rgba(86, 156, 214, 0.1)',
    muted: '#2a2a2a',
    success: '#6a9955',
    warning: '#d18616',
    error: '#f44747',
    info: '#569cd6',
    border: 'rgba(255, 255, 255, 0.1)',
    backgroundSecondary: '#252526',
    backgroundTertiary: '#333333',
    backgroundLight: 'rgba(255, 255, 255, 0.03)',
    backgroundHover: 'rgba(255, 255, 255, 0.05)',
    surface: '#252526',
    textSecondary: '#cccccc',
    textTertiary: '#999999',
    textMuted: '#666666',
    highlightBg: 'rgba(255, 235, 59, 0.2)',
    highlightBorder: 'rgba(255, 235, 59, 0.4)',

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on blue primary
  },

  // Component variants
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      '&:hover': { bg: 'secondary' },
    },
    secondary: {
      color: 'primary',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      '&:hover': { bg: 'highlight' },
    },
    ghost: {
      color: 'text',
      bg: 'transparent',
      '&:hover': { bg: 'backgroundHover' },
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
