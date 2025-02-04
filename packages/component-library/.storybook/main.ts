import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    config.plugins?.push(tsconfigPaths());
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@component-library": path.resolve(__dirname, "../src/main.ts"),
        },
      },
    });
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, "../tsconfig.app.json"),
    },
  },
};
export default config;
