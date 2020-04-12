import React, { Component } from "react";

export class Basket extends Component {
  render() {
    return (
      <svg
        className={"bi bi-bag-fill " + this.props.className}
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        fill="#9e00c5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
      </svg>
    );
  }
}
