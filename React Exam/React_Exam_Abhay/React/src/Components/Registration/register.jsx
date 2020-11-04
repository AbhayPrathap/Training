import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../Redux/Actions/registeractions';
class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", username: "", password: "" }
  }
  setData = (e) => {
    let id = e.target.name
    let value = e.target.value

    this.setState({ [id]: value })
  }


  saveData = () => {
    this.props.register(this.state)
    //    console.log("state",this.state)
    this.setState({ email: "", username: "", password: "" })
  }



  render() {
    return (
      <div id="total" >
        <div>
          <h1 id="one">USER REGISTRATION</h1>
          <form><table id="two">
            <tr>
              <td>Email</td>
              <td><input type="text" onChange={this.setData} value={this.state.email} name="email" /></td>
              <td> {this.state.email}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td><input type="text" onChange={this.setData} value={this.state.username} name="username" /></td>
              <td>{this.state.username}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type="text" onChange={this.setData} value={this.state.password} name="password" /></td>
              <td>{this.state.password}</td></tr>
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
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: bindActionCreators(addUser, dispatch)

  }
}
export default connect(null, mapDispatchToProps)(RegisterUser);