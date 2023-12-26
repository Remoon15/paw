
'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation , EffectCards } from 'swiper/modules';

export default function ComponentBanner() {
    const progressCircle =  useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLDivElement>(null);
    const onAutoplayTimeLeft = (s : any, time : number, progress : number) => {
      if (progressCircle.current) {
          progressCircle.current.style.setProperty('--progress', String(1 - progress));
          
      }
      if (progressContent.current) {
          progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
    };
  return (
    <>
      <Swiper
      effect={'cards'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation , EffectCards]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="/image/1204924.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/stretched-1920-1080-1149777.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/valo-cover.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/slider-5.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/ff-cover.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/genshin-cover.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/lol-cover.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/codm-cover.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/image/stretched-1920-1080-1123246.jpg" alt="" /></SwiperSlide>


        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}