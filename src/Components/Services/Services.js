import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import car from "../../images/icons/car.png";
import emergency from "../../images/icons/emergency-call.png";
import house from "../../images/icons/house.png";
import office from "../../images/icons/office.png";
import axios from "axios";
const Services = () => {
  const [services, setServices] = useState([]);
  // const service = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     icon: house,
  //     serviceType: "Residential locksmith service",
  //     shortDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/411227/pexels-photo-411227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     icon: office,
  //     serviceType: "Commercial locksmith service",
  //     shortDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/2908558/pexels-photo-2908558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     icon: car,
  //     serviceType: "Automotive locksmith service",
  //     shortDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/589038/pexels-photo-589038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     icon: emergency,
  //     serviceType: "Emergency locksmith service",
  //     shortDescription:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quae dolore fuga, quidem aut expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati",
  //   },
  // ];

  useEffect(() => {
    let mounted = true;

    mounted &&
      axios
        .get("http://localhost:4000/all-service")
        .then(function (response) {
          // handle success
          console.log(response);
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
