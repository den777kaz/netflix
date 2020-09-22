import React from 'react';
import style from './Card.module.css';
import arrowDown from '../assets/images/downArrow.svg';

const Card = (props) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    return (

        <div className={style.card + " " + "card__maxW" }>
            <div className={style.item}>
                <div className={style.image}>
                    {
                        props.image
                            ? <img src={imageUrl + props.image} alt={props.title}/>
                            : <img className={style.noImage} src={"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg"} alt={props.title}/>
                    }
                    <div className={style.item__title}>
                        <h3>{props.title}</h3>
                    </div>
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

export default Card;
