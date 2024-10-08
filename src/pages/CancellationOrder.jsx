import React, { useEffect, useState } from "react";
 import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
 import signupImg from '../components/UI/images/login.jfif'
 import '../style/Order.css';
 import Breadcrumb from 'react-bootstrap/Breadcrumb';
 import { useSelector, useDispatch } from "react-redux";

  const CancellationOrder = () => {
    const cartItems = useSelector((state) => state.product.products);
    const price = useSelector((state) => state.product.totalState);
     const totalBefor = useSelector((state) => state.product.totalBefor);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
       <section className="order">
        <Container>
        <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>My Orders</Breadcrumb.Item>
    </Breadcrumb>


<Row>
{cartItems.length === 0?(
  <h1 className="text-center order_title">There are no cancellation order</h1>
  
):(
  <Col lg='6'>
  <div className="order_box">
               <div className="details_checkout">
  {
    cartItems && cartItems.map((item) =>(
      <div className="total">
      <div className="info">
        <img src={item.image} alt="" />
        <h2> {item.title}</h2>
      </div>
  
      <span>${item.newprice}</span>
    </div>
    ))
  } 
             
                <div className="total total_last">
                  <h4>SubTotal:</h4>
                  <span>${totalBefor}</span>
                </div>
                
                <div className="total  ">
                  <h4>Total:</h4>
                  <span>${price}</span>
                </div>
                
                 
                
              </div>
   </div>
  
    </Col>
)}   

  

</Row>


          </Container>   
       
 
       </section>
   );
};

export default CancellationOrder;
