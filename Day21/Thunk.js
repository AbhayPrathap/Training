const redux = require("redux");
const thunk =require("redux-thunk")

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const FILTER = "FILTER"

let id = 0;
const addTODO = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++id,
            item: text,
            completed: false
        }
    }
}

const toggleTOdo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

const asyncAdd = (text)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:ADD_TODO,
                payload:{
                    id: ++id,
                    text: text,
                    complicated:false
                }
            })
        },2000)
    }
}

let initState = {
    toDo: [],
    filter:[]
}
const Filter = () => {
    return {
        type: FILTER
    }
}

const toDoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, toDo: [...state.toDo, action.payload] }
        case TOGGLE_TODO:
            return {
                ...state, toDo: state.toDo.map(itm => {
                    return itm.id === action.payload ? { ...itm, completed: !itm.completed } : itm
                })
            }
        case FILTER:
            return {
                ...state, filter: [...state.toDo.filter(res => {
                    return res.completed == true
                })]
            }

        default:
            return state


    }
}

const store = redux.createStore(toDoReducer,redux.applyMiddleware(thunk.default));

const sub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addTODO("task 1"))
// store.dispatch(addTODO("task 2"))

store.dispatch(toggleTOdo(1))
store.dispatch(Filter())
store.dispatch(asyncAdd("task2"))