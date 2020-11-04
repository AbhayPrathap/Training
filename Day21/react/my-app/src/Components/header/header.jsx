import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class Header extends React.Component {
    render() {
        return (
            <div className="App">
                <li><Link to="/">App</Link></li>
                <li><Link to="/addtodo">Add TODO</Link></li>

                <li><Link to="/viewtodo">View TODO</Link></li>

            </div>
        )
    }
}
export default Header