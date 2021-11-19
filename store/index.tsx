import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from "./reducers/index";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(combineReducers({
    reducer: reducer
}), composeWithDevTools(applyMiddleware(thunk)));