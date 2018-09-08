import React from "react";
import Photo from "./photos/github.jpg";

export default function Contact() {
  return (
    <div>
      <img src={Photo} alt="Not Found" />

      <p>Phone : (682)-552-1412</p>
      <p>
        Email :{" "}
        <a
          href="mailto:
        
        bryan.espinosa117@gmail.com"
          target="_blank"
        >
          {" "}
          bryan.espinosa117@gmail.com
        </a>
      </p>
      <p>
        {" "}
        LinkedIn :{" "}
        <a href="https://linkedin.com/in/bryan-s-espinosa/" target="_blank">
          linkedin.com/in/bryan-s-espinosa/
        </a>
      </p>
      <p>
        Github :
        <a href="https://github.com/Bryan-Espinosa/" target="_blank">
          github.com/Bryan-Espinosa/
        </a>
      </p>
    </div>
  );
}
