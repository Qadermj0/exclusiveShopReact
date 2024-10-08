import {configureStore} from '@reduxjs/toolkit';
 import productReducer from './productSlice';
 import favProductReducer from './favProductSlice';
 import cancellationreducer from './cancellationSlice';
const store = configureStore({
reducer:{
  product:productReducer,
  favProduct:favProductReducer,
  cancellation:cancellationreducer,
 }
}); 

export default store;