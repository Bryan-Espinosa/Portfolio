import React from "react";
import Logo from "./photos/logositecreenshot.PNG";
import Qron from "./photos/Qroniqlescreenshot.PNG";
import "./css/Projects.css";

export default function Projects() {
  return (
    <div className="project-body">
      <div className="pro">
        <a href="http://www.logosite.xyz:8080">Logo</a>
        <img src={Logo} alt="Not found" />

        <article>
          This was my personal project While at Dev-Mountain, it was originally
          designed to serve as a Linkedin/Monster type site. Tech used: JS
          (ES6), React, Redux, SQL, Node, Auth-0
        </article>
      </div>
      <div className="pro">
        <a href="http://www.qroniqle.site">Qroniqle</a>
        <img src={Qron} alt="not found" />
        <article>
          This was my Group project while at Dev-Mountain, it is a blog site
          where users can signup/login create stories/events and update that
          event as time goes on. Users also have the ability to follow and
          unfollow individual users and stories which is the functionality I
          worked on Techs used: JS (ES6), React, Redux, SQL, Node, SASS,
          Firebase, OAuth
        </article>
      </div>
    </div>
  );
}
