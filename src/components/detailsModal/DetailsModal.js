import React, {useEffect, useRef, useState} from 'react';
import './DetailsModal.css';
import {motion} from "framer-motion"
import ReactPlayer from 'react-player'
import pauseIcon from '../../assets/images/muteIcon.svg';
import playIcon from '../../assets/images/unmuteIcon.svg';
import {connect} from "react-redux";
import {setMuteGlobal} from "../../redux/reducers/detailsReducer";



const DetailsModal = (props) => {

    const {backdrop, poster, title, desc, video, doClose, genres, isLoading, setMuteGlobal, isMuted} = props;
    const imageUrlBg = "https://image.tmdb.org/t/p/w1280";
    const imageUrlPoster = "https://image.tmdb.org/t/p/w154";

    const [hideBg, setHideBg] = useState(false);

    const [onPlay,setOnPlay] = useState(true);
    const [muted,setMuted] = useState(isMuted);

    useEffect(()=> {
        console.log("RENDER")
        // if(window.screen <= 800) {
        //     setMuted(true)
        // }
        return () => setMuteGlobal(muted)
    }, [muted])


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
                onClick={e=>handleClick(e)}
                animate={{scale: [0, 1]}}
                layout
                exit={{opacity: 0}}
                className={"details"}>
                        <div className={"details__image"}>
                            {backdrop &&
                            <img
                                className={hideBg ? "hide" : ""}
                                src = {imageUrlBg + backdrop} alt={title}
                            />
                            }

                            <ReactPlayer
                                style={videoStyle}
                                url={`https://www.youtube.com/watch?v=${video}`}
                                playing={onPlay}
                                muted={muted}
                                width="100%"
                                height="100%"
                                onStart={() => setHideBg(true)}
                                onEnded={() => setHideBg(false)}
                            />
                            <div className={"details__buttons"}>
                                {!muted
                                    ? <button
                                        onClick={handleClick}
                                        className={"doPlay"}>
                                        <img src={pauseIcon} alt="play Icon"/>
                                    </button>
                                    :  <button
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
                                    <img src={poster ? imageUrlPoster + poster : ""} alt={title}/>
                                </div>
                                <div className={"details__imageText"}>
                                    <h3 className={hideBg ? "small" : ""}>{title}</h3>
                                    <ul>
                                        {/*{ genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}*/}
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
            </motion.div>
        </motion.div>
    );
};
const mapStateToProps = (state) => ({
    isMuted:state.details.isMuted,
})
export default connect(mapStateToProps, {setMuteGlobal})(DetailsModal);
