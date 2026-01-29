import React from "react";
import "./experience.css";
import { BiSolidBadgeCheck } from "react-icons/bi";
const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h2>My Skill</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  {" "}
                  <h4>JavaScript</h4>
                  <small className="text_light">Intermadiate</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  {" "}
                  <h4>React JS</h4>
                  <small className="text_light">Intermadiate</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" cl />
                <div>
                  {" "}
                  <h4>BootStrap</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  {" "}
                  <h4>Tailwind</h4>
                  <small className="text_light">Intermadiate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>Codeigniter</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text_light">Intermadiate</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>PHP</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  <h4>Adv.Java</h4>
                  <small className="text_light">Exeperienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BiSolidBadgeCheck className="experience_details_icons" />
                <div>
                  {" "}
                  <h4>Phython</h4>
                  <small className="text_light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
