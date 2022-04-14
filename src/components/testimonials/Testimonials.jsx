import React from "react";
import "./Testimonials.css";
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";
import IMG4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Testimonials</h5>
      <h2>Review</h2>
      <Swiper className="container testimonials_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          
          
      >
        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG1} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>

        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG2} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG3} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG4} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG4} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_item">
          <div className="testimonials_image">
            <img src={IMG1} alt="" />
          </div>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative im img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            im
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
