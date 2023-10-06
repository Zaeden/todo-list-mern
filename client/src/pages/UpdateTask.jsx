import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/UpdateTask.css";
import Loader from "../components/Loader/Loader";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [updateTask, setUpdateTask] = useState({
    taskTitle: "",
    taskContent: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tasks/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask({
          taskTitle: response.data.taskTitle,
          taskContent: response.data.taskContent,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUpdateTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(updateTask);
  };

  const clickHandler = (event) => {
    setLoading(true);
    axios
      .put(`http://localhost:8000/tasks/${id}`, updateTask)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="update-container">
        <div className="form-wrapper">
          <form method="post">
            <label htmlFor="title">
              Title
              <input
                type="text"
                name="taskTitle"
                placeholder="Title"
                id="title"
                value={updateTask.taskTitle}
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
                value={updateTask.taskContent}
                onChange={changeHandler}
                placeholder="Content"
                required
              ></textarea>
            </label>
            <button type="button" onClick={clickHandler}>
              {loading ? <Loader /> : <span>Update Task</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
