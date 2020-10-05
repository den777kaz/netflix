import React, {useEffect, useMemo, useState} from 'react';
import Hero from "../../components/hero/Hero";
import {connect} from "react-redux";
import {getDetails, getHomeData, resetDetails, resetTrends} from "../../redux/reducers/trendsReducer";
import {
    getDayMovies,
    getGenresMovies,
    getGenresTvs,
    getWeekMovies,
    getWeekTvs
} from "../../redux/selectors/homeSelectors";
import ContentRows from "../../components/ContentRows/ContentRows";
import Preloader from "../../common/preloader/Preloader";
import DetailsModal from "../../components/detailsModal/DetailsModal";


const Home = (props) => {
    const {
        dayMovies, weekMovies, weekTvs,
        isLoading, genresDataMovie, genresDataTv,
        details, video, resetDetails
    } = props;



    const [detailsModal, setDetailsModal] = useState(false);
    const [random, setRandom] = useState(null);

    useEffect(() => {
        let random = Math.floor(Math.random() * 10);
        setRandom(random)


        props.getHomeData();

        return () => {
            // console.log("DEAD")
            props.resetTrends();
        }
    }, [])

    const handleClick = (id, mediaType) => {
        props.getDetails(id, mediaType);
        setDetailsModal(true);
        document.body.style.overflowY= "hidden";
    }

    const closeModal = (e) => {
        if (e.target.classList.contains("details__wrapper")) {
            document.body.style.overflowY = "";
            setDetailsModal(false);
        }
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
        "Top TV shows this week",
        "Top Movies this week"
    ];

    const getRowContent = (row) => {
        if (row === "Top TV shows this week") return weekTvs;
        if (row === "Top Movies this week") return weekMovies;
    };

    if (isLoading) return <Preloader/>;

    return <section>
        {detailsModal && <DetailsModal
            doClose={closeModal}
            setDetailsModal={setDetailsModal}
            backdrop={details.backdrop_path}
            poster={details.poster_path}
            title={details.title ? details.title : details.original_name}
            desc={details.overview}
            video={video}
            genres={details.genres}
        /> }
        {movie}
        {RowTitles.map((row, index) => <ContentRows
            key={index}
            content={
                getRowContent(row)
            }
            title={row}
            genresDataMovie={genresDataMovie}
            genresDataTv={genresDataTv}
            onClick={handleClick}
        />)}

    </section>

};

const mapStateToProps = (state) => ({
    dayMovies: getDayMovies(state),
    weekMovies: getWeekMovies(state),
    weekTvs: getWeekTvs(state),
    isLoading: state.trends.isLoading,
    genresDataMovie: getGenresMovies(state),
    genresDataTv: getGenresTvs(state),
    details: state.trends.details,
    video: state.trends.video
})

export default connect(mapStateToProps, {getHomeData, resetTrends, getDetails, resetDetails})(Home);

