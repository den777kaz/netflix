import {searchAPI} from "../../api/api";

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const RESET_SEARCH = "RESET_SEARCH";

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
        case RESET_SEARCH:
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

export const resetSearch = () => ({type: RESET_SEARCH, results: null})
export const getSearch = (value) => {
    return (dispatch) => {
      searchAPI.getSearchResults(value)
          .then(results => {
              dispatch({type: SET_SEARCH_RESULTS, results: results.results})
          })
    }
};

export default searchReducer;