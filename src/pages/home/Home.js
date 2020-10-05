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
import ContentRows from "../../components/ContentRows/ContentRows";
import Preloader from "../../common/preloader/Preloader";
import DetailsModal from "../../components/detailsModal/DetailsModal";
import {getDetails, resetDetails} from "../../redux/reducers/detailsReducer";


const Home = (props) => {
    const {
        dayMovies, weekMovies, weekTvs,
        isLoading, genresDataMovie, genresDataTv,
        details, video, getHomeData,resetTrends,
        resetDetails, getDetails, isLoadingDetails,detailGenres
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

    const closeModal = (e) => {
        if (e.target.classList.contains("details__wrapper")) {
            document.body.style.overflowY = "scroll";
            setDetailsModal(false);
            resetDetails();
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
            isLoading={isLoadingDetails}
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
    details: state.details.details,
    video: state.details.video,
    isLoadingDetails: state.details.isLoading,


})

export default connect(mapStateToProps, {getHomeData, resetTrends, getDetails, resetDetails})(Home);

