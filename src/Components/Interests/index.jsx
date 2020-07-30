import React, { Fragment } from "react";
import interests from "../../Data/interests.json";

export default () => (
  <Fragment>
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Interests
    </h2>
    <ul className="list-unstyled">
      {interests &&
        interests.map((intr, i) => {
          return (
            <li key={i} className="mb-1">
              {intr}
            </li>
          );
        })}
    </ul>
  </Fragment>
);
