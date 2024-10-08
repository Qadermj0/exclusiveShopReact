import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Sdata from "./Sdata";
import { Link } from 'react-router-dom';

const SilderBanner = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay module
        autoplay={{
          delay: 3000, // Move to the next slide every 2 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        className="mySwiper"
      >
        {Sdata.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="homeSlide row mt-4">
                <div className="col-md-6 w-50">
                  <h1>
                    <span>
                      <img src={value.img} alt="" />
                    </span>{" "}
                    {value.title}
                  </h1>
                  <p>{value.desc}</p>
                  <p>{value.desc2}</p>
                  <div className="btn-box d-flex align-items-center mt-3">
                    <div>
                      <Link to="/shop">
                        <span className="button">Shop Now</span>{" "}
                        <div className="line"></div>
                      </Link>
                    </div>
                    <div>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 photo w-50">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SilderBanner;
