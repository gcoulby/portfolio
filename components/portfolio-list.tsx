'use client'
import ProjectsNav from './projectNav'
import { useEffect, useState } from 'react'
import logo from '@/images/logo.png'
import { IPost } from '@/helpers/interfaces'
import ProjectItem from './project-item'
import { FaAngleLeft, FaEye, FaHome, FaTag } from 'react-icons/fa'
import Link from 'next/link'

export default function PortfolioList({ posts, keywords }: { posts: IPost[]; keywords: string[] }) {
  const [tag, setTag] = useState('all')
  const [collapse, setCollapse] = useState(true)
  const [sortedPosts, setSortedPosts] = useState<IPost[]>([])

  useEffect(() => {
    if (sortedPosts.length === 0) setSortedPosts([...posts].sort(() => Math.random() - 0.5))
  }, [posts, sortedPosts])

  return (
    <>
      <div className="modular">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
          <Link className="navbar-brand js-scroll-trigger" href="/">
            <span className="d-block d-lg-none">Graham Coulby</span>
            <span className="d-none d-lg-block">
              <img src={logo.src} className="img-fluid img-profile mx-auto mb-2" alt="" />
            </span>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setCollapse(!collapse)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse ${collapse && 'collapse'}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link js-scroll-trigger">
                  <FaHome /> Home
                </Link>
              </li>
              <>
                <li className="nav-item">
                  <span className="nav-link js-scroll-trigger" onClick={() => setTag('all')}>
                    <FaEye /> Show All
                  </span>
                </li>
                <li className="nav-item">
                  <hr />
                </li>
                <ul className="navbar-nav navbar-nav-inner">
                  {keywords.map((keyword, i) => (
                    <li key={`projects-nav-item-${i}`} className="nav-item">
                      <span
                        className="nav-link js-scroll-trigger"
                        onClick={() => {
                          setCollapse(true)
                          setTag(keyword)
                        }}
                      >
                        <FaTag /> {keyword}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            </ul>
          </div>
        </nav>

        <section className="resume-section" id="o">
          <div className="resume-section-content">
            <h4>Projects</h4>
            <div className="subheading mb-3">A mixed selection professional and CPD projects</div>
            <div className="alert alert-secondary mb-4">
              <p>
                This page is a collection of developments I have either done in my professional work, or just for sheer joy of it. Often more of the
                latter as I am not always able to share my professional work. I have a keen interest in learning new technologies and methodologies,
                and I am always looking for new things to learn. My approach to learning is to try and apply it to a mini-project, which can be
                documented and shared here. This allows me to learn by doing, and to have a reference to look back on.
              </p>
            </div>
            {tag === 'all'
              ? sortedPosts.map((post, i) => <ProjectItem key={`post-item-${i}`} post={post} setTag={setTag} />)
              : sortedPosts
                  .filter((post) => post.keywords.includes(tag))
                  .map((post, i) => <ProjectItem key={`post-item-${i}`} post={post} setTag={setTag} />)}
          </div>
        </section>
      </div>
    </>
  )
}
