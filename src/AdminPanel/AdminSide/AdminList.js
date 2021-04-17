import React, { useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/all-admin-list")
      .then(function (response) {
        // handle success
        console.log(response);
        setAdmins(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [updateUi]);

  const changeAdminRole = (email) => {
    console.log(email);

    const role = "user";
    axios
      .patch("http://localhost:4000/update-role", {
        email,
        role,
      })
      .then(function (response) {
        console.log(response);
        setUpdateUi(!updateUi);
        setConfirmMessage(
          `Admin Role for this Email : [${email}] has been removed...`
        );
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
        <div className="table-responsive">
          {confirmMessage && (
            <div className="col-12">
              <p className="p-3 bg-info">{confirmMessage}</p>
            </div>
          )}
          <table className="table table-info table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">
                  <i className="bi bi-file-earmark-person-fill"></i> Name
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Email
                </th>

                <th scope="col">
                  <i className="bi bi-layers-half"></i> Status
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin._id}>
                  <th scope="row">{admin.name}</th>
                  <td>{admin.email}</td>

                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        {admin.role}
                      </button>
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li
                          className="mx-1 border-bottom"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changeAdminRole(admin.email)}
                        >
                          Remove Admin Role
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
