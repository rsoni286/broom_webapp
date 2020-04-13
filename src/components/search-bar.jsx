import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <Form inline className="justify-content-center">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          style={{ width: "60%" }}
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    );
  }
}

export default SearchBar;
