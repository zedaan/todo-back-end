import express from "express";
import { TodoController } from "./TodoController";

export const todoRouter = express.Router();
const { index, create, remove } = new TodoController();

todoRouter.get("/", index);
todoRouter.post("/", create);
todoRouter.delete("/:id", remove);
