import React from "react";
import Banner from "../Components/Banner/Banner";
import ContactUsForm from "../Components/ContactUsForm/ContactUsForm";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import Reviews from "../Components/Reviews/Reviews";
import Services from "../Components/Services/Services";
import TeamMember from "../Components/TeamMembers/TeamMember";

const Home = () => {
  return (
    <div>
      <Banner>
        <p
          className="fw-bold fs-4"
          style={{
            color: "white",
            padding: "10px",
            borderRadius: "10%",
            backgroundColor: "rgb(0 0 0 / 40%)",
          }}
        >
          <i className="bi bi-key-fill text-light"></i>
          <i className="bi bi-lock-fill mx-1 text-light"></i>
          <br />
          WE PROVIDE LOCKSMITH SERVICE 7/24. <br />
        </p>
        <button className="btn btn-outline-warning btn-sm deal-button fw-bold">
          <i className="bi bi-lock-fill mx-1"></i> GET A DEAL
          <i className="bi bi-key-fill mx-1"></i>{" "}
        </button>
      </Banner>
      <div className="container">
        <h2 className="text-center m-3">Our services</h2>
        <Services />
        <h2 className="text-center mt-5 mb-5">Our latest projects </h2>
        <Projects />
        <h2 className="text-center m-5 ">Testimonials</h2>
        <Reviews />
        <h2 className="text-center m-3">Our Awesome Heros</h2>
        <TeamMember />
        <div>
          <h2 className="text-center m-3">
            Let us handle your projects professionally
          </h2>
          <ContactUsForm />
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
