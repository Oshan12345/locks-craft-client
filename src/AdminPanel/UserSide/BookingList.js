import React from "react";
import LeftSidebar from "../LeftSidebar";

const BookingList = () => {
  return (
    <div class="d-flex">
      <LeftSidebar />
      <div class="p-4" style={{ width: "fit-content" }}>
        <BookingListCard />
      </div>
    </div>
  );
};

const BookingListCard = () => {
  const cardBadge = {
    position: "absolute",
    top: "-7px",
    right: "-8px",
    borderRadius: "9px",
    padding: "10px",
  };
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="bg-info" style={cardBadge}>
              {" "}
              Status:Pending
            </p>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="bg-info" style={cardBadge}>
              {" "}
              Status:Pending
            </p>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="bg-info" style={cardBadge}>
              {" "}
              Status:Pending
            </p>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="bg-info" style={cardBadge}>
              {" "}
              Status:Pending
            </p>
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

export default BookingList;
