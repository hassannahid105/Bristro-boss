import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/sectionTitle/SectionTitle";
const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"Form 11.00am to 10.00pm"}
          heading={"Order online"}
        ></SectionTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className="uppercase text-2xl text-center -mt-20 text-white">
              Salad
            </h2>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className="uppercase text-2xl text-center -mt-20 text-white">
              pizza
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className="uppercase text-2xl text-center -mt-20 text-white">
              lorem
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className="uppercase text-2xl text-center -mt-20 text-white">
              Soups
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Category;
