import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRow, getTutorial, publishedTab } from '../../redux/action/tutorial';
import '../../App.css'
import FilterButtons from '../todo/FilterButtons';
class ViewTutorial extends Component {
    constructor(props) {
        super(props)
        this.props.getJsonData()

    }
     deleteData=(id)=>{
        this.props.deletetut(id)
    }
    pubchange=(id)=>{
        id.published=true
        this.props.publishTab(id)
    }
    getFilteredTodos = (tutorialData, fltr) => {
        console.log("fltr",fltr)
        switch (fltr) {
            case 'SHOW_ACTIVE':
                return tutorialData.filter(todo => !todo.published);
            case 'SHOW_PUBLISHED':
                return tutorialData.filter(todo => todo.published);
            default:
                return tutorialData;
        }
    }


    render() {
        let { tutorialData ,filter} = this.props;


        var filteredTodos = this.getFilteredTodos(tutorialData, filter);
        return (
            <div>
                 <FilterButtons/>
                <ul>
                    <table border={1}>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Published</th>
                        </tr>
                        {filteredTodos.map((todo, key) => {
                            return <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.published ==true ? <div className="published">{"published"}</div> : <button onClick={()=>this.pubchange(todo)} >Publish</button>}</td>
                                <td><button onClick={() => this.deleteData(todo.id)} >Delete</button></td>


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
        tutorialData: state.tutorial,
        filter: state.filterReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJsonData: bindActionCreators(getTutorial, dispatch),
        deletetut: bindActionCreators(deleteRow, dispatch),
        publishTab:bindActionCreators(publishedTab,dispatch)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTutorial);
