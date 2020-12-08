import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <Router>
      <div id="body">
        <Nav />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
