import { UPDATE_LOADING } from "./todoActions";
export const SETTOUTORIALDATA = 'SETTOUTORIALDATA';

export const createTutorial = function (data) {
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