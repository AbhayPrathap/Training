import { ADD_TODO } from "../Actions/pget"

let initState = {
    pur: [],
}

export const toDoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, pur: [...state.pur, action.payload] }

        default:
            return state
    }
}