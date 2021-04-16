import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";

import PriceTable from "../../Components/PriceTable/PriceTable";
import { useLocation } from "react-router";
import axios from "axios";
import { UserContext } from "../../App";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const BookService = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const [service, setService] = useState({});

  // const [category, setCategory] = useState({
  //   categoryName: "",
  //   price: "",
  // });
  let query = useQuery();
  const serviceId = query.get("serviceId");
  console.log(serviceId);
  const [orderDetails, setOrderDetails] = useState({
    name: user.name,
    email: user.email,
    userId: "abcdsdsd",
    serviceTitle: "",
    categoryName: "",
    price: "",
    date: `${new Date().toDateString(
      "dd/mm"
    )} , ${new Date().toLocaleTimeString()}`,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getService/${serviceId}`)
      .then(function (response) {
        // handle success
        setService(response.data);
        setOrderDetails({ ...orderDetails, serviceTitle: response.data.title });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [serviceId]);

  //console.log(category, "sagar");

  const selectCategoryFromTable = (e) => {
    const serviceCategory = e.target.parentNode.innerText.split("$");

    const newCategory = { ...orderDetails };
    newCategory.categoryName = serviceCategory[0].trim();
    newCategory.price = serviceCategory[1];
    // setCategory(newCategory);
    setOrderDetails({
      ...orderDetails,
      categoryName: newCategory.categoryName,
      price: newCategory.price,
    });
    console.log(orderDetails);
  };
  const handleSelectCategoryFromInput = (e) => {
    const newCategory = service?.category?.find(
      (ct) => ct.categoryName === e.target.value
    );

    const price = newCategory?.price;
    setOrderDetails({
      ...orderDetails,
      price: price,
      categoryName: newCategory?.categoryName,
    });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    console.log(orderDetails);
    axios
      .post("http://localhost:4000/book-service", orderDetails)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const newOrderDetails = { ...orderDetails };
    newOrderDetails[e.target.name] = e.target.value;
    setOrderDetails(newOrderDetails);
  };

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-start">
          <div className="m-3">
            <form onSubmit={submitOrder}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onBlur={handleInputChange}
                  required
                  placeholder={user.email}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  name="name"
                  onBlur={handleInputChange}
                  placeholder={user.name}
                  required
                />
              </div>
              <div>
                {/* calender */}
                <p>
                  Order Time: {new Date().toDateString("dd/mm")},
                  {new Date().toLocaleTimeString()}{" "}
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputServiceType" className="form-label">
                  Service title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputServiceType"
                  aria-describedby="emailHelp"
                  placeholder={service?.title}
                  disabled
                />
              </div>
              <div>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={orderDetails?.categoryName}
                  name="categoryName"
                  onChange={(e) => {
                    handleSelectCategoryFromInput(e);
                    //  handleInputChange(e);
                  }}
                >
                  {" "}
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  {service?.category?.map((category, index) => (
                    <option
                      value={category?.categoryName}
                      key={"option" + index}
                    >
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  background: "gold",
                  margin: "8px 0px",
                  padding: "10px",
                }}
              >
                price : $ <span>{orderDetails?.price}</span>
              </div>
              <input type="submit" className="btn btn-primary" />
            </form>
          </div>
          <div className="m-3">
            <PriceTable
              selectCategory={selectCategoryFromTable}
              service={service}
            />
          </div>
        </div>
        "pay with... here stripee will be integrated"
      </div>
    </div>
  );
};

export default BookService;
