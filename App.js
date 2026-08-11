import React from 'react';
import EmployeeForm from './components/EmployeeForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: JSON.parse(localStorage.getItem('employees')) || []
    };
  }

  addEmployee = (employee) => {
    this.setState(
      {
        employees: [...this.state.employees, employee]
      },
      this.saveData
    );
  };

  saveData = () => {
    localStorage.setItem(
      'employees',
      JSON.stringify(this.state.employees)
    );
  };

  render() {
    return (
      <div className="App">
        <EmployeeForm addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;