import React from "react";

const ContactUsForm = () => {
  return (
    <div className="bg-light p-4 mb-4">
      <div className="card mb-3 justify-content-center align-items-center">
        <div className="row g-0">
          <div className="col-sm-6 m-auto">
            <div className="card-body">
              <h5 className="card-title">
                How Do Locksmiths Make Keys Without an Original Key - How to
                Impression a Key
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita libero laborum quo sequi quisquam aliquid rerum,
                ducimus eligendi ipsam dicta, natus architecto. Nihil amet saepe
                tempore vel ex. Voluptatem, deserunt?
              </p>
            </div>
          </div>
          <div className="col-sm-6 m-auto " style={{ width: "auto" }}>
            <iframe
              width="-webkit-fill-available"
              height="315"
              src="https://www.youtube.com/embed/1uZjyWVcglI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-info p-5 rounded">
        <h3 className="text-center m-3">Sign Up for newsletter</h3>
        <form>
          <div className="row mb-3">
            <label
              htmlFor="inputName"
              className="col-sm-2 col-form-label col-form-label-sm fs-4"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="name"
                className="form-control form-control-sm fs-4"
                id="inputName"
                placeholder="enter your name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="colFormLabelSm"
              className="col-sm-2 col-form-label col-form-label-sm fs-4"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control form-control-sm fs-4"
                id="colFormLabelSm"
                placeholder="enter your email"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
