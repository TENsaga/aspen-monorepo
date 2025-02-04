import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChevronRight } from 'lucide-react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    children: <ChevronRight />,
    testID: 'icon',
  },
};
