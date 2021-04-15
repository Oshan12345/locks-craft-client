import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const service = [
    {
      image:
        "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      serviceType: "Residential service",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
    },
    {
      image:
        "https://images.pexels.com/photos/411227/pexels-photo-411227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      serviceType: "Commercial service",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
    },
    {
      image:
        "https://images.pexels.com/photos/2908558/pexels-photo-2908558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      serviceType: "Automotive service",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
    },
    {
      image:
        "https://images.pexels.com/photos/589038/pexels-photo-589038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      serviceType: "Emergency service",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
    },
  ];

  return (
    <div class=" service-section">
      <div class="m-1 row row-cols-1 row-cols-md-4 g-4">
        {service.map((service) => (
          <ServiceCard service={service} key={service.serviceType} />
        ))}
      </div>
    </div>
  );
};

export default Services;
