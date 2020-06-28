import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Topbar from "../organisms/Topbar";

import Main from "./Main";
import Ocean from "./Ocean";
import Electricity from "./Electricity";
import Trash from "./Trash";
import Disposable from "./Disposable";

const Routes = () => {
  return (
    <Router>
      <Topbar></Topbar>
      <Route exact path="/" component={Main} />
      <Route path="/Ocean" component={Ocean} />
      <Route path="/Electricity" component={Electricity} />
      <Route path="/Trash" component={Trash} />
      <Route path="/Disposable" component={Disposable} />
    </Router>
  );
};

export default Routes;
