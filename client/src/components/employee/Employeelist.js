import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmployeeList extends Component {
  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <Link to="/addemployee" className="btn btn-primary">Add new Employee</Link>
        <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
        <table className="table">
            <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
