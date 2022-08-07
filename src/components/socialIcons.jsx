import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
function SocialIcon({ title, url, icon, iconType }) {
    return (
        <>
            <a title={title} className="social-icon" href={url} target="_blank" rel="noopener noreferrer">
                {iconType === "fa" ? <i className={icon}></i> : <Icon icon={icon} />}
            </a>
        </>
    );
}

export default SocialIcon;
