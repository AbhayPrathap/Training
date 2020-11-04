import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../redux/action/todoActions';
import FilterButtons from './FilterButtons';

class TodoLists extends Component {

    getFilteredTodos = (todos, fltr) => {
        console.log("fltr",fltr)
        switch (fltr) {
            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }

    render() {
        let { todos, filter, toggletd } = this.props;
        var filteredTodos = this.getFilteredTodos(todos, filter);
        return (
            <div>
                <FilterButtons/>
            
            <ul>
                {filteredTodos.map((todo) => {
                    return <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}
                        <input type="checkbox" checked={todo.completed} onChange={()=>{toggletd(todo.id)}} />
                    </li>
                })}
            </ul>
            </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        todos: state.todos,
        filter: state.filterReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    toggletd: bindActionCreators(toggleTodo, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoLists);
