"use client";
import ProjectsNav from "./projectNav";
import { useEffect, useState } from "react";
import { IPost } from "@/helpers/interfaces";
import ProjectItem from "./project-item";

export default function PortfolioList({ posts, keywords }: { posts: IPost[]; keywords: string[] }) {
  const [tag, setTag] = useState("all");
  const [sortedPosts, setSortedPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (sortedPosts.length === 0) setSortedPosts([...posts].sort(() => Math.random() - 0.5));
  }, [posts, sortedPosts]);

  return (
    <>
      <div className="modular">
        <ProjectsNav keyWords={keywords} setTag={setTag} showTags={true} />
        <section className="resume-section" id="o">
          <div className="resume-section-content">
            {tag === "all"
              ? sortedPosts.map((post, i) => <ProjectItem key={`post-item-${i}`} post={post} />)
              : sortedPosts.filter((post) => post.keywords.includes(tag)).map((post, i) => <ProjectItem key={`post-item-${i}`} post={post} />)}
          </div>
        </section>
      </div>
    </>
  );
}
