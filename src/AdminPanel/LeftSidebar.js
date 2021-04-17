import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div style={{ width: "fit-content" }} className="bg-info p-3">
      <div className="sidebar-item">
        <Link
          to="/dashboard/book-service"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-cart-plus-fill"></i> book
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/all-bookings"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-basket-fill"></i> Bookings
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/give-review"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-chat-left-text-fill"></i> Review
        </Link>
      </div>
      <hr />
      {/* admin */}
      <div className="sidebar-item">
        <Link
          to="/dashboard/orders-list"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-basket-fill"></i> Order list
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/add-service"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-node-plus-fill"></i> Add service
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/make-admin"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-person-plus-fill"></i> Make admin
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/manage-service"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-kanban-fill"></i> Manage service
        </Link>
      </div>
      <hr />
      <div className="sidebar-item">
        <Link
          to="/dashboard/admin-list"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-person-lines-fill"></i> Admin list
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
