import React from "react";
import Others from "./Others";
import Section from "./Section";
import skills from "../../Data/skills.json";

export default () => (
  <section className="resume-section skills-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Technologies
    </h2>
    <div className="resume-section-content">
      <Section title="Frontend" items={skills.frontend} />
      <Section title="Backend" items={skills.backend} />
      <Section title="Mobile" items={skills.mobile} />
      <Others items={skills.other} />
    </div>
  </section>
);
