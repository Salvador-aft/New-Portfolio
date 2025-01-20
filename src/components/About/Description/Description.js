import React from "react";
import "./Description.css";

const BioSection = () => {
  return (
    <section className="bio-section">
      <h2 className="bio-section__title">About Me</h2>
      <p className="bio-section__text">
        I’m a responsible individual who values both independent work and
        collaboration within a team. I take pride in ensuring that all my
        projects reflect my personal brand and the highest quality standards.
        I continually educate myself to improve my skills and stay updated in
        my field as a professional developer.
      </p>
      <p className="bio-section__text">
        Over the years, I’ve successfully delivered numerous projects, which
        have honed my ability to manage deadlines and complex requirements.
        My passion for technology drives me to explore innovative solutions,
        making me adaptable to emerging trends and tools in the tech industry.
      </p>
      <p className="bio-section__text">
        Whether working on front-end design or back-end functionality, I always
        aim to create intuitive and efficient user experiences. When I’m not
        coding, I enjoy learning new technologies, contributing to open-source
        projects, and mentoring aspiring developers.
      </p>
      <img
        src={require("E:/React/new-portfolio/src/assets/images/signature.png")}
        alt="Signature"
        className="bio-section__signature"
      />
    </section>
  );
};

export default BioSection;