import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Card from "../../common/Card";
import {getMoviesData} from "../../redux/reducers/movieReducer";
import './Movies.css';
import {getGenres} from "../../redux/selectors/homeSelectors";

const Movies = ({moviesData,getMoviesData,genresData}) => {

    useEffect(()=> {
        getMoviesData()
    }, [])
    return (
        <section className={"movies"}>
           <div className="movies-box">
               {moviesData.map(m => <Card
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
    moviesData: state.movies.allMovies
})

export default connect(mapStateToProps, {getMoviesData})(Movies);
