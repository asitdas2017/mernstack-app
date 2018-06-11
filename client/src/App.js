import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import "./App.css";
import HeaderWithNav from "./../src/components/layouts/Headerwithnav";
import Footer from "./../src/components/layouts/Footer";
import Landing from "./../src/components/layouts/Landing";
import Login from "./../src/components/authentication/Login";
import Register from "./../src/components/authentication/Register";
import EmployeeList from "./components/employee/Employeelist";
import EmployeeAdd from "./components/employee/Employeeadd";


// Innitial check whether LOGGED in user or not
// Check from localstorage
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and retrive user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}


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
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/employeelist" component={EmployeeList} />
                  <Route exact path="/addemployee" component={EmployeeAdd} />
                  <Footer />
                </div>                
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
