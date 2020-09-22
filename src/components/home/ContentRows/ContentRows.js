import React from 'react';
import SlideRow from "./row/SlideRow";
import './ContentRows.css';
import ContentItem from "../../../common/ContentItem";
import Carousel from 'react-elastic-carousel';


const ContentRows = (props) => {

    const breakPoints = [
        {
            width: 400,
            itemsToShow: 1,
            itemsToScroll: 1
        },
        {
            width: 600,
            itemsToShow: 3,
            itemsToScroll: 3
        },
        {
            width: 1000,
            itemsToShow: 3,
            itemsToScroll: 3
        },
        {
            width: 1200,
            itemsToShow: 4,
            itemsToScroll: 4
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

                >
                    {props.content.map(item => <ContentItem className={"card__maxWidth"} key={item.id} image={item.backdrop_path} /> )}
                </Carousel>
            </div>

        </section>
    );
};

export default ContentRows;
