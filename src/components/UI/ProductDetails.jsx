import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import "../Home/Home.css";
import { Container, Row } from "reactstrap";
 const ProductDetails = ({products,addProducts}) => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i class="ri-arrow-right-line"></i>{" "}
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
        <i class="ri-arrow-left-line"></i>        </button>
      </div>
    );
  };
  
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // At 1024px, the settings below will take effect
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600, // At 600px, the settings below will take effect
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, // At 480px, the settings below will take effect
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider-container">
      <Slider {...settings}>
        {
          products.map((product, index) =>(
            <Container>
              <Row>
              <ProductCard product={product} addProducts={addProducts} key={index}  />

              </Row>
            </Container>

          ) )
        }

      

        </Slider>
 

      </div>
    </>
  );
};

export default ProductDetails;
