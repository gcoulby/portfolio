"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import NavItem from "./nav-item";
import { INavItem } from "@/helpers/interfaces";
import Link from "next/link";
import { useState } from "react";

import { FaUser, FaGraduationCap, FaSignal, FaBook, FaCode, FaPodcast, FaTrophy, FaHome } from "react-icons/fa";

const navItems: INavItem[] = [
  {
    anchor: "#about",
    icon: <FaUser />,
    title: "About",
    active: false,
  },
  {
    anchor: "#education",
    icon: <FaGraduationCap />,
    title: "Education",
    active: false,
  },
  {
    anchor: "#experience",
    icon: <FaSignal />,
    title: "Experience",
    active: false,
  },
  {
    anchor: "#publications",
    icon: <FaBook />,
    title: "Publications",
    active: false,
  },
  {
    anchor: "#skills",
    icon: <FaCode />,
    title: "Skills",
    active: false,
  },
  {
    anchor: "#interests",
    icon: <FaPodcast />,
    title: "Interests",
    active: false,
  },
  {
    anchor: "#awards",
    icon: <FaTrophy />,
    title: "Awards",
    active: false,
  },
];

export default function Nav() {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Link href="/" className="navbar-brand js-scroll-trigger">
          <span className="d-block d-lg-none">Graham Coulby</span>
          <span className="d-none d-lg-block">
            <Image className="img-fluid img-profile mx-auto mb-2" src={logo} alt="" />
          </span>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapse(!collapse)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${collapse && "collapse"}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link js-scroll-trigger">
                <FaHome /> Home
              </Link>
            </li>
            {navItems.map((item: INavItem, i: number) => (
              <NavItem key={`nav-item-${i}`} navItem={item} setCollapse={setCollapse} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
