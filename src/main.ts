import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { pageRouter } from "./routes/page.route";

const app = new Elysia().use(html()).use(staticPlugin()).use(pageRouter).listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
