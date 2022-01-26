import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  getIncompleteTodos
} from "./controllers/todos.ts";

const router = new Router();

router
  .post("/api/todos", addTodo) // Add a todo
  .get("/api/todos", getTodos) // Get all todos
  .get("/api/todos/:id", getTodo) // Get one todo
  .get("/api/todos/incomplete/count", getIncompleteTodos) // Get incomplete todo count
  .put("/api/todos/:id", updateTodo) // Update a todo
  .delete("/api/todos/:id", deleteTodo); // Delete a todo

export default router;