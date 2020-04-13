import React, { Component } from "react";
import Text from "./text";
import { GetIn } from "./logo";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Text text="Get In" textType="desc" className="d-inline" />
        <GetIn className="align-self-center" />
      </React.Fragment>
    );
  }
}

export default Profile;
