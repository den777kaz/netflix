import React from 'react';
import './SlideRow.css';


const SlideRow = ({image}) => {
        const imageUrl = "https://image.tmdb.org/t/p/w1280";
        const onMouseEnter =()=> {

        }

    return (
            <div className="slideRow__item">
                <img src={imageUrl + image} alt="dd"/>
            </div>
    );
}
;

export default SlideRow;
