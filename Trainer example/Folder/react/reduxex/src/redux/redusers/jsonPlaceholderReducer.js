import { GETJSONDATA } from '../action/jsonplaceholder';
export const placeholderReducer =(state = [], action) => {
    switch (action.type) {
        case GETJSONDATA:
            return action.payload;
        default:
            return state
    }
}
