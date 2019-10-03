import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

import inputReducer from './reducers/textInput';
import logsReducer from "./reducers/logs";

const reducers = combineReducers({
    inputReducer,
    logsReducer
});

export default createStore(reducers, applyMiddleware(thunk));