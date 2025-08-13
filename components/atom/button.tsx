import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      primary: cn(
        "cursor-pointer",
        "bg-primary text-primary-foreground shadow-lg",
        "not-disabled:hover:brightness-95",
        "not-disabled:active:scale-95 active:shadow-none",
        "focus-visible:outline focus-visible:outline-primary focus-visible:outline-offset-4",
        "disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none"
      ),
    },
    size: { md: "h-9 px-4 rounded-md" },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type Props = ComponentProps<"button">;
export default function Button({ ...rest }: Props) {
  return <button className={cn(buttonVariants())} {...rest} />;
}
