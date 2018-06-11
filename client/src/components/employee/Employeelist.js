import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllEmployee } from '../../actions/employeeActions';


class EmployeeList extends Component {

    componentDidMount() {
        this.props.getAllEmployee();
    }


    render() {

        const { employees, loading } = this.props.employee;
        let employeeItems;

        if (employees === null || loading) {
            console.log('null');
        } else {
            if (employees.length > 0) {
                employeeItems = employees.map(employee => (
                    <tr key={employee._id} employee={employee}>
                        <td>{employee.fname}</td>
                        <td>{employee.lname}</td>
                        <td>{employee.company}</td>
                        <td>{employee.role}</td>
                    </tr>
                ));
            } else {
                employeeItems = <h4>No profiles found...</h4>;
            }
        }

        return (
        <div>
            <h2>Employee List</h2>
            <Link to="/addemployee" className="btn btn-primary">Add new Employee</Link>          
            <table className="table">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Company</th>
                    <th>Role/Job</th>
                </tr>
                </thead>
                <tbody>
                    {employeeItems}
                </tbody>
            </table>
            

        </div>
        )
    }
}

EmployeeList.propTypes = {
    getAllEmployee: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    employee: state.employee
});

export default connect(mapStateToProps, {getAllEmployee})(EmployeeList);
