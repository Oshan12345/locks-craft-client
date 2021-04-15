import React from "react";

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
      bgColor: "#ba896b36",
    },
    {
      id: "banner-2",
      image:
        "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text: ` Excepturi enim molestiae in nisi esse placeat reprehenderit
                animi facilis accusantium quod? Lorem ipsum dolor,
                 sit amet consectetur adipisicing elit.`,
      flexDirection: "",
      bgColor: "#4f453c14",
    },
    {
      id: "banner-3",
      image:
        "https://images.pexels.com/photos/411227/pexels-photo-411227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Ipsam ab consequatur maiores minima molestias impedit, velit 
       ipsum in sequi hic quod modi? Ab eligendi, officiis laudantium, 
       incidunt perspiciatis dignissimos pariatur libero voluptatem`,
      flexDirection: "flex-row-reverse",
      bgColor: "#4242421a",
    },
  ];

  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <CarosalItem props={bannerData[0]} />
        </div>
        <div class="carousel-item">
          <CarosalItem props={bannerData[1]} />
        </div>
        <div class="carousel-item">
          <CarosalItem props={bannerData[2]} />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const CarosalItem = ({ props }) => {
  console.log(props);
  const { image, text, flexDirection, bgColor } = props;

  return (
    <div class="card mb-3 border-0" style={{ backgroundColor: bgColor }}>
      <div class={`row g-0 ${flexDirection}`}>
        <div class="col-md-5">
          <img
            src={image}
            alt="..."
            class="w-100 "
            style={{ objectFit: "cover", height: 380 }}
          />
        </div>
        <div class="col-md-7 ">
          <div class="card-body d-flex justify-content-center align-items-center h-100">
            <div>
              <h1
                class="card-title"
                style={{
                  background:
                    "-webkit-linear-gradient(45deg, #09009f, #00ff95 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                We provide locksmith service 7/24
              </h1>
              <p class="card-text">{text}</p>
              <div class="card-text text-center">
                <button class="btn btn-primary">get a deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
