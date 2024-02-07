import { useState, useEffect } from "react";

const baseUrl = "http://localhost:3002/api/todos";

const useHooks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setTodos(data.data);
    }

    fetchTodos();
  }, []);

  return { todos };
};

export default useHooks;
