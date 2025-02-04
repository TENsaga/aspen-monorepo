import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GhostButton } from './GhostButton';

const meta: Meta<typeof GhostButton> = {
  title: 'Components/Button',
  component: GhostButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Ghost: Story = {
  args: {
    children: 'Button',
  },
};
