import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <h2>Vamos Começar!</h2>
      <Expenses ExpenseItems={expenses} />
    </div>
  );
}

export default App;
