import { UPDATE_LOADING } from "./todoActions";
export const SETTOUTORIALDATA = 'SETTOUTORIALDATA';
export const PUBCHANGE = 'PUBCHANGE';
export const SET_FILTER = 'SET_FILTER';

export const FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PUBLISHED: 'SHOW_PUBLISHED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const createT = function (data) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_LOADING,
            payload: true
        });
        fetch('http://localhost:3000/api/tutorials', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {

            dispatch({
                type: UPDATE_LOADING,
                payload: false
            });
        })
    };
}


export const setTutorialData = function (data) {
    return {
        type: SETTOUTORIALDATA,
        payload: data
    };
}

export const getTutorial = function () {
    return (dispatch) => {

        fetch('http://localhost:3000/api/tutorials').then(res => res.json()).then(res => {
            dispatch({
                type: SETTOUTORIALDATA,
                payload: res
            });

        })
    };
}

export const deleteRow = function (id) {
    return (dispatch) => {

        fetch('http://localhost:3000/api/tutorials/' + id, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            fetch('http://localhost:3000/api/tutorials').then(res => res.json()).then(res => {
                dispatch({
                    type: SETTOUTORIALDATA,
                    payload: res
                });

            })

        })
    }

}

export const publishedTab = function (todo) {
    return (dispatch) => {
         
        fetch('http://localhost:3000/api/tutorials/' + todo.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(todo)
        }).then(()=>{
            dispatch({
                type: PUBCHANGE,
                payload: todo,
                
            })
        })
    }
}


export const updateFilter = function (filter) {
    return {
        type: SET_FILTER,
        payload: filter
    };
}
