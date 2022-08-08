import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
function PublicationItem({ title, publicationDate, publicationType, publisher, doi, abstract, keywords, authorType }) {
    const dtOptions = { year: "numeric", month: "long", day: "numeric" };
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{title}</h3>
                    <h5 className="mr-2">{publicationType}</h5>
                    <h5 className="mr-2">Published {publicationDate.toLocaleString("en-GB", dtOptions)}</h5>
                    <h5>{authorType}</h5>
                    <div className="subheading mb-3">{publisher}</div>
                    <p>
                        <b>Abstract:</b> {abstract}
                    </p>
                    <div>
                        {keywords.map((keyword, index) => (
                            <div key={v4()} className="keyword">
                                {keyword}
                            </div>
                        ))}
                    </div>
                    <a className="doi" target="_blank" rel="noopener noreferrer" href={doi}>
                        {doi}
                    </a>
                </div>
            </div>
        </>
    );
}

export default PublicationItem;
