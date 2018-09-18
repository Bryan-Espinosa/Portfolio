import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="main-nav">
      <Link to="/" className="button">
        Home
      </Link>

      <Link to="/Contact" className="button">
        Contact
      </Link>

      <Link to="/Projects" className="button">
        Projects
      </Link>
    </div>
  );
}
