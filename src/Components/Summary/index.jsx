import React from "react";
import about from "../../Data/about.json";

export default () => (
  <section className="resume-section summary-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      About
    </h2>
    <div className="resume-section-content">
      <p className="mb-4">{about.about}</p>
      <p className="mb-0">
        <i>{about.motto}</i>
      </p>
    </div>
  </section>
);
