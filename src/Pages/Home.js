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
      <Banner />
      <div className="container">
        <h2 className="text-center m-3">Our services</h2>
        <Services />
        <h2 className="text-center m-3">Our latest projects </h2>
        <Projects />
        <h2 className="text-center m-3">Testimonials</h2>
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
