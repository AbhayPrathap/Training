import React from 'react'

class Salestable extends React.Component {
    constructor() {
        super()
        this.state = { slno: "", label: "", qty:"" ,itemssold: []}
    }
    itemssold=[]
    
setData = (e) => {
  let id = e.target.name
  let value1 = e.target.value
  let value2 = e.target.value
  let value3=e.target.value
  
  this.setState({ [id]: value1, [id]: value2,[id]:value3 })
}
render(){
    return(
        <div>
<div><h1 id="four">SALES TABLE</h1></div>
                <table id="five" border={1}>
                    <tr>
                        <th>slno</th>
                        <th>Label</th>
                        <th>Quantity </th>
                        
                    </tr>
                    {this.state.itemssold.map((res, key) => (<tr>
                        <td>{key + 1}</td>
                        <td>{res.label}</td>
                        <td>{res.qty}</td>
                       
                        </tr>))}
                        </table>
                        </div>
                          )
                        }
                    }
                    export default Salestable
