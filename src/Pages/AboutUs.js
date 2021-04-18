import React from "react";
import ContactUsForm from "../Components/ContactUsForm/ContactUsForm";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="..."
              className="w-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quaerat saepe enim impedit cupiditate animi aliquid illo modi
                perferendis commodi, a, natus similique tempora tempore
                obcaecati minus et distinctio quam voluptatibus maiores error?
                Praesentium similique expedita doloribus eveniet sapiente
                deleniti doloremque ex nemo provident autem, blanditiis possimus
                suscipit itaque culpa ullam corrupti accusantium modi quod
                voluptate commodi ad nisi tempora. Quibusdam numquam voluptas
                sequi a omnis consectetur temporibus odio eaque! Aut incidunt id
                atque, fugit perferendis magnam voluptatibus sint dignissimos
                inventore recusandae, ratione nulla omnis cum. Placeat
                distinctio delectus culpa quisquam. Illo nesciunt laudantium
                quibusdam quas, harum ipsam? Porro possimus illo explicabo nam,
                delectus reprehenderit esse ea distinctio, ex expedita nulla
                quidem cupiditate dolor, ab perspiciatis quae! Repellendus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 container">
        <div className="row g-0 flex-row-reverse">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/943922/pexels-photo-943922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="..."
              className="w-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quaerat saepe enim impedit cupiditate animi aliquid illo modi
                perferendis commodi, a, natus similique tempora tempore
                obcaecati minus et distinctio quam voluptatibus maiores error?
                Praesentium similique expedita doloribus eveniet sapiente
                deleniti doloremque ex nemo provident autem, blanditiis possimus
                suscipit itaque culpa ullam corrupti accusantium modi quod
                voluptate commodi ad nisi tempora. Quibusdam numquam voluptas
                sequi a omnis consectetur temporibus odio eaque! Aut incidunt id
                atque, fugit perferendis magnam voluptatibus sint dignissimos
                inventore recusandae, ratione nulla omnis cum. Placeat
                distinctio delectus culpa quisquam. Illo nesciunt laudantium
                quibusdam quas, harum ipsam? Porro possimus illo explicabo nam,
                delectus reprehenderit esse ea distinctio, ex expedita nulla
                quidem cupiditate dolor, ab perspiciatis quae! Repellendus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ContactUsForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
