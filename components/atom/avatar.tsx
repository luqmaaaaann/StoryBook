import {
  Avatar as DefaultAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva("block rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-9",
      xl: "size-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarVariantProps = VariantProps<typeof avatarVariants>;
export type Size = AvatarVariantProps["size"];

type Props = { isOnline: boolean } & AvatarVariantProps;

export default function Avatar({ size, isOnline }: Props) {
  return (
    <div className="relative inline-block">
      <DefaultAvatar className={cn(avatarVariants({ size }))}>
        <AvatarImage
          className="aspect-square size-full object-cover"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </DefaultAvatar>
      {isOnline && (
        <span
          className={cn(
            "inline-block bg-green-500 rounded-full",
            "absolute bottom-0 right-0",
            "border border-white",
            size === "sm" || size === "md" ? "size-2" : "size-3"
          )}
        />
      )}
    </div>
  );
}
