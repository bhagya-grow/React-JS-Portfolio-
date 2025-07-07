import React from "react";
import "./Hero.css";
import pic from "../../assets/pic.jpg";

const Hero = () => {
  return (
    <div id="home" className="container-box">
      <div  className="container d-flex py-3 justify-content-between align-items-center Hero-section">
        <div className="hero-right">
            <h1>Hi,I'm <span className="Name">Bhagyadutta Das</span></h1>
            <p>Full Stack Developer passionate about creating innovative web solutions</p>
            <div className="button d-flex ">
                <button className=" primary-btn ">View My Work</button>
                <button className="  Secondary-btn">Get In Touch</button>
            </div>
        </div>
        <div className="hero-left">
            <img src={pic}  alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
