import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData, sendCartData } from "./cart-actions";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
  extraReducers: {
    [fetchCartData.rejected]: (state, action) => {
      state.notification = {
        status: "error",
        title: "Error",
        message:
          action.error.message || "Erro ao coletar os dados do carrinho!",
      };
    },
    [sendCartData.pending]: (state, action) => {
      state.notification = {
        status: "",
        title: "Pendente...",
        message: "Enviando produtos ao carrinho...",
      };
    },
    [sendCartData.fulfilled]: (state, action) => {
      state.notification = {
        status: "success",
        title: "Sucesso",
        message: "Dados do carrinho enviados com sucesso!",
      };
    },
    [sendCartData.rejected]: (state, action) => {
      state.notification = {
        status: "error",
        title: "Error",
        message: "Erro ao enviar dados do carrinho!",
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
