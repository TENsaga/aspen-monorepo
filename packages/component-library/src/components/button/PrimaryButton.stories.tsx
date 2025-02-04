import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PrimaryButton } from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/Button",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
