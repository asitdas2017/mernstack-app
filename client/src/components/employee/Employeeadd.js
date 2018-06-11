import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmpRecords } from '../../actions/employeeActions';


class EmployeeAdd extends Component {

  constructor(){
    super();
    this.state = {
      fname: '',
      lname: '',
      company: '',
      role: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e){
    e.preventDefault();

    const newEmployee = {
      fname: this.state.fname,
      lname: this.state.lname,
      company: this.state.company,
      role: this.state.role
    }
    this.props.addEmpRecords(newEmployee,  this.props.history);
    //console.log(newEmployee);
  }

  render() {

    const errors = this.state.errors;

    return (
      <div>
          <h2>Add new employee</h2>
          <form className="jumbotron" noValidate onSubmit={this.onSubmit}>
            <div className="row">
              <div className={classnames('form-group  col-md-6', {'has-error':errors.fname})}>
                <label htmlFor="fname">First name</label>
                <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="fname" value={this.state.fname} onChange={this.onChange} />
                {errors.fname && (<span className="help-block">{errors.fname}</span>)}
              </div>
              <div className={classnames('form-group  col-md-6', {'has-error':errors.lname})}>
                <label htmlFor="lname">Last name</label>
                <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="lname" value={this.state.lname} onChange={this.onChange} />
                {errors.lname && (<span className="help-block">{errors.lname}</span>)}
              </div>
            </div>
            
            <div className="row">
            <div className={classnames('form-group  col-md-6', {'has-error':errors.company})}>
              <label htmlFor="company">Company name</label>
              <select className="form-control" id="company" name="company" value={this.state.company} onChange={this.onChange}>
                <option value="" defaultValue>Select company</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Oracle">Oracle</option>
                <option value="Adobe Systems">Adobe Systems</option>                
                <option value="Cognizant Technology Solutions">Cognizant Technology Solutions</option>
                <option value="Tata Consultancy Services">Tata Consultancy Services</option>
                <option value="Wipro Limited">Wipro Limited</option>
                <option value="Infosys Limited">Infosys Limited</option>
                <option value="HCL Technologies Limited">HCL Technologies Limited</option>
                <option value="Tech Mahindra Limited">Tech Mahindra Limited</option>
                <option value="Apple Inc">Apple Inc</option>
                <option value="Dell Technologies">Dell Technologies</option>
                <option value="Intel">Intel</option>
                <option value="IBM">IBM</option>
                <option value="Amazon.com">Amazon.com</option>
                <option value="Facebook">Facebook</option>
                <option value="eBay">eBay</option>
                <option value="Yahoo!">Yahoo!</option>                
                <option value="Patni Computer Systems">Patni Computer Systems</option>
              </select>
              {errors.company && (<span className="help-block">{errors.company}</span>)}
            </div>
            <div className={classnames('form-group  col-md-6', {'has-error':errors.role})}>
              <label htmlFor="role">Job/role</label>
              <input type="text" className="form-control" id="role" placeholder="Enter job role" name="role" value={this.state.role} onChange={this.onChange} />
              {errors.role && (<span className="help-block">{errors.role}</span>)}
            </div>
            </div>
            <div className="form-group">        
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
      </div>
    )
  }
}

EmployeeAdd.propTypes = {
  //addEmpRecords: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {addEmpRecords})(withRouter(EmployeeAdd));