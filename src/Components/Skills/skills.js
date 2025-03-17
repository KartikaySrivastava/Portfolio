import React from "react";
import "./skills.css";
import html from '../../Images/html.png'
import css from '../../Images/css.png'
import js from '../../Images/js.png'
import react from '../../Images/react.png'
import nextjs from'../../Images/nextjs.png'
import angularjs from '../../Images/angularjs.png'
import bootstrap from '../../Images/bootstrap.png'
import java from '../../Images/java.png'
import python from '../../Images/python.png'
import c from '../../Images/c.png'
import mysql from '../../Images/mysql.png'
import mongodb from '../../Images/mongodb.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">Skills</span>
      <div className="skillsBar">
        <div className="skillsName">
            <h3>HTML</h3>
            <img src={html} alt="html_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>CSS</h3>
            <img src={css} alt="css_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>JavaScript</h3>
            <img src={js} alt="js_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>React JS</h3>
            <img src={react} alt="react_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>NextJS</h3>
            <img src={nextjs} alt="nextjs_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>Angular</h3>
            <img src={angularjs} alt="angular_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>Bootstrap</h3>
            <img src={bootstrap} alt="bootstrap_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>Java</h3>
            <img src={java} alt="java_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>Python</h3>
            <img src={python} alt="python_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>C</h3>
            <img src={c} alt="c_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>MySQL</h3>
            <img src={mysql} alt="mysql_img" className="skillsImg"/>
        </div>

        <div className="skillsName">
            <h3>MongoDB</h3>
            <img src={mongodb} alt="mongodb_img" className="skillsImg"/>
        </div>

      </div>
    </section>
  );
};

export default Skills;
