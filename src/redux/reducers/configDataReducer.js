import {configDataAPI, searchAPI} from "../../api/api";

const SET_IMAGES_CONFIG = "SET_IMAGES_CONFIG";
const SET_GENRES_CONFIG = "SET_GENRES_CONFIG";
const SET_LOADING = "SET_LOADING";

let initialState = {
    images: [],
    genres: [],
};

const configDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IMAGES_CONFIG:
            return {
                ...state, images: action.results
            };
        case SET_GENRES_CONFIG:
            return {
                ...state, genres: action.results
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
};

// export const resetSearch = () => ({type: RESET_SEARCH, results: null})
export const getConfigData = () => {
    return (dispatch) => {
        configDataAPI.configImages()
            .then(results => {
                dispatch({type: SET_IMAGES_CONFIG, results})
            })
        configDataAPI.configGenres()
            .then(results => {
                dispatch({type: SET_GENRES_CONFIG, results})
            })
    }
};

export default configDataReducer;