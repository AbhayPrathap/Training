import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPurchase } from '../../redux/actions/addAction';
class Purchase extends React.Component {
  constructor(props) {
    super(props)
    this.state = { slno: "", label: "", type: "", qty: "", rate: "", date: "", items: {}}
  }
  items = []
  setData = (e) => {
    let id = e.target.name
    let value1 = e.target.value
    let value2 = e.target.value
    let value3 = e.target.value
    let value4 = e.target.value
    let value5 = e.target.value
    let value6 = e.target.value
    this.setState({ [id]: value1, [id]: value2, [id]: value3, [id]: value4, [id]: value5, [id]: value6 })

  }

saveData = () => {

  let purchaisedata={ slno: this.state.slno, label: this.state.label, type: this.state.type,qty:this.state.qty,rate:this.state.rate,date:this.state.date }
 this.props.addPurchase(purchaisedata);

}

render(){
  return (
    <div id="total" >
      <div>
        <h1 id="one">PURCHASE REGISTER</h1>
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
            <td>Type:</td>
            <td><input type="text" onChange={this.setData} value={this.state.type} name="type" /></td>
            <td>{this.state.type}</td></tr>
          <tr>
            <td>Quantity:</td>
            <td><input type="text" onChange={this.setData} value={this.state.qty} name="qty" /></td>
            <td>{this.state.qty}</td></tr>
          <tr>
            <td>Rate:</td>
            <td><input type="text" onChange={this.setData} value={this.state.rate} name="rate" /></td>
            <td>{this.state.rate}</td></tr>
          <tr>
            <td>Date:</td>
            <td><input type="text" onChange={this.setData} value={this.state.date} name="date" /></td>
            <td>{this.state.date}</td></tr>
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


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPurchase: bindActionCreators(addPurchase, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Purchase);