import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      title: '',
      department: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      errorMessage: '',
      successMessage: ''
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, title, department } = this.state;

    // Check that all fields have been completed
    if (
      !name.trim() ||
      !email.trim() ||
      !title.trim() ||
      !department.trim()
    ) {
      this.setState({
        errorMessage: 'Please complete all fields.',
        successMessage: ''
      });
      return;
    }

    const employee = {
      EmployeeId: Date.now(),
      name: name,
      email: email,
      title: title,
      department: department
    };

    this.props.addEmployee(employee);

    console.log('Employee Information:', employee);

    // Clear the form after submission
    this.setState({
      name: '',
      email: '',
      title: '',
      department: '',
      errorMessage: '',
      successMessage: 'Employee added successfully!'
    });
  };

  render() {
    return (
      <div className="employee-form">
        <h2>Add Employee</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="department">Department:</label>
            <input
              id="department"
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
              required
            />
          </div>

          {this.state.errorMessage && (
            <p className="error-message">
              {this.state.errorMessage}
            </p>
          )}

          {this.state.successMessage && (
            <p className="success-message">
              {this.state.successMessage}
            </p>
          )}

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;