import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeShowcase } from './ThemeShowcase';
import {
  terminalTheme,
  regalTheme,
  matrixTheme,
  slateTheme,
  landingPageTheme,
  landingPageLightTheme,
} from './themes';

const meta: Meta<typeof ThemeShowcase> = {
  title: 'Themes/ThemeShowcase',
  component: ThemeShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    theme: {
      control: false,
    },
    title: {
      control: 'text',
    },
    showValues: {
      control: 'boolean',
    },
    sections: {
      control: 'check',
      options: ['colors', 'typography', 'spacing', 'shadows', 'radii'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeShowcase>;

export const Terminal: Story = {
  args: {
    theme: terminalTheme,
    title: 'Terminal Theme',
    showValues: true,
  },
};

export const Regal: Story = {
  args: {
    theme: regalTheme,
    title: 'Regal Theme',
    showValues: true,
  },
};

export const Matrix: Story = {
  args: {
    theme: matrixTheme,
    title: 'Matrix Theme',
    showValues: true,
  },
};

export const Slate: Story = {
  args: {
    theme: slateTheme,
    title: 'Slate Theme',
    showValues: true,
  },
};

export const LandingPageDark: Story = {
  args: {
    theme: landingPageTheme,
    title: 'Landing Page Theme (Dark)',
    showValues: true,
  },
};

export const LandingPageLight: Story = {
  args: {
    theme: landingPageLightTheme,
    title: 'Landing Page Theme (Light)',
    showValues: true,
  },
};

export const ColorsOnly: Story = {
  args: {
    theme: terminalTheme,
    title: 'Colors Section Only',
    showValues: true,
    sections: ['colors'],
  },
};

export const TypographyOnly: Story = {
  args: {
    theme: terminalTheme,
    title: 'Typography Section Only',
    showValues: true,
    sections: ['typography'],
  },
};

export const WithoutValues: Story = {
  args: {
    theme: terminalTheme,
    title: 'Theme Showcase (Without Values)',
    showValues: false,
  },
};
