"use client";
import ReactTyped from "react-typed";
import HeadShot from "@/images/gcou_headshot.jpg";
import SocialIcons from "./social-icons";
export default function About() {
  const typedStrings = ["Researcher", "Lecturer", "Computer Scientist", "Graphic Designer", "Music Producer"];

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 id="big-name" className="mb-0">
            Dr <span className="text-primary">Graham</span> Coulby
          </h1>
          <p className="subheading subheading-dark mb-2">
            I am a <ReactTyped className="typed" strings={typedStrings} typeSpeed={80} backSpeed={50} backDelay={1000} loop />
          </p>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-auto">
                <img src={HeadShot.src} className="img-fluid img-profile mx-auto mb-2 me-4" width={200} alt="Graham Coulby" />
              </div>
              <div className="col-sm-12 col-md-8">
                <div className="lead mb-5">
                  <p>
                    I am a researcher and lecturer in{" "}
                    <a
                      href="https://www.northumbria.ac.uk/about-us/academic-departments/computer-and-information-sciences/research/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Computer and Information Sciences
                    </a>{" "}
                    at{" "}
                    <a href="https://www.northumbria.ac.uk/" target="_blank" rel="noreferrer noopener">
                      Northumbria University
                    </a>{" "}
                    in Newcastle upon Tyne, UK. My core research focus is personalised approaches for measuring indoor environmental quality, with a
                    focus on health and wellbeing. My work involves using passive environmental sensors and wearable devices. I am also interested in
                    the use of building data visualisation and I am developing a digital research platform to support the development of a smart
                    campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SocialIcons dark={false} />
        </div>
      </section>
    </>
  );
}
