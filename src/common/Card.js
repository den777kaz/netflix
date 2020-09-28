import React, {useEffect, useState} from 'react';
import style from './Card.module.css';
import arrowDown from '../assets/images/downArrow.svg';
import likeIcon from '../assets/images/likeIcon.svg';
import dislikeIcon from '../assets/images/dislike.svg';
import plusIcon from '../assets/images/plusIcon.svg';
import playBlackIcon from '../assets/images/playBlackIcon.svg';

const Card = (props) => {

    const{genreData, genreIds, id, title, image, onClick} = props;

    const [genres, setGenres] = useState([]);

    const imageUrl = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        if(genreData && genreIds){
            getGenres(genreIds,genreData)
        }
    }, [setGenres, props])

    const getGenres = (genreIds, genreData) => {
        const g = [];
       genreData.filter((item) => {
          return genreIds.forEach((id)=> {
              if( item.id === id) {
                  g.push(item.name)
                  setGenres(g)
              }
          })
       })
    };

    return (

        <div className={style.card + " " + "card__maxW" + " " + "card"}>
            <div className={style.item}>
                <div className={style.image}>
                    {
                        image
                            ? <img src={imageUrl + image} alt={title}/>
                            : <img className={style.noImage}
                                   src={"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg"}
                                   alt={props.title}/>
                    }
                    <div className={style.item__title}>
                        <h3>{title}</h3>
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
                        <span className={style.option} onClick={e => {
                            onClick(id)
                        }}>
                            <span className={style.tooltip}>More Info</span>
                        <img src={arrowDown} alt=""/>
                    </span>
                    </div>

                    {/*<div className={style.rating}>*/}
                    {/*    <p>rating</p>*/}
                    {/*</div>*/}

                    <div className={style.genres}>
                        <ul>
                            {genres.slice(0,4).map((genre, i) =>
                                <li key={i}>{genre}</li>
                            )}
                        </ul>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Card;
