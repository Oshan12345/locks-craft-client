import React, { useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const OrderList = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    axios
      .get("https://peaceful-fjord-47606.herokuapp.com/get-all-bookings")
      .then(function (response) {
        // handle success

        setAllBookings(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [isReload]);

  const changeOrderStatus = (e, postId) => {
    axios
      .patch(
        `https://peaceful-fjord-47606.herokuapp.com/update-order-status/${postId}`,
        {
          status: e.target.innerText,
        }
      )
      .then(function (response) {
        response.data.modified && setIsReload(!isReload);
      })
      .catch(function (error) {
        console.log(error);
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
                  <i className="bi bi-file-earmark-person-fill"></i> Name
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Email
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Service
                </th>
                <th scope="col">
                  <i className="bi bi-credit-card-2-front-fill"></i> Category
                </th>
                <th scope="col">
                  <i className="bi bi-layers-half"></i> Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((booking) => (
                <tr key={booking._id}>
                  <th scope="row">{booking.name}</th>
                  <td>{booking.email}</td>
                  <td>{booking.serviceTitle} </td>
                  <td>{booking.categoryName}</td>
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
                        {booking.status}
                      </button>
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li
                          className="mx-1 border-bottom"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changeOrderStatus(e, booking._id)}
                        >
                          Pending
                        </li>
                        <li
                          className="mx-1 border-bottom"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changeOrderStatus(e, booking._id)}
                        >
                          Ongoing
                        </li>
                        <li
                          className="mx-1 border-bottom"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changeOrderStatus(e, booking._id)}
                        >
                          Done
                        </li>
                      </ul>
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

export default OrderList;
