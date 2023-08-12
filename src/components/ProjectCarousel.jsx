import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import data from './data';

function ProjectCarousel() {
  return (
    <div className="header__carousel">
      <Carousel autoPlay showArrows={false} showIndicators={false} showStatus={false}>
        {data.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
