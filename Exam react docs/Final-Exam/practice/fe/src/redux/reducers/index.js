import { combineReducers } from "redux";
import { purchaseReducer } from "./reducer";

export const rootReducer=combineReducers({
    tutorial:purchaseReducer

})
