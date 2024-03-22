import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "TextFields/PrimaryButton", //경로
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div style={{ width: "360px", border: "1px solid red" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        option: ["dark", "light", "socail", "text"],
      },
    },
    children: { control: "text", description: "버튼 text", defaultValue: "icon" },
    onClick: { control: "clicked", description: "버튼 클릭 이벤트" },
    isDisabled: { control: "boolean", description: "버튼 비활성화 여부", defaultValue: false },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    isDisabled: false,
    theme: "dark",
  },
};
export const Light: Story = {
  args: {
    children: "Button",
    isDisabled: false,
    theme: "light",
  },
};
export const Social: Story = {
  args: {
    children: "Button",
    isDisabled: false,
    theme: "social",
  },
};
export const Text: Story = {
  args: {
    children: "Button",
    isDisabled: false,
    theme: "text",
  },
};
