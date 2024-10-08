import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { addProducts, handlePrice,deleteProductFromCart } from "../store/productSlice";
import { addProductFav } from "../store/favProductSlice";
import "../style/Product_details.css";
import { useDispatch,useSelector } from "react-redux";
const Product_Details = ({ data }) => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = data.find((item) => item.id === productId);
  const { image, title, description, newprice, rating } = product;
  const cartItems = useSelector((state) => state.product.products);
  const productCart = cartItems.find((item) => item.id === productId);

  const [images, setImages] = useState(image);
  const handleImage = (e) => {
    setImages(e.target.src);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleToggle = () => {
    setLoading(!loading);
    dispatch(
      addProductFav({
        id: product.id,
        image: product.image,
        title: product.title,
        newprice: product.newprice,
        beforePrice: product.beforePrice,
      })
    );
  };

  const addProductToCart = () => {
    dispatch(
      addProducts({
        id: product.id,
        image: product.image,
        title: product.title,
        description: product.description,
        newprice: product.newprice,
        beforePrice: product.beforePrice,
        rating: product.rating,
      })
    );
    dispatch(handlePrice());
  };
  return (
    <section>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Gaming</Breadcrumb.Item>

          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="product_details">
          <Col lg="7" md="12" sm="12" className="mb-5">
            <div className="product_images w-100">
              <div className="product_image w-30">
                <img src={images} alt="" onClick={handleImage} />
                <img src={images} alt="" onClick={handleImage} />
                <img src={images} alt="" onClick={handleImage} />
                <img src={images} alt="" onClick={handleImage} />
              </div>
              <div className="cover_product w-70">
                <img src={images} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="5" md="12" sm="12">
            <div className="product_information">
              <h2> {title}</h2>
              <div className="product_rate">
                <div className="rating">
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill  last"></i>
                </div>
                <span>( {rating} Reviews)</span>
                <span className="stock">In Stock</span>
              </div>
              <div className="price">
                <h2>${newprice}</h2>
              </div>
              <p className="content">{description}</p>
              <div className="colors">
                <div className="title">Colours:</div>

                <div className="red color"></div>

                <div className="blue color"></div>
              </div>
              <div className="size">
                <div className="title"> Size:</div>
                <div className="md">XS</div>
                <div className="md">S</div>
                <div className="md">M</div>
                <div className="md">L</div>
                <div className="md">XL</div>
              </div>
              <div className="qty">
                <div className="quantity">
                  <span onClick={() => dispatch(deleteProductFromCart(productCart.id))}>-</span>
                  <div className="num">{productCart&&productCart.amount ||0}</div>
                  <span onClick={addProductToCart} >+</span>
                </div>
                <div>
                  <Link to="/checkout">
                    <button className="buy_now" onClick={addProductToCart}>
                      Buy Now
                    </button>
                  </Link>
                </div>

                <div className="icon" onClick={handleToggle}>
                  <i
                    className={
                      loading
                        ? "ri-heart-fill love active "
                        : "ri-heart-fill love "
                    }
                  ></i>
                </div>
              </div>
              <div className="delivery_box">
                <div className="box box_top">
                  <i className="ri-truck-line"></i>
                  <div className="info">
                    <h2>Free Delivery</h2>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="box">
                  <i className="ri-repeat-line"></i>{" "}
                  <div className="info">
                    <h2>Return Delivery</h2>
                    <p>
                      Free 30 Days Delivery Returns. <span>Details</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product_Details;
