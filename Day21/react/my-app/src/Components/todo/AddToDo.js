
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addFromServer, addTODO} from '../Actions/todoActions'
 
class AddToDO extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
 
    addToTODO = () => {
        this.props.addtodo(this.state.text)
        this.setState({ text: "" })
        console.log(this.text)
    }

    addFromserver=()=>{
        this.props.addFromserver()
    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} /> <button onClick={this.addToTODO}>AddTodo</button>
                <button onClick={this.addFromserver}>Add from Server</button>
            </div>
        );
    }
 
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addtodo: bindActionCreators(addTODO, dispatch),
        addFromserver:bindActionCreators(addFromServer, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(AddToDO);