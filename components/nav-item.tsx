import { INavItem } from "@/helpers/interfaces";
import Link from "next/link";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavItem({ navItem }: { navItem: INavItem }) {
  return (
    <>
      <li className="nav-item">
        <Link className={`nav-link js-scroll-trigger ${navItem.active ? "active" : ""}`} href={navItem.anchor}>
          {navItem.icon} {navItem.title}
        </Link>
      </li>
    </>
  );
}
