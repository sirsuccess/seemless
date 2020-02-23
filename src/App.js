import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/landingPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <LandingPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
