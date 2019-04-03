import { createStore } from "redux";
import { combineReducers } from "redux";

import inputReducer from './reducers/textInput';

const reducers = combineReducers({
    inputReducer
});

export default createStore(reducers);