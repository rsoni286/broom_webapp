import React from "react";
import SponsoredShopSlider from "./slider";

const ShopFeed = () => {
  const shops = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

  return (
    <React.Fragment>
      <SponsoredShopSlider shops={shops} />
    </React.Fragment>
  );
};

export default ShopFeed;
