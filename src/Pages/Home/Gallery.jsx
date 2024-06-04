import React from 'react';
import mobile from "../../assets/mobile.webp"
import laptop from "../../assets/laptop.webp"
import network from "../../assets/network.webp"
import printer from "../../assets/printer.webp"
import sceurity from "../../assets/sceurity.webp"
import tablet from "../../assets/tablet.webp"
import kids from "../../assets/kids product.webp"
import desktop from "../../assets/destop.webp"
import microove from "../../assets/oven.jpg"
import washing from "../../assets/washing.jpg"
import blender from "../../assets/blender.png"
import ketly from "../../assets/ketly.png"
import bg from "../../assets/banner4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';


const Gallery = () => {
    return (
        <div >
            
            <div>
            <h1 className='text-3xl font-bold text-center sm:mb-8  lg:my-28  sm:my-8'>Our Gallery Zone</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
                <img src={mobile} alt="" />
                <img src={laptop} alt="" />
                <img src={network} alt="" />
                <img src={printer} alt="" />
                <img src={sceurity} alt="" />
                <img src={tablet} alt="" />
                <img src={kids} alt="" />
                <img src={desktop} alt="" />
                
                <img src={blender} alt="" />
                <img src={washing} alt="" />
                <img src={ketly} alt="" />
                <img src={microove} alt="" />

            </div>
        </div>


        <div >
            <img className='absolute h-[80vh] w-10/12 ' src={bg} alt="" />
        <div  className=" py-36 bg-fixed  flex flex-row justify-between items-center gap-16 relative h-[80vh] " >
<div className='w-6/12'>
<p className=' text-white ps-14 justify-evenly'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nobis suscipit optio temporibus aut et obcaecati placeat ratione delectus, reiciendis praesentium corrupti ea dicta omnis velit ut aliquam vero labore incidunt id autem quasi adipisci ab sunt. Consequatur nobis reprehenderit cum, eaque porro tenetur ullam officia vitae omnis beatae animi?</p>
</div>
<div className='w-6/12 pe-16  '>
<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={mobile} />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={laptop} />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={desktop} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={printer} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={tablet} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container h-full">
            <img src={microove} />
          </div>
        </SwiperSlide>
       
      </Swiper>
</div>



        </div>
        </div>
        </div>
    );
};

export default Gallery;