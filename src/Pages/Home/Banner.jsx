import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets//banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Marquee from 'react-fast-marquee';

const Banner = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
         pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
         
      >
        <SwiperSlide  >
          <img className='h-[75vh]' src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[75vh]' src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[75vh]' src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[75vh]' src={banner2} />
        </SwiperSlide>
       
      
        
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} />
        </SwiperSlide>
       
      </Swiper> */}

      <div className='mt-12 '>
      <Marquee>
    <img className='w-24 h-14 mx-4' src={banner1} alt="" />
    <img className='w-24 h-14 mx-4' src={banner2} alt="" />
    <img className='w-24 h-14 mx-4' src={banner3} alt="" />
    <img className='w-24 h-14 mx-4' src={banner4} alt="" />
    <img className='w-24 h-14 mx-4' src={banner1} alt="" />
    <img className='w-24 h-14 mx-4' src={banner2} alt="" />
    <img className='w-24 h-14 mx-4' src={banner3} alt="" />
    <img className='w-24 h-14 mx-4' src={banner4} alt="" />
    <img className='w-24 h-14 mx-4' src={banner1} alt="" />
    <img className='w-24 h-14 mx-4' src={banner2} alt="" />
    <img className='w-24 h-14 mx-4' src={banner3} alt="" />
    <img className='w-24 h-14 mx-4' src={banner4} alt="" />
    <img className='w-24 h-14 mx-4' src={banner1} alt="" />
  </Marquee>
      </div>
        </div>
    );
};

export default Banner;