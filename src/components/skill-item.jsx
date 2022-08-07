import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
function SkillItem({ title, level, icon_type, icon_class }) {
    return (
        <>
            <li
                className="skill"
                title={title}
                style={{
                    background: `linear-gradient(0deg, rgba(220, 220, 220,1) 0%, rgba(220, 220, 220,1) ${level}%, rgba(255,255,255,1) ${level}%)`,
                }}
            >
                {icon_type === "fa" ? <i className={icon_class}></i> : <Icon icon={icon_class} />}
            </li>
        </>
    );
}

export default SkillItem;
