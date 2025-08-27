import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/atom/button";
import { Plus } from "lucide-react";

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

export const Primary = {
  args: {
    children: (
      <>
        <Plus />
        <span>Add to Story</span>
      </>
    ),
  },
} satisfies Story;
export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
