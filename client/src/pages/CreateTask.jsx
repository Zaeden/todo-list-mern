import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/CreateTask.css";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskContent: "",
  });

  const navigator = new useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name + " " + value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const clickHandler = (event) => {
    console.log(formData);
    axios
      .post("http://localhost:8000/tasks", formData)
      .then((response) => {
        console.log(response.data);
        navigator("/");
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="form-container">
        <form method="post">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="taskTitle"
              placeholder="Title"
              id="title"
              value={formData.taskTitle}
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="content">
            Content:
            <input
              type="text"
              name="taskContent"
              placeholder="Content"
              id="content"
              value={formData.taskContent}
              onChange={changeHandler}
            />
          </label>

          <button type="button" onClick={clickHandler}>
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
