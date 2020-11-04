import { combineReducers } from 'redux';
import{purchaseReducer} from './addReducer';


export const rootReducer = combineReducers({
    items:purchaseReducer,
});