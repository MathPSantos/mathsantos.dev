"use client";

import {
  GithubLogo as GithubIcon,
  LinkedinLogo as LinkedInIcon,
  Envelope as MailIcon,
} from "@phosphor-icons/react";

import { Link } from "./Link";
import { cn } from "@core/helpers/styles";

const ExternalLinks = ({ className }: { className?: string }) => (
  <ul className={cn("flex gap-3", className)}>
    <li>
      <Link
        href="https://github.com/MathPSantos"
        target="_blank"
        label="Github"
        Icon={GithubIcon}
      />
    </li>
    <li>
      <Link
        href="https://www.linkedin.com/in/mathpsantos/"
        target="_blank"
        label="LinkedIn"
        Icon={LinkedInIcon}
      />
    </li>
    <li>
      <Link
        href="mailto:mathsantos.dev@gmail.com"
        label="Email"
        Icon={MailIcon}
      />
    </li>
  </ul>
);

export default ExternalLinks;
