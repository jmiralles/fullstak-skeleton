import { useRef, FormEvent } from "react";
import { newDate } from "../../utils/dates";
import { useTodos } from "./hooks/useTodos";
import { Todo } from "./todos.types";

const Todos = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const { todos, postTodo, apiError } = useTodos();

  async function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = todoRef?.current?.value;

    if (!name) return;

    const newTodo: Todo = {
      name: name,
      assignee: "Me",
      dueDate: newDate(),
    };

    postTodo(newTodo);
  }
  return (
    <div className="row center">
      {apiError ? <div className="error">ss{apiError}</div> : null}
      <h1>Todos</h1>
      <form onSubmit={addTodo}>
        <input
          aria-label="Add todo"
          ref={todoRef}
          id="todo"
          type="text"
          placeholder="Add Todo"
        />
        <button type="submit">add todo</button>
      </form>
      <ul className="todoList">
        {todos.map((todo: Todo) => (
          <li key={todo.name}>
            {todo.name} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
