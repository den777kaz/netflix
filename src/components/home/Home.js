import React, {useEffect} from 'react';
import Hero from "./hero/Hero";
import {connect} from "react-redux";
import {getHomeData, resetTrends} from "../../redux/reducers/trendsReducer";
import {getDayMovies, getWeekMovies, getWeekTvs} from "../../redux/selectors/homeSelectors";
import ContentRows from "./ContentRows/ContentRows";
import Preloader from "../../common/preloader/Preloader";



const Home = (props) => {
    const {dayMovies, weekMovies, weekTvs, isLoading} = props;
    let random = Math.floor(Math.random() * 10);

    useEffect(() => {
      props.getHomeData();
      return ()=>{
          console.log("DEAD")
          props.resetTrends();
      }
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

    if(isLoading) return <Preloader />;

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
    isLoading: state.trends.isLoading
})

export default connect(mapStateToProps, {getHomeData,resetTrends})(Home);

