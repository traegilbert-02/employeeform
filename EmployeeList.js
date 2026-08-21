import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>

      {props.employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <ul>
          {props.employees.map((employee) => (
            <li key={employee.EmployeeId}>
              <Link to={`/employees/${employee.EmployeeId}`}>
                <strong>{employee.name}</strong>
              </Link>

              <p>
                {employee.title} - {employee.department}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;