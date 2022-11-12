import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h1>Seu Carrinho de Compras</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <h3>{`Valor total: R$ ${cartTotalAmount.toFixed(2)}`}</h3>
    </Card>
  );
};

export default Cart;
