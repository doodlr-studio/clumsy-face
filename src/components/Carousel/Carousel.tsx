import React, { useRef, useEffect, useState } from 'react';
import './Carousel.scss';

interface ICarousel {
  containerWidth: number;
  itemWidth: number;
  children?: React.ReactNode;
}

enum DIRECTION {
  PREV,
  NEXT,
}

const Carousel: React.FC<ICarousel> = ({
  containerWidth,
  itemWidth,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  let startOffset: number;

  useEffect(() => {
    function actionA(e: PointerEvent) {
      e.preventDefault();

      console.log('down');
      startOffset = e.clientX;
    }

    function actionB(e: PointerEvent) {
      e.preventDefault();
      console.log('up');
      console.log('index', index);

      setIndex(index + 1);
    }

    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('pointerdown', actionA);
      containerRef.current.addEventListener('pointerup', actionB);
    }

    return function cleanup() {
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener('pointerdown', actionA);
        containerRef.current.removeEventListener('pointerup', actionB);
      }
    };
  }, []);

  console.log(index);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div
        className="carousel"
        style={{
          transform: `translateX(${
            (containerWidth - itemWidth) / 2 - index * itemWidth
          }px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
