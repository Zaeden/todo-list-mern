import express from "express";
import TaskModel from "../models/todoModel.js";
import * as taskController from '../controllers/taskController.js';

const taskRouter = express.Router();

//Route to get all the tasks.
taskRouter.get("/", taskController.getAllTasks);

//Route to get specific task by it ID.
taskRouter.get("/:id", taskController.getSpecificTask);

//Route to create a new task.
taskRouter.post("/", taskController.createTask);

//Route for updating already shown task.
taskRouter.put("/:id", taskController.updateTask);

//Route for deleting given task.
taskRouter.delete('/:id', taskController.deleteTask);


export default taskRouter;
