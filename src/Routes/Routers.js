import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import WishList from '../pages/WishList';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Account from '../pages/Account';
import Product_Details from '../pages/Product_Details';
import data from '../components/UI/Data'
import Order from '../pages/Order';

import CancellationOrder from '../pages/CancellationOrder';
import NotFound from '../pages/NotFound';

const Routers = () => { 
  return (
     <Routes>
      <Route path="/" element={<Navigate to="home" />} />

      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
       <Route path="cart" element={<Cart />} />
       <Route path="wishlist" element={<WishList />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="account" element={<Account />} />
       <Route path="product/:id" element={<Product_Details data={data} />} />
       <Route path="order" element={<Order />} />

       <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="cancellation" element={<CancellationOrder />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
  )
}

export default Routers