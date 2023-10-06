import express from "express";
import TaskModel from "../models/todoModel.js";

//Controller for getting all the tasks.
const getAllTasks = async (req, res) => {
  try {
    const result = await TaskModel.find({});
    res.status(201).json({count: result.length, data: result});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//Controller for get a specific task.
const getSpecificTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskModel.findById(id);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//Controller to create a new task.
const createTask = async (req, res) => {
  try {
    const { taskTitle, taskContent } = req.body;
    if (!taskTitle || !taskContent) {
      res.status(401).json({ error: "Kindly enter all the require details." });
      return;
    }

    const result = await TaskModel.create({
      taskTitle: taskTitle,
      taskContent: taskContent,
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Controller for updating already shown task.
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskTitle, taskContent } = req.body;
    if (!taskTitle || !taskContent) {
      res.status(401).json({ error: "Kindly enter all the require details." });
      return;
    }

    const result = await TaskModel.findByIdAndUpdate(id, {
      taskTitle: taskTitle,
      taskContent: taskContent,
    });

    res.status(201).json({ messsage: "Task Updated Successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//Controller for deleting given task.
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskModel.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getAllTasks, getSpecificTask, createTask, updateTask, deleteTask };
