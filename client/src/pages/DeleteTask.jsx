import React from "react";
import "../styles/DeleteTask.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteTask = () => {
  const { id } = useParams();
  const navigator = new useNavigate();

  console.log(id);

  const clickHandler = (event) => {
      axios.delete(`http://localhost:8000/tasks/${id}`)
      .then((response) => {
          console.log(response.data);
          navigator('/');
      })
      .catch((err) => {
          console.log(err);
      })
  }

  return (
    <>
      <div className="delete-container">
        <div className="question-container">
          <p>Are you sure ?</p>
          <button onClick={clickHandler}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteTask;
