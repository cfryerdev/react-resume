import React from "react";

export default ({ title, items }) => (
  <div className="resume-skill-item mb-4">
    <h4 className="resume-skills-cat font-weight-bold">{title}</h4>
    <ul className="list-unstyled">
      {items &&
        items.map((item, bi) => {
          return (
            <li key={bi} className="mb-2">
              <div className="resume-skill-name">{item.name}</div>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: `${item.value}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
          );
        })}
    </ul>
  </div>
);
