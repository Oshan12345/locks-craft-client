import React, { useContext, useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";

import PriceTable from "../../Components/PriceTable/PriceTable";
import { useLocation } from "react-router";
import axios from "axios";
import { UserContext } from "../../App";

import PaymentModal from "../../Components/ProcessPayment/PaymentModal";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const BookService = () => {
  const { user } = useContext(UserContext);

  const [service, setService] = useState({});

  let query = useQuery();
  const serviceId = query.get("serviceId");

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
  const [displayMessage, setDisplayMessage] = useState("");
  function openModal(e) {
    e.preventDefault();

    if (
      !orderDetails.serviceTitle ||
      !orderDetails.categoryName ||
      !service.address ||
      !service.mobileNumber
    ) {
      setDisplayMessage("Please fill all the fields...");
      hideMessage();
    }

    orderDetails.address && orderDetails.mobileNumber && setIsOpen(true);
  }
  const hideMessage = () => {
    setTimeout(() => {
      setDisplayMessage("");
    }, 5000);
  };

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    axios
      .get(`https://peaceful-fjord-47606.herokuapp.com/getService/${serviceId}`)
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
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [serviceId]);

  const selectCategoryFromTable = (e) => {
    const serviceCategory = e.target.parentNode.innerText.split("$");

    const newCategory = { ...orderDetails };
    newCategory.categoryName = serviceCategory[0].trim();
    newCategory.price = serviceCategory[1];

    setOrderDetails(newCategory);
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
                  <b> Order Time:</b> {new Date().toDateString("dd/mm")},
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
                <p>Please select a service category</p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={orderDetails?.categoryName}
                  name="categoryName"
                  onChange={(e) => {
                    handleSelectCategoryFromInput(e);
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
              {displayMessage && (
                <div className="bg-danger p-3 text-dark">{displayMessage}</div>
              )}
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
                className="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">No service selected</div>
                <div className="card-body">
                  <p className="card-text">
                    You need to select a service from the home page or service
                    page... please go to any of the page and select a service
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

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
