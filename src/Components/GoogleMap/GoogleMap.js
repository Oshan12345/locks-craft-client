import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.778036283765!2d91.81968551426974!3d22.36200844630458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88f83cd223b%3A0xfb574b70944b1da0!2sSanmar%20Ocean%20City!5e0!3m2!1sen!2sus!4v1618737700875!5m2!1sen!2sus"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="google map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
