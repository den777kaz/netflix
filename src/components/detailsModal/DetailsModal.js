import React, {useState} from 'react';
import './DetailsModal.css';
import {motion, AnimatePresence} from "framer-motion"
import ReactPlayer from 'react-player'

const DetailsModal = (props) => {
    const {backdrop, poster, title, desc, video} = props;
    console.log(video)

    const imageUrl = "https://image.tmdb.org/t/p/w1280";

    const [hideBg, setHideBg] = useState(false);

    const closeModal = (e) => {
        if (e.target.classList.contains("details__wrapper")) {
            document.body.style.overflowY = "";
            props.setDetailsModal(false);
        }
    }
    const videoStyle = {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: "0",
        left: "0"
    };
    return (
        <motion.div animate={{opacity: [0, 1]}} exit={{opacity: 0}}
                    className={"details__wrapper"} onClick={e => closeModal(e)}>

            <motion.div
                animate={{scale: [0, 1]}}
                layout
                exit={{opacity: 0}}
                className={"details"}>

                <div className={"details__image"}>
                    <img
                        className={hideBg ? "hide" : ""}
                        src={backdrop ? imageUrl + backdrop : ""} alt=""/>
                    <ReactPlayer
                        style={videoStyle}
                        url={`https://www.youtube.com/watch?v=${video}`}
                        playing={true}
                        width="100%"
                        height="100%"
                        onStart={()=>setHideBg(true)}
                        onEnded={()=>setHideBg(false)}
                    />

                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </motion.div>


        </motion.div>
    );
};

export default DetailsModal;
