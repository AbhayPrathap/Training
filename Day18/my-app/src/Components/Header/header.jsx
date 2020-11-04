import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        Routing 
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul >
      </div >
    )
  }
}
export default Header;
