import { ISkillItem } from "@/helpers/interfaces";
import React from "react";
export default function SkillItem({ item }: { item: ISkillItem }) {
  return (
    <>
      <div
        className="skill col"
        title={item.title}
        style={{
          background: `linear-gradient(0deg, rgba(220, 220, 220,1) 0%, rgba(220, 220, 220,1) ${item.level}%, rgba(255,255,255,1) ${item.level}%)`,
        }}
      >
        {item.icon}
      </div>
    </>
  );
}
