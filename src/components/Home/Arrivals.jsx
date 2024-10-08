import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
 const Arrivals = () => {
  return (
    <section className="arrivals_section">
      <Row>
        <Col
          lg="12"
          className="d-flex align-items-center  justify-content-start"
        >
          <div className="box"></div>
          <h3>Featured</h3>
        </Col>
        <Col
          lg="12"
          className="d-flex align-items-center  justify-content-between mt-2 mb-4"
        >
          <h1>New Arrival</h1>
        </Col>
      </Row>

      <Row >
        <Col lg="6"  md="12" sm="12" xs='12'>
          <div className="play_station">
            <div className="info">
              <h2>PlayStation 5</h2>
              <p>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>
          </div>
        </Col>
        <Col lg="6" md="12" sm="12" xs='12'>
          <div className="woman_content">
            <div className="info">
              <h2>Women’s Collections 5</h2>
              <p>
                Featured woman collections that <br /> give you another vibe.
              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>

            
          </div>

          <div className="items d-flex justify-content-between align-items-center gap-4">
          <div className="items_content left w-50 ">
            <div className="info">
              <h2>Speakers</h2>
              <p>
              Amazon wireless speakers              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
            </div>

            
          </div>
          <div className="items_content right w-50">
            <div className="info">
              <h2>Perfume</h2>
              <p>
              GUCCI INTENSE OUD EDP              </p>
              <Link to='/shop'> <button className="play_btn">Shop Now</button></Link>
              
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
    </section>
  );
};

export default Arrivals;
