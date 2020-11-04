import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTutorial } from '../../redux/action/tutorial';
import '../../App.css'

class CreateTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: "" }
    }
    saveData = () => {
        this.props.createTutorial(this.state);
        this.setState({ title: '', description: "" });
    }

    changeHandiler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="inputForm">
                <div> <input value={this.state.title} name="title" onChange={this.changeHandiler} placeholder="Enter Title" /></div>

                <div><input value={this.state.description} name="description" onChange={this.changeHandiler} placeholder="description" /></div>
                <div> <button onClick={this.saveData}>Save</button></div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTutorial: bindActionCreators(createTutorial, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(CreateTutorial);
