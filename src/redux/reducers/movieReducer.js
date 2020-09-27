import {moviesAPI} from "../../api/api";


const SET_POP_MOVIES = "SET_POP_MOVIES";
const RESET_MOVIES = "RESET_MOVIES";
const SET_LOADING = "SET_LOADING";



let initialState = {
    allMovies: [],
    isLoading:true

};

const moviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POP_MOVIES:
            return {
                ...state,
                allMovies: action.results,
                isLoading: false
            };
        case RESET_MOVIES:
            return {
                ...state, allMovies: [],isLoading: true
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

export const resetMovies = () => ({type:RESET_MOVIES})

//thunk- middleware
export const getMoviesData = (name) => {
    return (dispatch) => {
        moviesAPI.getPopularMovies(name)
            .then(results => {
                dispatch({type:SET_POP_MOVIES , results})
            })
            .catch(error => {
                console.log("ERROR", error)
            })

    }
};


export default moviesReducer;