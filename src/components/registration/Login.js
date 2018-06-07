import React, { Component } from 'react'

export default class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(loginUser);
  }

  render() {
    return (
      <div className="container">
      <h2>Login</h2>
      <div className="row jumbotron">
        <div className="col-sm-6">
          <form  onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} />
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
