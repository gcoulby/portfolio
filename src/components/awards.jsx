import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import AwardItem from "./award-item";
function Awards() {
    const [awards, setAwards] = useState([
        {
            title: "Ede and Ravenscroft Prize",
            year: "2015",
            description: "Awarded for best best academic performance in level six Computer Science and Digital Technologies.",
        },
        {
            title: "Volunteer Teacher of the Year",
            year: "2014",
            description: "Awarded whilst volunteering as an English as a Foreign Language (EFL) teacher in the Republic of Georgia.",
        },
    ]);
    return (
        <>
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards</h2>

                    {awards.map((award) => (
                        <AwardItem key={v4()} {...award} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Awards;
