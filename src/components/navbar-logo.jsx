import React, { Component } from "react";
import { BroomLogo } from "./icons";
import { Navbar } from "react-bootstrap";

class MainLogo extends Component {
  render() {
    return (
      <React.Fragment>
        <BroomLogo />
        <Navbar.Brand className="px-2" href="#home">
          {this.props.brand}
        </Navbar.Brand>
      </React.Fragment>
    );
  }
}

export default MainLogo;
