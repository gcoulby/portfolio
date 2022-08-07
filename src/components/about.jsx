import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";
import SocialIcon from "./socialIcons";
function About() {
    const [typedStrings, setTypedStrings] = useState([
        "Researcher",
        "Senior Technician",
        "Doctoral Student",
        "Computer Scientist",
        "Graphic Designer",
        "Music Producer",
    ]);
    const [socialIcons, setSocialIcons] = useState([
        {
            title: "Google Scholar",
            url: "https://scholar.google.com/citations?user=KPYenX4AAAAJ&amp;hl=en&amp;oi=ao",
            icon: "simple-icons:googlescholar",
            iconType: "iconify",
        },
        {
            title: "ORCiD",
            url: "https://orcid.org/0000-0002-5970-864X",
            icon: "cib:orcid",
            iconType: "iconify",
        },
        {
            title: "ResearchGate",
            url: "https://www.researchgate.net/profile/Graham_Coulby",
            icon: "fa-brands:researchgate",
            iconType: "iconify",
        },
        {
            title: "Twitter",
            url: "https://twitter.com/gcoulby",
            icon: "fab fa-twitter",
            iconType: "fa",
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/graham-coulby-7a336225/",
            icon: "fab fa-linkedin",
            iconType: "fa",
        },
        {
            title: "GitHub",
            url: "https://github.com/gcoulby",
            icon: "fab fa-github",
            iconType: "fa",
        },
        {
            title: "CodePen",
            url: "https://codepen.io/gcoulby",
            icon: "fab fa-codepen",
            iconType: "fa",
        },
        {
            title: "Bandcamp",
            url: "https://lulaloops.bandcamp.com/",
            icon: "fab fa-bandcamp",
            iconType: "fa",
        },
        {
            title: "Spotify",
            url: "https://open.spotify.com/artist/3ERfkWr1Ojkk7pH5QOLjBr?si=UoBo5SXYSmmezDDH8fVAOA",
            icon: "fab fa-spotify",
            iconType: "fa",
        },
    ]);
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 id="big-name" className="mb-0">
                        Graham <span className="text-primary">Coulby</span>
                    </h1>
                    <p className="subheading mb-5">
                        I am a <ReactTyped className="typed" strings={typedStrings} typeSpeed={80} backSpeed={20} backDelay={500} loop />
                    </p>
                    <div className="lead mb-5">
                        <p>
                            I am a senior technician at Northumbria University and I am also sponsored by{" "}
                            <a href="https://www.ryderarchitecture.com/" target="_blank" rel="noreferrer noopener">
                                Ryder Architecture
                            </a>{" "}
                            to research new, personalised approaches for measuring indoor environmental quality future building projects, with a focus
                            on health and wellbeing. My work involves using passive environmental sensors and wearable devices.
                        </p>
                    </div>
                    <div className="social-icons">
                        {socialIcons.map((icon) => (
                            <SocialIcon key={icon.title} {...icon} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
