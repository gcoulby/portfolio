import React, { useState, useEffect } from "react";
function EducationItem({ institution, qualification, startYear, endYear, description }) {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{institution}</h3>
                    <p className="mb-0"></p>
                    <h5 className="">
                        {startYear} - {endYear}
                    </h5>
                    <div className="subheading">{qualification}</div>
                    <p>{description}</p>
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default EducationItem;
