// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
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

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     expanded: true, // Adds the description and default columns
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

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
