import React from 'react';
import style from './Card.module.css';
import arrowDown from '../assets/images/downArrow.svg';
import likeIcon from '../assets/images/likeIcon.svg';
import dislikeIcon from '../assets/images/dislike.svg';
import plusIcon from '../assets/images/plusIcon.svg';
import playBlackIcon from '../assets/images/playBlackIcon.svg';

const Card = (props) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    return (

        <div className={style.card + " " + "card__maxW"}>
            <div className={style.item}>
                <div className={style.image}>
                    {
                        props.image
                            ? <img src={imageUrl + props.image} alt={props.title}/>
                            : <img className={style.noImage}
                                   src={"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg"}
                                   alt={props.title}/>
                    }
                    <div className={style.item__title}>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className={style.info}>

                    <div className={style.options}>
                        <span className={style.option + " " + style.play}>
                            <img src={playBlackIcon} alt=""/>
                        </span>
                        <span className={style.option}>
                            <span className={style.tooltip}>Add to My List</span>
                            <img src={plusIcon} alt=""/>
                        </span>
                        <span className={style.option}>
                          <span className={style.tooltip}>I Like This</span>
                            <img src={likeIcon} alt=""/>
                        </span>
                        <span className={style.option}>
                            <span className={style.tooltip}>Not For Me</span>
                            <img src={dislikeIcon} alt=""/>
                        </span>
                        <span className={style.option}>
                            <span className={style.tooltip}>More Info</span>
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

export default Card;
