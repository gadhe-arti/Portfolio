import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer_logo">
          Arti Gadhe
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skill</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Testimonials">Eduction</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/gadhe-arti">
            <FaSquareGithub />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Arti Gadhe. All rights reserved. </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
