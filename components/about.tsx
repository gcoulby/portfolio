'use client'
import ReactTyped from 'react-typed'
import HeadShot from '@/images/gcou_headshot.jpg'
import SocialIcons from './social-icons'
export default function About() {
  const typedStrings = ['Principal Software Engineer', 'Researcher', 'Graphic Designer', 'Music Producer']

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 id="big-name" className="mb-0 text-dark ">
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
                    I am a Principal Software Engineer at{' '}
                    <a href="https://uk.leonardo.com/en/" target="_blank" rel="noreferrer noopener" className="text-dark">
                      Leonardo UK
                    </a>
                    . I design and develop all-domain situational awareness solutions for the defence and aerospace industry. I have a PhD in Computer
                    Science from the University of Northumbria at Newcastle, exploring the development and use of accessible IoT technologies and I
                    have a background in both digital construction and digital maritime technologies. I have a passion for technology and enjoy
                    working on a wide range of projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SocialIcons dark={false} />
        </div>
      </section>
    </>
  )
}
