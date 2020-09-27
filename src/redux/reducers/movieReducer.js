import {moviesAPI} from "../../api/api";


const SET_POP_MOVIES = "SET_POP_MOVIES";
const SET_LOADING = "SET_LOADING";



let initialState = {
    allMovies: [],

};

const moviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POP_MOVIES:
            return {
                ...state, allMovies: action.results
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



//thunk- middleware
export const getMoviesData = () => {
    return (dispatch) => {
        moviesAPI.getPopularMovies()
            .then(results => {
                dispatch({type:SET_POP_MOVIES , results})
            })
            .catch(error => {
                console.log("ERROR", error)
            })

    }
};


export default moviesReducer;