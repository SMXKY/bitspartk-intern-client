import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "error",
  isVisible: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertUser: (state, action) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    hideAlert: (state, action) => {
      state.isVisible = false;
    },
  },
});

export const { alertUser, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
