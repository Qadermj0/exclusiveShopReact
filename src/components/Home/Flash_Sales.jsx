import React from 'react'
import { Container, Row ,Col } from "reactstrap";
import './Home.css'
import Clock from '../UI/Clock';
import ProductDetails from '../UI/ProductDetails';
import { Link } from 'react-router-dom';
const Flash_Sales = ({products,addProducts}) => {
  return  <section className='flash_sales'> 

<Row>
 <Col lg='12' className='d-flex align-items-center  justify-content-start'>
   <div className="box"></div>
   <h3>Today’s</h3>
   
 </Col>
 <Col lg='12' className='d-flex align-items-center  mt-2 mb-4'>
   <div className='w-30'>
   <h1 >Flash Sales</h1>

   </div>
  <div className='clock_box w-70'>
   <Clock />
  </div>
 </Col>
 

 <ProductDetails products={products} addProducts={addProducts} />
<Col lg='12' className='text-center mt-5'>
<Link to='/shop'>  <button className='buy_btn '>View All Products</button>
</Link>
</Col>
</Row>

  </section>
}

export default Flash_Sales