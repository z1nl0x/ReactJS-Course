import React, { FormEvent, useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../context/todo-context";

const NewTodo = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInput.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText!);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text:</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
