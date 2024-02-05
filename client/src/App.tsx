import "./App.css";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos } = useTodos();

  return (
    <>
      <div className="card">
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo: { id: number; name: string }) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
