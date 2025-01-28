import { Header } from '@aspen-ui';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  args: {
    links: [
      { link: '/about', label: 'Features' },
      { link: '/pricing', label: 'Pricing' },
      { link: '/learn', label: 'Learn' },
      { link: '/community', label: 'Community' },
    ],
    logoURL: '/logo.jpg',
  },
};
