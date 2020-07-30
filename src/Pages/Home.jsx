import React, { Fragment } from "react";
import Summary from "../Components/Summary";
import Articles from "../Components/Articles";
import Skills from "../Components/Skills";
import Interests from "../Components/Interests";
import Experience from "../Components/Experience";

export default () => (
  <Fragment>
    <Summary />
    <Articles />
    <div className="row">
      <div className="col-lg-9">
        <Experience />
      </div>
      <div className="col-lg-3">
        <Skills />
        <Interests />
      </div>
    </div>
  </Fragment>
);
