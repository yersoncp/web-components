'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import s from "./Carrousel.module.css";

type CarrouselProps = {
  children?: ReactNode
}

const Carrousel = ({ children }: CarrouselProps) => {
  const dots = Array.from({ length: React.Children.count(children) })
  const [indexActive, setIndexActive] = useState<number>(0)

  const handleSelect = (idx: number) => {
    setIndexActive(idx);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexActive(prev => dots.length - 1 > prev ? prev + 1 : 0);
    }, 6500);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div>

      <div className={s.sliderContainer}>
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={`${s.slide} ${indexActive === idx ? s.slideActive : s.slideInactive}`}
          >
            {child}
          </div>
        ))}
      </div>

      <div className={s.dotsContainer}>
        {dots.map((_, idx) => (
          <div
            key={idx}
            className={s.dotClicable}
            onClick={() => handleSelect(idx)}
          >
            <div className={`${s.dot} ${indexActive === idx ? s.active : ''}`} />
          </div>
        ))}
      </div>
    </div>
  )
};
export default React.memo(Carrousel);