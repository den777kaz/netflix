import {searchAPI} from "../../api/api";

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const SET_LOADING = "SET_LOADING";

let initialState = {
    results: [],
};

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return {
                ...state, results: action.results
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

// export const setDayTrendMovies = (results) => ({type: SET_WEEK_TRENDS, results});

//thunk- middleware
export const getSearch = (value) => {
    return (dispatch) => {
      searchAPI.getSearchResults(value)
          .then(results => {
              dispatch({type: SET_SEARCH_RESULTS, results: results.results})
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
export default searchReducer;