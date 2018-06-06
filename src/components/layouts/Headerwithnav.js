import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HeaderWithNav extends Component {
  render() {
    return (
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">             
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Sign up</Link></li>
                </ul>
            </div>
          </div>
        </nav>
    );
  }
}
