import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import img_1 from "../UI/images/qr.jfif";
import img_2 from "../UI/images/store.png";
import img_3 from "../UI/images/google.png";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear(); // Use parentheses to get the year

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" className="mb-4" md="6">
            <div className="logo">
              <h1 className="text-white">Exclusive</h1>
            </div>
            <h2 className="footer_text md-3 mt-3 mb-4">Subscribe</h2>
            <p className="text-white mb-4">Get 10% off your first order</p>
            <Form>
              <div className="search">
                <input type="email" placeholder="Enter your email" />
                <i className="ri-send-plane-2-line "></i>
              </div>
            </Form>
            {/* Images Section */}
            <div className="images">
              <img src={img_1} alt="QR Code" className="footer-image" />
              <img src={img_2} alt="Store" className="footer-image" />
              <img src={img_3} alt="Google" className="footer-image" />
            </div>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Support</h4>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Account</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/account">My Account</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login / Register</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Wishlist">Wishlist</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer_quick_links">
              <h4 className="quick_links_title">Quick Link</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Terms Of Use</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">FAQ</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Contact</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              CopyRight QaderMajali {year}. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
