import * as axios from "axios";

// const instance = axios.create({
//     withCredentials: true,
//     // baseURL: 'https://api.themoviedb.org/3/',
//     // headers: {"API-KEY": "6826fcad0fcb8f2c2a3501859daae5a7"}
// });

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODI2ZmNhZDBmY2I4ZjJjMmEzNTAxODU5ZGFhZTVhNyIsInN1YiI6IjVkMDkxODcwYzNhMzY4NzE4NjFmNDBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7B-P2W3JYaIS2wm0SjNBj-RMnc5KhJ_E0KDHjtPcCzA"
const apiKey = "?api_key=6826fcad0fcb8f2c2a3501859daae5a7";


const configV3 = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { 'Authorization': 'Bearer ' + accessToken }
});
const configV4 = axios.create({
    baseURL: 'https://api.themoviedb.org/4/',
    headers: { 'Authorization': 'Bearer ' + accessToken }
});


export const configDataAPI = {
    configImages(){
        return configV3.get(`configuration${apiKey}`)
    },
    configGenresMovies(){
        return configV3.get(`genre/movie/list${apiKey}`)
    },
    configGenresTvs(){
        return configV3.get(`genre/tv/list${apiKey}`)
    },
};

export const trendsAPI = {
    getDayTrendMovies(){
        return configV3.get(`trending/movie/day${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
    },
    getWeekTrendTv(){
        return configV3.get(`trending/tv/week${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
    },
    getWeekTrendMovie(){
        return configV3.get(`trending/movie/week${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
    },

};

export const searchAPI = {

    getSearchResults(value){
        return configV4.get(`search/multi${apiKey}&language=en-US&query=${value}`)
    }

};

export const moviesAPI = {

    getPopularMovies(sort= "popular", page=1){
        return configV3.get(`movie/${sort}${apiKey}&language=en-US&page=${page}`)
    },

};
export const getDetailsAPI = {

    getMovieDetails(id){
        return configV3.get(`movie/${id}${apiKey}&language=en-US`)
    },

};