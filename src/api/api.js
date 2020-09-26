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
            // return axios.get(`https://api.themoviedb.org/3/movie/337401?api_key=6826fcad0fcb8f2c2a3501859daae5a7&append_to_response=videos`)
            .then(response=> {
                if(response.status === 200)  return response.data.images;
            })
    },
    configGenres(){
        return configV3.get(`genre/movie/list${apiKey}`)
            // return axios.get(`https://api.themoviedb.org/3/movie/337401?api_key=6826fcad0fcb8f2c2a3501859daae5a7&append_to_response=videos`)
            .then(response=> {

                if(response.status === 200)  return response.data.genres;

            })
    },

};

export const trendsAPI = {
    getDayTrendMovies(){
        return configV3.get(`trending/movie/day${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
            .then(response=> {
                if(response.status === 200)  return response.data.results;
            })
    },
    getWeekTrendTv(){
        return configV3.get(`trending/tv/week${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
            .then(response=> {
                if(response.status === 200)  return response.data.results;
            })
    },
    getWeekTrendMovie(){
        return configV3.get(`trending/movie/week${apiKey}&sort_by=popularity.desc&append_to_response=genres`)
            .then(response=> {
                if(response.status === 200)  return response.data.results;
            })
    },

};

export const searchAPI = {

    getSearchResults(value){
        return configV4.get(`search/multi${apiKey}&language=en-US&query=${value}`)
            .then(response=> {
                if(response.status === 200)  return response.data;
            })
    },

};