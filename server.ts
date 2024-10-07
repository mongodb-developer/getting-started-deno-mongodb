import {
  addTodo,
  deleteTodo,
  getIncompleteTodos,
  getTodo,
  getTodos,
  updateTodo,
} from "./controllers/todoController.ts";

const PORT = 3000;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  if (req.method === "GET" && path === "/") {
    return new Response("Hello, World!");
  } else if (req.method === "POST" && path === "/api/todos") {
    return await addTodo(req);
  } else if (req.method === "GET" && path === "/api/todos") {
    return await getTodos();
  } else if (req.method === "GET" && path === "/api/todos/incomplete/count") {
    return await getIncompleteTodos();
  } else if (req.method === "GET" && path.startsWith("/api/todos/")) {
    const id = path.split("/")[3];
    return await getTodo(id);
  } else if (req.method === "PUT" && path.startsWith("/api/todos/")) {
    const id = path.split("/")[3];
    return await updateTodo(id, req);
  } else if (req.method === "DELETE" && path.startsWith("/api/todos/")) {
    const id = path.split("/")[3];
    return await deleteTodo(id);
  } else {
    return new Response("Not Found", { status: 404 });
  }
}

console.log(`HTTP webserver running. Access it at: http://localhost:${PORT}/`);
Deno.serve({ port: PORT }, handler);
