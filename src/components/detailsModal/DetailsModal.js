import React from 'react';
import './DetailsModal.css';
import {motion, AnimatePresence} from "framer-motion"

const DetailsModal = (props) => {
    const {backdrop, poster, title, desc} = props;
    const imageUrl = "https://image.tmdb.org/t/p/w1280";

    const closeModal = (e) => {
        if (e.target.classList.contains("details__wrapper")) {
            document.body.style.overflowY = "";
            props.setDetailsModal(false);
        }
    }

    return (
        <motion.div animate={{opacity: [0, 1]}} exit={{opacity: 0}}
                    className={"details__wrapper"} onClick={e => closeModal(e)}>

            <motion.div
                animate={{scale: [0, 1]}}
                layout
                exit={{opacity: 0}}
                className={"details"}>

                <div className={"details__image"}>
                    <img src={backdrop ? imageUrl + backdrop : ""} alt=""/>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </motion.div>


        </motion.div>
    );
};

export default DetailsModal;
