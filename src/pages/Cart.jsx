import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/Cart.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProductFromCart,
  addProducts,
  handlePrice,
  deleteProduct,
} from "../store/productSlice";
const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.products);
  const price = useSelector((state) => state.product.totalState);
  const couponDiscount = useSelector((state) => state.product.coupon);
  const totalBefor = useSelector((state) => state.product.totalBefor);
  const isCoupon = useSelector((state) => state.product.isCoupon);
  const [coupon, setCoupon] = useState("");
   useEffect(() => {
    dispatch(handlePrice(coupon));
  }, [cartItems]);
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

          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <Row className=" head_cart text-center">
          <Col lg="3" md="3" xs="3">
            <h1>Product</h1>
          </Col>

          <Col lg="3" md="3" xs="3">
            <h1>Price</h1>
          </Col>
          <Col lg="3" md="3" xs="3">
            <h1>Quantity</h1>
          </Col>
          <Col lg="3" md="3" xs="3">
            <h1>SubTotal</h1>
          </Col>
        </Row>
        {cartItems &&
          cartItems.map((item) => (
            <Row className="mt-4 body_cart text-center">
              <Col lg="3" md="3" xs="3">
                <h1>
                  <span className="img_cart">
                    <img src={item.image} alt="" />
                    <span
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item.id))}
                    >
                      <i className="ri-close-line"></i>
                    </span>
                  </span>
                  <span className="title_img">{item.title}</span>{" "}
                </h1>
              </Col>

              <Col lg="3" md="3" xs="3">
                <h1>${item.newprice}</h1>
              </Col>
              <Col lg="3" md="3" xs="3">
                <div className="qty">
                  <span
                    className="cleck"
                    onClick={() => dispatch(deleteProductFromCart(item.id))}
                  >
                    -
                  </span>
                  <span>{item.amount}</span>
                  <span
                    className="cleck"
                    onClick={() =>
                      dispatch(
                        addProducts({ id: item.id, newprice: item.newprice })
                      )
                    }
                  >
                    +
                  </span>
                </div>
              </Col>
              <Col lg="3" md="3" xs="3">
                <h1>${item.totalPrice}</h1>
              </Col>
            </Row>
          ))}

        <Row className=" coupon ">
          <Col lg="6" md="12" xs="12" className="coupon_res mb-5">
            <input
              type="text"
              value={coupon}
              placeholder="Coupon Code"
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
          </Col>

          <Col lg="6" md="12" xs="12">
            <div className="check_out">
              <h6>Cart Total</h6>
              <div className="total">
                <h4>SubTotal:</h4>
                <span>${totalBefor}</span>
              </div>
              <div className="total">
                <h4>Coupon:</h4>
                <span>{couponDiscount.value}</span>
              </div>
              <div className="total  total_last">
                <h4>Total:</h4>
                <span>${price}</span>
              </div>
              <Link to="/checkout">
                <button className="coupon_btn last_btn text-center">
                  Procees to checkout
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
