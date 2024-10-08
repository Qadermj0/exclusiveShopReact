import React from 'react'
import { Container, Row ,Col } from "reactstrap";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
   import ProductCard from '../UI/ProductCard';
import { Link } from 'react-router-dom';
const OurProducts = ({products}) => {
 
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
    rows: 2,
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
  return <section className='our_products'>
     <Row>
 <Col lg='12' className='d-flex align-items-center  justify-content-start'>
   <div className="box"></div>
   <h3>Our Products</h3>
   
 </Col>
 <Col lg='12' className='d-flex align-items-center  justify-content-between mt-2 mb-4'>
   <h1>Explore Our Products</h1>
  </Col>
   <div className="slider-container">
        <Slider {...settings}>
        {
          products.map((product, index) =>(
            <ProductCard  product={product} key={index}/>
          ))
        }
         
        </Slider>
      </div>
 
  <Col lg='12' className='text-center mt-5'>
    <Link to='/shop'><button className='buy_btn '>View All Products</button></Link>
   
</Col>
 </Row>
 
  </section>
}

export default OurProducts