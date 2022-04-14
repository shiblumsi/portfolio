import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work!</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG1} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG2} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG3} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG4} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG5} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={IMG6} alt="" />
          </div>
          <p>This is portfolio item image</p>
          <div className="portfolio_btn">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}
