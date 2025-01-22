import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import "./header.css";

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com" target="_black">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com" target="_black">
        <FaSquareGithub />
      </a>
      <a href="https://www.dribble.com" target="_black">
        <FaDribbble />
      </a>
    </div>
  );
};

export default Headersocials;
