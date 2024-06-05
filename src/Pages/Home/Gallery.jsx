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
// import bg from "../../assets/banner4.jpg"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/zoom';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Zoom, Navigation, Pagination } from 'swiper/modules';



const Gallery = () => {

 

    return (
       
            
            <div className='mb-20'>
            <h1 className='text-3xl font-bold text-center sm:mb-8  lg:my-28  sm:my-8'>Our Gallery Zone</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 '>
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={mobile} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={laptop} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={network} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={printer} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={sceurity} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={tablet} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={kids} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md' src={desktop} alt="" />
                
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md lg:h-[40vh] w-full ' src={blender} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md lg:h-[40vh] w-full' src={washing} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md lg:h-[40vh] w-full ' src={ketly} alt="" />
                <img className='border rounded-lg bg-slate-50 p-4 shadow-md lg:h-[40vh] w-full' src={microove} alt="" />

         
         
            </div>
            
        </div>


       
        
    );
};

export default Gallery;