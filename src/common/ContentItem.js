import React from 'react';
import style from './CardPrim.module.css';
import arrowDown from '../assets/images/downArrow.svg';

const ContentItem = (props) => {
    const imageUrl = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className={style.card + " " + "card__maxW" }>
            <div className={style.item}>
                <div className={style.image}>
                    <img src={imageUrl + props.image} alt="dd"/>
                </div>
                <div className={style.info}>

                    <div className={style.options}>
                        <div className={style.controls}>
                        <span className={style.option + " " + style.play}>
                            <img src={arrowDown} alt=""/>
                        </span>
                            <span className={style.option}>
                            <img src={arrowDown} alt=""/>
                        </span>
                            <span className={style.option}>
                            <img src={arrowDown} alt=""/>
                        </span>
                            <span className={style.option}>
                            <img src={arrowDown} alt=""/>
                        </span>
                        </div>
                        <span className={style.option}>
                        <img src={arrowDown} alt=""/>
                    </span>
                    </div>

                    <div className={style.rating}>
                        <p>rating</p>
                    </div>

                    <div className={style.genres}>
                        <ul>
                            <li>action</li>
                            <li>Fantasy</li>
                            <li>Anime</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default ContentItem;
