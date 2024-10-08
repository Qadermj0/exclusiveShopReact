import React, { useEffect } from 'react'
import { Container, Row ,Col } from "reactstrap";
import '../components/Home/Home.css'
import ProductCard from '../components/UI/ProductCard';
import productImg from "../components/UI/images/image-3.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import data from '../components/UI/Data'
import { addProducts } from "../store/productSlice";
import {deleteProductFav} from '../store/favProductSlice'
 import {  useSelector ,useDispatch} from "react-redux";

 const WishList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch= useDispatch();
  const  favItems = useSelector((state) => state.favProduct.items);
  
  return  <section className='best_sales'> 
<Container>
<Row>
 
 <Col lg='12' className='d-flex align-items-center  justify-content-between mt-2 mb-4'>
   <h1>Wishlist ({favItems.length})</h1>
   <button className='view_btn see_all '>Move All To Bag</button>
 </Col>
 </Row> 
  
 
 <Row className="cards mt-4  ">
{
  favItems.map((product,index) =>(
    <Col lg="3" key={index}  className="mb-2">
   
    <div className="product_item ">
      <div className="product_img">
        <div className="descount">-40%</div>
        <div className="icons">
  
        <i 
        onClick={() => dispatch(deleteProductFav(product.id))}
        className="ri-delete-bin-line"></i>
        
        </div>
        <motion.img whileHover={{ scale: 0.9 }} src={product.image} alt="" />
        <div className="add_btn"
         onClick={ () =>dispatch(
          addProducts({
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
            newprice: product.newprice,
            beforePrice: product.beforePrice,
            rating: product.rating,
          })
        )}
        > Add to Cart</div>
 
      </div>
      <div className="p-2 product_info">
        <h3 className="text-black">
          <Link to=""> {product.title}</Link>{" "}
        </h3>
        <div className="price">
          {" "}
          ${product.price} <span>${product.beforePrice}</span>{" "}
        </div>
         
      </div>
    </div>
  </Col>
  ))
}

 
 
</Row>
 
 


<Row className='mt-5'>
 
<Col lg='12' className='d-flex align-items-center  justify-content-between'>
   <div className="content d-flex align-items-center  justify-content-start">
   <div className="box"></div>
   <h3 className='text-black'>Just For You</h3>
   </div>
   <button className='view_btn  see_all'>See All</button>

 </Col>
 </Row>

<Row className="cards mt-4  ">

{
    data.slice(8,12).map((item, index)=>(
      <ProductCard key={index}  product={item} addProducts={addProducts} />

    ))
  }  
 
</Row>


</Container>


  </section>
}

export default WishList