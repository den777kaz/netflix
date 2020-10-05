import {applyMiddleware, combineReducers, createStore} from "redux";
import trendsReducer from "./reducers/trendsReducer";
import thunkMiddleWare from 'redux-thunk';
import searchReducer from "./reducers/searchReducer";
import configDataReducer from "./reducers/configDataReducer";
import moviesReducer from "./reducers/movieReducer";
import detailsReducer from "./reducers/detailsReducer";

let reducers = combineReducers({
    trends: trendsReducer,
    searchResult: searchReducer,
    configData: configDataReducer,
    movies: moviesReducer,
    details: detailsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;