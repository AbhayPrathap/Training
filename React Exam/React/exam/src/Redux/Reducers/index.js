import { combineReducers } from "redux";
import { registerReducer, verifyReducer } from "../Reducers/registerreducer";

export const rootReducer=combineReducers({
    registerrecord:registerReducer,
    verify:verifyReducer

})
