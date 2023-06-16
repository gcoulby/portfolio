"use client";
import logo from "@/images/logo.png";
import Link from "next/link";
import { FaHome, FaEye, FaTag, FaAngleLeft } from "react-icons/fa";
import { useState } from "react";

function ProjectsNav({ keyWords, showTags }: { keyWords: string[]; showTags: boolean }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" href="/">
          <span className="d-block d-lg-none">Graham Coulby</span>
          <span className="d-none d-lg-block">
            <img src={logo.src} className="img-fluid img-profile mx-auto mb-2" alt="" />
          </span>
        </Link>
        <button
          className="navbar-toggler"
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
            {showTags ? (
              <>
                <li className="nav-item">
                  <span className="nav-link js-scroll-trigger">
                    <FaEye /> Show All
                  </span>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <ul className="navbar-nav navbar-nav-inner">
                  {keyWords.map((keyword, i) => (
                    <li key={`projects-nav-item-${i}`} className="nav-item">
                      <span
                        className="nav-link js-scroll-trigger"
                        onClick={() => {
                          setCollapse(true);
                        }}
                      >
                        <FaTag /> {keyword}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link js-scroll-trigger">
                  <FaAngleLeft /> Go Back
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default ProjectsNav;
