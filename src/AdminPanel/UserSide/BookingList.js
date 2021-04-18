import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
import { UserContext } from "../../App";
const BookingList = () => {
  const [listOfBookings, setListOfBookings] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    axios
      .get(
        `https://peaceful-fjord-47606.herokuapp.com/get-user-bookings/${user.email}`
      )
      .then(function (response) {
        setListOfBookings(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [user]);

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div className="p-4" style={{ width: "fit-content" }}>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {listOfBookings.map((booking, index) => (
            <BookingListCard booking={booking} key={"booking-card" + index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingListCard = ({ booking }) => {
  const { date, categoryName, price, serviceTitle, status } = booking;
  const cardBadge = {
    position: "absolute",
    top: "-15px",
    right: "-8px",
    borderRadius: "9px",
    padding: "10px",
  };
  return (
    <div className="col w-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mt-4">{serviceTitle}</h5>
          <p className="bg-info" style={cardBadge}>
            {" "}
            Status : {status}
          </p>
          <ul>
            <li>Order Date : {date}</li>
            <li>Category : {categoryName}</li>
            <li>Price : {price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
