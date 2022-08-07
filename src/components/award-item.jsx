import React, { useState, useEffect } from "react";
function AwardItem({ title, year, description }) {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{title}</h3>
                    <h5 className="">{year}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default AwardItem;
