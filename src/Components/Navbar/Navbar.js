import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { logOut } from "../Login/LoginMethods";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogoOut = () => {
    logOut();
    setUser({});
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid ">
        <Link
          className="navbar-brand text-dark fs-1"
          to="/"
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: "xx-large !important",
          }}
        >
          Lock's Craft
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
            <li className="nav-item mx-2 ">
              <Link
                className="nav-link active text-dark fs-3 fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-2 ">
              <Link
                className="nav-link active text-dark fs-3 fw-bold"
                aria-current="page"
                to="/all-services"
              >
                Service
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fs-3 fw-bold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fs-3 fw-bold" to="/blog">
                blog
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fs-3 fw-bold" to="/dashboard">
                Admin
              </Link>
            </li>
          </ul>

          <div className="d-flex  me-auto align-items-center">
            {user.name || user.email ? (
              <button className="btn btn-warning fs-3" onClick={handleLogoOut}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-dark btn btn-info fs-3">
                Login
              </Link>
            )}
            {user.email && (
              <div className="fs-3">
                <img
                  src={user.photo}
                  className="rounded-circle mx-2"
                  alt=""
                  style={{ height: 30, width: 30 }}
                />
                {user.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
