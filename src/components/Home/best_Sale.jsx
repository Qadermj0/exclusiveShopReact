import React from 'react'
import { Container, Row ,Col } from "reactstrap";
import './Home.css'
  import data from "../UI/Data";
 import ProductCard from '../UI/ProductCard';
import { Link } from 'react-router-dom';

 const Best_Sales = () => {
 
  return  <section className='best_sales'> 

<Row>
 <Col lg='12' className='d-flex align-items-center  justify-content-start'>
   <div className="box"></div>
   <h3>This Month</h3>
   
 </Col>
 <Col lg='12' className='d-flex align-items-center  justify-content-between mt-2 mb-4'>
   <h1>Best Selling Products</h1>
   
   <Link to='/shop'>  <button className='view_btn '>View All</button></Link>

 </Col>
 </Row>

<Row className="cards mt-4">
  
{
          data.slice(6,10).map((product, index) =>(
            <ProductCard  product={product} key={index}/>
          ))
        } 
 
 
</Row>

  </section>
}

export default Best_Sales