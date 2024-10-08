import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Sdata from "./Sdata";
import {Link} from 'react-router-dom'
const SilderBanner = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Sdata.map((value, index) => {
          return (
            <>
              <SwiperSlide>
                <div className="homeSlide row mt-4" key={index}>
                  <div className="col-md-6 w-50  ">
                    <h1>
                      <span>
                        <img src={value.img} alt="" />
                      </span>{" "}
                      {value.title}
                    </h1>
                    <p>{value.desc}</p>
                    <p>{value.desc2}</p>
                    <div className="btn-box d-flex align-items-center mt-3 ">
                      <div>
                        <Link to="/shop">
                          <span className="button">Shop Now </span>{" "}
                          <div className="line"></div>

                        </Link>
                      </div>

                      <div>
                        <i class="ri-arrow-right-line"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 photo w-50   ">
                    <img src={value.cover} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default SilderBanner;
