import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { googleSignIn, login } from "./LoginMethods";
import axios from "axios";
const Login = () => {
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    login("xyz@gmail.com", "123456").then((res) => {
      if (res.name || res.email) {
        //  setUser(res);
        history.replace(from);
        console.log("sssssssss----", res);
        const { email } = res;
        axios
          .post("https://peaceful-fjord-47606.herokuapp.com/add-user", {
            name: "Sagar",
            email,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      setUser(res);
      history.replace(from);
      const { name, email } = res;
      axios
        .post("https://peaceful-fjord-47606.herokuapp.com/add-user", {
          name,
          email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };
  return (
    <div className="m-4">
      {" "}
      <div className="m-auto border p-4" style={{ maxWidth: 500 }}>
        <form className="row g-3">
          <fieldset disabled>
            <legend style={{ fontSize: 12 }}>
              Login in with email and password feature is temporarily disabled.
              Please continue with google
            </legend>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Temporarily disabled"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Temporarily disabled"
              />
            </div>

            <div className="col-12 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Remember me
                </label>
              </div>
              <div className="text-primary"> Forgot Password?</div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Log in
              </button>
            </div>
          </fieldset>
        </form>
        <div className="text-center mt-4">
          Don't have an account?
          <span>
            <Link to="/signup"> Create an account</Link>
          </span>
        </div>
      </div>
      <div className="text-center">or</div>
      <div className="m-auto mt-3" style={{ maxWidth: 450 }}>
        <button
          className="btn btn-outline-primary"
          style={{
            width: "100%",
            border: "1px solid",
            padding: 5,
            borderRadius: 999,
            margin: "auto",
          }}
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://img-authors.flaticon.com/google.jpg"
            alt=""
            className="mx-3"
            style={{
              maxWidth: 30,
              borderRadius: "50%",
            }}
          />
          Continue with google
        </button>
        <button
          className="btn btn-info mt-4"
          style={{
            width: "100%",
            border: "1px solid",
            padding: 5,
            borderRadius: 999,
            margin: "auto",
          }}
          onClick={handleEmailLogin}
        >
          <i class="bi bi-emoji-smile-fill mx-4"></i>
          Demo Login
        </button>
      </div>
    </div>
  );
};

export default Login;
