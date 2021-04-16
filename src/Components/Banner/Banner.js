import React from "react";
import "./banner.css";
const Banner = () => {
  const bannerData = [
    {
      id: "banner-1",
      image:
        "https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?cs=srgb&dl=pexels-george-becker-792034.jpg&fm=jpg",
      text: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Excepturi enim molestiae in nisi esse placeat reprehenderit
              animi facilis accusantium quod?`,
      flexDirection: "flex-row-reverse",
    },
    {
      id: "banner-2",
      image:
        "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text: ` Excepturi enim molestiae in nisi esse placeat reprehenderit
              animi facilis accusantium quod? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit.`,
      flexDirection: "",
    },
    {
      id: "banner-3",
      image:
        "https://images.pexels.com/photos/411227/pexels-photo-411227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Ipsam ab consequatur maiores minima molestias impedit, velit`,
      flexDirection: "flex-row-reverse",
    },
  ];

  return (
    <div className="home-page-banner">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CarosalItem props={bannerData[0]} />
          </div>
          <div className="carousel-item">
            <CarosalItem props={bannerData[1]} />
          </div>
          <div className="carousel-item">
            <CarosalItem props={bannerData[2]} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

const CarosalItem = ({ props }) => {
  const { image, text, flexDirection } = props;
  // style={{ backgroundColor: bgColor }}
  return (
    <div className="card mb-3 border-0 bg-transparent">
      <div className={`row g-0 ${flexDirection}`}>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={image}
            alt="..."
            className=" m-auto p-3"
            style={{ objectFit: "cover", height: 390, width: "90%" }}
          />
        </div>
        <div className="col-md-7 p-3">
          <div className="card-body d-flex justify-content-center align-items-center h-100 home-page-banner-card-body ">
            <div>
              <h2 className="card-title animate__animated animate__bounce">
                {" "}
                We provide locksmith service 7/24
              </h2>
              <p className=" fs-5 p-3 animate__animated animate__tada">
                {text}
              </p>
              <div className="card-text text-center">
                <button className="btn btn-primary banner-button animate__animated animate__shakeX">
                  get a deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
