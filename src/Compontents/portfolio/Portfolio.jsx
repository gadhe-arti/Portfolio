import React from "react";
import "./portfolio.css";
import Img1 from "../../assects/Img.png.jpg";
import Img2 from "../../assects/img2.png.jpg";
import Img3 from "../../assects/img3.png.jpg";
import Img4 from "../../assects/img4.png.jpg";
import Img5 from "../../assects/img5.png.jpg";
import Img6 from "../../assects/img6.png.jpg";
const data = [
  {
    id: 1,
    Image: Img1,
    title: "GamePro",
    desc: "html css javascript",
    github: "https://github.com/",
    demo: "https://comfy-praline-72cd8c.netlify.app/",
  },
  {
    id: 2,
    Image: Img2,
    title: "E-commerce",
    desc: "html css javascript",
    github: "https://github.com/gadhe-arti/e-commerce-Web",
    demo: "https://glittery-shortbread-9a0445.netlify.app/",
  },
  {
    id: 3,
    Image: Img3,
    title: "Food-App",
    desc: "html css javascript API",
    github: "https://github.com/gadhe-arti/Food-App",
    demo: "https://food-app-five-fawn.vercel.app/",
  },
  {
    id: 4,
    Image: Img4,
    title: "Todo-Generate",
    desc: "html css javascript reactJS",
    github: "https://github.com/gadhe-arti/Todo",
    demo: "https://todo-nine-rouge.vercel.app",
  },
  {
    id: 5,
    Image: Img5,
    title: "GYM-web",
    desc: "html css javascript reactJS",
    github: "https://github.com/gadhe-arti/Gym-web",
    demo: "https://gym-7ewp.vercel.app/",
  },
  {
    id: 6,
    Image: Img6,
    title: "BizVisitingCard",
    desc: "html css javascript Codegniter",
    github: "",
    demo: "https://bizvisitingcard.com/",
  },
];
const Portfolio = () => {
  return (
    <>
      <section id="Portfolio">
        <h5>My Recent Project</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          {data.map(({ id, Image, title, demo, github, desc }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={Image} alt={title} />
                </div>
                <h3>
                  {title}
                  <label style={{ fontSize: "15px", color: "gray" }}> - </label>
                  {desc}
                </h3>

                <div className="portgolio_item_cta">
                  <a href={github} target="_blank" className="btn">
                    Github
                  </a>
                  <a href={demo} target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
