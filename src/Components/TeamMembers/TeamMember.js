import React from "react";
import stuffImg from "../../images/stuff.png";
const TeamMember = () => {
  return (
    <div class="">
      <MemberCard />
    </div>
  );
};

const MemberCard = () => {
  return (
    <div class="row row-cols-1 row-cols-sm-3  row-cols-md-4 g-4">
      <div class="col " style={{ marginTop: 60 }}>
        <div class="card  bg-primary h-100">
          <img
            src={stuffImg}
            class="card-img-top"
            alt="..."
            style={{ transform: "translateY(-60px)" }}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col" style={{ marginTop: 60 }}>
        <div class="card h-100  bg-primary">
          <img
            src={stuffImg}
            class="card-img-top"
            alt="..."
            style={{ transform: "translateY(-60px)" }}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a short card.</p>
          </div>
        </div>
      </div>
      <div class="col" style={{ marginTop: 60 }}>
        <div class="card h-100  bg-primary">
          <img
            src={stuffImg}
            class="card-img-top"
            alt="..."
            style={{ transform: "translateY(-60px)" }}
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col" style={{ marginTop: 60 }}>
        <div class="card h-100  bg-primary">
          <img
            src={stuffImg}
            class="card-img-top"
            alt="..."
            style={{ transform: "translateY(-60px)" }}
          />
          <div class="card-body">
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

export default TeamMember;
