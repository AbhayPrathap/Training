import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Employeedetails from './employdetails';


class Employee extends React.Component {
  constructor() {
    super()

    this.state = {
      emp: [{ id: 1, name: "Abhay" }, { id: 2, name: "aja" }]
    }
  }
  navigate(id) {
    let path = "employee/" + id
    this.props.history.push(path)
  }
  render() {
    return (
      <div>
        Employee
        
        {this.state.emp.map((res, key) => (
        <div>
         <div>{res.id}</div>
         <div>{res.name}</div>
         <div>
            <input type="button" value="Details" onClick={() => {this.navigate(key)}}/>
         </div>
        </div>
        ))}
        <Switch>
        <Route path="/employee/:id" component={Employeedetails}/>
        </Switch>
      </div>
    )}
}
export default Employee;
