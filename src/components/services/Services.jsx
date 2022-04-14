import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Desiner</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
            <li>
              <BiCheck className="icon" />
              <p>lorem lorem lorem</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
