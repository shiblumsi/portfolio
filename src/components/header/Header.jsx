import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Shiblu</h1>
        <h3 className="text-light">Web Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scrool__down" >scrool down</a>
      </div>
    </header>
  );
}
