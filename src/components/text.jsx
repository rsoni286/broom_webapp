import React, { Component } from "react";

class Text extends Component {
  render() {
    return this.getElement();
  }

  getElement() {
    const { textType, color, text } = this.props;

    let className = "px-2 m-0 align-middle ";
    const colorClass = "text-" + (color || "black");
    const otherClasses = " " + (this.props.className || "");

    className = className + colorClass + otherClasses;

    if (textType === "title") {
      return <h4 className={className}>{text}</h4>;
    } else if (textType === "sub-title") {
      return <h5 className={className}>{text}</h5>;
    } else if (textType === "desc") {
      return <h6 className={className}>{text}</h6>;
    } else {
      return (
        <p className={className} style={{ fontSize: "14px" }}>
          {text}
        </p>
      );
    }
  }
}

export default Text;
