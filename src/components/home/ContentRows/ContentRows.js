import React, {useEffect, useState} from 'react';
import './ContentRows.css';
import Card from "../../../common/Card";
import Carousel from 'react-elastic-carousel';

// https://github.com/sag1v/react-elastic-carousel

const ContentRows = (props) => {

    const [hideSliderElem, setHideSliderElem] = useState(false);


    useEffect(()=> {
        console.log(window.screen.width)
        if(window.screen.width > 800){
            setHideSliderElem(true)
        }
    }, [])

    const breakPoints = [
        {
            width: 400,
            itemsToShow: 2,
            itemsToScroll: 2
        },
        {
            width: 600,
            itemsToShow: 3,
            itemsToScroll: 2
        },
        {
            width: 1000,
            itemsToShow: 3,
            itemsToScroll: 2
        },
        {
            width: 1200,
            itemsToShow: 4,
            itemsToScroll: 3
        },
    ]




    return (
        <section className="contentRows">


            <div className={"row__box"}>
                <h3>{props.title}</h3>
                <Carousel className="sliderRow"
                          itemsToShow={5}
                          itemsToScroll={3}
                          breakPoints={breakPoints}
                          pagination={hideSliderElem}
                          showArrows={hideSliderElem}

                >
                    {props.content.map(item => <Card
                        className={"card__maxWidth"}
                        key={item.id}
                        image={item.backdrop_path}
                        // title={item.media_type = "movie" ? item.title : item.original_name}
                        title={item.media_type === "movie" ? item.title : item.original_name}
                    /> )}
                </Carousel>
            </div>

        </section>
    );
};

export default ContentRows;
