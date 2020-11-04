import { SET_FILTER, FILTERS } from '../action/tutorial';
export const filterReducer = function (state = FILTERS.SHOW_ALL, action) {
    let { type, payload } = action;
    switch (type) {
        case SET_FILTER:
            
            return payload;
        default:
            return state;
    }
}