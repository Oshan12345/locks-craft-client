import React from "react";
import LeftSidebar from "../LeftSidebar";

const OrderList = () => {
  return (
    <div class="d-flex">
      <LeftSidebar />
      <div
        class="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <div class="table-responsive">
          <table class="table table-info table-striped table-hover">
            <thead class="table-dark">
              <tr>
                <th scope="col">
                  <i class="bi bi-file-earmark-person-fill"></i> Name
                </th>
                <th scope="col">
                  <i class="bi bi-envelope-fill"></i> Email
                </th>
                <th scope="col">
                  <i class="bi bi-envelope-fill"></i> Service
                </th>
                <th scope="col">
                  <i class="bi bi-credit-card-2-front-fill"></i> Pay With
                </th>
                <th scope="col">
                  <i class="bi bi-layers-half"></i> Status
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
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      status
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Pending
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          On Going
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
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
