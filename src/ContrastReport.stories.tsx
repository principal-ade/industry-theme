import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContrastReport } from './ContrastReport';
import {
  terminalTheme,
  regalTheme,
  matrixTheme,
  matrixMinimalTheme,
  slateTheme,
  slateNeonTheme,
  slateGoldTheme,
  iceTangerineTheme,
  iceTangerineDarkTheme,
  enterpriseTheme,
  neuralPulseTheme,
  humanCentricTheme,
} from './themes';

const allThemes = [
  { name: 'Terminal', theme: terminalTheme },
  { name: 'Regal', theme: regalTheme },
  { name: 'Matrix', theme: matrixTheme },
  { name: 'Matrix Minimal', theme: matrixMinimalTheme },
  { name: 'Slate', theme: slateTheme },
  { name: 'Slate Neon', theme: slateNeonTheme },
  { name: 'Slate Gold', theme: slateGoldTheme },
  { name: 'Ice Tangerine', theme: iceTangerineTheme },
  { name: 'Ice Tangerine Dark', theme: iceTangerineDarkTheme },
  { name: 'Enterprise', theme: enterpriseTheme },
  { name: 'Neural Pulse', theme: neuralPulseTheme },
  { name: 'Human-Centric', theme: humanCentricTheme },
];

const meta: Meta<typeof ContrastReport> = {
  title: 'Themes/Contrast Report',
  component: ContrastReport,
  parameters: {
    layout: 'fullscreen',
    // This story renders raw color swatches by design; axe would double-report
    // the same contrast findings the table already surfaces.
    a11y: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof ContrastReport>;

/** WCAG audit across every theme in the library. */
export const AllThemes: Story = {
  args: {
    title: 'WCAG Contrast Report — All Themes',
    themes: allThemes,
  },
};

/** Tangerine family + Slate Neon side by side. */
export const TangerineAndSlateNeon: Story = {
  args: {
    title: 'Ice Tangerine, Ice Tangerine Dark & Slate Neon',
    themes: [
      { name: 'Ice Tangerine', theme: iceTangerineTheme },
      { name: 'Ice Tangerine Dark', theme: iceTangerineDarkTheme },
      { name: 'Slate Neon', theme: slateNeonTheme },
    ],
  },
};

export const Terminal: Story = {
  args: { title: 'Terminal Theme', theme: terminalTheme },
};

