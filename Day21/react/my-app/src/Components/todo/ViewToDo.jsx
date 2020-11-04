
import React from 'react';
import { connect } from 'react-redux';
import { FILTERS, toggleTOdo } from '../Actions/todoActions';
import filter from './filter';
import FilterButton from './filter';


class ViewToDO extends React.Component {
    constructor(props) {
        super(props)
    }
    getFilterTOdo = (todos, filter) => {
        console.log(filter)
        switch (filter) {
            
            case FILTERS.SHOWACTIVE:
                return todos.filter(res => !res.completed)
            case FILTERS.SHOWCOMPLETED:
                return todos.filter(res => res.completed)
            default: return todos

        }
    }
    render() {
        let { todos,filter, toggleTOdo } = this.props;
        var data = this.getFilterTOdo(todos.toDo, filter)
        return (
            <div>
                {JSON.stringify(todos.toDo)}
                <FilterButton></FilterButton>
                <ul>
                    {data.map(((todo, key) => {
                        return <li key={key}>{todo.item} <input type="checkbox" checked={todo.completed} onChange={() => { toggleTOdo(todo.id) }} /></li>
                    }))}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filterReducer
    }
}

export default connect(mapStateToProps, { toggleTOdo })(ViewToDO);