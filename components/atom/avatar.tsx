import {
  Avatar as DefaultAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { on } from "node:events";
import { ComponentProps } from "react";

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

type Props = { isOnline: boolean; onClick?: () => void } & AvatarVariantProps &
  Pick<ComponentProps<typeof AvatarImage>, "alt" | "src">;

export default function Avatar({ size, isOnline, src, alt, onClick }: Props) {
  return (
    <div className="relative inline-block size-fit">
      <DefaultAvatar className={cn(avatarVariants({ size }))} onClick={onClick}>
        <AvatarImage
          className="aspect-square size-full object-cover"
          src={src}
          alt={alt}
        />
        <AvatarFallback>
          <Image
            className="aspect-square size-full object-cover"
            src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
            width={40}
            height={40}
            alt="Placeholder Image"
          />
        </AvatarFallback>
      </DefaultAvatar>

      {isOnline && (
        <span
          className={cn(
            "inline-block bg-green-500 rounded-full",
            "absolute bottom-0 right-0",
            "border border-white",
            size === "sm" || size === "md" ? "size-2" : "size-3"
          )}
          data-testid="presence-indicator"
        />
      )}
    </div>
  );
}
