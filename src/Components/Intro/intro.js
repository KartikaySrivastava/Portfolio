import React from "react";
import "./intro.css";
import bg from "../../Images/bg_img.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Kartikay!</span> <br />
          <span className="web">Website Developer</span>
        </span>
        <p className="introPara">
          Passionate web developer skilled in creating responsive, user-friendly 
          interfaces <br />with modern web technologies.
        </p>
      </div>
      <img src={bg} alt="bg_Img" className="bg" />
    </section>
  );
};

export default Intro;

