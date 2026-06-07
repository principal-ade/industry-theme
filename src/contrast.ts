/**
 * WCAG 2.x contrast evaluation for themes.
 *
 * Implements the relative-luminance / contrast-ratio formulas from
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio and provides a
 * declarative audit of the meaningful foreground/background pairings in a
 * {@link Theme}. This is the deterministic, exhaustive counterpart to the
 * axe-core checks surfaced by `@storybook/addon-a11y`: axe only inspects text
 * that is actually rendered, whereas this audits every declared color role.
 */

import { Theme } from './index';

/** WCAG 2.x contrast thresholds. */
export const WCAG_THRESHOLDS = {
  /** Normal-size text (< 18pt, or < 14pt bold). */
  text: { AA: 4.5, AAA: 7 },
  /** Large text (>= 18pt, or >= 14pt bold). */
  large: { AA: 3, AAA: 4.5 },
  /** Non-text UI components & graphical objects (borders, icons, focus rings). */
  ui: { AA: 3, AAA: 3 },
} as const;

export type ContrastUse = keyof typeof WCAG_THRESHOLDS;
export type ContrastLevel = 'AAA' | 'AA' | 'fail';

/** Parse a CSS color string into an [r, g, b] triple in the 0–255 range. */
export function parseColor(input: string): [number, number, number] | null {
  if (!input) return null;
  const color = input.trim().toLowerCase();

  // #rgb / #rgba / #rrggbb / #rrggbbaa
  if (color.startsWith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    if (hex.length === 6 || hex.length === 8) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      if ([r, g, b].some((n) => Number.isNaN(n))) return null;
      return [r, g, b];
    }
    return null;
  }

  // rgb(...) / rgba(...)
  const rgbMatch = color.match(/^rgba?\(([^)]+)\)$/);
  if (rgbMatch) {
    const parts = rgbMatch[1]
      .split(/[,/\s]+/)
      .filter(Boolean)
      .slice(0, 3);
    if (parts.length < 3) return null;
    const channels = parts.map((p) =>
      p.endsWith('%') ? Math.round((parseFloat(p) / 100) * 255) : parseFloat(p),
    );
    if (channels.some((n) => Number.isNaN(n))) return null;
    return [channels[0], channels[1], channels[2]];
  }

  return null;
}

/** Relative luminance per WCAG, from an [r, g, b] triple (0–255). */
export function relativeLuminance([r, g, b]: [number, number, number]): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * WCAG contrast ratio between two colors (1–21). Returns `null` if either
 * color cannot be parsed.
 */
export function contrastRatio(fg: string, bg: string): number | null {
  const a = parseColor(fg);
  const b = parseColor(bg);
  if (!a || !b) return null;
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Classify a ratio against the thresholds for a given use. */
export function gradeContrast(ratio: number, use: ContrastUse): ContrastLevel {
  const t = WCAG_THRESHOLDS[use];
  if (ratio >= t.AAA) return 'AAA';
  if (ratio >= t.AA) return 'AA';
  return 'fail';
}

type ColorKey = keyof Theme['colors'];

/** A foreground/background pairing to audit. */
export interface ContrastPair {
  label: string;
  fg: ColorKey;
  bg: ColorKey;
  use: ContrastUse;
}

/**
 * The meaningful color pairings every theme should satisfy. Text-on-surface
 * pairs require AA 4.5:1; borders/graphical roles require AA 3:1.
 */
export const CONTRAST_PAIRS: ContrastPair[] = [
  // Body & secondary text on the main surfaces
  { label: 'text on background', fg: 'text', bg: 'background', use: 'text' },
  { label: 'text on surface', fg: 'text', bg: 'surface', use: 'text' },
  { label: 'text on backgroundSecondary', fg: 'text', bg: 'backgroundSecondary', use: 'text' },
  { label: 'textSecondary on background', fg: 'textSecondary', bg: 'background', use: 'text' },
  { label: 'textTertiary on background', fg: 'textTertiary', bg: 'background', use: 'text' },
  { label: 'textMuted on background', fg: 'textMuted', bg: 'background', use: 'text' },

  // Text drawn on top of brand colors (e.g. button labels)
  { label: 'textOnPrimary on primary', fg: 'textOnPrimary', bg: 'primary', use: 'text' },
  { label: 'textOnSecondary on secondary', fg: 'textOnSecondary', bg: 'secondary', use: 'text' },
  { label: 'textOnAccent on accent', fg: 'textOnAccent', bg: 'accent', use: 'text' },

  // Brand color used as text/links/headings on the main background
  { label: 'primary on background', fg: 'primary', bg: 'background', use: 'large' },

  // Non-text UI: status colors and borders must clear 3:1
  { label: 'success on background', fg: 'success', bg: 'background', use: 'ui' },
  { label: 'warning on background', fg: 'warning', bg: 'background', use: 'ui' },
  { label: 'error on background', fg: 'error', bg: 'background', use: 'ui' },
  { label: 'info on background', fg: 'info', bg: 'background', use: 'ui' },
  { label: 'border on background', fg: 'border', bg: 'background', use: 'ui' },
  { label: 'border on surface', fg: 'border', bg: 'surface', use: 'ui' },
];

export interface ContrastResult {
  pair: ContrastPair;
  fgColor: string;
  bgColor: string;
  ratio: number | null;
  /** Threshold required for AA at this pair's use. */
  required: number;
  level: ContrastLevel;
}

export interface ThemeContrastReport {
  results: ContrastResult[];
  /** Pairs that fail AA. */
  failures: ContrastResult[];
  /** True when every parseable pair clears AA. */
  passesAA: boolean;
}

/** Run the full contrast audit for a single theme. */
export function evaluateThemeContrast(theme: Theme): ThemeContrastReport {
  const results: ContrastResult[] = CONTRAST_PAIRS.map((pair) => {
    const fgColor = (theme.colors[pair.fg] as string) ?? '';
    const bgColor = (theme.colors[pair.bg] as string) ?? '';
    const ratio = contrastRatio(fgColor, bgColor);
    const required = WCAG_THRESHOLDS[pair.use].AA;
    const level = ratio === null ? 'fail' : gradeContrast(ratio, pair.use);
    return { pair, fgColor, bgColor, ratio, required, level };
  });

  const failures = results.filter((r) => r.level === 'fail');
  return { results, failures, passesAA: failures.length === 0 };
}
