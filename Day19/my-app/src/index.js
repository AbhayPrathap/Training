import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Components/Home/home';
import Employee from './Components/Employee/employee';
import Student from './Components/Student/student'
import err from './Components/Error/error';
// import Employeedetails from './Components/Employee/employdetails';

const routing =(
  <Router>
    <div>
      <Switch>
      <Route exact path ="/" component = {App}/>
      <Route path ="/home" component ={Home}/>
      <Route path ="/employee" component ={Employee}/>
      <Route path="/student" component ={Student}/>
      <Route component={err}/>

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
