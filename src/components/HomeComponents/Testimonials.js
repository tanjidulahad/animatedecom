import React from 'react';
import Container from '../shared/Container';
import TestimonialCard from '../TestimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {FreeMode } from 'swiper';
import ellips1 from "../../assets/images/Ellipse 1.png"
import ellips2 from "../../assets/images/Ellipse 2.png"
import Footer from '../shared/Footer';

const Testimonials = () => {
    return (            
        
        <div className='h-[65vh] -mt-[72px] bg-gradient-to-b from-[#00243E] to-[#01ADEB] relative z'>
            <div className='z-10'>
                <img className='absolute scale-[0.7] top-10 left-[55%]' src={ellips1} alt="" />
                <img className='absolute scale-[0.5] top-24 left-10' src={ellips1} alt="" />
                <img className='absolute right-52 top-[22rem]' src={ellips2} alt="" />
                <img className='absolute scale-[2] left-[40%] top-[23rem]' src={ellips2} alt="" />
            </div>
            <div className='z-20'>
            <h2 className='text-3xl pt-8 font-bold italic uppercase text-center text-white'>testimonials<span className='animate-ping'>_</span></h2>
            <div className='flex justify-center items-center flex-1 h-[80%] gap-5 mx-32'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={100}
                    freeMode={true}
                    modules={[FreeMode]}
                    className='testimonial'
                >
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                </Swiper>
            </div>
            </div>
        </div>
        
    );
};

export default Testimonials;