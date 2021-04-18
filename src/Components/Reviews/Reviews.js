import React, { useEffect, useState } from "react";
import axios from "axios";
const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://peaceful-fjord-47606.herokuapp.com/get-all-reviews")
      .then(function (response) {
        setAllReviews(response.data);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="w-100 bg-info" style={{ overflowX: "scroll" }}>
      <div className="d-flex justify-content-between ">
        {allReviews.map((review) => (
          <ReviewCard review={review} key={review?._id} />
        ))}
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const { commentText, name, photo, ratings } = review;
  return (
    // <div className="row row-cols-1 row-cols-md-4 g-4">

    <div className="col  m-2">
      <div className="card mb-3 h-100" style={{ minWidth: "300px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={photo} className="rounded-circle" alt="..." />
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body m-auto">
              <h5 className="card-title">{name}</h5>
              <p className="card-text m-auto" style={{ fontSize: 12 }}>
                {commentText}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {Array.from(Array(parseInt(ratings?.[0])).keys()).map(
                    (rating) => (
                      <i
                        className="bi bi-star-fill text-warning"
                        key={"rating" + rating}
                      ></i>
                    )
                  )}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
