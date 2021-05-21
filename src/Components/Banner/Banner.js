import React from "react";
import "./banner.css";
const Banner = ({ children }) => {
  const bannerUrl =
    "https://images.pexels.com/photos/706500/pexels-photo-706500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <div className="banner-div">
      <div
        className="text-white  banner"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      ></div>
      <div className="text-center children">{children}</div>
    </div>
  );
};

export default Banner;
