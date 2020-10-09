import React, {useEffect, useRef, useState} from 'react';
import './DetailsModal.css';
import {motion} from "framer-motion"
import ReactPlayer from 'react-player'
import pauseIcon from '../../assets/images/muteIcon.svg';
import playIcon from '../../assets/images/unmuteIcon.svg';
import {connect} from "react-redux";
import {setMuteGlobal} from "../../redux/reducers/detailsReducer";
import SimilarContent from "./similarContent/SimilarContent";


const DetailsModal = (props) => {

    const {video, doClose, isLoading, setMuteGlobal, isMuted} = props;
    const {overview,id, credits, genres, title, original_name, poster_path, backdrop_path, release_date, vote_average, homepage, runtime} = props.data;

    const imageUrlBg = "https://image.tmdb.org/t/p/w1280";
    const imageUrlPoster = "https://image.tmdb.org/t/p/w154";

    const [hideBg, setHideBg] = useState(false);
    const [onPlay, setOnPlay] = useState(true);
    const [muted, setMuted] = useState(isMuted);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        return () => setMuteGlobal(muted)
    }, [muted, setMuteGlobal])

    useEffect(() => {
        getOffTrailer()
    }, [video])
    const getOffTrailer = () => {
        if (video) {
            video.filter(v => {
                let string = v.name;
                if (string.includes("Official Trailer")) {
                    setTrailer(v.key)
                }
            })


        }
    }

    const videoStyle = {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        transform: "scale(1.45)"
    };


    const handleClick = () => {
        setMuted(!muted);
    }

    return (
        <motion.div animate={{opacity: [0, 1]}}
                    className={"details__wrapper"}
                    onClick={e => doClose(e)}>
            <motion.div
                onClick={e => handleClick(e)}
                animate={{scale: [0, 1]}}
                layout
                exit={{opacity: 0}}
                className={"details"}>
                <div className={"details__image"}>
                    {backdrop_path &&
                    <img
                        className={hideBg ? "hide" : ""}
                        src={imageUrlBg + backdrop_path} alt={title || original_name}
                    />
                    }
                    {
                        trailer &&
                        <ReactPlayer
                            style={videoStyle}
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            playing={onPlay}
                            muted={muted}
                            width="100%"
                            height="100%"
                            onStart={() => setHideBg(true)}
                            onEnded={() => setHideBg(false)}
                        />
                    }

                    <div className={"details__buttons"}>
                        {!muted
                            ? <button
                                onClick={handleClick}
                                className={"doPlay"}>
                                <img src={pauseIcon} alt="play Icon"/>
                            </button>
                            : <button
                                onClick={handleClick}
                                className={"doPause"}>
                                <img src={playIcon} alt="pause icon"/>
                            </button>
                        }
                    </div>
                    <div className={"details__buttonsWrapper"}>

                    </div>
                    <div className={"detail__imageInfo"}>
                        <div className={`details__imagePoster + ${hideBg ? "small" : ""}`}>
                            <img src={poster_path ? imageUrlPoster + poster_path : ""} alt={title}/>
                        </div>
                        <div className={"details__imageText"}>
                            <h3 className={hideBg ? "small" : ""}>
                                {title ? title : original_name}
                            </h3>
                            <ul>
                                {/*{ genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}*/}
                            </ul>
                        </div>

                    </div>

                </div>
                <div className={"detailsDescContainer"}>
                    <div className={"details__smallInfo"}>
                        <span>{release_date}</span>
                        <span>{runtime} min</span>
                        <span className={"smasllInfo__rating"}>Rating <span>{vote_average}</span>/10</span>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        {homepage ? <span><a href={homepage} target="_blank">Website</a></span> : null}

                    </div>
                    <div className={"details__desc"}>
                        <p>{overview}</p>
                        <div className={"details__cast"}>
                            <p><span>Cast: </span>
                                {credits && [...credits.cast].splice(0, 5).map(c => `${c.name}, `)}
                                <a href="#">more...</a>
                            </p>
                            <p><span className={"cast__genres"}>Genres: </span>
                                {genres && genres.map(genre => `${genre.name}, `)}
                            </p>
                        </div>
                    </div>

                    {/*similar Movies*/}
                    <SimilarContent id={id} />

                    {/*more Trailers*/}
                    {video &&
                    <div className={"moreTrailersWrap"}>
                        <h3>More Trailers</h3>
                        <div className={"moreTrailers"}>
                            {
                                [...video].map(v =>
                                    <div key={v.id} className={"moreTrailer__item"}>
                                        <ReactPlayer
                                            url={`https://www.youtube.com/watch?v=${v.key}`}
                                            muted={muted}
                                            width="100%"
                                            height="100%"
                                            controls={true}
                                            // light={true}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>


                    }


                </div>

            </motion.div>
        </motion.div>
    );
};
const mapStateToProps = (state) => ({
    isMuted: state.details.isMuted,
})
export default connect(mapStateToProps, {setMuteGlobal})(DetailsModal);
