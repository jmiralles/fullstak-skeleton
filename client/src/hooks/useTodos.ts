import { useState, useEffect } from "react";

const baseUrl = "http://localhost:3002/api/todos";

const useHooks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.data);
      });
  }, []);

  return { todos };
};

export default useHooks;
