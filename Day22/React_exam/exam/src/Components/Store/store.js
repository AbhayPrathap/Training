import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { toDoReducer } from "../Reducers/pgetred";


export const store = createStore(toDoReducer, compose(applyMiddleware(thunk)))

