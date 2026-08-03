import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Employee Information:', this.state);

    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
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
            />
          </div>

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;