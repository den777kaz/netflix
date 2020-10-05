import React, {useState} from 'react';
import './DetailsModal.css';
import {motion, AnimatePresence} from "framer-motion"
import ReactPlayer from 'react-player'

const DetailsModal = (props) => {
    const {backdrop, poster, title, desc, video, doClose, genres} = props;

    const imageUrlBg = "https://image.tmdb.org/t/p/w1280";
    const imageUrlPoster = "https://image.tmdb.org/t/p/w154";

    const [hideBg, setHideBg] = useState(false);

    const videoStyle = {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        transform: "scale(1.45)"
    };
    console.log(genres)
    return (
        <motion.div animate={{opacity: [0, 1]}} exit={{opacity: 0}}
                    className={"details__wrapper"} onClick={e => doClose(e)}>

            <motion.div
                animate={{scale: [0, 1]}}
                layout
                exit={{opacity: 0}}
                className={"details"}>

                <div className={"details__image"}>
                    <img
                        className={hideBg ? "hide" : ""}
                        src={backdrop ? imageUrlBg + backdrop : ""} alt={title}/>
                    <ReactPlayer
                        style={videoStyle}
                        url={`https://www.youtube.com/watch?v=${video}`}
                        playing={true}
                        width="100%"
                        height="100%"
                        onStart={()=>setHideBg(true)}
                        onEnded={()=>setHideBg(false)}
                    />
                    <div className={"detail__imageInfo"} >
                        <div className={`details__imagePoster + ${hideBg ? "small" : ""}`}>
                            <img src={poster ? imageUrlPoster + poster : ""} alt={title}/>
                        </div>
                        <div className={"details__imageText"}>
                            <h3 className={hideBg ? "small" : ""}>{title}</h3>
                            <ul>
                                {/*{genres.map(genre=> <li>{genre.name}</li>)}*/}
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

export default DetailsModal;
