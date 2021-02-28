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

  useEffect(() => {
    let startX: number;
    
    function actionA(e: PointerEvent) {
      e.preventDefault();
      
      startX = e.clientX;
    }

    function actionB(e: PointerEvent) {
      e.preventDefault();

      setIndex(index + (startX <= e.clientX ? +1 : -1 ));
    }

    if (ref && ref.current) {
      ref.current.addEventListener('pointerdown', actionA);
      ref.current.addEventListener('pointerup', actionB);
    }

    return function cleanup() {
      if (ref && ref.current) {
        ref.current.removeEventListener('pointerdown', actionA);
        ref.current.removeEventListener('pointerup', actionB);
      }
    };
  }, [index]);

  console.log(index);

  return (
    <div className="carousel-container" ref={ref}>
      <div
        className="carousel"
        style={{
          transform: `translateX(${
            (cw - ew) / 2 - index * ew
          }px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
