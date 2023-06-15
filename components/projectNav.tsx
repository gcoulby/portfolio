import React from "react";
import logo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaEye, FaTag, FaAngleLeft } from "react-icons/fa";
// import AnchorLink from "react-anchor-link-smooth-scroll";

function ProjectsNav({ keyWords, setTag, showTags }: { keyWords: string[]; setTag: any; showTags: boolean }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" href="/">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link js-scroll-trigger">
                <FaHome /> Home
              </Link>
            </li>
            {showTags ? (
              <>
                <li className="nav-item">
                  <span className="nav-link js-scroll-trigger" onClick={() => setTag("all")}>
                    <FaEye /> Show All
                  </span>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <ul className="navbar-nav navbar-nav-inner">
                  {keyWords.map((keyword, i) => (
                    <li key={`projects-nav-item-${i}`} className="nav-item">
                      <span className="nav-link js-scroll-trigger" onClick={() => setTag(keyword)}>
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
