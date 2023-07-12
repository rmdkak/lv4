import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
  payload: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      const { type, id } = actions.payload;
      state.type = type;
      state.isOpen = true;
      state.payload = id;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
