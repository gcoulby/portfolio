import React, { useState, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
function Main() {
    return (
        <>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />

                        <Route path="*" element={<h1>404: Not found</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter> */}
        </>
    );
}

export default Main;
