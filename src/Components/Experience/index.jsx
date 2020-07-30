import React, { Fragment } from "react";
import experience from "../../Data/experience.json";

export default () => (
  <section className="resume-section experience-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      The Journey
    </h2>
    <div className="resume-section-content">
      <div className="resume-timeline position-relative">
        {experience &&
          experience.map((exp, i) => {
            return (
              <article
                key={i}
                className="resume-timeline-item position-relative pb-4"
              >
                <div className="resume-timeline-item-header mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <h3 className="resume-position-title font-weight-bold mb-1">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="resume-position-time">{exp.company}</div>
                </div>
                <div className="resume-timeline-item-desc">
                  <p>{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <Fragment>
                      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                        Achievements
                      </h4>
                      <ul>
                        {exp.achievements.map((ach, ai) => {
                          return <li key={ai}>{ach}</li>;
                        })}
                      </ul>
                    </Fragment>
                  )}

                  {exp.awards.length > 0 && (
                    <Fragment>
                      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                        Awards
                      </h4>
                      <ul>
                        {exp.awards.map((ach, ai) => {
                          return <li key={ai}>{ach}</li>;
                        })}
                      </ul>
                    </Fragment>
                  )}

                  {exp.technologies.length > 0 && (
                    <Fragment>
                      <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                        Technologies
                      </h4>
                      <ul className="list-inline">
                        {exp.technologies.map((tch, ti) => {
                          return (
                            <li key={ti} className="list-inline-item">
                              <span className="badge badge-primary badge-pill">
                                {tch}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </Fragment>
                  )}
                </div>
              </article>
            );
          })}
      </div>
    </div>
  </section>
);
