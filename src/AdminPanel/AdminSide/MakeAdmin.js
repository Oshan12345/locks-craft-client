import React from "react";
import LeftSidebar from "../LeftSidebar";

const MakeAdmin = () => {
  return (
    <div class="d-flex">
      <LeftSidebar />
      <div
        class="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form class="d-flex">
          <input
            class="form-control-sm me-2"
            type="email"
            placeholder="Search"
            aria-label="Email"
          />
          <button class="btn btn-outline-success" type="submit">
            Make admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
