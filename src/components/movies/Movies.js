import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Card from "../../common/Card";
import {getMoviesData, resetMovies} from "../../redux/reducers/movieReducer";
import './Movies.css';
import {getGenres} from "../../redux/selectors/homeSelectors";
import MovieTab from "./tabs/movieTab";
import Preloader from "../../common/preloader/Preloader";

const Movies = ({moviesData,getMoviesData,genresData, resetMovies,isLoading}) => {

    useEffect(()=> {
        getMoviesData()
        return ()=> {
            resetMovies();
        }
    }, [])

    const handleTabClick = (name) => {
        resetMovies();
        getMoviesData(name)
    }

    return (
        <section className={"movies"}>
            <MovieTab onClick={handleTabClick} />
            {isLoading && <Preloader />}
           <div className="movies-box">
               {moviesData && moviesData.map(m => <Card
                   key={m.id}
                   title={m.title}
                   image={m.backdrop_path}
                   genres={m.genre_ids}
                   genresData={genresData}
               />)}
           </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    genresData: getGenres(state),
    moviesData: state.movies.allMovies,
    isLoading: state.movies.isLoading
})

export default connect(mapStateToProps, {getMoviesData, resetMovies})(Movies);
