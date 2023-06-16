"use client";
import { INavItem } from "@/helpers/interfaces";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavItem({ navItem, setCollapse }: { navItem: INavItem; setCollapse: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <li className="nav-item">
        <AnchorLink
          className={`nav-link js-scroll-trigger ${navItem.active ? "active" : ""}`}
          href={navItem.anchor}
          onClick={() => setCollapse(true)}
        >
          {navItem.icon} {navItem.title}
        </AnchorLink>
      </li>
    </>
  );
}
