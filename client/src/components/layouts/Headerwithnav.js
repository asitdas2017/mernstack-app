import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions/authActions";
const userlogo = require('../../images/user_avatar.png');


class HeaderWithNav extends Component {

    onLogoutClick(e) {
        //e.preventDefault();
        this.props.logoutUser();
    }

render() {

    const { isAuthenticated, user } = this.props.auth;

    const userLoggedInLinks = (
        <ul className="nav navbar-nav navbar-right">            
            <li className="login-name">
                <img alt={user.name} src={String(userlogo)} />
                <span>{user.name}</span>
            </li>
            <li>
                <Link to="/" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</Link>
            </li>
        </ul>
    );
    const beforeLogInLinks = (
        <ul className="nav navbar-nav navbar-right">            
            <li>
                <Link to="/register">Sign Up</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">M.E.R.N. Stack app</div>
            <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                {isAuthenticated && (<li><Link to="/userlist">User list</Link></li>)}
                {isAuthenticated && (<li><Link to="/employeelist">Employee list</Link></li>)}                
            </ul>
            {isAuthenticated ? userLoggedInLinks : beforeLogInLinks}            
            </div>
        </div>
        </nav>
    );
    }
}

HeaderWithNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(HeaderWithNav);
