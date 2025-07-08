import React from "react";
import "./Hero.css";
import pic from "../../assets/pic.jpg";

const Hero = () => {
  return (
    <div id="home" className="container-box">
      <div className="container d-flex flex-column flex-lg-row py-3 justify-content-between align-items-center Hero-section">
        <div className="hero-right order-2 order-lg-1">
          <h1>Hi, I'm <span className="Name">Bhagyadutta Das</span></h1>
          <p>Full Stack Developer passionate about creating innovative web solutions</p>
          <div className="button d-flex">
            <button className="primary-btn">View My Work</button>
            <button className="Secondary-btn">Get In Touch</button>
          </div>
        </div>
        <div className="hero-left order-1 order-lg-2">
          <img src={pic} alt="Bhagyadutta Das" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
