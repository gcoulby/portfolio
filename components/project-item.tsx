import { IPost } from "@/helpers/interfaces";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaTag } from "react-icons/fa";

function ProjectItem({ post, setTag }: { post: IPost; setTag: React.Dispatch<React.SetStateAction<string>> }) {
  const link = `/portfolio/${post.slug}`;
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <div className="d-flex">
            <div className="crop">
              <Link href={link} className="">
                <img
                  src={`/portfolio/project-images/${post.slug}/feature.png`}
                  className="cropped-image"
                  alt="feature for the project"
                  width={512}
                  height={512}
                />
              </Link>
            </div>
            <div>
              <Link href={link} className="" style={{ textDecoration: "none" }}>
                <h3 className="mb-0 text-dark">{post.title}</h3>
              </Link>
              <p>{post.description}</p>
              <div className="mb-2">
                {post.keywords.map((keyword, i) => (
                  <span className="badge bg-secondary me-1 cursor-pointer" key={`post-keywords-${i}`} onClick={() => setTag(keyword)}>
                    <FaTag /> {keyword}
                  </span>
                ))}
              </div>
              <Link href={link} className="btn btn-dark">
                More&nbsp;
                <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
