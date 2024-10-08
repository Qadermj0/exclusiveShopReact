import React from 'react'
import { Container, Row ,Col } from "reactstrap";
import advertiseImg from '../UI/images/advertise.png';
import Clock from './Clock';
import { Link } from 'react-router-dom';
 const Advertise = () => {
  return   <>
  <Row className="advertisement">
<Col lg='6'md='6' sm='12'  className='boxing' >
  <div className="advertise_text" >
<h6>Categories</h6>
<h2>Enhance Your <br /><span> Music Experience</span></h2>
 <Clock/>
 <Link to='/shop'>
 <button className="shop_btn">
  Buy Now! 
</button>
 </Link>

  </div>
</Col>
<Col lg='6' md='6'  className='boxing_img'>
  <div className="img w-100">
  <img src={advertiseImg} alt="" />

  </div>
 </Col>
</Row>
  </>


 }

export default Advertise