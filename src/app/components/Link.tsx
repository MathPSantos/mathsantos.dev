import { Icon } from "@phosphor-icons/react";
import NextLink from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export const Link = ({
  href,
  Icon,
  label,
  target,
}: {
  href: string;
  Icon: Icon;
  label: string;
  target?: HTMLAttributeAnchorTarget;
}) => (
  <NextLink
    href={href}
    target={target}
    className="group flex items-center justify-center rounded-sm px-1.5 gap-1.5 h-6 text-gray-300 hover:bg-white/5 text-[0.813rem] transition-colors"
  >
    <Icon
      weight="fill"
      className="w-4 text-gray-400 group-hover:text-amber-500 transition-colors"
    />{" "}
    {label}
  </NextLink>
);
