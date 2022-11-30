import React, { createContext, useState } from "react";
import Todo from "../models/todo";
import TodosContext, { todoInterfaceContext } from "./todo-context";

type todoChildren = {
  children?: React.ReactNode;
};

const TodosCtxProvider = ({ children }: todoChildren) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id != todoId));
  };

  const initialAppContext: todoInterfaceContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={initialAppContext}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosCtxProvider;
