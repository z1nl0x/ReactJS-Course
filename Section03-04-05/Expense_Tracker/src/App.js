import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  // Como funciona o JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Vamos Começar!"),
  //   React.createElement(Expenses, { ExpenseItems: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>Vamos Começar!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses ExpenseItems={expenses} />
    </div>
  );
};

export default App;
