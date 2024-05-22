import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillsCard from "./SkillsCard/SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }

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
                isActive={selectedSkill.title === item.title}
                onClick={()=>{
                  handleSelectedSkill(item);
                }}
              />
            );
          })}
        </div>

        <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
        </div>
      </div>
    </section>
  );
};
export default Skills;
