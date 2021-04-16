import React from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../LeftSidebar";

const ManageService = () => {
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <div className="table-responsive">
          <table className="table table-info table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">
                  <i className="bi bi-file-earmark-person-fill"></i> Service
                  name
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> price
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Pending status
                </th>
                <th scope="col">
                  <i className="bi bi-credit-card-2-front-fill"></i> Pay With
                </th>
                <th scope="col">
                  <i className="bi bi-layers-half"></i> Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td className="d-flex">
                  <div>
                    <i className="bi bi-trash-fill mx-2 text-danger"></i>
                  </div>
                  <div>
                    <Link to="/dashboard/edit-service">
                      <i className="bi bi-pen-fill text-warning"></i>
                    </Link>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td> <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
