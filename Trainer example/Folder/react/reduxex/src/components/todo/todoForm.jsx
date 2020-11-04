import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo,addToServer} from '../../redux/action/todoActions';
import { bindActionCreators } from 'redux';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    addTodo = () => {
        this.props.addTodo(this.state.text);
        this.setState({ text: '' });
    }
    addToServerFn=()=>{
        this.props.addDataServer(this.state.text)
        this.setState({ text: '' });
    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={(e) => { this.setState({ text: e.target.value }) }} placeholder="Enter Task.." />
                <button disabled={this.state.text.length === 0} onClick={this.addTodo}>Add Todo</button>
                <button disabled={this.state.text.length === 0} onClick={this.addToServerFn}>Add To Server</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    addTodo: bindActionCreators(addTodo, dispatch),
    addDataServer: bindActionCreators(addToServer, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);
