import type { Preview } from '@storybook/react-vite';

// Ensure fullscreen stories fill the iframe properly
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Themes', 'Components', '*'],
      },
    },
  },
};

export default preview;
