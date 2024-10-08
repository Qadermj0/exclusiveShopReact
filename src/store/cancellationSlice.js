import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Fetch from localStorage if available, otherwise set default values
const canceledItemsFromStorage = localStorage.getItem("canceledItems") !== null
  ? JSON.parse(localStorage.getItem("canceledItems"))
  : [];

const totalRefundFromStorage = localStorage.getItem("totalRefund") !== null
  ? JSON.parse(localStorage.getItem("totalRefund"))
  : 0;

const initialState = {
  canceledItems: canceledItemsFromStorage,
  totalRefund: totalRefundFromStorage,
};

const cancellationSlice = createSlice({
  name: "cancellation",
  initialState,
  reducers: {
    // Add a canceled product
    addCanceledItem: (state, action) => {
      const canceledProduct = action.payload;
      
      state.canceledItems.push({
        id: canceledProduct.id,
        title: canceledProduct.title,
        image: canceledProduct.image,
        refundAmount: canceledProduct.refundAmount, // Assuming there's a refund amount per product
        dateCanceled: new Date().toLocaleDateString(), // Add a cancellation date
      });

      // Update total refund amount
      state.totalRefund += canceledProduct.refundAmount;

      // Notify user
      toast.success("Order canceled and refund processed!");

      // Save updated state to localStorage
      localStorage.setItem("canceledItems", JSON.stringify(state.canceledItems));
      localStorage.setItem("totalRefund", JSON.stringify(state.totalRefund));
    },

    // Delete a canceled item (in case of any modification)
    deleteCanceledItem: (state, action) => {
      const id = action.payload;
      state.canceledItems = state.canceledItems.filter(item => item.id !== id);

      // Recalculate total refund after deletion
      state.totalRefund = state.canceledItems.reduce(
        (total, item) => total + item.refundAmount,
        0
      );

      // Notify user
      toast.success("Canceled item removed");

      // Save updated state to localStorage
      localStorage.setItem("canceledItems", JSON.stringify(state.canceledItems));
      localStorage.setItem("totalRefund", JSON.stringify(state.totalRefund));
    },

    // Reset the cancellations (for example, after user clears all)
    resetCancellations: (state) => {
      state.canceledItems = [];
      state.totalRefund = 0;

      // Notify user
      toast.info("All cancellations cleared");

      // Save to localStorage
      localStorage.setItem("canceledItems", JSON.stringify([]));
      localStorage.setItem("totalRefund", JSON.stringify(0));
    },
  },
});

export const {
  addCanceledItem,
  deleteCanceledItem,
  resetCancellations,
} = cancellationSlice.actions;

export default cancellationSlice.reducer;
