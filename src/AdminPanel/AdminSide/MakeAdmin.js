import React, { useState } from "react";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const MakeAdmin = () => {
  const [confirmMessage, setConfirmMessage] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const handleMakeAdmin = (e) => {
    e.preventDefault();

    const role = "admin";

    axios
      .post("https://peaceful-fjord-47606.herokuapp.com/make-admin", {
        email: adminEmail,
        role,
      })
      .then(function (response) {
        setConfirmMessage(response.data.message);
        hideMessage();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const hideMessage = () => {
    setTimeout(() => {
      setConfirmMessage("");
    }, [10000]);
  };
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form className="d-flex" onSubmit={handleMakeAdmin}>
          <input
            className="form-control-sm me-2 "
            type="email"
            placeholder="Search"
            aria-label="Email"
            onBlur={(e) => {
              setAdminEmail(e.target.value);
            }}
            required
          />
          <input
            className="btn btn-outline-success"
            type="submit"
            value="Make admin"
          />
        </form>
        {confirmMessage && (
          <div className="col-12">
            <p className="p-3 bg-info">{confirmMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
