import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/atom/button";

const meta = {
  title: "Design System/Atom/Button",
  component: Button,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

// 2. Stories
type Story = StoryObj<typeof Button>;

export const Primary = {} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
