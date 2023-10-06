import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/CreateTask.css";
import Loader from "../components/Loader/Loader";

const CreateTask = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    axios
      .post("http://localhost:8000/tasks", formData)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        navigator("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Create a New Task</h1>
          <form method="post">
            <label htmlFor="title">
              Title
              <input
                type="text"
                name="taskTitle"
                placeholder="Title"
                id="title"
                value={formData.taskTitle}
                onChange={changeHandler}
                required
              />
            </label>

            <label htmlFor="content">
              Content
              <textarea
                name="taskContent"
                id="content"
                cols="30"
                rows="3"
                value={formData.taskContent}
                onChange={changeHandler}
                placeholder="Content"
                required
              ></textarea>
            </label>

            <button type="button" onClick={clickHandler}>
              {loading ? <Loader /> : <span>Create Task</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
