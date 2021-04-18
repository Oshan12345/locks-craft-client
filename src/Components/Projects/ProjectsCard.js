import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  const { title, text, image } = project;
  return (
    <div className="col">
      <div className="card project-card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text.substring(0, 300)}....</p>
        </div>
        <Link to="#" className="btn btn-info w-50 m-auto mb-3 ">
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
