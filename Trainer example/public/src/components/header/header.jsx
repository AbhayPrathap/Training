import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <div>
              <ul>
                  <li>
                      <Link to="/">app</Link>
                  </li>
                  <li>
                      <Link to="/todo">AddTodo</Link>
                  </li>
                  <li>
                      <Link to="/view">View TODO</Link>
                  </li>
                  <li>
                      <Link to="/getData">GEtFromJson</Link>
                  </li>
                  <li>
                      <Link to="/todoFromServer">Add from server</Link>
                  </li>
    
              </ul>
            </div>
        )
    }
}
export default  Header