import React from "react";
import "./banner.css";
function Banner() {
  return (
    <div className="banner">
      <img src="/image/banner-image.png" alt="event banner" />
      <div className="banner-caption">
        <p className="banner-title">Pelumi</p>
        <p className="banner-para">A musical play by Muyiwa Adigun</p>
      </div>
    </div>
  );
}

export default Banner;
