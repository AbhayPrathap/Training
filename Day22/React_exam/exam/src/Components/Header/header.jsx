import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
class Header extends React.Component{
    render(){
        return(
            <div>
                Medical Shop
                
                <li><Link to ="/">Home</Link></li>                
                <li><Link to ="/purchase/entry">Purchase Entry</Link></li>
                <li><Link to ="/purchase/table">Purchase Table</Link></li>
                <li><Link to ="/sales/entry">Sales Entry</Link></li>
                <li><Link to ="/sales/table">Sales Table</Link></li>
                

            </div>
        )
    }
}
export default Header