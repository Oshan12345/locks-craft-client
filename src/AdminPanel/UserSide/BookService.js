import React from "react";
import LeftSidebar from "../LeftSidebar";

const BookService = () => {
  return (
    <div class="d-flex">
      <LeftSidebar />
      <div
        class="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Your name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputServiceType" class="form-label">
              Your service type
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputServiceType"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        "pay with... here stripee will be integrated"
      </div>
    </div>
  );
};

export default BookService;
