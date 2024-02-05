import { TodoMap } from "./todo.type";
import { v4 as uuid } from "uuid";

const todoId = uuid();

export const todos: TodoMap = {
  [todoId]: {
    id: todoId,
    name: "First todo",
    dueDate: "2024-02-03",
    assignee: "me",
  },
};
