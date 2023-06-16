import { IExperienceItem } from "@/helpers/interfaces";
import React, { useState, useEffect } from "react";
export default function ExperienceItem({ item }: { item: IExperienceItem }) {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <h3 className="mb-0 text-dark">{item.role}</h3>
          <h5 className="">
            {item.startYear} - {item.endYear}
          </h5>
          <div className="subheading mb-3">{item.company}</div>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
}
