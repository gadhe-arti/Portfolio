import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import "./nav.css";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiDesktopComputer } from "react-icons/hi";
import { useState } from "react";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <HiOutlineUsers />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <HiDesktopComputer />
        </a>
        <a
          href="#Portfolio"
          onClick={() => setActiveNav("#Portfolio")}
          className={activeNav === "#Portfolio" ? "active" : ""}
        >
          <PiDiamondsFourDuotone />
        </a>
        <a
          href="#Testimonials"
          onClick={() => setActiveNav("#Testimonials")}
          className={activeNav === "#Testimonials" ? "active" : ""}
        >
          <FaBookReader />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
