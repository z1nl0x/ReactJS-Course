import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Seguro do Carro",
    amount: 900.0,
    date: new Date(2022, 7, 18),
  },
  {
    id: "e2",
    title: "Televisão",
    amount: 3000.0,
    date: new Date(2022, 7, 17),
  },
  {
    id: "e3",
    title: "PS5",
    amount: 5000.0,
    date: new Date(2022, 7, 16),
  },
  {
    id: "e4",
    title: "Notebook",
    amount: 4000.0,
    date: new Date(2022, 7, 15),
  },
];

const App = () => {
  // Como funciona o JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Vamos Começar!"),
  //   React.createElement(Expenses, { ExpenseItems: expenses })
  // );

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>
        Gerenciador de Despesas
      </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses ExpenseItems={expenses} />
    </div>
  );
};

export default App;
