import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CancelButton } from "./CancelButton";

const meta: Meta<typeof CancelButton> = {
  title: "Components/Button",
  component: CancelButton,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Cancel: Story = {
  args: {
    children: "Button",
  },
};
