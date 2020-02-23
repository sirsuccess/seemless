import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import SearchDisplayPage from "../pages/SearchDisplayPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <SearchDisplayPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
