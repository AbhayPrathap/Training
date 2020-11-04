import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <div>
          <ul>
              
              <li><Link to="/register">Registartion</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/details">Home Page</Link></li>


            

          </ul>
      </div>
    )
  }
}

export default Header;