import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import Avatar, { Size } from "@/components/atom/avatar";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"];

const meta = {
  title: "Design System/Atom/Button",
  component: Avatar,
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: sizeOptions,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = {
  args: {
    size: "sm",
  },
} satisfies Story;
export const Small = {
  args: { size: "sm" },
} satisfies Story;
export const Large = {
  args: { size: "lg" },
} satisfies Story;
export const XLarge = {
  args: { size: "xl" },
} satisfies Story;

export const OnlineIndicator = {
  args: { isOnline: true },
} satisfies Story;
