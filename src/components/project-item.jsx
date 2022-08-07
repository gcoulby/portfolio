import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
function ProjectItem({ title, description, image, link, keywords }) {
    return (
        <>
            <div class="card shadow-sm">
                <img src={`/imgs/${image}`} alt="feature image" />

                <div class="card-body">
                    <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Edit
                            </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>

            <div class="modal modal-sheet position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSheet">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header border-bottom-0">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body py-0">
                            <p>
                                This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share
                                sheets in iOS.
                            </p>
                        </div>
                        <div class="modal-footer flex-column border-top-0">
                            <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">
                                Save changes
                            </button>
                            <button type="button" class="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectItem;
