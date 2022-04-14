import React from "react";
import "./Experience.css";

import { TiHtml5 } from "react-icons/ti";
import { DiCss3Full } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export default function Experiance() {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend</h3>
          <div className="experence_content">
            <article className="experience_details">
              <TiHtml5 className="icons" />
              <div>
                <h4>Html</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <DiCss3Full className="icons" />
              <div>
                <h4>Css</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <DiJavascript1 className="icons" />
              <div>
                <h4>Javascrept</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaBootstrap className="icons" />
              <div>
                <h4>Bootstrap</h4>
                <small>Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className="icons" />
              <div>
                <h4>React</h4>
                <small >Experenced</small>
              </div>
            </article>
          </div>
        </div>
        {/* end backend */}

        <div className="experience_frontend">
          <h3>Backend</h3>
          <div className="experence_content">
            <article className="experience_details">
              <FaPython className="icons" />
              <div>
                <h4>Python</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <DiDjango className="icons" />
              <div>
                <h4>Django</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMysql className="icons" />
              <div>
                <h4>MySQL</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPostgresql className="icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small >Experenced</small>
              </div>
            </article>

            <article className="experience_details">
              <IoLogoNodejs className="icons" />
              <div>
                <h4>Node.js</h4>
                <small >Experenced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
