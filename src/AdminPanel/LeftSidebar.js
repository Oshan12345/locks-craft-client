import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div style={{ width: "fit-content" }} className="bg-info p-3">
      <Link
        to="/dashboard/book-service"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-cart-plus-fill"></i> book
      </Link>
      <hr />
      <Link
        to="/dashboard/all-bookings"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-basket-fill"></i> Bookings
      </Link>
      <hr />
      <Link
        to="/dashboard/give-review"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-chat-left-text-fill"></i> Review
      </Link>
      <hr />
      {/* admin */}
      <Link
        to="/dashboard/orders-list"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-basket-fill"></i> Order list
      </Link>
      <hr />
      <Link
        to="/dashboard/add-service"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-node-plus-fill"></i> Add service
      </Link>
      <hr />
      <Link
        to="/dashboard/make-admin"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-person-plus-fill"></i> Make admin
      </Link>
      <hr />
      <Link
        to="/dashboard/manage-service"
        className="text-decoration-none text-dark"
      >
        <i className="bi bi-kanban-fill"></i> Manage service
      </Link>
    </div>
  );
};

export default LeftSidebar;
