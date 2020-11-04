export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = 'SET_FILTER';
export const add_ser = 'add_ser';
export const FILTERS = {
    SHOWALL: "SHOWALL",
    SHOWCOMPLETED: "SHOWCOMPLETED",
    SHOWACTIVE: "SHOWACTIVE"
}

let id = 0;
export const addTODO = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++id,
            item: text,
            completed: false
        }
    }
}

export const toggleTOdo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

// export let initState = {
//     toDo: [],
// }

export const updateFilter = function (filter) {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

export const addFromServer = () => {
    return (dispatch) => {
        fetch('http://localhost:3005/sales/get').then(res => res.json()).then(
            res => {
                dispatch(
                    {
                        type: add_ser,
                        payload: res,

                    }
                )
            }
        )
    }
}