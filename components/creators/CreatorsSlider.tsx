import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Slider, { Settings } from 'react-slick';

import SliderCard from './SliderCard';
import { cards } from '@/utils/mock';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles({
  root: {
    marginTop: 70
  },
  slider: {
    touchAction: 'none'
  }
})

function CreatorsSlider() {

  const classes = useStyles();

  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(()=> {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  })

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const settings: Settings = width > 760 ? {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider"
  } : 
  {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width"
  };

  return (
    <div
      className={classes.root}
    >
      <Slider {...settings}>
        {cards.map((card, index: number) => (
          <Fragment key={index}>
            <SliderCard 
              background={card.background}
              avatar={card.avatar}
              name={card.name}
              count={card.count}
              percentage={card.percentage}
              fund={card.fund}
              description={card.description}
            />
          </Fragment>
        ))}
      </Slider>
    </div>
  )
};

export default CreatorsSlider;