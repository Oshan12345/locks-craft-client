import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const ManageService = () => {
  const [allServiceList, setAllServiceList] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/all-service")
      .then(function (response) {
        // handle success
        console.log(response);
        setAllServiceList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [updateUi]);

  const deleteOneService = (serviceId) => {
    console.log(serviceId);
    axios
      .delete(`http://localhost:4000/delete-service/${serviceId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setUpdateUi(!updateUi);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <div className="table-responsive">
          <table className="table table-info table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">
                  <i className="bi bi-file-earmark-person-fill"></i> Service
                  name
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Category
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Pending status
                </th>

                <th scope="col">
                  <i className="bi bi-layers-half"></i> Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allServiceList.map((service) => (
                <tr key={service._id}>
                  <th scope="row">{service.title}</th>

                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        {/* {booking.status} */}
                        Click here to see
                      </button>
                      <ol
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {service?.category?.map((category, i) => (
                          <li
                            className="mx-1 border-bottom"
                            style={{ cursor: "pointer", fontSize: 11 }}
                            key={"category" + i}
                            // onClick={(e) => changeOrderStatus(e, booking._id)}
                          >
                            Name: {category.categoryName} <br />
                            price: $ {category.price}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td className="d-flex">
                    <div
                      onClick={() => deleteOneService(service._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-trash-fill mx-2 text-danger"></i>
                    </div>
                    <div>
                      <Link
                        to={`/dashboard/edit-service?serviceId=${service._id}`}
                      >
                        <i className="bi bi-pen-fill text-warning"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
