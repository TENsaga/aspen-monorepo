import { DEFAULT_THEME, Group, Stack } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
    autoContrast: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Variants: Story = {
  args: {},
  render: () => (
    <Group>
      <Button variant="default">Default</Button>
      <Button variant="filled">Filled</Button>
      <Button variant="light">Light</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="transparent">Transparent</Button>
      <Button variant="white">White</Button>
    </Group>
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <Group>
      <Button size="xs">Button (xs)</Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
    </Group>
  ),
};

export const Colors: Story = {
  args: {},
  render: () => (
    <Stack>
      {Object.keys(DEFAULT_THEME.colors).map((color, index) => (
        <Group key={index}>
          {DEFAULT_THEME.colors[color]?.map(
            (hex, index) =>
              index !== 9 && (
                <Button autoContrast color={hex} key={index}>
                  Button
                </Button>
              ),
          )}
        </Group>
      ))}
    </Stack>
  ),
};
