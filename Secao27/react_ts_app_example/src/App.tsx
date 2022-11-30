import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosCtxProvider from "./context/TodoProvider";

// const DUMMY_ITEMS = ["Learn React", "Learn TypeScript"];

function App() {
  return (
    <div className="App">
      <TodosCtxProvider>
        <NewTodo />
        <Todos />
      </TodosCtxProvider>
    </div>
  );
}

export default App;
