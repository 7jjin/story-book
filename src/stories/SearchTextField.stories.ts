import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SearchTextField from "../components/SearchTextField";

const meta = {
  title: "TextFields/SearchTextField", //경로
  component: SearchTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", description: "텍스트 필드의 placeholder", defaultValue: "텍스트를 입력해주세요" },
    value: { control: "text", description: "텍스트 필드의 값", defaultValue: "" },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onClick: { action: "clicked", description: "텍스트 필드 값 변경 이벤트" },
    iconAlt: { control: "text", description: "이미지 alt 속성", defaultValue: "icon" },
    iconPath: { control: "text", description: "이미지의 경로", defaultValue: "" },
    id: { control: "text", description: "텍스트 필드의 id", defaultValue: "" },
  },
} satisfies Meta<typeof SearchTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icon/ic-public-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    id: "",
    onClick: fn(),
    onChange: fn(),
  },
};
