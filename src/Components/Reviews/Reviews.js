import React, { useEffect, useState } from "react";
import axios from "axios";
const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/get-all-reviews")
      .then(function (response) {
        // handle success
        console.log(response);
        setAllReviews(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="w-100 bg-info" style={{ overflowX: "scroll" }}>
      <div className="d-flex justify-content-between ">
        {allReviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
      <ReviewCard />
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    // <div className="row row-cols-1 row-cols-md-4 g-4">

    <div className="col  m-2">
      <div className="card h-100">
        <div className="card-body" style={{ minWidth: 300 }}>
          <h5 className="card-title">{review?.name}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
