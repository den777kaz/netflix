import React, {useEffect, useState} from 'react';
import Hero from "./hero/Hero";
import {connect} from "react-redux";
import {getDayTrendMovies} from "../../redux/reducers/trendsReducer";
import {getMoviesInfo} from "../../redux/selectors/homeSelectors";
import ContentRows from "./ContentRows/ContentRows";



const Home = (props) => {

    let random = Math.floor(Math.random() * 10);
    useEffect(() => {
        props.getDayTrendMovies();
    }, [])

    const movie = props.results.filter((item, index) => index === random)
        .map(m => <Hero
            key={m.id}
            index={random + 1}
            bg={m.backdrop_path}
            title={m.title}
            desc={m.overview}
        />)

    if(!props) return <div>...loading</div>;

    return <section>
        {movie}
        <ContentRows content={props.results}/>
    </section>

};

const mapStateToProps = (state) => ({
    results: getMoviesInfo(state),
    isLoading: state.trends.isLoading
})

export default connect(mapStateToProps, {getDayTrendMovies})(Home);

