import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTutorial } from '../../redux/action/tutorial';
import '../../App.css'
class ViewTutorial extends Component {
    constructor(props) {
        super(props)
        this.props.getJsonData()
    }

    render() {
        let { tutorialData } = this.props;


        var filteredTodos = tutorialData
        return (
            <div>
                <ul>
                    <table border={1}>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Published</th>
                        </tr>
                        {filteredTodos.map((todo) => {
                            return <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.published ? <div className="published">{"published"}</div> : <button>Publish</button>}</td>
                            </tr>
                        })}
                    </table>

                </ul>

            </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tutorialData: state.tutorial
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJsonData: bindActionCreators(getTutorial, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTutorial);
