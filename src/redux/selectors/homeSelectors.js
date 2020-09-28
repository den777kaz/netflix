// import {createSelector} from "reselect";


export const getDayMovies = (state) => {
    return  state.trends.dayMovie;
}

export const getWeekMovies = (state) => {
    return  state.trends.weekMovie;
}

export const getWeekTvs = (state) => {
    return  state.trends.weekTv;
}


export const getGenresMovies = (state) => {
    return  state.configData.genresMovies;
}
export const getGenresTvs = (state) => {
    return  state.configData.genresTvs;
}



// reselect selector


// export const getAllUsers = createSelector(getMoviesInfo,(movie) =>{
//     let random = Math.floor(Math.random() * 10);
//     debugger
//     return movie





// // default - simple
// import {createSelector} from "reselect";
//
// const getAllUsersSelector = (state) => {
//     return state.usersData.users;
// }
//
//
// // reselect selector
// export const getAllUsers = createSelector(getAllUsersSelector,(users) =>{
//     return users.filter(u => true);
//
//
//
// });