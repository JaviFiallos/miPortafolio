import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillsCard from "./SkillsCard/SkillsCard";

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Habilidades Técnicas</h5>

      <div className="skills-contenido">
        <div className="skills">
          {SKILLS.map((item) => {
            return (
              <SkillsCard
                key={item.title}
                iconURL={item.icon}
                title={item.title}
              />
            );
          })}
        </div>

        <div className="skills-info">
            
        </div>
      </div>
    </section>
  );
};
export default Skills;
