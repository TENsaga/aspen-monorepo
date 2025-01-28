import { NavLink } from '@aspen-ui';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof NavLink> = {
  title: 'Components/NavLink',
  component: NavLink,
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    link: '/default',
    children: 'Default',
    isActive: false,
    setActive: () => null,
  },
};

export const Active: Story = {
  args: {
    link: '/active',
    children: 'Active',
    isActive: true,
    setActive: () => null,
  },
};
