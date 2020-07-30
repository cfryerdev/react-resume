import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./Components/Layout";
import Routes from "./routes";

import "./Content/Styles/main.scss";
import "./Content/Styles/theme.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <RecoilRoot>
          <Layout>
            <Routes />
          </Layout>
        </RecoilRoot>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
