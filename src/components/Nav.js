import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";

export default function Nav() {
  return (
    <div className="main-nav">
      <Link className="button" href="/">
        Home
      </Link>

      <Link className="button" href="/Contact">
        Contact
      </Link>

      <Link className="button" href="/Projects">
        Projects
      </Link>
    </div>
  );
}
