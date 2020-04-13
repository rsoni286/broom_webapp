import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { SearchIcon } from "./icons";
import "../app.css";

class SearchBar extends Component {
  style = {
    borderTopRightRadius: "0.6rem",
    borderBottomRightRadius: "0.6rem",
  };

  render() {
    return (
      <Form inline className="justify-content-center  my-3 my-md-0">
        <div class="input-group px-0 col-md-10 col-12">
          <FormControl type="text" placeholder={this.props.hint} />

          <div class="input-group-append d-none d-md-block">
            <Button style={this.style}>Search</Button>
          </div>

          <div class="input-group-append d-block d-md-none">
            <Button>
              <SearchIcon />
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default SearchBar;
