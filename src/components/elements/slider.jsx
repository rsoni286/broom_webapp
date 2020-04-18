import React from "react";

const SponsoredShopSlider = ({ shops }) => {
  return (
    <div id="slider" className="shop-slider">
      <button
        onClick={scrollLeft}
        style={{ position: "absolute", top: "150px", left: "5%" }}
      >
        Left
      </button>
      <button
        onClick={scrollRight}
        style={{ position: "absolute", top: "150px", right: "5%" }}
      >
        Right
      </button>
      {shops.map((shop) => (
        <React.Fragment key={shop.id}>
          <div className="shop-slide px-1">
            <img
              className="rounded h-100 w-100"
              src={process.env.PUBLIC_URL + "/cover1.jpg"}
              alt="Cover"
            />
          </div>
          <div className="shop-slide px-1">
            <img
              className="rounded h-100 w-100"
              src={process.env.PUBLIC_URL + "/cover2.jpg"}
              alt="Cover"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const scrollRight = () => {
  const slider = document.getElementById("slider");
  const width = slider.clientWidth;

  slider.scrollLeft = slider.scrollLeft + width;
};

const scrollLeft = () => {
  const slider = document.getElementById("slider");
  const width = slider.clientWidth;

  slider.scrollLeft = slider.scrollLeft - width;
};

export default SponsoredShopSlider;
