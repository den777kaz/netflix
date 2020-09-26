import React, {useEffect, useState} from 'react';
import './Hero.css';
import playIcon from '../../../assets/images/play-button.svg';
import infoIcon from '../../../assets/images/info-icon.svg';
import topIcon from '../../../assets/images/top10.svg';

// import ReactPlayer from "react-player"


const Hero = (props) => {

    const {title, desc, bg, index, id} = props;
    let newText = "";
    let TextLength = 150;
    const imageUrl = "https://image.tmdb.org/t/p/w1280";

    const [newDesc, setNewDesc] = useState(desc);



    useEffect(() => {
        descLengthCheck(desc,TextLength)
    }, [desc, props])


    const descLengthCheck = (text, TextLength) => {
        if (text.length >= TextLength) {
            newText = text.split("", TextLength);
            newText[TextLength + 1] = ' ...';
            return setNewDesc(newText.join(''));
        }
    }


    return (
        <div className="hero">
            <img
                className="hero__bg"
                src={imageUrl + bg}
                alt="xx"
            />
            <div className="hero__info">
                <div className="info__title">
                    <h1>{title}</h1>
                </div>
                <div className="info__subtitle">
                    <span><img src={topIcon} alt="top 10 icon"/></span><h3>#{index} most Pupular Movie Today</h3>
                </div>
                <div className="info__description">
                    <p>{newDesc}</p>
                </div>
                <div className="info__action">
                    <button className="btn-play">
                        <span><img src={playIcon} alt="play logo"/></span> Play
                    </button>
                    <button
                        type="button"
                        className="btn-info">
                        <span><img src={infoIcon} alt="info icon"/></span> More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
