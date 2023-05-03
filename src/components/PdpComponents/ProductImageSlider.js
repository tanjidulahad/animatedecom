import React, { useEffect, useRef } from 'react';
import "../../assets/styles/productImageSlider.css"
import { useState } from 'react'
import { pdpImage } from './pdpImageData';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import {GrLinkPrevious} from "react-icons/gr"
import {GrLinkNext} from "react-icons/gr"
import nextbutton from '../../assets/images/next-btn.png'
import prevbutton from '../../assets/images/prev-btn.png'

const ProductImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    return (
        <div className='w-[80%]'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider border h-[26rem] bg-[#007FB933] rounded-xl flex items-center"
            >
                {
                    pdpImage?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='mt-[10%]'>
                            <img className='w-72 h-72 object-contain hover:rotate-45 duration-300' src={item} alt="product images" />
                            </div>
                        </SwiperSlide>
                    ))
                }

<div className='swiper-button-prev' ><img className='scale-[1.1] ml-10' src={prevbutton} alt="" /></div>
      <div className='swiper-button-next' ><img className='scale-[1.1] mr-10' src={nextbutton} alt="" /></div>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-images-slider-thumbs mt-5"
            >
                {
                    pdpImage?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-images-slider-thumbs-wrapper bg-[#F5F2F2]">
                                <img className='w-20 h-20 object-contain p-3' src={item} alt="product images" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ProductImageSlider;