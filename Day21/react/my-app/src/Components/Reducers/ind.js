import {combineReducers} from "redux";
import {toDoReducer} from "./todoReducers";
import {filterReducer} from "./filterReducer"

export const rootReducer = combineReducers({
    todos:toDoReducer,
    filterReducer:filterReducer
})