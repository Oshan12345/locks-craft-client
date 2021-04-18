import React from "react";
import stuffImg from "../../images/stuff.png";
const TeamMember = () => {
  return (
    <div className="">
      <MemberCard />
    </div>
  );
};

const MemberCard = () => {
  const imageStyle = {
    borderRadius: "50%",
    background: "white",
    padding: "3%",
    height: "100px",
    width: "100px",
    objectFit: "cover",
    margin: "8px auto",
  };
  return (
    <div className="row row-cols-1 row-cols-sm-2  row-cols-md-4 g-4">
      <div className="col ">
        <div className="card  bg-warning h-100">
          <img
            src={stuffImg}
            className="card-img-top "
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Mr. Jhon</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae laboriosam excepturi quasi alias veniam quidem, facere
              quia ad unde?
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100  bg-warning">
          <img
            src={stuffImg}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Mr. Ricchel </h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              nesciunt nihil alias, quis voluptatem accusamus iusto architecto.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100  bg-warning">
          <img
            src={stuffImg}
            className="card-img-top"
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Mr. Alex</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              sed tempore ipsum quam corrupti at explicabo.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100  bg-warning ">
          <img
            src={stuffImg}
            className="card-img-top "
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Mr. Jack</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              iure commodi quidem fugit, nam iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
