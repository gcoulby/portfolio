import React, { useState } from "react";
import EducationItem from "./education-item";
import { IEducationItem } from "@/helpers/interfaces";
export default function Education() {
  const educationItems: IEducationItem[] = [
    {
      institution: "University of Northumbria at Newcastle",
      startYear: "2018",
      endYear: "2022",
      qualification: "Ph.D. (Computer Science)",
      description: "Personalised Environmental Monitoring of Building Occupants: Integration of Scalable Technologies",
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
  ];
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5 text-dark">Education</h2>
          {educationItems.map((item, index) => (
            <EducationItem key={`education-item-key-${index}`} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
