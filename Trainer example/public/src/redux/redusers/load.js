import { UPDATE_LOADING } from '../action/todoActions';
export default (state = false, action) => {
    switch (action.type) {
        case UPDATE_LOADING:
            return action.payload;
        default:
            return state
    }
}
