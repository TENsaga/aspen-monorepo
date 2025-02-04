import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";

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
    (Story, context) => {
      // Get the selected theme
      const theme = context.globals.theme || "light";

      // Ensure `dark` class is applied for Tailwind
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return <div className="light">{Story()}</div>;
    },
  ],
};

export default preview;
