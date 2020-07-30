import React from "react";

export default ({ items }) => (
  <div className="resume-skill-item">
    <h4 className="resume-skills-cat font-weight-bold">Others</h4>
    <ul className="list-inline">
      {items &&
        items.map((itm, i) => {
          return (
            <li key={i} className="list-inline-item">
              <span className="badge badge-light">{itm}</span>
            </li>
          );
        })}
    </ul>
  </div>
);
