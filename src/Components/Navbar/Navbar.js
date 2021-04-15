import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid ">
        <a class="navbar-brand text-dark" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li class="nav-item mx-2 ">
              <Link
                class="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark" href="#">
                blog
              </a>
            </li>
            <li class="nav-item mx-2">
              <Link class="nav-link text-dark" to="/dashboard">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button class="btn btn-warning">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
