import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
 import bank_1 from '../components/UI/images/bank-1.png'
import bank_2 from '../components/UI/images/bank-2.png'
import bank_3 from '../components/UI/images/bank-3.png'
import bank_4 from '../components/UI/images/bank-4.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  handlePrice,
 } from "../store/productSlice";
import '../style/Checkout.css';
const CheckOut = () => {
const navigate= useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.products);
  const price = useSelector((state) => state.product.totalState);
  const couponDiscount = useSelector((state) => state.product.coupon);
  const totalBefor = useSelector((state) => state.product.totalBefor);
  const isCoupon = useSelector((state) => state.product.isCoupon);
  const [coupon, setCoupon] = useState("");
const placeOrderHandler =() =>{
  navigate('/home');
}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToggle = () => {
    if (isCoupon) toast.error(` you are already used this coupon`);
  };

  const handleCoupon = () => {
    dispatch(handlePrice(coupon));
    if (coupon === "") {
      toast.error(`Please inter coupon !`);
      return;
    }
    if (couponDiscount.code !== coupon) {
      toast.error(`The coupon ${coupon} is invalid`);
    }
     };
  return (
    <section>
      <Container>
      <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>CheckOut</Breadcrumb.Item>
    </Breadcrumb>
        <Row className="mt-5">
          <Col lg="6" md='12'  sm='12' xs='12' className="input_content">
            <h2 className="head_check">Billing Details</h2>
            <Form className="mt-5 check_input">
              <FormGroup>
                <label>Frist Name :</label>
                <br />
                <input type="text" />
              </FormGroup>
              <FormGroup>
                <label>Company Name :</label>
                <br />
                <input type="text"  />
              </FormGroup>
              <FormGroup>
                <label>Street Address:</label>
                <br />
                <input type="text"   />
              </FormGroup>
              <FormGroup>
                <label>Apartment, floor, etc. (optional)</label>
                <br />
                <input type="text"   />
              </FormGroup>
              <FormGroup>
                <label>Town/City :</label>
                <br />
                <input type="text"   />
              </FormGroup>
              <FormGroup>
                <label>Phone Number :</label>
                <br />
                <input type="number"   />
              </FormGroup>
              <FormGroup>
                <label>Email Address :</label>
                <br />
                <input type="text"   />
              </FormGroup>
              <FormGroup className="mt-5 checkbox_boxs ">
                <input type="checkbox"  />
                <span>
                  Save this information for faster check-out next time
                </span>
              </FormGroup>
            </Form>
          </Col>
          <Col lg="6" md='12' sm='12' xs='12'>
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
              <div className="total total_last">
                <h4>Coupon:</h4>
                <span>{couponDiscount.value}</span>
              </div>
              <div className="total  ">
                <h4>Total:</h4>
                <span>${price}</span>
              </div>
              <div className="total">
                <div className="box">
                <input type="checkbox" /> <span>Bank</span>
                </div>
                

                <div className="images">
                  <img src={bank_1} alt="" />
                  <img src={bank_2} alt="" />
                  <img src={bank_3} alt="" />
                  <img src={bank_4} alt="" />
                </div>
              </div>
              <div className="box">
                <input type="checkbox" /> <span >Cash on delivery</span>
                </div>
              <div className="total Coupon_Cod ">
              <input type="text" placeholder="Coupon Code"
              onChange={(e) => setCoupon(e.target.value)}
              />
               {isCoupon ? (
              <button className="coupon_btn" onClick={() => handleToggle()}>
                Apply Coupon
              </button>
            ) : (
              <button className="coupon_btn" onClick={handleCoupon}>
                Apply Coupon
              </button>
            )}
              </div>
            
              <button   className="coupon_btn text-center" onClick={placeOrderHandler}>Place Order</button>
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckOut;
