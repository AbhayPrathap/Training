export const ADD_TODO = "ADD_TODO";

export const addTODO = (id,label,type,qty,rate,date) => {
    return {
        type: ADD_TODO,
        payload: {
            id: id,
            label: label,
            type: type,
            qty: qty,
            rate: rate,
            date: date
        }
    }
}

export const addFromServer = () => {
    return (dispatch) => {
        fetch('http://localhost:3005/stock/get').then(res => res.json()).then(
            res => {
                dispatch(
                    {
                        type: ADD_TODO,
                        payload: {
                        }
                    }
                )
            }
        )
    }
}