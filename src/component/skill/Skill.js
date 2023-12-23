import React, { useState } from "react";
import skillConstant from "../../constant/SkillConstant";

function Skill() {
  const [listSkillHeaderOpen, setListSkillHeaderOpen] = useState([]);

  const clickSkillHeader = (skillHeaderId, isOpen) => {
    if (isOpen) {
      const tempList = listSkillHeaderOpen.filter((id) => id !== skillHeaderId);
      setListSkillHeaderOpen(tempList);
    } else {
      const tempList = [...listSkillHeaderOpen];
      tempList.push(skillHeaderId);
      setListSkillHeaderOpen(tempList);
    }
  };

  return (
    <section className="skill section" id="skill">
      <h2 className="section-title">Kỹ năng</h2>
      <span className="section-subtitle">Trình độ kỹ thuật của tôi</span>

      <div className="skill-container container grid">
        {skillConstant.listSkillHeader.map((skillHeader) => {
          const isOpen = listSkillHeaderOpen.includes(skillHeader.id);
          const listSkill = skillConstant.listSkill.filter(
            (skill) => skill.skillHeaderId === skillHeader.id
          );
          return (
            <div key={skillHeader.id}>
              <div
                className={`skill-content ${
                  isOpen ? "skill-open" : "skill-close"
                }`}
                onClick={() => {
                  if (listSkill.length > 0) {
                    clickSkillHeader(skillHeader.id, isOpen);
                  }
                }}
              >
                <div className="skill-header">
                  <i className={`skill-header-icon ${skillHeader.icon}`}></i>

                  <div>
                    <h1 className="skill-title">{skillHeader.name}</h1>
                    <span className="skill-subtitle">
                      {skillHeader.description}
                    </span>
                  </div>

                  {listSkill.length > 0 && (
                    <i className="uil uil-angle-down skill-arrow"></i>
                  )}
                </div>

                <div className="skill-list grid">
                  {listSkill.map((skill) => (
                    <div className="skill-data" key={skill.id}>
                      <div className="skill-titles">
                        <h3 className="skill-name">
                          <span>
                            <i className={`skill-icon ${skill.icon}`}></i>
                          </span>
                          {skill.name}
                        </h3>
                        <span className="skill-number">{skill.percentage}</span>
                      </div>
                      <div className="skill-bar">
                        <span
                          className="skill-percentage"
                          style={{ width: skill.percentage }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;
