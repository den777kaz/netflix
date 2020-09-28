import {configDataAPI} from "../../api/api";

const SET_IMAGES_CONFIG = "SET_IMAGES_CONFIG";
const SET_GENRES_CONFIG_MOVIE = "SET_GENRES_CONFIG_MOVIE";
const SET_GENRES_CONFIG_TV = "SET_GENRES_CONFIG_TV";
const SET_LOADING = "SET_LOADING";

let initialState = {
    images: [],
    genresMovies: [],
    genresTvs: [],
};

const configDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IMAGES_CONFIG:
            return {
                ...state, images: action.results
            };
        case SET_GENRES_CONFIG_MOVIE:
            return {
                ...state, genresMovies: action.results
            };
        case SET_GENRES_CONFIG_TV:
            return {
                ...state, genresTvs: action.results
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

export const getConfigData = () => {
    return (dispatch) => {
        configDataAPI.configImages()
            .then(response => {
                if(response.status === 200)  dispatch({type: SET_IMAGES_CONFIG, results:response.data.images});
            })
            .catch(err => console.log(err))

        configDataAPI.configGenresMovies()
            .then(response => {
                if(response.status === 200)
                    dispatch({type: SET_GENRES_CONFIG_MOVIE, results:response.data.genres});
            })
            .catch(err => console.log(err))

        configDataAPI.configGenresTvs()
            .then(response => {
                if(response.status === 200)
                    dispatch({type: SET_GENRES_CONFIG_TV, results:response.data.genres});
            })
            .catch(err => console.log(err))
    }
};

export default configDataReducer;