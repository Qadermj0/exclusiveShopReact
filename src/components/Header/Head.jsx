import React from 'react'
import './Header.css';
import { Container, Row, Col  } from "reactstrap";
import {Link} from 'react-router-dom';
const Head = () => {
  return (
    <header className='head'>
      <Container>
      <Row>
        <Col lg='10' md='10' xs='10' className='left_box d-flex align-items-center justify-content-center' >
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to='/shop'><span >ShopNow</span> </Link> </p>
        </Col>
        <Col lg='2' md='2' xs='2'>
          <div className="right_box">
          <span>English</span>
          <i className="ri-arrow-down-s-line"></i>
          </div>
        </Col>

       </Row>
      </Container>
     
    </header>
  )
}

export default Head