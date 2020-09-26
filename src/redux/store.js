import {applyMiddleware, combineReducers, createStore} from "redux";
import trendsReducer from "./reducers/trendsReducer";
import thunkMiddleWare from 'redux-thunk';
import searchReducer from "./reducers/searchReducer";
import configDataReducer from "./reducers/configDataReducer";

let reducers = combineReducers({
    trends: trendsReducer,
    searchResult: searchReducer,
    configData: configDataReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;