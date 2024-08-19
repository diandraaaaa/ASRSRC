import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import Objective from './Objective';


// you can also make this be passed through the props if youd like
const objectives = [
  { number: 1, title: 'Objective One', text: 'This is the first objective.' },
  { number: 2, title: 'Objective Two', text: 'This is the second objective.' },
  { number: 3, title: 'Objective Three', text: 'This is the third objective.' },
  { number: 4, title: 'Objective Four', text: 'This is the fourth objective.' },
  { number: 5, title: 'Objective Five', text: 'This is the fifth objective.' },
];

function SwipeableObjectives() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
        setMobileView(true)
      } else {
        setSlidesPerView(3);
        setMobileView(false)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-screen md:max-w-7xl mx-auto py-32">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation
        className="w-full h-full px-10"
      >
        {objectives.map((obj, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Objective 
              number={obj.number}
              title={obj.title}
              text={obj.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
}

export default SwipeableObjectives;