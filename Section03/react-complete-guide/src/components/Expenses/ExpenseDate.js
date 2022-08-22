import "./ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const formatedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">de {formatedMonth}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
