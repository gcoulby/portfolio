import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProjectsNav() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: "#343a40" }} role="navigation">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Graham Coulby
                    </Link>

                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ProjectsNav;
