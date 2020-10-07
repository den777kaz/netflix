import {getDetailsAPI} from "../../api/api";

const SET_LOADING = "SET_LOADING";
const SET_DETAILS = "SET_DETAILS";
const RESET_DETAILS = "RESET_DETAILS";
const SET_VIDEOS = "SET_VIDEOS";
const SET_MUTED = "SET_MUTED";

let initialState = {
    isLoading: true,
    details: [],
    video: [],
    isMuted: false
};

const trendsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case SET_DETAILS:
            return {
                ...state,
                details: action.payload,
                isLoading: false
            };
        case SET_VIDEOS:
            return {
                ...state,
                video: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                details: [],
                isLoading: true
            };
        case SET_MUTED:
            return {
                ...state,
                isMuted: action.payload
            };

        default:
            return state;
    }
};

export const resetDetails = () => ({type: RESET_DETAILS});
export const setMuteGlobal = (payload) => ({type: SET_MUTED, payload});

//thunk- middleware

export const getDetails = (id, mediaType) => {
    return (dispatch) => {

        getDetailsAPI.getMovieDetails(id, mediaType)
            .then(response => {
                if (response.status === 200)
                    // console.log(response.data)
                    dispatch(({type: SET_DETAILS, payload: response.data}));
            })
            .catch(error => {
                console.log("ERROR", error)
            })
        getDetailsAPI.getMovieVideos(id, mediaType)
            .then(response => {
                if (response.status === 200)
                    // console.log(response.data.results)
                    dispatch(({type: SET_VIDEOS, payload: response.data.results[0].key}));
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }
}

export default trendsReducer;