import { type Meta, type StoryObj } from "@storybook/nextjs-vite";
import Avatar, { Size } from "@/components/atom/avatar";
import { expect, fn } from "storybook/test";
import { b } from "vitest/dist/chunks/suite.d.FvehnV49.js";
import { useState } from "react";
import { Button } from "../ui/button";

const sizeOptions: Size[] = ["sm", "md", "lg", "xl"];

/**
 * Reusable Avatar component
 * that supports different sizes
 * and render placeholder image
 * when src attribute is not provided,
 * and also it shows presence indicator
 * when user is online.
 * */
const meta = {
  title: "Design System/Atom/Button",
  component: Avatar,
  args: {
    src: "https://images.unsplash.com/photo-1751528962027-ac9f0370ff5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "md",
    isOnline: false,
    alt: "Avatar Image",
    onClick: fn(),
  },
  argTypes: {
    src: {
      description:
        "Image source, if the attribute is not provided, then avatar will show placeholder image.",
    },
    alt: {
      description:
        "Optional, the text will be showing up somehow image is not available.",
    },
    isOnline: {
      description: "If true, avatar will have presence indicator.",
    },
    size: {
      description: "default md, it changes avatar size",
      control: { type: "radio" },
      options: sizeOptions,
    },
    onClick: {
      description: "demo purpose, remove later.",
    },
  },
  tags: ["autodocs"],
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

export const PlaceholderImage = {
  args: {
    src: "Invalid Image",
  },
} satisfies Story;

export const DynamicPresenceIndicator = {
  argTypes: {
    isOnline: {
      control: { disable: true },
    },
  },
  render: (args) => {
    const [isOnline, setIsOnline] = useState<boolean>(false);
    return (
      <div className="flex flex-col gap-4 items-start">
        <Avatar {...args} isOnline={isOnline} />
        <p>Is Online: {JSON.stringify(isOnline)}</p>
        <Button onClick={() => setIsOnline((prev) => !prev)}>
          {isOnline ? "Set Offline" : "Set Online"}
        </Button>
      </div>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const button = await canvas.findByRole("button", { name: /connect/gi });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const indicator = await canvas.findByTestId("presence-indicator");
    expect(indicator).toBeInTheDocument();
  },
} satisfies Story;
