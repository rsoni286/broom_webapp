import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./components/nav-bar";
import "./main.scss";

const mainElement = (
  <React.Fragment>
    <TopNav />
  </React.Fragment>
);
ReactDOM.render(mainElement, document.getElementById("root"));
