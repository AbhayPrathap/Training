import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/purchase">Purchase</Link></li>
              <li><Link to="/purchasetable">Purchase Table</Link></li>
              <li><Link to="/sales">Sales</Link></li>
              <li><Link to="/salestable">Sales Table</Link></li>



          </ul>
      </div>
    )
  }
}

export default Header;
