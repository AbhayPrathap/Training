import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLogin } from '../../Redux/Actions/registeractions';
class LoginUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "" }
    }
    setData = (e) => {
        let id = e.target.name
        let value = e.target.value

        this.setState({ [id]: value })
    }


    saveData = () => {
        this.props.login(this.state)
        //    console.log("state",this.state)
        this.setState({ username: "", password: "" })
    }



    render() {
        return (
            <div id="total" >
                <div>
                    <h1 id="one">USER LOGIN</h1>
                    <form><table id="two">

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
                                <input type="button" className="button1" onClick={this.saveData} value="Login" />
                            </td>
                        </tr>

                    </table>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        verify: state.verify
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: bindActionCreators(addLogin, dispatch)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);