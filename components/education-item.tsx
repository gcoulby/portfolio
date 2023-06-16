import { IEducationItem } from "@/helpers/interfaces";
import React from "react";
export default function EducationItem({ item }: { item: IEducationItem }) {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <h3 className="mb-0 text-dark">{item.institution}</h3>
          <p className="mb-0"></p>
          <h5 className="">
            {item.startYear} - {item.endYear}
          </h5>
          <div className="subheading">{item.qualification}</div>
          <p>{item.description}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}
