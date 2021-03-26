import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Head from "./Head";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="img">
            
        <Switch>
          <Route path="/" exact>
          <Header />
            <Login />
          </Route>
          <Route path="/about">
              <Header />
              <About />
              </Route>
          <Route path="/signup">
          <Header />
          <Signup/>
          </Route>
          <Route path="/dashboard">
              <Head />
              <Dashboard />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
