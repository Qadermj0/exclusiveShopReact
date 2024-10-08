import {configureStore} from '@reduxjs/toolkit';
 import productReducer from './productSlice';
 import favProductReducer from './favProductSlice';
const store = configureStore({
reducer:{
  product:productReducer,
  favProduct:favProductReducer,
 }
}); 

export default store;