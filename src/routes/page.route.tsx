import { Elysia } from "elysia";
import { App } from "../views/pages/app";

export const pageRouter = new Elysia().get("/", () => <App />);
