import {trendsAPI} from "../../api/api";

const SET_WEEK_TRENDS = "SET_WEEK_TRENDS";
const SET_LOADING = "SET_LOADING";


let initialState = {
    all: [],
    isLoading: true,
};

const trendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_WEEK_TRENDS:
            return {
               ...state, all: action.results
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

export const setDayTrendMovies = (results) => ({type: SET_WEEK_TRENDS, results});

//thunk- middleware
export const getDayTrendMovies = () => {
    return (dispatch) => {
        trendsAPI.getDayTrendMovies()
            .then(response => {
                dispatch(setDayTrendMovies(response));
                dispatch({type: SET_LOADING})
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