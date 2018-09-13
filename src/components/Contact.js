import React from "react";
import "./css/Contact.css";
import "../photos/gmail.png";
import "../photos/githubIcon.pmg.png";
import "../photos/linkedin.png";

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
          >
            <img
              className="links"
              src={require("../photos/gmail.png")}
              alt=" gmail"
            />
            bryan.espinosa117@gmail.com
          </a>
        </p>
        <p className="info">
          <a
            className="info"
            href="https://linkedin.com/in/bryan-s-espinosa/"
            target="_blank"
          >
            <img src={require("../photos/linkedin.png")} alt=" LinkedIn : " />
            linkedin.com/in/bryan-s-espinosa/
          </a>
        </p>
        <p className="info">
          <a
            className="info"
            href="https://github.com/Bryan-Espinosa/"
            target="_blank"
          >
            <img
              src={require("../photos/githubIcon.pmg.png")}
              alt=" Github : "
            />
            github.com/Bryan-Espinosa/
          </a>
        </p>
      </div>
    </div>
  );
}
