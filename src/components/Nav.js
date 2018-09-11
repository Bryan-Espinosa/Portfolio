import React from "react";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="main-nav">
      <a className="button" href="/">
        Home
      </a>

      <a className="button" href="/Contact">
        Contact
      </a>

      <a className="button" href="/Projects">
        Projects
      </a>
    </div>
  );
}
