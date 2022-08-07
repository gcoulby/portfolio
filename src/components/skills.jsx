import React, { useState, useEffect } from "react";
import SkillItem from "./skill-item";
import SocialIcon from "./socialIcons";
function Skills() {
    const [skills, setSkills] = useState([
        {
            title: "Javascript",
            level: "90",
            icon_type: "fa",
            icon_class: "fab fa-js",
        },
        {
            title: "React",
            level: "80",
            icon_type: "fa",
            icon_class: "fab fa-react",
        },
        {
            title: "Node.js",
            level: "60",
            icon_type: "fa",
            icon_class: "fab fa-node-js",
        },
        {
            title: "C#",
            level: "90",
            icon_type: "ic",
            icon_class: "mdi:language-csharp",
        },
        {
            title: "Python",
            level: "80",
            icon_type: "fa",
            icon_class: "fab fa-python",
        },
        {
            title: "C",
            level: "45",
            icon_type: "ic",
            icon_class: "mdi:language-c",
        },
        {
            title: "git",
            level: "80",
            icon_type: "fa",
            icon_class: "fab fa-git-alt",
        },
        {
            title: "C++",
            level: "40",
            icon_type: "ic",
            icon_class: "mdi:language-cpp",
        },
        {
            title: "Arduino",
            level: "60",
            icon_type: "ic",
            icon_class: "cib:arduino",
        },
        {
            title: "Raspberry Pi",
            level: "60",
            icon_type: "fa",
            icon_class: "fab fa-raspberry-pi",
        },
        {
            title: "Microsoft Azure",
            level: "50",
            icon_type: "ic",
            icon_class: "mdi:microsoft-azure",
        },
        {
            title: "Google Cloud Platform",
            level: "40",
            icon_type: "ic",
            icon_class: "cib:google-cloud",
        },
        {
            title: "TensorFlow",
            level: "45",
            icon_type: "ic",
            icon_class: "cib:tensorflow",
        },
        {
            title: "R",
            level: "40",
            icon_type: "ic",
            icon_class: "mdi:language-r",
        },
        {
            title: "Java",
            level: "70",
            icon_type: "ic",
            icon_class: "mdi:language-java",
        },
        {
            title: "Unity",
            level: "50",
            icon_type: "fa",
            icon_class: "fab fa-unity",
        },
        {
            title: "Photoshop",
            level: "70",
            icon_type: "ic",
            icon_class: "cib:adobe-photoshop",
        },
        {
            title: "Illustrator",
            level: "90",
            icon_type: "ic",
            icon_class: "cib:adobe-illustrator",
        },
        {
            title: "Lua",
            level: "60",
            icon_type: "ic",
            icon_class: "cib:lua",
        },
        {
            title: "PHP",
            level: "80",
            icon_type: "fa",
            icon_class: "fab fa-php",
        },
        {
            title: "HTML5",
            level: "95",
            icon_type: "fa",
            icon_class: "fab fa-html5",
        },
        {
            title: "css3",
            level: "95",
            icon_type: "fa",
            icon_class: "fab fa-css3-alt",
        },
        {
            title: "Angular",
            level: "50",
            icon_type: "fa",
            icon_class: "fab fa-angular",
        },
        {
            title: "TypeScript",
            level: "60",
            icon_type: "ic",
            icon_class: "mdi:language-typescript",
        },
        {
            title: "Bash",
            level: "80",
            icon_type: "fa",
            icon_class: "fas fa-terminal",
        },
        {
            title: "Affinity Designer",
            level: "90",
            icon_type: "ic",
            icon_class: "simple-icons:affinitydesigner",
        },
        {
            title: "Bootstrap",
            level: "90",
            icon_type: "ic",
            icon_class: "simple-icons:bootstrap",
        },
        {
            title: "Docker",
            level: "65",
            icon_type: "fa",
            icon_class: "fab fa-docker",
        },
    ]);
    return (
        <>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        {skills
                            .sort(() => Math.random() - 0.5)
                            .map((skill, index) => (
                                <SkillItem key={skill + index} {...skill} />
                            ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Skills;
