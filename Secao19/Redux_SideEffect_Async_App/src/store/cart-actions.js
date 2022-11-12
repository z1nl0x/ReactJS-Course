import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-17ddb-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Não foi possível buscar dados para carrinho!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Coleta de dados do carrinho falhou!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Enviando...",
        message: "Enviando dados do carrinho!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-17ddb-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Envio de dados do carrinho falhou!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sucesso!",
          message: "Dados do carrinho enviado com sucesso!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Envio de dados do carrinho falhou!",
        })
      );
    }
  };
};
