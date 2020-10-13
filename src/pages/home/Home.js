import React, {useEffect, useState} from 'react';
import Hero from "../../components/hero/Hero";
import {connect} from "react-redux";
import {getHomeData, resetTrends} from "../../redux/reducers/trendsReducer";
import {
    getDayMovies,
    getGenresMovies,
    getGenresTvs,
    getWeekMovies,
    getWeekTvs
} from "../../redux/selectors/homeSelectors";
import ContentRow from "../../components/ContentRow/ContentRow";
import Preloader from "../../common/preloader/Preloader";
import DetailsModal from "../../components/detailsModal/DetailsModal";
import {getDetails} from "../../redux/reducers/detailsReducer";


const Home = (props) => {
    const {
        dayMovies, weekMovies, weekTvs,
        isLoading, genresDataMovie, genresDataTv,
        getHomeData,resetTrends, getDetails,
    } = props;

    const [detailsModal, setDetailsModal] = useState(false);
    const [random, setRandom] = useState(null);

    useEffect(() => {
        let random = Math.floor(Math.random() * 10);
        setRandom(random)

        getHomeData();

        return () => {
            // console.log("DEAD")
            resetTrends();
        }
    }, [])

    const handleClick = (id, mediaType) => {
        getDetails(id, mediaType);
        setDetailsModal(true);
        document.body.style.overflowY= "hidden";
    }


    const movie = dayMovies.filter((item, index) => index === random)
        .map(m => <Hero
            key={m.id}
            id={m.id}
            index={random + 1}
            bg={m.backdrop_path}
            title={m.title}
            mediaType={m.media_type}
            desc={m.overview}
            onClick={handleClick}
        />)

    const RowTitles = [
        "Top 10 Movie Today",
        "Top TV shows this week",
        "Top Movies this week"
    ];

    const getRowContent = (row) => {
        if (row === "Top TV shows this week") return weekTvs;
        if (row === "Top Movies this week") return weekMovies;
        if (row === "Top 10 Movie Today") return dayMovies.slice(0,10);
    };

    if (isLoading) return <Preloader/>;

    return <main>
        {detailsModal && <DetailsModal
            setDetailsModal={setDetailsModal}
        /> }
        {movie}
        {RowTitles.map((row, index) => <ContentRow
            key={index}
            content={
                getRowContent(row)
            }
            title={row}
            genresDataMovie={genresDataMovie}
            genresDataTv={genresDataTv}
            onClick={handleClick}
        />)}

    </main>

};

const mapStateToProps = (state) => ({
    dayMovies: getDayMovies(state),
    weekMovies: getWeekMovies(state),
    weekTvs: getWeekTvs(state),
    isLoading: state.trends.isLoading,
    genresDataMovie: getGenresMovies(state),
    genresDataTv: getGenresTvs(state),
})

export default connect(mapStateToProps, {getHomeData, resetTrends, getDetails})(Home);

