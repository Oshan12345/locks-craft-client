import React from "react";

const Reviews = () => {
  return (
    <div class="w-100 bg-info" style={{ overflowX: "scroll" }}>
      <ReviewCard />
    </div>
  );
};

const ReviewCard = () => {
  return (
    // <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="d-flex justify-content-between ">
      <div class="col  m-2">
        <div class="card h-100">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100 ">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100 ">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col  m-2">
        <div class="card h-100 ">
          <div class="card-body" style={{ minWidth: 300 }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
