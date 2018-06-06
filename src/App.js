import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HeaderWithNav from "./../src/components/layouts/Headerwithnav";
import Footer from "./../src/components/layouts/Footer";
import Landing from "./../src/components/layouts/Landing";
import Login from "./../src/components/registration/Login";
import Register from "./../src/components/registration/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
              <HeaderWithNav />
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
