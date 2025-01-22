import React from "react";
import "./about.css";
import aaru from "../../assects/file.png.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { PiFolderOpenFill } from "react-icons/pi";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get TO Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={aaru} alt="About Image" />
            </div>
          </div>
          <div className="about_contant">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Exeperience</h5>
                <small>no Experience</small>
              </article>

              <article className="about_card">
                <PiFolderOpenFill className="about_icon" />
                <h5>Projects</h5>
                <small>10+ Completed </small>
              </article>
            </div>

            <p>
              Hello, I'm Arti Gadhe, a passionate Fullstack Developer dedicated
              to crafting exceptional digital experiences. With a solid
              background in both frontend and backend technologies, I can bring
              innovation and creativity to every project I undertake.
            </p>

            <a href="#contact" className="btn btn-primary">
              {" "}
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
