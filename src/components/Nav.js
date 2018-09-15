import React from "react";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="main-nav">
      <a href="/" className="button">
        Home
      </a>

      <a href="/Contact" className="button">
        Contact
      </a>

      <a href="/Projects" className="button">
        Projects
      </a>
    </div>
  );
}
