import { FILTERS, SET_FILTER } from "../Actions/todoActions";


export const filterReducer =function(state=FILTERS.SHOWALL,action){
    let {type,payload}=action;
    switch(type){
        case SET_FILTER:
            return payload;
        default: return state
    }
}