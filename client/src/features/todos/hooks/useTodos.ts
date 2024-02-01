import { useEffect, useState } from "react";
import { Todo } from "../todos.types";

const API_RUL = "http://localhost:3003";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch(`${API_RUL}/todos`);
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        const error = err as Error;
        setApiError(error.message);
      }
    }
    getTodos();
  }, []);

  async function postTodo(todo: Todo) {
    try {
      const res = await fetch(`${API_RUL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      const data = await res.json();

      setTodos((prev) => [...prev, data]);
    } catch (err: unknown) {
      const error = err as Error;
      setApiError(error.message);
    }
  }

  return { todos, postTodo, apiError };
}
