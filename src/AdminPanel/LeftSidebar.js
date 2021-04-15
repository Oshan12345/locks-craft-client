import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div style={{ width: "fit-content" }} class="bg-info p-3">
      <Link to="/dashboard/book-service" class="text-decoration-none text-dark">
        <i class="bi bi-cart-plus-fill"></i> book
      </Link>
      <hr />
      <Link to="/dashboard/all-bookings" class="text-decoration-none text-dark">
        <i class="bi bi-basket-fill"></i> Bookings
      </Link>
      <hr />
      <Link to="/dashboard/give-review" class="text-decoration-none text-dark">
        <i class="bi bi-chat-left-text-fill"></i> Review
      </Link>
      <hr />
      {/* admin */}
      <Link to="/dashboard/orders-list" class="text-decoration-none text-dark">
        <i class="bi bi-basket-fill"></i> Order list
      </Link>
      <hr />
      <Link to="/dashboard/add-service" class="text-decoration-none text-dark">
        <i class="bi bi-node-plus-fill"></i> Add service
      </Link>
      <hr />
      <Link to="/dashboard/make-admin" class="text-decoration-none text-dark">
        <i class="bi bi-person-plus-fill"></i> Make admin
      </Link>
      <hr />
      <Link
        to="/dashboard/manage-service"
        class="text-decoration-none text-dark"
      >
        <i class="bi bi-kanban-fill"></i> Manage service
      </Link>
    </div>
  );
};

export default LeftSidebar;
