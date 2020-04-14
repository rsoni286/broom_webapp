import React, { Component } from "react";
import { Image } from "react-bootstrap";

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

export const BroomLogo = () => {
  return (
    <Image
      height="32px"
      width="32px"
      src={process.env.PUBLIC_URL + "/broom.svg"}
    />
  );
};

export const GetIn = () => {
  return (
    <svg
      class="bi bi-box-arrow-in-right"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 16 16"
      fill="#9e00c5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8.146 11.354a.5.5 0 010-.708L10.793 8 8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 011 8z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M13.5 14.5A1.5 1.5 0 0015 13V3a1.5 1.5 0 00-1.5-1.5h-8A1.5 1.5 0 004 3v1.5a.5.5 0 001 0V3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8A.5.5 0 015 13v-1.5a.5.5 0 00-1 0V13a1.5 1.5 0 001.5 1.5h8z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const ProfileImage = () => {
  return (
    <svg
      class="bi bi-people-circle"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      fill="#9e00c5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
      <path
        fill-rule="evenodd"
        d="M8 9a3 3 0 100-6 3 3 0 000 6z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      class="bi bi-search"
      width="18px"
      height="18px"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
