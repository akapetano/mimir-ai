"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

interface INavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: INavLinkProps) {
  const segment = useSelectedLayoutSegment();
  const active = `/${segment}` === href;

  return (
    <Link
      className={clsx("text-white", active ? "underline text-blue" : "")}
      href={href}
    >
      {children}
    </Link>
  );
}
