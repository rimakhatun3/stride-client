import mobile from "../../assets/mobile.webp"
import laptop from "../../assets/laptop.webp"
import printer from "../../assets/printer.webp"
import tablet from "../../assets/tablet.webp"
import desktop from "../../assets/destop.webp"
import microove from "../../assets/oven.jpg"
import { FaFacebook, FaInstagram, FaTwitter ,FaArrowsAlt, FaLocationArrow } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination,FreeMode, Autoplay } from 'swiper/modules';
import bg from "../../assets/banner4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
const About = () => {
    return (
        <div>
             <div >
            
        <div  className=" py-36  flex flex-row justify-between items-center gap-16  h-[80vh] bg-slate-50 " >
<div className='w-6/12'>
    <p className="text-2xl font-bold text-center mb-10">Abou Us</p>
<p className=' ps-14 justify-evenly'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nobis suscipit optio temporibus aut et obcaecati placeat ratione delectus, reiciendis praesentium corrupti ea dicta omnis velit ut aliquam vero labore incidunt id autem quasi adipisci ab sunt. Consequatur nobis reprehenderit cum, eaque porro tenetur ullam officia vitae omnis beatae animi?</p>
<div className="flex justify-center mt-6">
<button className="btn btn-primary px-10">Explore <FaLocationArrow/></button>
</div>
</div>
<div className='w-6/12 pe-16  '>
<Swiper
autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  slidesPerView={1}
  freeMode={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination,FreeMode, Autoplay]}
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

export default About;