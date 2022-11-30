import React, { createContext } from "react";
import Todo from "../models/todo";

export interface todoInterfaceContext {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (todoId: string) => void;
}

const contextDefaultValues: todoInterfaceContext = {
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (todoId: string) => {},
};

const TodosContext = createContext<todoInterfaceContext>(contextDefaultValues);

export default TodosContext;
