"use client";
import { IPublicationItem } from "@/helpers/interfaces";
import React from "react";
export default function PublicationItem({ item }: { item: IPublicationItem }) {
  const dtOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const [showAbstract, setShowAbstract] = React.useState(false);
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <h4 className="mb-0 text-dark">{item.title}</h4>
          <h5 className="mr-2">{item.publicationType}</h5>
          <h5 className="mr-2">Published {item.publicationDate.toLocaleString("en-GB", dtOptions)}</h5>
          <h5>{item.authorType}</h5>
          <div className="subheading mb-3">{item.publisher}</div>
          {showAbstract ? (
            <div>
              <button className="btn btn-sm btn-outline-dark mb-4 " onClick={() => setShowAbstract(false)}>
                Hide Abstract
              </button>
              <p>
                <b>Abstract:</b> {item.abstract}
              </p>
            </div>
          ) : (
            <button className="btn btn-sm btn-outline-dark mb-4 " onClick={() => setShowAbstract(true)}>
              Show Abstract
            </button>
          )}
          <div className="mb-2">
            {item.keywords.map((keyword, index) => (
              <div key={`keywords-list-${index}`} className="badge bg-light text-dark keyword">
                {keyword}
              </div>
            ))}
          </div>
          <a className="doi text-dark" target="_blank" rel="noopener noreferrer" href={item.doi}>
            <em>{item.doi}</em>
          </a>
        </div>
      </div>
    </>
  );
}
