import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from "./reducers/index";
import { combineReducers } from "redux";


export const store = createStore(combineReducers({
    reducer: reducer
}), applyMiddleware(thunk));