
import Img1 from "../../assets/ddd.jpg"
import Img2 from "../../assets/dge.jpg"
import Img3 from "../../assets/lll1.jpg"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const OurClient = () => {
    return (
        <div className="my-24" >
             <div className="mb-16">
             <h2 className='text-primary text-center font-semibold text-xl'>--Our Staf--</h2>
        <p className=' text-center font-bold text-2xl my-4'>MEET OUR LEADERSHIP
</p>
             </div>
            <Swiper
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img1} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Daniel Green</p>
                <p >Head Sport camp</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img3} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Vallery Smith</p>
                <p >Vallery Smith</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div>
        </SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img2} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Samantha North</p>
                <p >Assistant Director</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img3} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Vallery Smith</p>
                <p >Vallery Smith</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img1} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Vallery Smith</p>
                <p >Vallery Smith</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
        <img className=" w-[40vh] rounded-3xl" src={Img2} alt="" />
        <p className='text-2xl font-bold hover:text-orange-500'>Samantha North</p>
                <p >Assistant Director</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img3} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Vallery Smith</p>
                <p >Vallery Smith</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img1} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Daniel Green</p>
                <p >Head Sport camp</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col justify-center group items-center gap-3'>
    <img className=" w-[40vh] rounded-3xl" src={Img2} alt="" />
    <p className='text-2xl font-bold hover:text-orange-500'>Samantha North</p>
                <p >Assistant Director</p>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFacebook className="h-16 w-12 text-primary"></FaFacebook>
                    <FaTwitter className="h-16 w-12"></FaTwitter>
                    <FaInstagram className="h-16 w-12"></FaInstagram>
                </div>
</div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default OurClient;