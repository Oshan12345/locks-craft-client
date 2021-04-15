import React from "react";
import { Link } from "react-router-dom";
import "./service.css";
const ServiceCard = ({ service }) => {
  const { shortDescription, serviceType, image } = service;
  return (
    <div class="col mt-4 mb-5">
      <Link to="/dashboard/book-service" class="text-decoration-none text-dark">
        <div class="card h-100 service-card-body">
          <div style={{ overflow: "hidden" }}>
            <img src={image} class="card-img-top w-100" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">{serviceType}</h5>
            <p class="card-text">{shortDescription}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
