import React, { useState } from "react";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const AddService = () => {
  const [serviceImg, setServiceImage] = useState("");
  const [serviceData, setServiceData] = useState({
    title: "",
    categoryName: "",
    price: 0,
    description: "",
    image: " ",
  });
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var imageData = new FormData();
    imageData.set("key", "2eb131723a878591ca75a07777111d17");
    imageData.append("image", serviceImg);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        finalUpload(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const finalUpload = (image) => {
    const finalEventData = { ...serviceData };
    finalEventData.image = image;
    fetch("https://peaceful-fjord-47606.herokuapp.com/add-new-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalEventData),
    })
      .then((res) => res.json())
      .then((data) => {
        setConfirmMessage("A new service has been added to the db");
        hideMessage();
      })
      .catch((err) => console.log(err));
  };

  const hideMessage = () => {
    setTimeout(() => {
      setConfirmMessage("");
    }, [10000]);
  };
  const handleInputChange = (e) => {
    const newEvent = { ...serviceData };
    newEvent[e.target.name] = e.target.value;
    setServiceData(newEvent);
  };

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="serviceTitle" className="form-label">
              <i className="bi bi-book-fill"></i> Service title
            </label>
            <input
              name="title"
              type="text"
              className="form-control "
              id="serviceTitle"
              required
              onBlur={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="serviceCategory" className="form-label">
              <i className="bi bi-pen-fill"></i> Add a category
            </label>
            <input
              name="categoryName"
              type="text"
              className="form-control "
              id="serviceCategory"
              required
              placeholder="ex: Card access and keypad locking service"
              onBlur={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="servicePrice" className="form-label">
              <i className="bi bi-tags-fill"></i> Service Category price
            </label>
            <input
              name="price"
              type="number"
              min={1}
              className="form-control "
              id="servicePrice"
              required
              onBlur={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="serviceImage" className="form-label">
                <i className="bi bi-cloud-arrow-up-fill"></i> Upload image
              </label>

              <input
                className="form-control "
                type="file"
                id="serviceImage"
                required
                onChange={(e) => {
                  setServiceImage(e.target.files[0]);
                }}
              />
            </div>
          </div>{" "}
          <div className="col-12 p-3">
            <div className="form-floating">
              <textarea
                name="description"
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                onBlur={(e) => handleInputChange(e)}
                required
              ></textarea>
              <label htmlFor="floatingTextarea2">
                <i className="bi bi-card-text"></i> Short description
              </label>
            </div>
          </div>
          {confirmMessage && (
            <div className="col-12">
              <p className="p-3 bg-info">{confirmMessage}</p>
            </div>
          )}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
