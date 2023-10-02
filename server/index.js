import express from "express";
import mongoose from "mongoose";
import mongoURI from "./config.js";
import TaskModel from "./models/todoModel.js";
import taskRouter from "./routes/tasksRoute.js";

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
    console.log(`Server running at port no : ${PORT}`);
    console.log(`Database connected successfully...!!!`);
  });
});
