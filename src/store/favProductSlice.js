import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';

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
    items: loadFromLocalStorage("items", []),
    totalQuantity: loadFromLocalStorage("totalQuantity", 0),
    loading: false,
};

const favProductSlice = createSlice({
    name: 'favProduct',
    initialState,
    reducers: {
        addProductFav: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

            if (existingItemIndex === -1) {
                // Add new item
                state.items.push(newItem);
                toast.success("New Product added to Fav");
            } else {
                // Remove existing item
                state.items.splice(existingItemIndex, 1);
                toast.success("Product deleted");
            }

            // Update total quantity and localStorage
            state.totalQuantity = state.items.length;
            saveToLocalStorage("items", state.items);
            saveToLocalStorage("totalQuantity", state.totalQuantity);
            state.loading = false; // Reset loading state
        },
        emptyAllProducts: (state) => {
            state.items = [];
            state.totalQuantity = 0; // Reset quantity
            saveToLocalStorage("items", state.items);
            saveToLocalStorage("totalQuantity", state.totalQuantity);
            toast.info("All products cleared from favorites");
        },
        deleteProductFav: (state, action) => {
            const id = action.payload;
            const initialLength = state.items.length;
            state.items = state.items.filter(item => item.id !== id);

            if (state.items.length < initialLength) {
                toast.success("Product deleted");
                state.totalQuantity = state.items.length;
                saveToLocalStorage("items", state.items);
                saveToLocalStorage("totalQuantity", state.totalQuantity);
            } else {
                toast.warn("Product not found in favorites");
            }
        },
    },
});

// Export actions and reducer
export const { addProductFav, emptyAllProducts, deleteProductFav } = favProductSlice.actions;
export default favProductSlice.reducer;
