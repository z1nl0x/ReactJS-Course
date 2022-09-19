import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredBirthDate, setEnteredBirthDate] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const birthDateChangeHandler = (event) => {
    setEnteredBirthDate(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredBirthDate.trim().length === 0
    ) {
      setError({
        title: "Nome ou Data inválido(a)...",
        message:
          "Por favor, entre com as informações corretas nos campos do Nome e da Data de Nascimento!",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredBirthDate);

    setEnteredBirthDate("");
    setEnteredUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Nome</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="username">Data de Nascimento</label>
          <input
            id="username"
            type="date"
            value={enteredBirthDate}
            onChange={birthDateChangeHandler}
          />
          <Button type="submit">Adicionar Pessoa</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
