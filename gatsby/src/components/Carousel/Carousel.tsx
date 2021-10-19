import React, {useState} from 'react';

import {AiOutlineLeft} from '@react-icons/all-files/ai/AiOutlineLeft';
import {AiOutlineRight} from '@react-icons/all-files/ai/AiOutlineRight';

import {CarouselStyles, ImageStyles} from './Carousel.styles';

interface CarouselProps {
  images: any;
}

export const Carousel = ({
  images,
}: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <CarouselStyles>
      <AiOutlineLeft className="leftArrow" onClick={prevSlide}/>
      <AiOutlineRight className="rightArrow" onClick={nextSlide}/>
      {images.map((image, index) => (
        index == current && (
          <div key={`${index}-cl`}>
            <ImageStyles src={image.node.secure_url} />
          </div>
        )
      ))}
    </CarouselStyles>
  );
};
