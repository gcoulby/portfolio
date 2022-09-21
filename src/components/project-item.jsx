import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import source from "./projects/domination2.md";
import rehypeRaw from "rehype-raw";
import metadataParser from "markdown-yaml-metadata-parser";

function ProjectItem({ title, description, image, link, keywords, markdown }) {
    const [post, setPost] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchContent = () => {
        fetch(source)
            .then((response) => response.text())
            .then((text) => {
                var result = metadataParser(text);
                setPost(result.content);
                setShowModal(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
                <div className="flex-grow-1">
                    <div className="d-flex">
                        <div className="crop">
                            <img className="cropped-image" src={image} />
                        </div>
                        <div>
                            <h3 className="mb-0">{title}</h3>
                            <p>{description}</p>
                            <button className="btn btn-dark" onClick={() => fetchContent()}>
                                {/* <a className="text-light" href={link}> */}
                                More&nbsp;<i className="fa fa-angle-right"></i>
                                {/* </a> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class={`modal fade ${showModal ? "show" : ""}`}
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-blur" onClick={() => console.log("HELLLO")}></div>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">
                                {title}
                            </h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ReactMarkdown children={post} plugins={[gfm]} rehypePlugins={[rehypeRaw]} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Save changes
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="mx-2">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">Domination</h5>
                        <p className="card-text">A homebrew card game for Nintendo Gameboy</p>
                    </div>
                    <a href="https://www.google.com" className="card-footer bg-dark btn btn-block btn-dark">
                        More&nbsp;<i className="fa fa-angle-right"></i>
                    </a>
                    
                    <ReactMarkdown children={post} plugins={[gfm]} rehypePlugins={[rehypeRaw]} />
                </div>
            </div> */}
        </>
    );
}

export default ProjectItem;
