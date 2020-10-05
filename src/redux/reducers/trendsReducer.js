import {trendsAPI} from "../../api/api";

const SET_DAY_TRENDS = "SET_DAY_TRENDS";
const SET_WEEK_TRENDS_MOVIE = "SET_WEEK_TRENDS_MOVIE";
const SET_WEEK_TRENDS_TV = "SET_WEEK_TRENDS_TV";
const RESET_TRENDS = "RESET_TRENDS";
const SET_LOADING = "SET_LOADING";


let initialState = {
    dayMovie: [],
    weekMovie: [],
    weekTv: [],
    isLoading: true,
};

const trendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DAY_TRENDS:
            return {
                ...state,
                dayMovie: action.results,
                isLoading: false
            };
        case SET_WEEK_TRENDS_TV:
            return {
                ...state, weekTv: action.results
            };
        case SET_WEEK_TRENDS_MOVIE:
            return {
                ...state, weekMovie: action.results
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case RESET_TRENDS:
            return {
                ...state,
                dayMovie: [],
                weekMovie: [],
                weekTv: [],
                isLoading: true
            };

        default:
            return state;
    }
};

const setDayTrendMovies = (results) => ({type: SET_DAY_TRENDS, results});
const setWeekTrendTv = (results) => ({type: SET_WEEK_TRENDS_TV, results});
const setWeekTrendMovie = (results) => ({type: SET_WEEK_TRENDS_MOVIE, results});

export const resetTrends = () => ({type: RESET_TRENDS});

//thunk- middleware
export const getHomeData = () => {
    return (dispatch) => {
        trendsAPI.getDayTrendMovies()
            .then(response => {
                if (response.status === 200)
                    dispatch(setDayTrendMovies(response.data.results))
            })
            .catch(error => {
                console.log("ERROR", error)
            })
        trendsAPI.getWeekTrendTv()
            .then(response => {
                if (response.status === 200)
                    dispatch(setWeekTrendTv(response.data.results));
            })
            .catch(error => {
                console.log("ERROR", error)
            })
        trendsAPI.getWeekTrendMovie()
            .then(response => {
                if (response.status === 200)
                    dispatch(setWeekTrendMovie(response.data.results));
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }
};

export default trendsReducer;