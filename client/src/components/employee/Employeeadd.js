import React, { Component } from 'react'

export default class EmployeeAdd extends Component {
  render() {
    return (
      <div>
          <h2>Add new employee</h2>
          <form className="jumbotron">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="fname">First name:</label>
                <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="fname" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lname">Last name:</label>
                <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="lname" />
              </div>
            </div>
            
            <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="company">Company name</label>
              <select className="form-control">
                <option>	Microsoft	</option>
                <option>	Oracle	</option>
                <option>	Adobe Systems	</option>                
                <option>	Cognizant Technology Solutions	</option>
                <option>	Tata Consultancy Services	</option>
                <option>	Wipro Limited	</option>
                <option>	Infosys Limited	</option>
                <option>	HCL Technologies Limited	</option>
                <option>	Tech Mahindra Limited	</option>
                <option>	Patni Computer Systems	</option>
                <option>	Symantec	</option>
                <option>	Apple Inc	</option>
                <option>	Dell Technologies	</option>
                <option>	HP Inc.	</option>
                <option>	Intel	</option>
                <option>	Cisco Systems	</option>
                <option>	Motorola Solutions	</option>
                <option>	IBM	</option>
                <option>	Amazon.com	</option>
                <option>	Facebook	</option>
                <option>	eBay	</option>
                <option>	Yahoo!	</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="role">Job/role</label>
              <input type="text" className="form-control" id="role" placeholder="Enter job role" name="role" />
            </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="skill">Skill</label>
              <input type="text" className="form-control" id="skill" placeholder="Enter skill" name="skill" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" placeholder="Enter description" name="description" />
            </div>
            <div className="form-group">        
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
      </div>
    )
  }
}
