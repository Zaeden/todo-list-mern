import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    taskContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;