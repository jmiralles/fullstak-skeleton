import express from "express";
import cors from "cors";
import { todoRoute } from "./controllers/todos/todo.router";
import { sendErrorResponse } from "./error-handling/error-handler";
import { serveOpenapiSpec } from "./pre-request-handlers/openapi";

const app = express();

app.use(cors());

// Enable JSON body parsing
app.use(express.json({ limit: "1mb" }));
app.use("/openapi.json", serveOpenapiSpec);

// Mount the `/todos` resource
app.use("/api/todos", todoRoute);

app.use("/api/health", (req, res) => res.sendStatus(200));

app.use(sendErrorResponse);

export default app;
