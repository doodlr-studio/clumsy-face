import React, { useRef, useEffect, useState } from 'react';
import './Carousel.scss';

interface ICarousel {
  containerWidth: number;
  elementWidth: number;
  children?: React.ReactNode;
}

enum DIRECTION {
  PREV,
  NEXT,
}

const Carousel: React.FC<ICarousel> = ({
  containerWidth: cw,
  elementWidth: ew,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="carousel-container" ref={ref}>
      <div
        className="carousel"
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
