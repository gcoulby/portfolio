import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";
function NavItem({ anchor, icon, title, active, router, route }) {
    return (
        <>
            <li className="nav-item">
                {/* {router ? (
                    <AnchorLink to={route} className={`nav-link js-scroll-trigger ${active ? "active" : ""}`}>
                        <i className={icon}></i> {title}
                    </AnchorLink>
                ) : (
                )} */}
                <AnchorLink className={`nav-link js-scroll-trigger ${active ? "active" : ""}`} href={anchor}>
                    <i className={icon}></i> {title}
                </AnchorLink>
            </li>
        </>
    );
}

export default NavItem;
