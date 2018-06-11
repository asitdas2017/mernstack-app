import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e){
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData);
    //console.log(loginUser);
  }

  render() {

    const errors = this.state.errors;

    return (
      <div>
      <h2>Login</h2>
      <div className="row jumbotron">
        <div className="col-sm-6">
          <form noValidate onSubmit={this.onSubmit}>
            <div className={classnames('form-group', {'has-error':errors.email})}>
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                {errors.email && (<span className="help-block">{errors.email}</span>)}
            </div>
            <div className={classnames('form-group', {'has-error':errors.password})}>
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} />
                {errors.password && (<span className="help-block">{errors.password}</span>)}
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>        
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
