import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("products") !== null  ? JSON.parse(localStorage.getItem("products")) : [];
const totalQty = localStorage.getItem("totalQuantityproduct") !== null  ? JSON.parse(localStorage.getItem("totalQuantityproduct")) :0;
const total = localStorage.getItem("totalState") !== null  ? JSON.parse(localStorage.getItem("totalState")) : 0;
const totalBe = localStorage.getItem("totalBefor") !== null  ? JSON.parse(localStorage.getItem("totalBefor")) : 0;


const initialState = {
  products: items,
  totalQuantity: totalQty,
  totalState: total,
  totalBefor: totalBe,
  coupon: {
    code: "qader",
    value: "400",
  },
  isCoupon: false,
 };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const newProduct = action.payload;
       const existingItems = state.products.find(
        (item) => item.id === newProduct.id
      );
      if (!existingItems) {
        state.products.push({
          id: newProduct.id,
          totalPrice: newProduct.newprice,
          amount: 1,
          image: newProduct.image,
          title: newProduct.title,
          description: newProduct.description,
          newprice: newProduct.newprice,
          beforePrice: newProduct.beforePrice,
          rating: newProduct.rating,
        });

        state.totalQuantity = state.products.length;
        toast.success("New Product added to cart");
          // Save products to local storage
          
          localStorage.setItem("products", JSON.stringify(state.products.map((item) => item)));
          localStorage.setItem("totalQuantityproduct", JSON.stringify(state.totalQuantity));
          localStorage.setItem("totalState", JSON.stringify(state.totalState));
          localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));

        } else {
        //  existingItems.quantity++;
        existingItems.amount++;

        existingItems.totalPrice = existingItems.amount * newProduct.newprice;
        console.log("Existing Product added to cart");
        state.totalQuantity = state.products.length;
          // Save products to local storage
          localStorage.setItem("products", JSON.stringify(state.products.map((item) => item)));
          localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
          localStorage.setItem("totalState", JSON.stringify(state.totalState));
          localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
        }
    },
    
    deleteProductFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem.amount === 1) {
        // state.products = state.products.filter((item) => item.id !== id);
        return;
        // toast.success("Product deleted ");
        // state.totalQuantity = state.products.length;
       } else {
        // existingItem.quantity--
        existingItem.totalPrice -= existingItem.newprice;
        existingItem.amount--;
        state.totalQuantity = state.products.length;
          // Save products to local storage
          localStorage.setItem("products", JSON.stringify(state.products.map((item) => item)));
          localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
          localStorage.setItem("totalState", JSON.stringify(state.totalState));
          localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
        }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((item) => item.id !== id);
      toast.success("Product deleted ");
      state.totalQuantity = state.products.length;
        // Save products to local storage
        localStorage.setItem("products", JSON.stringify(state.products.map((item) => item)));
        localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        localStorage.setItem("totalState", JSON.stringify(state.totalState));
        localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
      },
    handlePrice: (state, action) => {
      let result = 0;
      state.products &&
        state.products.map((item) => (result += item.amount * item.newprice));
      state.totalState = result;
      state.totalBefor = result;

         // Check if the coupon code matches the currently applied coupon
        const couponCode = action.payload;
       
        if (couponCode === state.coupon.code) {
          // Subtract the coupon value from the total price
          let discountedTotal = state.totalState - parseInt(state.coupon.value);
          toast.success(`The coupon successfuly `);
          // Update the total price in the state

          state.totalState = discountedTotal;
          state.isCoupon = true;
        }  
        // Save products to local storage
      localStorage.setItem("products", JSON.stringify(state.products.map((item) => item)));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      localStorage.setItem("totalState", JSON.stringify(state.totalState));
      localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
    },
  },
});

export const {
  addProducts,
   deleteProductFromCart,
  deleteProduct,
  emptyAllIProducts,
  handlePrice,
} = productSlice.actions;
export default productSlice.reducer;
