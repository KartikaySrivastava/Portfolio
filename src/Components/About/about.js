import React from "react";
import "./about.css";
import Developer from "../../Images/developer.png";
import Security from "../../Images/security.png";

const Skills = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDescription">Website Developer crafting sleek, responsive web apps with HTML, CSS, JavaScript, ReactJS, and the MERN stack. Passionate about cybersecurity—penetration testing, network scanning, and device monitoring. 🚀</span>

      <div className="aboutBars">
        <div className="aboutBar">
            <img src={Developer} alt="Developer_Img" className="aboutImg" />
            <div className="aboutText">
                <h2>Website Developer</h2>
                <p>I am a Frontend Developer passionate about crafting responsive and user-friendly web applications using ReactJS, JavaScript, and modern web technologies. With hands-on experience in full-stack development, I build scalable solutions while ensuring performance and security. Constantly learning and adapting, I aim to create seamless digital experiences.🚀💻</p>
            </div>
        </div>
        <div className="aboutBar">
            <img src={Security} alt="Security_Img" className="aboutImg" />
            <div className="aboutText">
                <h2>Cyber Security</h2>
                <p>Additionally, I have a keen interest in web security, ensuring that the applications I build are not only functional but also secure against vulnerabilities. My background in cybersecurity, including experience with penetration testing, network scanning (Nmap), and security auditing, allows me to develop robust applications that prioritize data protection and system integrity. 🔐⚡</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
