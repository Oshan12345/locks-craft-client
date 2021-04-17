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
    margin: "auto",
  };
  return (
    <div className="row row-cols-1 row-cols-sm-3  row-cols-md-4 g-4">
      <div className="col ">
        <div className="card  bg-warning h-100">
          <img
            src={stuffImg}
            className="card-img-top "
            alt="..."
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a short card.</p>
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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
