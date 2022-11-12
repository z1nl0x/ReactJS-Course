import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartData = createAsyncThunk("cart/fetchData", async () => {
  const response = await fetch(
    "https://react-http-17ddb-default-rtdb.firebaseio.com/cart.json"
  );

  if (!response.ok) {
    throw new Error();
  }

  const cartData = await response.json();

  return {
    items: cartData.items || [],
    totalQuantity: cartData.totalQuantity || 0,
    totalAmount: cartData.totalAmount || 0,
  };
});

export const sendCartData = createAsyncThunk("cart/sendData", async (cart) => {
  const config = {
    method: "PUT",
    body: JSON.stringify({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
      totalAmount: cart.totalAmount,
    }),
  };

  const response = await fetch(
    "https://react-http-17ddb-default-rtdb.firebaseio.com/cart.json",
    config
  );

  if (!response.ok) {
    throw new Error();
  }
});
