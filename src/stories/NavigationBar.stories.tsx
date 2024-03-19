import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "TextFields/NavigationBar", //경로
  component: NavigationBar,
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
    isDark: { control: "boolean", description: "다크모드 여부", defaultValue: false },
    showBackButton: { control: "boolean", description: "뒤로가기 버튼 여부", defaultValue: true },
    showCloseButton: { control: "boolean", description: "닫기 버튼 여부", defaultValue: true },
    showTitle: { control: "boolean", description: "제목 여부", defaultValue: true },
    title: { control: "text", description: "타이틀", defaultValue: "타이틀" },
    onBackButtonClick: { control: "clicked", description: "뒤로가기 버튼 클릭 이벤트" },
    onCloseButtonClick: { control: "clicked", description: "닫기 버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
    isDark: false,
  },
};
