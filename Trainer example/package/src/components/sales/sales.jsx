import React from 'react';
class Sales extends React.Component{
  constructor() {
    super()
    this.state = { slno: "", label: "", qty: "", itemssold: [] }
  }
  itemssold = []
  setData = (e) => {
    let id = e.target.name
    let value1 = e.target.value
    let value2 = e.target.value
    let value3 = e.target.value
    
    this.setState({ [id]: value1, [id]: value2, [id]: value3 })
  }
  saveData = () => {
    this.items.push({ slno: this.state.slno, label: this.state.label, qty: this.state.qty })
    this.setState({ itemssold: this.itemssold })
  }
  
  render(){
    return(
      <div id="total" >
      <div>
        <h1 id="one">SALES REGISTER</h1>
        <form><table id="two">
          <tr>
            <td>Sl no:</td>
            <td><input type="text" onChange={this.setData} value={this.state.slno} name="slno" /></td>
            <td> {this.state.slno}</td>
          </tr>
          <tr>
            <td>Label:</td>
            <td><input type="text" onChange={this.setData} value={this.state.label} name="label" /></td>
            <td>{this.state.label}</td>
          </tr>
        <tr>
            <td>Quantity:</td>
            <td><input type="text" onChange={this.setData} value={this.state.qty} name="qty" /></td>
            <td>{this.state.qty}</td></tr>
         
            <tr>
              <td>
               <input type="button" className="button1" onClick={this.saveData} value="Save" />
              </td>
            </tr>
        </table>
        </form>
      </div>
    </div>
  )
}}


export default Sales;
