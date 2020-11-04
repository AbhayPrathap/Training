import { ADD_TODO, TOGGLE_TODO } from '../action/todoActions';
export const todoReducer = function (state = [], action) {
    let { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case TOGGLE_TODO:
            return state.map((todo) => {
                return todo.id === payload ?
                    { ...todo, completed: !todo.completed } :
                    todo;
            });
        default:
            return state;
    }
}