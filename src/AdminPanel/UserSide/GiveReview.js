import React from "react";
import LeftSidebar from "../LeftSidebar";

const GiveReview = () => {
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
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiveReview;
