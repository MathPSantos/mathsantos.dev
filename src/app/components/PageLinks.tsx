"use client";

import {
  Suitcase as AboutIcon,
  Kanban as ProjectsIcon,
  Books as BlogIcon,
} from "@phosphor-icons/react";

import { Link } from "./Link";
import { cn } from "@core/helpers/styles";

const PageLinks = ({ className }: { className?: string }) => (
  <ul className={cn("flex gap-3", className)}>
    <li>
      <Link href="/" label="About" Icon={AboutIcon} />
    </li>
    <li>
      <Link href="/projects" label="Projects" Icon={ProjectsIcon} />
    </li>
    <li>
      <Link href="/blog" label="Blog" Icon={BlogIcon} />
    </li>
  </ul>
);

export default PageLinks;
