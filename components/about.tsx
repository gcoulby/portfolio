"use client";
import ReactTyped from "react-typed";
import HeadShot from "@/images/gcou_headshot.jpg";
import SocialIcons from "./social-icons";
export default function About() {
  const typedStrings = ["Senior Full Stack Engineer", "Researcher", "Graphic Designer", "Music Producer"];

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 id="big-name" className="mb-0 text-dark">
            Dr <span className="text-secondary">Graham</span> Coulby
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
                    I am a Senior Full Stack Engineer at {" "}
                    <a href="https://ceto.ai/" target="_blank" rel="noreferrer noopener" className="text-dark">
                      CetoAI
                    </a>{" "}
                    in Newcastle upon Tyne, UK. I develop hardware, software and cloud development operations for bringing AI innovations to maritime transportation. I am currently developing solutions to increase maritime fleet availability, cut carbon emissions and reduce operational risk across shipping fleets around the globe.
                  
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
