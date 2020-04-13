import React, { Component } from "react";
import { Navbar, Col } from "react-bootstrap";
import Profile from "./profile";
import SearchBar from "./search-bar";
import MainLogo from "./navbar-logo";

class TopNav extends Component {
  navStyle = {
    width: 100,
  };

  render() {
    return (
      <Navbar bg="light" expand="md" className="shadow py-2 px-1">
        <Col xs={6} md={2} className="d-flex align-items-center ">
          <MainLogo brand="Broom" />
        </Col>

        <Col xs={6} md={2} className="d-flex  d-md-none justify-content-end">
          <Profile />
        </Col>

        <Col md={8}>
          <SearchBar hint="Search market" />
        </Col>

        <Col
          md={2}
          className="d-none d-md-flex justify-content-end align-items-center"
        >
          <Profile />
        </Col>
      </Navbar>
    );
  }
}

export default TopNav;
