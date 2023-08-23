import type { Meta, StoryObj } from "@storybook/react";

import { Block } from "./block";

const meta: Meta<typeof Block> = {
  title: "Block",
  component: Block,
  args: {
    children: "Block",
    className: "",
  },
  argTypes: {},
};

type Story = StoryObj<typeof Block>;

export const Default: Story = {
  render: (args) => <Block {...args} />,
};

export default meta;
