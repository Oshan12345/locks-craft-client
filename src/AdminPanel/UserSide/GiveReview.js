import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import LeftSidebar from "../LeftSidebar";
import axios from "axios";
const GiveReview = () => {
  const { user } = useContext(UserContext);
  const [commentDetails, setCommentDetails] = useState({
    name: user.name,
    email: user.email,
    photo: user.photo,
    commentText: "",
  });

  const submitComment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/post-review", commentDetails)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const setText = { ...commentDetails };
    setText[e.target.name] = [e.target.value];
    setCommentDetails(setText);
  };

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        <form onSubmit={submitComment}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onBlur={handleInputChange}
              placeholder={user.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              name="name"
              onBlur={handleInputChange}
              placeholder={user.name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="commentText"
              onBlur={handleInputChange}
              required
            ></textarea>
          </div>

          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default GiveReview;
