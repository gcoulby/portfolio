import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/css-compiled/projects.css";
import ProjectItem from "./project-item";
import ProjectsNav from "./projectNav";
import "bootstrap/dist/js/bootstrap.js";

function Projects() {
    const [projects, setProjects] = useState([
        {
            title: "Domination",
            description: "A homebrew card game for Nintendo Gameboy",
            image: "./img/projects/bgb64_VAYu10qcg5.png",
            link: "https://www.google.com",
            markdown: "./src/projects/domination2.md",
            keywords: ["keyword1", "keyword2"],
        },
        // {
        //     title: "Project 1",
        //     description: "This is a project description",
        //     image: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
        //     link: "https://www.google.com",
        //     keywords: ["keyword1", "keyword2"],
        // },
        // {
        //     title: "Project 1",
        //     description: "This is a project description",
        //     image: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
        //     link: "https://www.google.com",
        //     keywords: ["keyword1", "keyword2"],
        // },
        // {
        //     title: "Project 1",
        //     description: "This is a project description",
        //     image: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
        //     link: "https://www.google.com",
        //     keywords: ["keyword1", "keyword2"],
        // },
    ]);

    return (
        <>
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3"> */}

                    {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1 "> */}
                    {projects.map((project) => (
                        <ProjectItem key={project.title} {...project} />
                    ))}
                    {/* </div> */}
                </div>
            </section>
        </>
    );
}

export default Projects;
