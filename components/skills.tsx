'use client'
import React, { useState, useEffect } from 'react'
import SkillItem from './skill-item'

import { FaJava, FaVuejs } from 'react-icons/fa'
import {
  SiGit,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiCsharp,
  SiC,
  SiArduino,
  SiRaspberrypi,
  SiMicrosoftazure,
  SiGooglecloud,
  SiTensorflow,
  SiR,
  SiHtml5,
  SiCss3,
  SiLua,
  SiUnity,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPhp,
  SiNextdotjs,
  SiGnubash,
  SiDocker,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiTypescript,
  SiAngularjs,
  SiBootstrap,
} from 'react-icons/si'
import { CgCPlusPlus } from 'react-icons/cg'
import { ISkillItem } from '@/helpers/interfaces'

const _skills: ISkillItem[] = [
  {
    title: 'Javascript',
    level: 90,
    icon: <SiJavascript />,
  },
  {
    title: 'React',
    level: 90,
    icon: <SiReact />,
  },
  {
    title: 'Node.js',
    level: 80,
    icon: <SiNodedotjs />,
  },
  {
    title: 'C#',
    level: 90,
    icon: <SiCsharp />,
  },
  {
    title: 'Python',
    level: 80,
    icon: <SiPython />,
  },
  {
    title: 'C',
    level: 80,
    icon: <SiC />,
  },
  {
    title: 'git',
    level: 80,
    icon: <SiGit />,
  },
  {
    title: 'C++',
    level: 70,
    icon: <CgCPlusPlus />,
  },
  {
    title: 'Arduino',
    level: 60,
    icon: <SiArduino />,
  },
  {
    title: 'Raspberry Pi',
    level: 60,
    icon: <SiRaspberrypi />,
  },
  {
    title: 'Microsoft Azure',
    level: 50,
    icon: <SiMicrosoftazure />,
  },
  {
    title: 'Google Cloud Platform',
    level: 40,
    icon: <SiGooglecloud />,
  },
  {
    title: 'TensorFlow',
    level: 45,
    icon: <SiTensorflow />,
  },
  {
    title: 'R',
    level: 40,
    icon: <SiR />,
  },
  {
    title: 'Java',
    level: 70,
    icon: <FaJava />,
  },
  {
    title: 'Unity',
    level: 50,
    icon: <SiUnity />,
  },
  {
    title: 'Photoshop',
    level: 70,
    icon: <SiAdobephotoshop />,
  },
  {
    title: 'Illustrator',
    level: 90,
    icon: <SiAdobeillustrator />,
  },
  {
    title: 'Lua',
    level: 80,
    icon: <SiLua />,
  },
  {
    title: 'PHP',
    level: 80,
    icon: <SiPhp />,
  },
  {
    title: 'HTML5',
    level: 99,
    icon: <SiHtml5 />,
  },
  {
    title: 'css3',
    level: 99,
    icon: <SiCss3 />,
  },
  {
    title: 'Angular',
    level: 40,
    icon: <SiAngularjs />,
  },
  {
    title: 'TypeScript',
    level: 80,
    icon: <SiTypescript />,
  },
  {
    title: 'Bash',
    level: 70,
    icon: <SiGnubash />,
  },
  {
    title: 'Affinity Designer',
    level: 90,
    icon: <SiAffinitydesigner />,
  },
  {
    title: 'Bootstrap',
    level: 90,
    icon: <SiBootstrap />,
  },
  {
    title: 'Docker',
    level: 70,
    icon: <SiDocker />,
  },
  {
    title: 'Affinity Photo',
    level: 70,
    icon: <SiAffinityphoto />,
  },
  {
    title: 'Next.js',
    level: 80,
    icon: <SiNextdotjs />,
  },
  {
    title: 'Vue.js',
    level: 95,
    icon: <FaVuejs />,
  },
]

export default function Skills() {
  const [skills, setSkills] = useState<ISkillItem[]>([])

  useEffect(() => {
    if (skills.length === 0) setSkills([..._skills].sort(() => Math.random() - 0.5))
  }, [skills])

  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5 text-dark">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <p style={{ fontStyle: 'italic' }}>*Scales denote confidence using language or tool</p>

          <div className="container">
            <div className="row row-cols-3">
              {skills.map((skill: ISkillItem, i: number) => (
                <SkillItem key={`skill-item-${i}`} item={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
