import React from "react";
import "./css/Contact.css";
import gmail from "../photos/gmail.svg";
import git from "../photos/githublogo.svg";
import link from "../photos/linkedin.svg";

export default function Contact() {
  return (
    <div className="main-contact">
      <div className="box-info">
        <p className="info">Phone : (682)-552-1412</p>
        <p className="info">
          <a
            className="info"
            href="mailto: bryan.espinosa117@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links" src={gmail} alt=" gmail" />
          </a>
        </p>
        <p className="info">
          <a
            className="info"
            href="https://linkedin.com/in/bryan-s-espinosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link} alt=" LinkedIn : " />
          </a>
        </p>
        <p className="info">
          <a
            className="info"
            href="https://github.com/Bryan-Espinosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt=" Github : " />
          </a>
        </p>
      </div>
    </div>
  );
}
