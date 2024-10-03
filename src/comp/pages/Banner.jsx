import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/img/banner.jpg" alt="Banner 1" className="img-fluid" /></SwiperSlide>
        <SwiperSlide><img src="public/img/banner-1.jpg" alt="Banner 2" className="img-fluid" /></SwiperSlide>
        <SwiperSlide><img src="public/img/banner2.jpg" alt="Banner 3" className="img-fluid" /></SwiperSlide>
        <SwiperSlide><img src="public/img/banner3.jpg" alt="Banner 4" className="img-fluid" /></SwiperSlide>
        <SwiperSlide><img src="public/img/banner-4.jpg" alt="Banner 5" className="img-fluid" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
