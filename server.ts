import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const PORT = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Server listening on port ${PORT}`);
