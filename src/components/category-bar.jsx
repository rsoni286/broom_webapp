import React, { Component } from "react";
import Text from "./text";
import { Basket } from "./icons";

class CatSideBar extends Component {
  state = {
    isListExpanded: false,
  };

  render() {
    return (
      <React.Fragment>
        <ul className="list-group list-group-my">
          <Text
            text="Shops by Category"
            textType="desc"
            className="list-group-item text-primary"
          />
          {this.getCategories()}
          <hr className="m-0 p-0" />
          {this.setExpandText()}
        </ul>
      </React.Fragment>
    );
  }

  setExpandText() {
    const { isListExpanded } = this.state;
    let text = "";

    if (isListExpanded) {
      text = "Collapse";
    } else {
      text = "View More";
    }

    return (
      <Text
        onClick={this.handleExpand}
        className="d-flex justify-content-center list-group-item text-action top-border"
        text={text}
      />
    );
  }

  handleExpand = () => {
    this.setState({
      isListExpanded: !this.state.isListExpanded,
    });
  };

  getCategories() {
    let { categories } = this.props;
    const { isListExpanded } = this.state;

    if (!isListExpanded) {
      categories = categories.slice(0, 10);
    }

    return categories.map((category) => (
      <a
        key={category.id}
        href="/#"
        className="list-group-item list-group-item-action py-2 px-4 no-bottom-border"
        style={{ fontSize: "14px" }}
      >
        <Basket /> {category.name}
      </a>
    ));
  }
}

export default CatSideBar;
