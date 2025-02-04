import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { Preview } from '@storybook/react';
import React from 'react';

export const decorators = [
  (Story) => (
    <MantineProvider>
      <Story />
    </MantineProvider>
  ),
];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
