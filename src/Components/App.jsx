import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/alt-path">
          <h1>Hello There!</h1>
        </Route>
        <Route path="/">
          <h1>HOME</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
