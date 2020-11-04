import { ADD_TODO, TOGGLE_TODO,add_ser } from "../Actions/todoActions"


let initState = {
    toDo: [],
}


export const toDoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, toDo: [...state.toDo, action.payload] }
        case TOGGLE_TODO:
            return {
                ...state, toDo: state.toDo.map(itm => {
                    return itm.id === action.payload ? { ...itm, completed: !itm.completed } : itm
                })
            }
        case add_ser:
            return{
                ...state,toDo: [...state.toDo,action.payload]
            }
        

        default:
            return state


    }
}