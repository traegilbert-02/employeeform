import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

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
      <Router>
        <div className="App">

          <header className="app-header">
            <h1>Employee Management System</h1>
            <p>Add and view employee information</p>
          </header>

          <main className="app-content">
            <Switch>

              <Route exact path="/">
                <EmployeeForm addEmployee={this.addEmployee} />

                <EmployeeList
                  employees={this.state.employees}
                />
              </Route>

              <Route path="/employees/:id">
                <EmployeeDetails
                  employees={this.state.employees}
                />
              </Route>

            </Switch>
          </main>

        </div>
      </Router>
    );
  }
}

export default App;