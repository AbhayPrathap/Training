export const ADD_USER = "ADD_USER";
export const VERIFY_USER = "VERIFY_USER";


export const addUser = function (data) {
    return (dispatch) => {
        
        fetch('http://localhost:3400/api/loginapp/register', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {

           
        })
    };
}
export const getUser = function () {
    return (dispatch) => {

        fetch('http://localhost:3400/api/loginapp/register').then(res => res.json()).then(res => {
            dispatch({
                type: ADD_USER,
                payload: res
            });

        })
    }
}

export const addLogin = function (data) {
    
    return (dispatch) => {
        fetch('http://localhost:3400/api/loginapp/login',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)

        }).then(res => res.json()).then(res => {
            dispatch({
                type: VERIFY_USER,
                payload: res
            });

        })
        
        
    };
}
