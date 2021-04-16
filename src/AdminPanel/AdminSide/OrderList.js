import React from "react";
import LeftSidebar from "../LeftSidebar";

const OrderList = () => {
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
                  <i className="bi bi-file-earmark-person-fill"></i> Name
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Email
                </th>
                <th scope="col">
                  <i className="bi bi-envelope-fill"></i> Service
                </th>
                <th scope="col">
                  <i className="bi bi-credit-card-2-front-fill"></i> Pay With
                </th>
                <th scope="col">
                  <i className="bi bi-layers-half"></i> Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      status
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Pending
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          On Going
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Done
                        </a>
                      </li>
                    </ul>
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

export default OrderList;
