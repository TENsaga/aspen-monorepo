import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/index.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      disable: true, // Prevent default backgrounds from interfering
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark bg-gray-950",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
