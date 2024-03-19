import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField", //경로
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    errormessage: { control: "text", description: "텍스트 필드의 에러 메시지", defaultValue: "" },
    placeholder: { control: "text", description: "텍스트 필드의 placeholder", defaultValue: "텍스트를 입력해주세요" },
    value: { control: "text", description: "텍스트 필드의 값", defaultValue: "" },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    iconAlt: { control: "text", description: "이미지 alt 속성", defaultValue: "icon" },
    iconPath: { control: "text", description: "이미지의 경로", defaultValue: "" },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isError: { control: "boolean", description: "에러 상태 여부", defaultValue: false },
    id: { control: "text", description: "텍스트 필드의 id", defaultValue: "" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icon/ic-public-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errormessage: "텍스트를 확인해주세요",
    isError: false,
    id: "",
  },
};
