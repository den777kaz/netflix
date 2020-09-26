import React, {useEffect} from 'react';
import Hero from "./hero/Hero";
import {connect} from "react-redux";
import {getHomeData} from "../../redux/reducers/trendsReducer";
import {getDayMovies, getWeekMovies, getWeekTvs} from "../../redux/selectors/homeSelectors";
import ContentRows from "./ContentRows/ContentRows";



const Home = (props) => {
    const {dayMovies, weekMovies, weekTvs} = props;
    let random = Math.floor(Math.random() * 10);
    useEffect(() => {
        props.getHomeData();
    }, [])

    const movie = dayMovies.filter((item, index) => index === random)
        .map(m => <Hero
            key={m.id}
            id={m.id}
            index={random + 1}
            bg={m.backdrop_path}
            title={m.title}
            desc={m.overview}
        />)

    // if(!props) return <div>...loading</div>;

    return <section>
        {movie}
        <ContentRows content={weekTvs} title={"Top TV shows this week"}/>
        <ContentRows content={weekMovies} title={"Top Movies this week"}/>
    </section>

};

const mapStateToProps = (state) => ({
    dayMovies: getDayMovies(state),
    weekMovies: getWeekMovies(state),
    weekTvs: getWeekTvs(state),
    // isLoading: state.trends.isLoading
})

export default connect(mapStateToProps, {getHomeData})(Home);

