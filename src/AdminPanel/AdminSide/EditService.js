import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const EditService = () => {
  let query = useQuery();
  const serviceId = query.get("serviceId");
  const [serviceDetails, setServiceDetail] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [serviceImage, setServiceImage] = useState("");
  const [singleCategory, setSingleCategory] = useState({
    categoryName: "",
    price: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getService/${serviceId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setServiceDetail(response.data);
        setUpdatedDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [serviceId]);

  const addNewCategory = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:4000/add-new-category/${serviceId}`,
        singleCategory
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(serviceImage);
  const handleCategoryInput = (e) => {
    const newCategory = { ...singleCategory };
    newCategory[e.target.name] = e.target.value;
    setSingleCategory(newCategory);
  };
  const handleInputChange = (e) => {
    const newCategory = { ...updatedDetails };
    newCategory[e.target.name] = e.target.value;
    setUpdatedDetails(newCategory);
    console.log(updatedDetails);
  };
  const deleteCategory = (e) => {
    const serviceCategory = e.target.parentElement.parentElement.children;
    const categoryName = serviceCategory[0].outerText;
    const price = serviceCategory[1].outerText.split("$")[1];

    axios
      .patch(`http://localhost:4000/delete-category/${serviceId}`, {
        categoryName,
        price,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (serviceImage) {
      var imageData = new FormData();
      imageData.set("key", "2eb131723a878591ca75a07777111d17");
      imageData.append("image", serviceImage);
      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
          finalUpload(response.data.data.display_url);
          console.log("eqra--------", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      finalUpload(updatedDetails.image);
    }
  };
  const finalUpload = (image) => {
    const finalEventData = { ...updatedDetails };
    finalEventData.image = image;
    console.log("ssssssss--", finalEventData);
    axios
      .patch(
        `http://localhost:4000/update-service/${serviceId}`,
        finalEventData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // fetch(
    //   `https://enigmatic-mesa-35453.herokuapp.com/updateProduct/${productId}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(finalEventData),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //   //  history.push("/admin");
    //   });
  };
  console.log("sssss-----------", updatedDetails);
  return (
    <div className="container m-auto">
      <p className="text-center p-3 mt-4">
        Fill each field which you want to change. If yor don't fill any field it
        will be updated with previous information.
      </p>
      {/* <form className="d-flex m-auto p-5" style={{ maxWidth: 500 }}>
        <input
          className="form-control m"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-info" type="submit">
          Search
        </button>
      </form> */}
      {/* onSubmit={handleSubmit} */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <form className="row g-3 col-md-6 m-2">
          <div className="col-12">
            <label htmlFor="serviceTitle" className="form-label">
              <i className="bi bi-book-fill"></i> Service Title
            </label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="serviceTitle"
              placeholder={serviceDetails.title}
              onBlur={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-12 d-flex flex-column flex-md-row">
            <div className="mb-3">
              <label htmlFor="bookFile" className="form-label">
                <i className="bi bi-cloud-arrow-up-fill"></i> Upload image
              </label>

              <input
                className="form-control"
                type="file"
                id="bookFile"
                // onChange={handleImageUpload}
                onChange={(e) => {
                  setServiceImage(e.target.files[0]);
                }}
              />
            </div>
            {/* <img src={product.book_image} alt="" width="100" height="auto" /> */}
          </div>{" "}
          <div className="col-12 p-3">
            <div className="form-floating">
              <textarea
                name="description"
                className="form-control"
                id="floatingTextarea2"
                style={{ height: 100 }}
                onBlur={(e) => handleInputChange(e)}
              ></textarea>
              <label htmlFor="floatingTextarea2">
                <i className="bi bi-card-text"></i> Short description
              </label>
            </div>
          </div>
        </form>

        <div className="col-md-6 m-2">
          <div className="col-12">
            <label htmlFor="serviceCategory" className="form-label">
              <i className="bi bi-pen-fill"></i> Category
            </label>
            <div>
              <form>
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="add a new category"
                  required
                  name="categoryName"
                  onBlur={handleCategoryInput}
                />
                <input
                  type="number"
                  className="form-control m-2"
                  placeholder="Add a price"
                  min="1"
                  required
                  name="price"
                  onBlur={handleCategoryInput}
                />
                <div className="d-flex justify-content-center m-3">
                  {" "}
                  <button
                    className="btn btn-info"
                    type="submit"
                    onClick={addNewCategory}
                  >
                    {" "}
                    Add a category
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="table-responsive">
              <h6>Existing Categories :</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceDetails?.category?.map((category, i) => (
                    <tr key={category.categoryName + i}>
                      <th scope="row"> {category.categoryName} </th>
                      <td>${category.price}</td>
                      <td onClick={deleteCategory}>
                        {" "}
                        <i className="bi bi-trash-fill mx-4 text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-between p-4 mb-5">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          className="btn btn-primary"
          onClick={() => window.history.go(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default EditService;
