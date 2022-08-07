import React, { useState, useEffect } from "react";
import "../styles/css-compiled/projects.css";
import ProjectItem from "./project-item";
import ProjectsNav from "./projectNav";
function Projects() {
    const [projects, setProjects] = useState([
        {
            title: "Project 1",
            description: "This is a project description",
            image: "bgb64_VAYu10qcg5.png",
            link: "https://www.google.com",
            keywords: ["keyword1", "keyword2"],
        },
        {
            title: "Project 1",
            description: "This is a project description",
            image: "bgb64_VAYu10qcg5.png",
            link: "https://www.google.com",
            keywords: ["keyword1", "keyword2"],
        },
        {
            title: "Project 1",
            description: "This is a project description",
            image: "bgb64_VAYu10qcg5.png",
            link: "https://www.google.com",
            keywords: ["keyword1", "keyword2"],
        },
        {
            title: "Project 1",
            description: "This is a project description",
            image: "bgb64_VAYu10qcg5.png",
            link: "https://www.google.com",
            keywords: ["keyword1", "keyword2"],
        },
    ]);
    return (
        <>
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        {projects.map((project) => (
                            <ProjectItem key={project.title} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
