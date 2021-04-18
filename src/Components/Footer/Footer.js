import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";

const Footer = () => {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4 text-white "
      style={{ backgroundColor: "#001269" }}
    >
      <div className="col ">
        <div className="card border-0 bg-transparent justify-content-center align-items-center">
          <div className="card-body">
            <h5 className="card-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              dolorum voluptatum molestias?
            </h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              libero officiis nemo nobis enim consectetur, perspiciatis aliquid
              porro! Aliquid accusantium velit dolores suscipit commodi placeat
              voluptas ducimus voluptates nobis porro.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 bg-transparent justify-content-center align-items-center">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-geo-fill mx-3"></i>Our Location
            </h5>
            <p className="card-text">72 lorem Rd Bankstown NSW 2200</p>
            <h5 className="card-title">
              <i className="bi bi-telephone-outbound-fill mx-3"></i> Cell
            </h5>
            <p className="card-text">12345678900</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card border-0 bg-transparent justify-content-center align-items-center">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
