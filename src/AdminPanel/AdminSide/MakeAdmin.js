import React from "react";
import LeftSidebar from "../LeftSidebar";

const MakeAdmin = () => {
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form className="d-flex">
          <input
            className="form-control-sm me-2"
            type="email"
            placeholder="Search"
            aria-label="Email"
          />
          <button className="btn btn-outline-success" type="submit">
            Make admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
