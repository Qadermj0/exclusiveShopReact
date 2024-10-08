import React from "react";
import { Row, Col } from "reactstrap";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {
  const data =[
    {
      icon:"ri-customer-service-line",
      title:"Headphones",

    },
    {
      icon:"ri-camera-line",
      title:"Camera",
      
    },
    {
      icon:"ri-computer-line",
      title:"Computers",
      
    },
    {
      icon:"ri-cellphone-line",
      title:"Phones",
      
    },
    {
      icon:" ri-gamepad-fill",
      title:"Gaming ",
      
    },

    {
      icon:" ri-battery-2-line",
      title:"Battery ",
      
    },
    

  ]
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
          <i class="ri-arrow-left-line"></i>{" "}
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // At 1024px, the settings below will take effect
        settings: {
          slidesToShow:3 ,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600, // At 600px, the settings below will take effect
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, // At 480px, the settings below will take effect
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="categories">
      <Row>
        <Col
          lg="12"
          className="d-flex align-items-center  justify-content-start"
        >
          <div className="box"></div>
          <h3>Categories</h3>
        </Col>
        <Col
          lg="12"
          className="d-flex align-items-center  justify-content-start mt-2 mb-4"
        >
          <h1>Browse By Category</h1>
        </Col>

        <Slider {...settings}>
        
        {
           
           data.map((item) =>(
            <Col
            lg="2"
            md='3' 
            sm="4"
            xs="4"
  
            className="categories_box "
          >
            <div className="info d-grid align-content-center   text-center">
            <div className="icon">
              <i className={item.icon}></i>{" "}
            </div>
            <p className="categories_text text-center">{item.title}</p>
            </div>
            
          </Col>
           ))
        }
              
         
       
       
        </Slider>
      
      </Row>
    </section>
  );
};

export default Categories;
