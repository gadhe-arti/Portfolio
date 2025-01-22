import React from "react";
import jobpurches__ from "../../assects/ArtiResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={jobpurches__} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
