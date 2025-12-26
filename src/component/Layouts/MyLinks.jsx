"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLinks = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${pathName.startsWith(href) && "text-primary"}`}
    >
      {children}
    </Link>
  );
};

export default MyLinks;
