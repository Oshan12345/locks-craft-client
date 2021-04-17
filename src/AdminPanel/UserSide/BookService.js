import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";

import PriceTable from "../../Components/PriceTable/PriceTable";
import { useLocation } from "react-router";
import axios from "axios";
import { UserContext } from "../../App";
import ProcessPayment from "../../Components/ProcessPayment/ProcessPayment";
import PaymentModal from "../../Components/ProcessPayment/PaymentModal";
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

    serviceTitle: "",
    categoryName: "",
    price: "",
    date: `${new Date().toDateString(
      "dd/mm"
    )} , ${new Date().toLocaleTimeString()}`,
    address: "",
    mobileNumber: "",
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(e) {
    e.preventDefault();
    orderDetails.address && orderDetails.mobileNumber && setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/getService/${serviceId}`)
      .then(function (response) {
        // handle success
        setService(response.data);
        setOrderDetails({
          ...orderDetails,
          serviceTitle: response.data.title,
          categoryName: response.data.category[0].categoryName,
          price: response.data.category[0].price,
        });
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
    // setOrderDetails({
    //   ...orderDetails,
    //   categoryName: newCategory.categoryName,
    //   price: newCategory.price,
    // });
    setOrderDetails(newCategory);
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

  // const submitOrder = (e) => {
  //   e.preventDefault();
  //   console.log(orderDetails);
  //   axios
  //     .post("http://localhost:4000/book-service", orderDetails)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const handleInputChange = (e) => {
    const newOrderDetails = { ...orderDetails };
    newOrderDetails[e.target.name] = e.target.value;
    setOrderDetails(newOrderDetails);
  };
  console.log(orderDetails);
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-start">
          <div className="m-3">
            {/* <form onSubmit={submitOrder}> */}
            <form>
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
              {/* new code */}
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">
                  Your Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  aria-describedby="emailHelp"
                  name="address"
                  onBlur={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputMobileNumber" className="form-label">
                  Your Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputMobileNumber"
                  aria-describedby="emailHelp"
                  name="mobileNumber"
                  onBlur={handleInputChange}
                  required
                />
              </div>
              {/* end of new code */}
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
                  placeholder={
                    service?.title ||
                    "Please go to home page to select a service"
                  }
                  disabled
                />
              </div>
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={orderDetails?.categoryName}
                  name="categoryName"
                  onChange={(e) => {
                    handleSelectCategoryFromInput(e);
                    //  handleInputChange(e);
                  }}
                >
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
              {serviceId && orderDetails.price ? (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Make payment"
                  onClick={openModal}
                />
              ) : (
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Make payment"
                  disabled
                />
              )}
              {/* <button onClick={openModal}>Open Modal</button> */}
            </form>
          </div>
          <div className="m-3">
            {serviceId ? (
              <PriceTable
                selectCategory={selectCategoryFromTable}
                service={service}
              />
            ) : (
              <div
                class="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-header">No service selected</div>
                <div class="card-body">
                  <p class="card-text">
                    You need to select a service from the home page of service
                    page... please go to any of the page and select a service
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        "pay with... here stripee will be integrated"
        <PaymentModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          orderDetails={orderDetails}
        />
      </div>
    </div>
  );
};

export default BookService;
