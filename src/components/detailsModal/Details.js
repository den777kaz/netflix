import React, { useEffect, useRef, useState } from 'react';
import './DetailsModal.css';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import pauseIcon from '../../assets/images/muteIcon.svg';
import playIcon from '../../assets/images/unmuteIcon.svg';
import { connect } from 'react-redux';
import {
  resetDetails,
  setMuteGlobal,
} from '../../redux/reducers/detailsReducer';
import SimilarContent from './similarContent/SimilarContent';
import { useFetch } from '../../hooks/useFetch';
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const Details = (props) => {
  const { video, setDetailsModal, setMuteGlobal, isMuted } = props;
  let movieId = props.match.params.id;
  const {
    overview,
    id,
    credits,
    genres,
    title,
    original_name,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    homepage,
    runtime,
  } = props.details;

  const imageUrlBg = 'https://image.tmdb.org/t/p/w1280';
  const imageUrlPoster = 'https://image.tmdb.org/t/p/w154';

  const [hideBg, setHideBg] = useState(false);
  const [onPlay, setOnPlay] = useState(true);
  const [muted, setMuted] = useState(isMuted);
  const [trailer, setTrailer] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    return () => setMuteGlobal(muted);
  }, [muted, setMuteGlobal]);

  useEffect(() => {
    getOffTrailer();
  }, [video]);

  const listenToScroll = () => {
    if (scrollRef.current.scrollTop > 100) {
      setOnPlay(false);
      setHideBg(false);
    } else if (scrollRef.current.scrollTop === 0) {
      setHideBg(true);
      setOnPlay(true);
    }
  };

  const getOffTrailer = () => {
    if (video) {
      video.filter((v) => {
        let string = v.name;
        if (string.includes('Official Trailer')) {
          setTrailer(v.key);
        } else if (string.includes('Trailer')) {
          setTrailer(v.key);
        }
      });
    }
  };

  const doClose = (e) => {
    if (e.target.classList.contains('details__wrapper')) {
      document.body.style.overflowY = '';
      setDetailsModal(false);
    }
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const videoStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    transform: 'scale(1.45)',
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      className={'details__wrapper'}
      onClick={(e) => doClose(e)}
    >
      <motion.div
        onScroll={listenToScroll}
        ref={scrollRef}
        animate={{ opacity: [0, 1] }}
        layout
        className={'details'}
      >
        <div className={'details__image'}>
          {backdrop_path && (
            <img
              className={hideBg ? 'hide' : ''}
              src={imageUrlBg + backdrop_path}
              alt={title || original_name}
            />
          )}
          {trailer && (
            <ReactPlayer
              style={videoStyle}
              url={`https://www.youtube.com/watch?v=${trailer}`}
              playing={onPlay}
              muted={muted}
              width='100%'
              height='100%'
              progressInterval={2000}
              onStart={() => setHideBg(true)}
              onEnded={() => setHideBg(false)}
              // onPause={setHideBg(true)}
            />
          )}
          <span
            className={'detailsCloseBtn'}
            onClick={(e) => {
              setDetailsModal(false);
              document.body.style.overflowY = '';
            }}
          >
            X
          </span>
          <div
            className={`details__buttons doMute ${hideBg ? 'active' : ''}`}
            onClick={handleMute}
          >
            {!muted ? (
              <button className={'doPlay'}>
                <img src={pauseIcon} alt='play Icon' />
              </button>
            ) : (
              <button className={'doPause'}>
                <img src={playIcon} alt='pause icon' />
              </button>
            )}
          </div>

          <div className={'detail__imageInfo'}>
            <div className={`details__imagePoster + ${hideBg ? 'small' : ''}`}>
              <img
                src={poster_path ? imageUrlPoster + poster_path : ''}
                alt={title}
              />
            </div>
            <div className={'details__imageText'}>
              <h3 className={hideBg ? 'small' : ''}>
                {title ? title : original_name}
              </h3>
              <ul>
                {/*{ genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}*/}
              </ul>
            </div>
          </div>
        </div>
        <div className={'detailsDescContainer'}>
          <div className={'details__smallInfo'}>
            {release_date && <span>{release_date}</span>}
            {runtime && <span>{runtime} min</span>}
            {vote_average && (
              <span className={'smallInfo__rating'}>
                IMDB <span>{vote_average}</span>/10
              </span>
            )}
            {homepage ? (
              <span>
                <a href={homepage} target='_blank' rel='noopener noreferrer'>
                  Website
                </a>
              </span>
            ) : null}
          </div>
          <div className={'details__desc'}>
            <p>{overview}</p>
            <div className={'details__cast'}>
              <p>
                <span>Cast: </span>
                {credits &&
                [...credits.cast].splice(0, 5).map((c) => `${c.name}, `)}
                <a href='#'>more...</a>
              </p>
              <p>
                <span className={'cast__genres'}>Genres: </span>
                {genres && genres.map((genre) => `${genre.name}, `)}
              </p>
            </div>
          </div>

          {/*similar Movies*/}
          <SimilarContent id={id} />

          {/*more Trailers*/}
          {video && (
            <div className={'moreTrailersWrap'}>
              <h3>More Trailers</h3>
              <div className={'moreTrailers'}>
                {/*{*/}
                {/*    [...video].map(v =>*/}
                {/*        <div key={v.id} className={"moreTrailer__item"}>*/}
                {/*            <ReactPlayer*/}
                {/*                url={`https://www.youtube.com/watch?v=${v.key}`}*/}
                {/*                muted={muted}*/}
                {/*                width="100%"*/}
                {/*                height="100%"*/}
                {/*                controls={true}*/}
                {/*                // light={true}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
const mapStateToProps = (state) => ({
  isMuted: state.details.isMuted,
  video: state.details.video,
  details: state.details.details,
  isLoadingDetails: state.details.isLoading,
});
export default compose(connect(mapStateToProps, { setMuteGlobal, resetDetails }),
  withRouter,
)(Details);
