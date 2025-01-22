import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service_list">
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* *********************END OF THE UI/UX ********************* */}
          <article className="service">
            <div className="service_head">
              <h3>WEB DEVELOPEMENT</h3>
            </div>

            <ul className="service_list">
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* ********************END WEB DEVELOPMENT************** */}
          <article className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service_list">
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <FaCheck className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* ********************end the a content creation************ */}
        </div>
      </section>
    </>
  );
};

export default Services;
