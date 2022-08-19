import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
