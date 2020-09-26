import {trendsAPI} from "../../api/api";

const SET_DAY_TRENDS = "SET_DAY_TRENDS";
const SET_WEEK_TRENDS_MOVIE = "SET_WEEK_TRENDS_MOVIE";
const SET_WEEK_TRENDS_TV = "SET_WEEK_TRENDS_TV";
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
               ...state, dayMovie: action.results
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

        default:
            return state;
    }
};

//action creator
// export const addNewPostActionCreator = (newPost) => ({type: ADD_NEW_POST, newPost});
// export const setProfileUsers = (profile) => ({type: SET_PROFILE_USERS, profile});
// export const setStatus = (status) => ({type: SET_PROFILE_STATUS, status: status});

const setDayTrendMovies = (results) => ({type: SET_DAY_TRENDS, results});
const setWeekTrendTv = (results) => ({type: SET_WEEK_TRENDS_TV, results});
const setWeekTrendMovie = (results) => ({type: SET_WEEK_TRENDS_MOVIE, results});


//thunk- middleware
export const getHomeData = () => {
    return (dispatch) => {
        trendsAPI.getDayTrendMovies()
            .then(response => {
                dispatch(setDayTrendMovies(response));
            })
            .catch(error => {
                console.log("ERROR",error)
        })
        trendsAPI.getWeekTrendTv()
            .then(response => {
                dispatch(setWeekTrendTv(response));
            })
            .catch(error => {
                console.log("ERROR",error)
        })
        trendsAPI.getWeekTrendMovie()
            .then(response => {
                dispatch(setWeekTrendMovie(response));
            })
            .catch(error => {
                console.log("ERROR",error)
            })
    }
};
//
// export const getUserStatus = (userId) => {
//     return (dispatch) => {
//         profileAPI.getStatus(userId)
//             .then(response => {
//                 dispatch(setStatus(response));
//             })
//     }
// };
// export const updateStatus = (status) => {
//     return (dispatch) => {
//         profileAPI.updateStatus(status)
//             .then(response => {
//                 if(response.data.resultCode === 0){
//                     dispatch(setStatus(status));
//                 }
//             })
//     }
// };
export default trendsReducer;