
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_LOADING = 'UPDATE_LOADING';
let todoId = 0;
export const SET_FILTER = 'SET_FILTER';
export const FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export const addTodo = function (text) {
    return {
        type: ADD_TODO,
        payload: { id: ++todoId, text, completed: false }
    };
}

export const toggleTodo = function (index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}

export const addFromServer = function () {
    return(dispatch)=> {
        dispatch({
            type: UPDATE_LOADING,
            payload: true
        });
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(res => {
            dispatch({
                type: ADD_TODO,
                payload: { id: ++todoId, text: res.title, completed: false }
            });
            dispatch({
                type: UPDATE_LOADING,
                payload: false
            });
        })
    };
}
export const addToServer = function (text) {
    
    return(dispatch)=> {
        dispatch({
            type: UPDATE_LOADING,
            payload: true
        });
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body:{ id: ++todoId, text: text, completed: false }}).then(res => res.json()).then(res => {
            dispatch({
                type: ADD_TODO,
                payload: { id: res.id, text:text, completed: false }
            });
            dispatch({
                type: UPDATE_LOADING,
                payload: false
            });
        })
    };
}

export const updateFilter = function (filter) {
    return {
        type: SET_FILTER,
        payload: filter
    };
}
