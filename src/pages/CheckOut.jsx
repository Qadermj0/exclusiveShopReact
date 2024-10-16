import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { handlePrice, resetCoupon } from "../store/productSlice"; // Import resetCoupon
import bank_1 from '../components/UI/images/bank-1.png';
import bank_2 from '../components/UI/images/bank-2.png';
import bank_3 from '../components/UI/images/bank-3.png';
import bank_4 from '../components/UI/images/bank-4.png';
import '../style/Checkout.css';

const CheckOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.product.products);
  const price = useSelector((state) => state.product.totalState);
  const couponDiscount = useSelector((state) => state.product.coupon);
  const totalBefor = useSelector((state) => state.product.totalBefor);
  const isCoupon = useSelector((state) => state.product.isCoupon);

  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCoupon = () => {
    if (!coupon) {
      toast.error("Please enter a coupon code!");
      return;
    }

    if (coupon !== couponDiscount.code) {
      toast.error(`The coupon ${coupon} is invalid`);
    } else {
      dispatch(handlePrice(coupon));
    }
  };

  const removeCoupon = () => {
    setCoupon("");
    dispatch(resetCoupon()); // Call action to reset coupon in Redux
    toast.success("Coupon removed successfully!");
  };

  const placeOrderHandler = () => {
    navigate('/home');
  };

  return (
    <section>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>CheckOut</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-5">
          <Col lg="6" md='12' sm='12' xs='12' className="input_content">
            <h2 className="head_check">Billing Details</h2>
            <Form className="mt-5 check_input">
              {["First Name", "Company Name", "Street Address", "Apartment, floor, etc. (optional)", "Town/City", "Phone Number", "Email Address"].map((label, index) => (
                <FormGroup key={index}>
                  <label>{label}:</label>
                  <br />
                  <input type={label === "Phone Number" ? "tel" : "text"} />
                </FormGroup>
              ))}
              <FormGroup className="mt-5 checkbox_boxs">
                <input type="checkbox" />
                <span>Save this information for faster checkout next time</span>
              </FormGroup>
            </Form>
          </Col>
          <Col lg="6" md='12' sm='12' xs='12'>
            <div className="details_checkout">
              {cartItems.map((item) => (
                <div className="total" key={item.id}>
                  <div className="info">
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                  </div>
                  <span>${item.newprice}</span>
                </div>
              ))}
              <div className="total total_last">
                <h4>SubTotal:</h4>
                <span>${totalBefor}</span>
              </div>
              {isCoupon && (
                <div className="total total_last">
                  <h4>Coupon:</h4>
                  <span>{couponDiscount.value}</span>
                  <button className="remove_coupon_btn" onClick={removeCoupon}>
                    Remove Coupon
                  </button>
                </div>
              )}
              <div className="total">
                <h4>Total:</h4>
                <span>${price}</span>
              </div>
              <div className="total">
                <div className="box">
                  <input type="radio" name="radio" /> <span>Bank</span>
                </div>
                <div className="images">
                  <img src={bank_1} alt="Bank 1" />
                  <img src={bank_2} alt="Bank 2" />
                  <img src={bank_3} alt="Bank 3" />
                  <img src={bank_4} alt="Bank 4" />
                </div>
              </div>
              <div className="box">
                <input type="radio" name="radio" defaultChecked /> <span>Cash on delivery</span>
              </div>
              <div className="total Coupon_Cod">
                <input 
                  type="text" 
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)} 
                />
                <button 
                  className="coupon_btn" 
                  onClick={handleCoupon}
                >
                  {isCoupon ? "Coupon Used" : "Apply Coupon"}
                </button>
              </div>
              <button className="coupon_btn text-center" onClick={placeOrderHandler}>
                Place Order
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckOut;
