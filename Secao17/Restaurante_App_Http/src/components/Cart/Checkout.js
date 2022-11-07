import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isCep = (value) =>
  /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/.test(value) && !value <= 8;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    cep: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cepInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCep = cepInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCepIsValid = isCep(enteredCep);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      cep: enteredCepIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCepIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      cep: enteredCep,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;

  const cepControlClasses = `${classes.control} ${
    formInputsValidity.cep ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="nome" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Entre com algum nome!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Entre com algum endereço!</p>}
      </div>
      <div className={cepControlClasses}>
        <label htmlFor="cep">CEP</label>
        <input type="number" id="cep" ref={cepInputRef} />
        {!formInputsValidity.cep && <p>Entre com um CEP válido!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Entre com alguma cidade!</p>}
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
