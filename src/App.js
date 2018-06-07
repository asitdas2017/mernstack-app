import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

import "./App.css";
import HeaderWithNav from "./../src/components/layouts/Headerwithnav";
import Footer from "./../src/components/layouts/Footer";
import Landing from "./../src/components/layouts/Landing";
import Login from "./../src/components/registration/Login";
import Register from "./../src/components/registration/Register";
import EmployeeList from "./components/employee/Employeelist";
import EmployeeAdd from "./components/employee/Employeeadd";


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div className="App">
                <HeaderWithNav />
                <div className="container">
                  <Route exact path="/" component={Landing} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/employeelist" component={EmployeeList} />
                  <Route path="/addemployee" component={EmployeeAdd} />
                </div>
                <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
