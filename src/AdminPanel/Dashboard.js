import React from "react";
import LeftSidebar from "./LeftSidebar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <LeftSidebar />
      <div
        className="p-4"
        style={{ background: "aliceblue", width: "-webkit-fill-available" }}
      >
        here i will use graph chart
      </div>
    </div>
  );
};

export default Dashboard;
