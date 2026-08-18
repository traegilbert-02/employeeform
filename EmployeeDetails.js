import React from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetails(props) {
  const { id } = useParams();

  const employee = props.employees.find(
    (employee) => String(employee.EmployeeId) === id
  );

  if (!employee) {
    return (
      <div className="employee-details">
        <h2>Employee Not Found</h2>
        <Link to="/">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>

      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>

      <Link to="/">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetails;