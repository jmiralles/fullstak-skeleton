import express from "express";
import { todosRoute } from "./controllers/todos/todo.router";
import { sendErrorResponse } from "./error-handling/error-handler";

const app = express();

// Enable JSON body parsing
app.use(express.json({ limit: "1mb" }));

// Mount the `/todos` resource
app.use("/todos", todosRoute);

app.use(sendErrorResponse);

export default app;
