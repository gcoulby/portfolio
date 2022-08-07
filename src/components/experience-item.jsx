import React, { useState, useEffect } from "react";
function ExperienceItem({ role, company, startYear, endYear, description }) {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{role}</h3>
                    <h5 className="">
                        {startYear} - {endYear}
                    </h5>
                    <div className="subheading mb-3">{company}</div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default ExperienceItem;
