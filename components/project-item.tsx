import { IPost } from "@/helpers/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

function ProjectItem({ post }: { post: IPost }) {
  const link = `/portfolio/${post.slug}`;
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <div className="d-flex">
            <div className="crop">
              <Link href={link} className="">
                <Image
                  className="cropped-image"
                  alt="feature for the project"
                  src={`/project-images/${post.slug}/feature.png`}
                  width={512}
                  height={512}
                />
              </Link>
            </div>
            <div>
              <Link href={link} className="" style={{ textDecoration: "none" }}>
                <h3 className="mb-0">{post.title}</h3>
              </Link>
              <p>{post.description}</p>
              <div className="mb-2">
                {post.keywords.map((keyword, i) => (
                  <span className="badge bg-secondary me-1" key={`post-keywords-${i}`}>
                    {keyword}
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
