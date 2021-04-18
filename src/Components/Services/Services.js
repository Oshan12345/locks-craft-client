import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

import axios from "axios";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let mounted = true;

    mounted &&
      axios
        .get("https://peaceful-fjord-47606.herokuapp.com/all-service")
        .then(function (response) {
          // handle success

          setServices(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className=" service-section">
      <div className="m-1 row row-cols-1 row-cols-md-4 g-4">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
