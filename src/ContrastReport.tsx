import React from 'react';

import { ContrastLevel, ContrastResult, evaluateThemeContrast, WCAG_THRESHOLDS } from './contrast';

import { Theme } from './index';

export interface ContrastReportProps {
  /** A single theme to audit. */
  theme?: Theme;
  /** Multiple named themes to audit side by side. */
  themes?: { name: string; theme: Theme }[];
  title?: string;
}

const LEVEL_STYLE: Record<ContrastLevel, { bg: string; fg: string; label: string }> = {
  AAA: { bg: '#0f7b3f', fg: '#ffffff', label: 'AAA' },
  AA: { bg: '#1f6feb', fg: '#ffffff', label: 'AA' },
  fail: { bg: '#cf222e', fg: '#ffffff', label: 'FAIL' },
};

const ui = {
  fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  text: '#1c2128',
  subtle: '#57606a',
  border: '#d0d7de',
  surface: '#ffffff',
  panel: '#f6f8fa',
};

const Badge: React.FC<{ level: ContrastLevel }> = ({ level }) => {
  const s = LEVEL_STYLE[level];
  return (
    <span
      style={{
        display: 'inline-block',
        minWidth: 44,
        textAlign: 'center',
        padding: '2px 8px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.4,
        backgroundColor: s.bg,
        color: s.fg,
      }}
    >
      {s.label}
    </span>
  );
};

const Swatch: React.FC<{ fg: string; bg: string }> = ({ fg, bg }) => (
  <span
    title={`${fg} on ${bg}`}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 24,
      borderRadius: 4,
      border: `1px solid ${ui.border}`,
      backgroundColor: bg,
      color: fg,
      fontSize: 13,
      fontWeight: 700,
    }}
  >
    Aa
  </span>
);

const Row: React.FC<{ r: ContrastResult }> = ({ r }) => {
  const failed = r.level === 'fail';
  return (
    <tr style={{ backgroundColor: failed ? '#fff5f5' : 'transparent' }}>
      <td style={cell}>
        <Swatch fg={r.fgColor} bg={r.bgColor} />
      </td>
      <td style={{ ...cell, fontWeight: 500 }}>
        {r.pair.label}
        <div style={{ fontSize: 11, color: ui.subtle, fontFamily: 'monospace' }}>
          {r.fgColor} / {r.bgColor}
        </div>
      </td>
      <td style={{ ...cell, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        <span style={{ fontWeight: 700, color: failed ? '#cf222e' : ui.text }}>
          {r.ratio === null ? '—' : `${r.ratio.toFixed(2)}:1`}
        </span>
      </td>
      <td
        style={{
          ...cell,
          textAlign: 'right',
          color: ui.subtle,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {r.required}:1
      </td>
      <td style={{ ...cell, textAlign: 'center', textTransform: 'capitalize', color: ui.subtle }}>
        {r.pair.use}
      </td>
      <td style={{ ...cell, textAlign: 'center' }}>
        <Badge level={r.level} />
      </td>
    </tr>
  );
};

const cell: React.CSSProperties = {
  padding: '8px 12px',
  borderBottom: `1px solid ${ui.border}`,
  fontSize: 13,
  verticalAlign: 'middle',
};

const headCell: React.CSSProperties = {
  padding: '8px 12px',
  textAlign: 'left',
  fontSize: 11,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  color: ui.subtle,
  borderBottom: `2px solid ${ui.border}`,
};

const ThemeTable: React.FC<{ name: string; theme: Theme }> = ({ name, theme }) => {
  const report = evaluateThemeContrast(theme);
  const fails = report.failures.length;

  return (
    <section
      style={{
        marginBottom: 28,
        border: `1px solid ${ui.border}`,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: ui.surface,
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '12px 16px',
          backgroundColor: ui.panel,
          borderBottom: `1px solid ${ui.border}`,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 16, color: ui.text }}>{name}</h3>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: 999,
            backgroundColor: report.passesAA ? '#dafbe1' : '#ffebe9',
            color: report.passesAA ? '#0f7b3f' : '#cf222e',
          }}
        >
          {report.passesAA ? '✓ Passes AA' : `${fails} AA failure${fails === 1 ? '' : 's'}`}
        </span>
      </header>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headCell}>Sample</th>
            <th style={headCell}>Pair</th>
            <th style={{ ...headCell, textAlign: 'right' }}>Ratio</th>
            <th style={{ ...headCell, textAlign: 'right' }}>Req. (AA)</th>
            <th style={{ ...headCell, textAlign: 'center' }}>Use</th>
            <th style={{ ...headCell, textAlign: 'center' }}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {report.results.map((r, i) => (
            <Row key={i} r={r} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

/**
 * Renders a WCAG contrast audit for one or more themes — a deterministic,
 * exhaustive view of every declared foreground/background pairing with its
 * ratio and AA/AAA grade. Complements `@storybook/addon-a11y`, which only
 * checks contrast on actually-rendered text.
 */
export const ContrastReport: React.FC<ContrastReportProps> = ({
  theme,
  themes,
  title = 'WCAG Contrast Report',
}) => {
  const list = themes ?? (theme ? [{ name: title, theme }] : []);

  return (
    <div
      style={{
        fontFamily: ui.fontFamily,
        color: ui.text,
        backgroundColor: ui.panel,
        padding: 24,
        minHeight: '100vh',
      }}
    >
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: 22 }}>{title}</h1>
        <p style={{ margin: 0, fontSize: 13, color: ui.subtle, maxWidth: 720 }}>
          WCAG 2.x contrast ratios for each theme&apos;s declared color roles. Text pairs require AA{' '}
          {WCAG_THRESHOLDS.text.AA}:1 (AAA {WCAG_THRESHOLDS.text.AAA}:1); large text requires{' '}
          {WCAG_THRESHOLDS.large.AA}:1; borders and other non-text UI require{' '}
          {WCAG_THRESHOLDS.ui.AA}:1.
        </p>
      </header>
      {list.map((t) => (
        <ThemeTable key={t.name} name={t.name} theme={t.theme} />
      ))}
    </div>
  );
};
