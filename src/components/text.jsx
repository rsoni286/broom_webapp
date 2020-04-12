import React, { Component } from "react";

class Text extends Component {
  render() {
    return this.getElement();
  }

  getElement() {
    const { textType, color, text } = this.props;
    const className =
      "d-inline px-2 m-0 align-middle text-" +
      color +
      " " +
      this.props.className;

    if (textType === "title") {
      return <h4 className={className}>{text}</h4>;
    } else if (textType === "sub-title") {
      return <h5 className={className}>{text}</h5>;
    } else {
      return <span className={className}>{text}</span>;
    }
  }
}

export default Text;
