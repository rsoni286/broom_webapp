import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Col, Row } from "react-bootstrap";
import { Basket } from "./logo";
import Text from "./text";
import "../app.css";

class TopNav extends Component {
  navStyle = {
    width: 100,
  };

  render() {
    return (
      <Navbar bg="light" expand="md">
        <Col md={3}>
          <Navbar.Brand href="#home" className="text-primary col-lg-3">
            BigBasket
          </Navbar.Brand>
        </Col>
        <Col md={6}>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ width: "60%" }}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Col>

        <Col md={3}>
          <Row>
            <Basket className="align-self-center" />
            <Col>
              <Text text="Cart" />
              <Text text="0 items in your card" className="d-block" />
            </Col>
          </Row>
        </Col>
      </Navbar>
    );
  }
}

export default TopNav;
