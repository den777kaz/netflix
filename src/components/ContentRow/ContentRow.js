import React, { useEffect, useState } from 'react';
import './ContentRow.css';
import Card from '../../common/Card';
import Carousel from 'react-elastic-carousel';

// https://github.com/sag1v/react-elastic-carousel

const ContentRow = (props) => {
  const [hideSliderElem, setHideSliderElem] = useState(false);

  useEffect(() => {
    if (window.screen.width > 800) {
      setHideSliderElem(true);
    }
  }, []);

  const breakPoints = [
    {
      width: 200,
      itemsToShow: 2,
      itemsToScroll: 1,
    },
    {
      width: 400,
      itemsToShow: 3,
      itemsToScroll: 2,
    },
    {
      width: 600,
      itemsToShow: 3,
      itemsToScroll: 2,
    },
    {
      width: 1000,
      itemsToShow: 4,
      itemsToScroll: 3,
    },
    {
      width: 1200,
      itemsToShow: 6,
      itemsToScroll: 5,
    },
  ];

  return (
    <section className='contentRow'>
      <div className={'row__box'}>
        <h3>{props.title}</h3>
        <Carousel
          className='sliderRow'
          itemsToShow={6}
          itemsToScroll={5}
          breakPoints={breakPoints}
          pagination={hideSliderElem}
          showArrows={hideSliderElem}
        >
          {props.content.map((item) => (
            <Card
              className={'card__maxWidth'}
              key={item.id}
              onClick={props.onClick}
              mediaType={item.media_type}
              id={item.id}
              image={item.backdrop_path}
              genreData={
                item.media_type === 'movie'
                  ? props.genresDataMovie
                  : props.genresDataTv
              }
              genreIds={item.genre_ids}
              title={
                item.media_type === 'movie' ? item.title : item.original_name
              }
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ContentRow;
