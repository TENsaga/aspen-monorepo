// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "../src/index.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  tags: ["autodocs"],
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
