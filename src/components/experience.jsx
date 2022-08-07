import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import ExperienceItem from "./experience-item";
function Experience() {
    const [experienceItems, setExperienceItems] = useState([
        {
            role: "Senior Technician",
            company: "University of Northumbria Newcastle",
            startYear: "2021",
            endYear: "PRESENT",
            description:
                "In this role I provide technical support to the Faculty of Engineering and Environment, where I provide technical support with a computer science focus. I am currently exploring research-enabling solutions for digitising our Internet of Things (IoT) network, while supporting researchers within faculty.",
        },
        {
            role: "Lecturer / Lab Demonstrator",
            company: "University of Northumbria Newcastle",
            startYear: "2020",
            endYear: "PRESENT",
            description:
                "Alongside my PhD studies and work as a senior technician, I work supporting teaching at Northumbria University from levels 4 - 7. I teach in a range of subjects and roles within Computer and Information Sciences including demonstrating on Applied Computing and Project Management as well as preparing and delivering course materials on IoT Technologies. In this role, I have also supervised students and undertaken ethical reviews.",
        },
        {
            role: "Computer Scientist / Consultant",
            company: "BIM Academy",
            startYear: "2016",
            endYear: "2018",
            description:
                "Seconded from Ryder Architecture, I worked on multiple projects across the UK and internationally. The primary role within in BIM Academy was to apply computer science to optimise business systems and deliver enhanced productivity, client service and design excellence for clients. The role also involved consultancy, strategic planning, data management and research.",
        },
        {
            role: "Computer Scientist",
            company: "Ryder Architecture",
            startYear: "2016",
            endYear: "2018",
            description:
                "Worked alongside Ryder’s Technologies department on various internal research and development projects. I developed various software systems, Revit plug-ins and optimised work flows for improving efficiencies within the design teams and the wider practice. The role involved developing a strong understanding the industry practices in architectural design and model development, whilst gaining an understanding of the problems that work orders and commissions placed on projects.",
        },
        {
            role: "Research Assistant",
            company: "University of Northumbria Newcastle",
            startYear: "2015",
            endYear: "2016",
            description:
                "Worked closely with industry partners; Building Engineering Services Association (BESA) and ViewPoint, on DECCMR and Innovate UK funded projects. The role was a multi-disciplinary role, applying computer science to solve problems affecting the Architectural, Engineering and Construction (AEC) industry. The role involved researching and applying machine learning principles to develop digital solutions for identifying assets within open standard 3D BIM models.",
        },
        {
            role: "Volunteer English Teacher",
            company: "Teach and Learn with Georia",
            startYear: "2011",
            endYear: "2014",
            description:
                "The role involved volunteering in various urban and rural schools across the Republic of Georgia, whilst accommodated by a local Georgian family. The aim of the program was to integrate native English speakers into the local schools and homes of local families, to instill western pedagogical methodologies and ideals into Georgian culture. The role involved teaching English to school children of all ages.",
        },
    ]);
    return (
        <>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    {experienceItems.map((item, index) => (
                        <ExperienceItem key={v4()} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Experience;
