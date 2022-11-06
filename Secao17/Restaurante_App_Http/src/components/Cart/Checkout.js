import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="nome" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="cep">CEP</label>
        <input type="number" id="cep" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancelar
        </button>
        <button className={classes.submit}>Confirmar</button>
      </div>
    </form>
  );
};

export default Checkout;
