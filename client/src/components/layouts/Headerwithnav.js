import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HeaderWithNav extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">             
                Project name
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/userlist">User list</Link></li>
                    <li><Link to="/employeelist">Employee list</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/register">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
          </div>
        </nav>
    );
  }
}
