import React from "react";

const EditService = () => {
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
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="bookName" className="form-label">
            <i className="bi bi-book-fill"></i> Book Name
          </label>
          <input
            name="book_name"
            type="text"
            className="form-control"
            id="bookName"
            //   placeholder={product.book_name}
            //   onBlur={(e) => handleInputChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="authorName" className="form-label">
            <i className="bi bi-pen-fill"></i> Author Name
          </label>
          <input
            name="author_name"
            type="text"
            className="form-control"
            id="authorName"
            //   placeholder={product.author_name}
            //   onBlur={(e) => handleInputChange(e)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="bookPrice" className="form-label">
            <i className="bi bi-tags-fill"></i> Book price
          </label>
          <input
            name="book_price"
            type="number"
            min={1}
            className="form-control"
            id="bookPrice"
            //   placeholder={product.book_price}
            //   onBlur={(e) => handleInputChange(e)}
          />
        </div>
        <div className="col-md-6 d-flex flex-column flex-md-row">
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
                //   setProductImage(e.target.files[0]);
              }}
            />
          </div>
          {/* <img src={product.book_image} alt="" width="100" height="auto" /> */}
        </div>{" "}
        <div className="col-12 p-3">
          <div className="form-floating">
            <textarea
              name="book_description"
              className="form-control"
              id="floatingTextarea2"
              style={{ height: 100 }}
              // onBlur={(e) => handleInputChange(e)}
            ></textarea>
            <label htmlFor="floatingTextarea2">
              <i className="bi bi-card-text"></i> Short description
            </label>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Update Book
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.history.go(-1)}
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditService;
