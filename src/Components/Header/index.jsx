import React from "react";
import about from "../../Data/about.json";

export default () => (
  <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
      <img
        className="mr-3 img-fluid picture mx-auto"
        src="images/profile.jpg"
        alt=""
      />
      <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
            {about.name}
          </h1>
          <div className="title mb-3">{about.title}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i
                className="far fa-envelope fa-fw mr-2"
                data-fa-transform="grow-3"
              />
              <a href={`mailto:${about.email}`}>{about.email}</a>
            </li>
            <li>
              <i
                className="fas fa-globe fa-fw mr-2"
                data-fa-transform="grow-6"
              />
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                {about.location}
              </span>
            </li>
          </ul>
        </div>
        <div className="secondary-info ml-md-auto mt-2">
          <ul className="resume-social list-unstyled">
            {about.links &&
              about.links.map((lnk, i) => {
                return (
                  <li className="mb-3">
                    <a
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={lnk.href}
                    >
                      <span className="fa-container text-center mr-2">
                        <i className={`${lnk.icon} fa-fw`} />
                      </span>
                      {lnk.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  </header>
);
