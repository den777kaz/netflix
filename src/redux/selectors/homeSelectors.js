// import {createSelector} from "reselect";


export const getMoviesInfo = (state) => {

    return  state.trends.all;
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