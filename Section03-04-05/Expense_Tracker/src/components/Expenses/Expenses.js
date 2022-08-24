import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onChangeFilterHandler = (expenseYearSelected) => {
    setSelectedYear(expenseYearSelected);

    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <ExpenseItem
        title={props.ExpenseItems[0].title}
        amount={props.ExpenseItems[0].amount}
        date={props.ExpenseItems[0].date}
      />
      <ExpenseItem
        title={props.ExpenseItems[1].title}
        amount={props.ExpenseItems[1].amount}
        date={props.ExpenseItems[1].date}
      />
      <ExpenseItem
        title={props.ExpenseItems[2].title}
        amount={props.ExpenseItems[2].amount}
        date={props.ExpenseItems[2].date}
      />
      <ExpenseItem
        title={props.ExpenseItems[3].title}
        amount={props.ExpenseItems[3].amount}
        date={props.ExpenseItems[3].date}
      />
    </Card>
  );
}

export default Expenses;
