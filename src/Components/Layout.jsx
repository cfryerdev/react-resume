import React from "react";
import Header from "../Components/Header";

export default ({ children }) => (
  <div className="resume-wrapper text-center position-relative">
    <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
      <Header />
      <div className="resume-body p-5">{children}</div>
    </div>
  </div>
);
