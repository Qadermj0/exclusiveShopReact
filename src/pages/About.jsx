import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/About.css";
import personImg from "../components/UI/images/person_1.png";
import personImg_2 from "../components/UI/images/person_2.png";
import personImg_3 from "../components/UI/images/person_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import aboutImg from "../components/UI/images/about_2.jfif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="mt-5">
          <Col lg="6" className="about_box">
            <h1 className="about_title">Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p>
              Exclusive offers more than 1 million products and is growing rapidly. It provides a diverse assortment across categories, ranging from consumer electronics to fashion, home appliances, and more.
            </p>
          </Col>
          <Col lg="6" className="about_img">
            <img src={aboutImg} alt="About Us" />
          </Col>
        </Row>

        <Row className="delivery">
          <Col lg="3" md="6" sm="6" xs="12" className="text-center border_box mt-5">
            <div className="icons">
              <i className="ri-home-8-line"></i>
            </div>
            <h2>10.5k</h2>
            <p>Active sellers on our site</p>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12" className="text-center border_box mt-5">
            <div className="icons">
              <i className="ri-discount-percent-line"></i>
            </div>
            <h2>33k</h2>
            <p>Monthly product sales</p>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12" className="text-center border_box mt-5">
            <div className="icons">
              <i className="ri-shopping-bag-3-line"></i>
            </div>
            <h2>20.5k</h2>
            <p>Active customers on our site</p>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12" className="text-center border_box mt-5">
            <div className="icons">
              <i className="ri-money-dollar-circle-line"></i>
            </div>
            <h2>25.5k</h2>
            <p>Annual gross sales on our site</p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="4" md="6" sm="6" xs="12" className="mt-5">
            <div className="product_item">
              <div className="product_img">
                <img src={personImg} alt="Tom Cruise" />
              </div>
              <div className="product_info">
                <h3 className="text-black text-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <div className="icons_media">
                  <i className="ri-twitter-line"></i>
                  <i className="ri-instagram-line"></i>
                  <i className="ri-linkedin-line"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" xs="12" className="mt-5">
            <div className="product_item">
              <div className="product_img">
                <img src={personImg_2} alt="Person 2" />
              </div>
              <div className="product_info">
                <h3 className="text-black text-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <div className="icons_media">
                  <i className="ri-twitter-line"></i>
                  <i className="ri-instagram-line"></i>
                  <i className="ri-linkedin-line"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="4" md="6" sm="6" xs="12" className="mt-5">
            <div className="product_item">
              <div className="product_img">
                <img src={personImg_3} alt="Person 3" />
              </div>
              <div className="product_info">
                <h3 className="text-black text-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
                <div className="icons_media">
                  <i className="ri-twitter-line"></i>
                  <i className="ri-instagram-line"></i>
                  <i className="ri-linkedin-line"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="delivery">
        <Col lg="4" md='12' className="text-center mb-5">
          <div className="icons">
          <i className="ri-truck-line"></i>
          </div>
          <h2>FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </Col>
        <Col lg="4" md='12' className="text-center  mb-5">
          <div className="icons">
          <i className="ri-customer-service-line"></i>          </div>
          <h2>24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </Col>
        <Col lg="4" md='12' className="text-center  mb-5">
          <div className="icons">
          <i className="ri-git-repository-private-line"></i>          </div>
          <h2>MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default About;
