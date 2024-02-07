import { createClient } from 'redis';

type Todo = {
  id: string;
  name: string;
  dueDate: string;
  assignee: string;
};

const USE_CACHE = true;

const redsiftClient = createClient({
  url: 'redis://cache:6379',
});

async function fetchTodos() {
  const res = await fetch('http://express_container:3003/api/todos', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const todos = await res.json();

  return todos;
}

function setTodosCache(todos: Todo[]) {
  redsiftClient.set('todos', JSON.stringify(todos), {
    EX: 100,
  });
}

export async function GET() {
  try {
    let todos = null;

    if (!redsiftClient.isReady) {
      await redsiftClient.connect();
    }

    if (USE_CACHE) {
      todos = await redsiftClient.get('todos');

      if (todos) {
        return Response.json({ data: JSON.parse(todos) });
      }

      todos = await fetchTodos();
      setTodosCache(todos);

      return Response.json({ data: todos });
    }

    todos = await fetchTodos();
    setTodosCache(todos);

    return Response.json({ data: todos });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
