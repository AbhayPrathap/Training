import { UPDATE_LOADING } from "./todoActions";

export const GETJSONDATA = 'GETJSONDATA';
export const addTodo = function (data) {
    return {
        type: GETJSONDATA,
        payload: data
    };
}

export const getJsonData = function () {
    return(dispatch)=> {

        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => {
            dispatch({
                type: GETJSONDATA,
                payload: res
            });

        })
    };
}