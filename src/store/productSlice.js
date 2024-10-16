import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage management
const loadFromLocalStorage = (key, defaultValue) => {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
};

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Initial state
const initialState = {
    products: loadFromLocalStorage("products", []),
    totalQuantity: loadFromLocalStorage("totalQuantityproduct", 0),
    totalState: loadFromLocalStorage("totalState", 0),
    totalBefor: loadFromLocalStorage("totalBefor", 0),
    coupon: {
        code: "qader",
        value: 400,
    },
    isCoupon: false,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const newProduct = action.payload;
            const existingItem = state.products.find(item => item.id === newProduct.id);

            if (!existingItem) {
                state.products.push({
                    ...newProduct,
                    amount: 1,
                    totalPrice: newProduct.newprice,
                });
                toast.success("New Product added to cart");
            } else {
                existingItem.amount++;
                existingItem.totalPrice = existingItem.amount * newProduct.newprice;
                toast.info("Existing Product quantity increased");
            }

            state.totalQuantity = state.products.length;
            saveToLocalStorage("products", state.products);
            saveToLocalStorage("totalQuantityproduct", state.totalQuantity);
            saveToLocalStorage("totalState", state.totalState);
            saveToLocalStorage("totalBefor", state.totalBefor);
        },
        
        deleteProductFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.products.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.amount === 1) {
                    toast.info("Product quantity cannot be less than 1");
                } else {
                    existingItem.totalPrice -= existingItem.newprice;
                    existingItem.amount--;
                    toast.success("Product quantity decreased");
                }
            }

            state.totalQuantity = state.products.length;
            saveToLocalStorage("products", state.products);
            saveToLocalStorage("totalQuantityproduct", state.totalQuantity);
            saveToLocalStorage("totalState", state.totalState);
            saveToLocalStorage("totalBefor", state.totalBefor);
        },

        deleteProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter(item => item.id !== id);
            toast.success("Product deleted");
            state.totalQuantity = state.products.length;
            saveToLocalStorage("products", state.products);
            saveToLocalStorage("totalQuantityproduct", state.totalQuantity);
            saveToLocalStorage("totalState", state.totalState);
            saveToLocalStorage("totalBefor", state.totalBefor);
        },

        handlePrice: (state, action) => {
            const couponCode = action.payload;
            const total = state.products.reduce((acc, item) => acc + (item.amount * item.newprice), 0);
            state.totalState = total;
            state.totalBefor = total;

            if (couponCode === state.coupon.code) {
                const discountedTotal = total - parseInt(state.coupon.value, 10);
                state.totalState = discountedTotal < 0 ? 0 : discountedTotal; // Prevent negative total
                state.isCoupon = true;
                toast.success("Coupon applied successfully");
            }

            saveToLocalStorage("products", state.products);
            saveToLocalStorage("totalQuantityproduct", state.totalQuantity);
            saveToLocalStorage("totalState", state.totalState);
            saveToLocalStorage("totalBefor", state.totalBefor);
        },

        resetCoupon: (state) => {
            state.isCoupon = false; // Reset the coupon flag
            state.totalState = state.totalBefor; // Reset totalState to totalBefor
            toast.success("Coupon removed successfully");
        },
    },
});

// Export actions and reducer
export const {
    addProducts,
    deleteProductFromCart,
    deleteProduct,
    handlePrice,
    resetCoupon, // Export the resetCoupon action
} = productSlice.actions;

export default productSlice.reducer;
