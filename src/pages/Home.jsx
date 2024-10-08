import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import { Container } from "reactstrap";
import Flash_Sales from '../components/Home/Flash_Sales';
import Categories from '../components/Home/Categories';
import Best_Sales from '../components/Home/best_Sale';
import Advertise from '../components/Home/Advertise';
import OurProducts from '../components/Home/OurProducts';
import Arrivals from '../components/Home/Arrivals';
import data from '../components/UI/Data'
import { addProducts } from "../store/productSlice";
import {addProductFav} from '../store/favProductSlice'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <> 
   
   <Banner/> 
   <Container >
    <Flash_Sales  products={data} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>

   <Container >
    <Categories/>
   </Container>
   <Container >
    <Best_Sales  products={data} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>
   <Container >
    <Advertise/>
   </Container>
   <Container >
    <OurProducts  products={data} addProducts={addProducts} addProductFav={addProductFav} />
   </Container>
   <Container >
    <Arrivals/> 
</Container>
  </>
}

export default Home