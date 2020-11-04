import { combineReducers } from 'redux';
import { todoReducer } from './todoreduser';
import loadReducer from './load';
import { filterReducer } from './filterReducer';
import { placeholderReducer } from './jsonPlaceholderReducer';
import { tutorialReducer } from './tutorialReducer';

export const rootReducer = combineReducers({
    todos: todoReducer,
    loading: loadReducer,
    filterReducer:filterReducer,
    placeholderReducer:placeholderReducer,
    tutorial:tutorialReducer
});