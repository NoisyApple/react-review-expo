import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/alt-path">
          <h1>Hello There!</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
