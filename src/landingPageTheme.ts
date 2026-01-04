/**
 * Landing Page Theme - Modern tech/SaaS theme with cyan accents
 * Based on the Principal AI landing page design system
 */

import { Theme } from './index';

export const landingPageTheme: Theme = {
  // Spacing scale (used for margin, padding, etc.)
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 128],

  // Typography - Modern, clean system fonts
  fonts: {
    body: 'Inter, "Geist Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    monospace: '"SF Mono", Monaco, Inconsolata, "Fira Code", monospace',
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
    heading: 1.2,
    tight: 1.05,
    relaxed: 1.7,
  },

  // Layout
  breakpoints: ['640px', '768px', '1024px', '1280px', '1400px'],
  sizes: [16, 32, 64, 128, 200, 240, 256, 300, 512, 740, 768, 820, 900, 1024, 1200, 1400, 1536],
  radii: [0, 2, 4, 6, 7, 8, 9, 10, 12, 14, 16, 24],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 4px 12px rgba(0, 194, 255, 0.4)', // Cyan glow
    '0 6px 24px rgba(0, 194, 255, 0.1)', // Subtle cyan shadow
    '0 8px 32px rgba(0, 0, 0, 0.4)', // Deep shadow for dropdowns
  ],
  zIndices: [0, 1, 10, 20, 30, 40, 50, 1000],

  // Colors - Modern dark theme with cyan accents
  colors: {
    // Base colors
    text: '#ffffff', // Pure white for primary text
    background: '#000000', // Pure black background
    primary: '#00C2FF', // Bright cyan - main brand color
    secondary: '#0098CC', // Darker cyan for secondary actions
    accent: '#0066FF', // Blue accent
    highlight: '#001d26', // Dark cyan highlight
    muted: '#1a1a1a', // Very dark gray

    // Status colors
    success: '#4caf50', // Green
    warning: '#ff9800', // Orange
    error: '#f44336', // Red
    info: '#2196f3', // Blue

    // Additional semantic colors
    border: '#002733', // Dark cyan border
    backgroundSecondary: '#0a1628', // Deep blue-black
    backgroundTertiary: '#0f1c2e', // Lighter blue-black
    backgroundLight: '#00080a', // Very subtle cyan tint
    backgroundHover: '#00131a', // Subtle cyan hover
    surface: '#000000', // Black for overlays
    textSecondary: '#d1d5db', // Light gray for secondary text
    textTertiary: '#9ca3af', // Medium gray for tertiary text
    textMuted: '#6b7280', // Darker gray for muted text

    // Search highlight colors
    highlightBg: '#403b0f', // Yellow highlight
    highlightBorder: '#80761e', // Stronger yellow for border

    // Text on primary background
    textOnPrimary: '#000000', // Black text on cyan primary

    // Additional brand colors used in gradients
    // These are not part of the standard Theme interface but used in components
    // primaryGradientStart: '#00D9FF', // Lighter cyan for gradients
    // primaryGradientMid: '#0099FF', // Mid cyan
    // primaryGradientEnd: '#0066FF', // Blue end
    // secondaryGradientStart: '#00C2FF', // Cyan start
    // secondaryGradientEnd: '#0098CC', // Cyan end
  },

  // Component variants
  buttons: {
    primary: {
      color: '#000000',
      bg: '#00C2FF',
      borderWidth: 0,
      padding: '8px 20px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        bg: '#00D9FF',
      },
    },
    secondary: {
      color: '#00C2FF',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#003a4d',
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        bg: '#00131a',
        borderColor: '#00C2FF',
      },
    },
    ghost: {
      color: '#00C2FF',
      bg: 'transparent',
      borderWidth: 0,
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      '&:hover': {
        color: '#00D9FF',
        bg: '#00131a',
      },
    },
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: '#ffffff',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
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
      bg: '#000a0d',
      border: '1px solid',
      borderColor: '#002733',
      borderRadius: 4,
    },
  },
};

// Light mode variant for the landing page theme
export const landingPageLightTheme: Theme = {
  ...landingPageTheme,

  colors: {
    // Base colors - Inverted for light mode
    text: '#1a1a1a', // Almost black
    background: '#ffffff', // Pure white
    primary: '#0098CC', // Slightly darker cyan for better contrast
    secondary: '#00C2FF', // Lighter cyan for hover
    accent: '#0066FF', // Blue accent
    highlight: '#e6f5fa', // Light cyan highlight
    muted: '#f0f0f0', // Light gray

    // Status colors
    success: '#4caf50', // Green
    warning: '#ff9800', // Orange
    error: '#f44336', // Red
    info: '#2196f3', // Blue

    // Additional semantic colors
    border: '#cceaf5', // Light cyan border
    backgroundSecondary: '#f8f9fa', // Very light gray
    backgroundTertiary: '#e9ecef', // Light gray
    backgroundLight: '#f7fcfd', // Very subtle cyan tint
    backgroundHover: '#f2fafc', // Subtle cyan hover
    surface: '#ffffff', // White
    textSecondary: '#555555', // Dark gray for secondary text
    textTertiary: '#888888', // Medium gray for tertiary text
    textMuted: '#aaaaaa', // Light gray for muted text

    // Search highlight colors
    highlightBg: '#fff9c4', // Yellow highlight
    highlightBorder: '#fff389', // Stronger yellow for border

    // Text on primary background
    textOnPrimary: '#ffffff', // White text on cyan primary
  },

  buttons: {
    primary: {
      color: '#ffffff',
      bg: '#0098CC',
      borderWidth: 0,
      padding: '8px 20px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        bg: '#007aa8',
      },
    },
    secondary: {
      color: '#0098CC',
      bg: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#b2e0f0',
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      '&:hover': {
        bg: '#f2fafc',
        borderColor: '#0098CC',
      },
    },
    ghost: {
      color: '#0098CC',
      bg: 'transparent',
      borderWidth: 0,
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      '&:hover': {
        color: '#007aa8',
        bg: '#f2fafc',
      },
    },
  },
};
