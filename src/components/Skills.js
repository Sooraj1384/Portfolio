import React from "react";
import "./Skills.css";

const Skills = () => {
  const technicalSkills = ["Python", "React", "SQL", "Node.js", "MongoDB"];
  const softSkills = ["Communication", "Teamwork", "Creativity", "Leadership"];

  const renderBubbles = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="bubble">
        {skill}
      </div>
    ));

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="jars-container">
        {/* Technical Skills Jar */}
        <div className="skills-jar">
          <div className="jar-title">Technical Skills</div>
          {renderBubbles(technicalSkills)}
        </div>

        {/* Soft Skills Jar */}
        <div className="skills-jar">
          <div className="jar-title">Soft Skills</div>
          {renderBubbles(softSkills)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
