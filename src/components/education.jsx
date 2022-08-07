import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import EducationItem from "./education-item";
function Education() {
    const [educationItems, setEducationItems] = useState([
        {
            institution: "University of Northumbria at Newcastle",
            startYear: "2018",
            endYear: "PRESENT",
            qualification: "Ph.D. (Computer Science)",
            description: "Researching individualised monitoring of Health, Wellbeing and Indoor Environmental Quality (IEQ) in buildings",
        },
        {
            institution: "University of Northumbria at Newcastle",
            startYear: "2014",
            endYear: "2015",
            qualification: "B.Sc. Applied Computing",
            description: "First Class Honours (84%)",
        },
        {
            institution: "Newcastle College",
            startYear: "2007",
            endYear: "2010",
            qualification: "Fda Music Production",
            description: "Pass",
        },
    ]);
    return (
        <>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    {educationItems.map((item, index) => (
                        <EducationItem key={v4()} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Education;
