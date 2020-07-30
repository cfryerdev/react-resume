import React from "react";
import articles from "../../Data/articles.json";

export default () => (
  <section className="resume-section summary-section mb-5">
    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
      Articles
    </h2>
    <div className="resume-section-content">
      <div className="mb-0">
        <ul className="list-unstyled resume-awards-list">
          {articles &&
            articles.map((art, i) => {
              return (
                <li className="mb-3 position-relative">
                  <a
                    className="resume-award-name"
                    {...art.href && { href: art.href }}
                  >
                    {art.title}
                  </a>
                  <div className="resume-award-desc">{art.description}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  </section>
);
