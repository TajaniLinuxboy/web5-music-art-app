import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

import { Navigation } from "swiper/modules";

import Styles from "./artWork.module.css";
import Card from "../cards/Card";


const artWork = () => {
  return (
    <div className={`${Styles.artWorkBody}`}>
      <div className={`${Styles.heading}`}>Trending ArtWorks</div>
      <div className={`${Styles.cardsBody}`}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={()=>{
            console.log('slide is changed')
          }}
          onSwiper={(swiper) => {
            console.log(swiper)
          }}

          className={`${Styles.swiper}`}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default artWork;
