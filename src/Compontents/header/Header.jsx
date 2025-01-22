import React from "react";
import "./header.css";
import CTA from "./CTA";
import AARU from "../../assects/AARU..png";
import Headersocials from "./Headersocials";
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Arti Gadhe</h1>
        <h5 className="text-light">Frontend Developer....</h5>
        <CTA />
        <Headersocials />
        <div className="me">
          <img src={AARU} alt="AARU" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
