import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./appButton";

const meta: Meta<typeof AppButton> = {
  title: "AppButton",
  component: AppButton,
  args: {
    children: "AppButton",
    className: "",
  },
  argTypes: {},
};

type Story = StoryObj<typeof AppButton>;

export const Default: Story = {
  render: (args) => <AppButton {...args} />,
};

export default meta;
