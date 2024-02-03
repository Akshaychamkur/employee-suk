import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, emailId };

    if (id) {
      EmployeeService.updateEmployee(id, employee).then((response) => {
        navigate('/');
      }).catch(error => {
        console.log(error);
      });
    }
    else {
      EmployeeService.createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/');
      }).catch(error => {
        console.log(error);
      });
    }



  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        let employee = response.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [id]);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              title()
            }
            <div className="card-body">
              <form onSubmit={saveOrUpdateEmployee}>
                <div className="form-group mb-2">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email Id:</label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => "saveOrUpdateEmployee()"}>
                  Save
                </button>
                <Link to="/" className="btn btn-danger ms-2">Cancel</Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
