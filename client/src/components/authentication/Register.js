import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onSubmit(e){
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);    
    
    //console.log(newUser);
    
  }

  render() {

    //const { errors } = this.state; //alternative :: const errors = this.state.errors;
    const errors = this.state.errors;
    //const { user } = this.props.auth;

    return (
      <div>
        <div class="page-header">
          <h2>Register</h2>
        </div>
        
        <div className="row jumbotron">
        {/* {user ? user.name : null} */}
          <div className="col-sm-6">
            <form noValidate onSubmit={this.onSubmit}>
              <div className={classnames('form-group', {'has-error':errors.name})}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={this.state.name} onChange={this.onChange} />
                  {errors.name && (<span className="help-block">{errors.name}</span>)}
              </div>
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
              <div className={classnames('form-group', {'has-error':errors.password2})}>
                  <label htmlFor="pwd2">Confirm password:</label>
                  <input type="password" className="form-control" id="pwd2" placeholder="Enter confirm password" name="password2" value={this.state.password2} onChange={this.onChange} />
                  {errors.password2 && (<span className="help-block">{errors.password2}</span>)}
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  //errors: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStatetoProps, { registerUser })(withRouter(Register));
