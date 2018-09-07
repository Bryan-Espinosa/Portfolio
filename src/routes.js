import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Projects" component={Projects} />
    </Switch>
  </BrowserRouter>
);
