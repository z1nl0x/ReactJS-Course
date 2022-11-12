import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Using useEffect but all the fetching data and logic was transfered to the redux store file that is cart-slice.js
import { sendCartData, fetchCartData } from "./store/cart-actions";

// Using useEffect inside of this component to make changes on the Redux global state using http requests to fetch data.
// import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  // Using useEffect but all the fetching data and logic was transfered to the redux store file that is cart-slice.js
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // Using useEffect inside of this component to make changes on the Redux global state using http requests to fetch data.

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Enviando...",
  //         message: "Enviando dados do carrinho!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-http-17ddb-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Envio de dados do carrinho falhou!");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Sucesso!",
  //         message: "Dados do carrinho enviado com sucesso!",
  //       })
  //     );
  //   };

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch((error) =>
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Envio de dados do carrinho falhou!",
  //       })
  //     )
  //   );
  // }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
