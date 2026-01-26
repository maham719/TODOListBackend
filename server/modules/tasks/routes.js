import { Router } from "express";
import addTask from "./controller/post.js";
import getTodoscontroller from "./controller/get.js";
import updateTodoController from "./controller/put.js";
import deleteTodoController from "./controller/delete.js";

const taskRouter=Router()

taskRouter.post("/add",addTask)
taskRouter.get("/get",getTodoscontroller)
taskRouter.put("/update:id",updateTodoController)
taskRouter.delete("/delete:id" ,deleteTodoController)

export default taskRouter