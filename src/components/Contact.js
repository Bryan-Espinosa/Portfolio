import React from "react";
import "./css/Contact.css";

export default function Contact() {
  return (
    <div className="main-contact">
      <div className="box-info">
        <p className="info">Phone : (682)-552-1412</p>
        <p className="info">
          Email :{" "}
          <a
            className="info"
            href="mailto:
          
          bryan.espinosa117@gmail.com"
            target="_blank"
          >
            {" "}
            bryan.espinosa117@gmail.com
          </a>
        </p>
        <p className="info">
          {" "}
          LinkedIn :{" "}
          <a
            className="info"
            href="https://linkedin.com/in/bryan-s-espinosa/"
            target="_blank"
          >
            linkedin.com/in/bryan-s-espinosa/
          </a>
        </p>
        <p className="info">
          Github :
          <a
            className="info"
            href="https://github.com/Bryan-Espinosa/"
            target="_blank"
          >
            github.com/Bryan-Espinosa/
          </a>
        </p>
      </div>
    </div>
  );
}
