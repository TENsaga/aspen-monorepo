import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DangerButton } from './DangerButton';

const meta: Meta<typeof DangerButton> = {
  title: 'Components/Button',
  component: DangerButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Danger: Story = {
  args: {
    children: 'Button',
  },
};
