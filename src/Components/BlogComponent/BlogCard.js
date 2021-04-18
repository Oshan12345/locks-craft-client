import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { feature_image, excerpt, id, title } = post;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={feature_image}
          className="card-img-top w-100"
          alt="..."
          style={{ height: 196, objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{excerpt.substring(0, 280)}...</p>
        </div>
        <Link className="btn btn-info w-75 m-auto mb-3" to={`/blog/${id}`}>
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
